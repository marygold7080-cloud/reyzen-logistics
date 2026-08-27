import React, { useState } from 'react';
import { 
  MapPin, 
  Car, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Sparkles,
  Lock,
  RefreshCw,
  Printer
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../config/company';

interface QuoteCalculatorProps {
  darkTheme?: boolean;
  initialOrigin?: string;
  initialDestination?: string;
  onSuccess?: () => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({
  darkTheme = false,
  initialOrigin = '',
  initialDestination = '',
  onSuccess
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteResult, setQuoteResult] = useState<{
    minPrice: number;
    maxPrice: number;
    estDays: string;
    quoteId: string;
    distanceMiles: number;
  } | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    origin: initialOrigin,
    destination: initialDestination,
    year: '2024',
    make: 'Toyota',
    model: 'RAV4',
    vehicleType: 'SUV',
    condition: 'operable', // operable | inoperable
    carrierType: 'open', // open | enclosed
    shipDate: 'asap', // asap | within_7 | within_14 | flexible
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    agreeConsent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!formData.origin.trim()) newErrors.origin = 'Please enter pickup ZIP code or City, State';
      if (!formData.destination.trim()) newErrors.destination = 'Please enter delivery ZIP code or City, State';
    } else if (currentStep === 2) {
      if (!formData.year) newErrors.year = 'Select year';
      if (!formData.make.trim()) newErrors.make = 'Enter make';
      if (!formData.model.trim()) newErrors.model = 'Enter model';
    } else if (currentStep === 3) {
      if (!formData.carrierType) newErrors.carrierType = 'Select carrier type';
    } else if (currentStep === 4) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (formData.phone.replace(/\D/g, '').length < 10) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.agreeConsent) {
        newErrors.agreeConsent = 'You must agree to terms & SMS disclosure to proceed';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const calculateEstimate = () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Realistic Distance and Pricing algorithm
      const originStr = formData.origin.toLowerCase();
      const destStr = formData.destination.toLowerCase();
      
      let estimatedDistance = 1200; // default medium-haul miles
      if ((originStr.includes('ca') || originStr.includes('los angeles')) && (destStr.includes('ny') || destStr.includes('new york'))) {
        estimatedDistance = 2780;
      } else if ((originStr.includes('fl') || originStr.includes('miami')) && (destStr.includes('ny') || destStr.includes('new york'))) {
        estimatedDistance = 1290;
      } else if ((originStr.includes('tx') || originStr.includes('dallas')) && (destStr.includes('il') || destStr.includes('chicago'))) {
        estimatedDistance = 930;
      } else if ((originStr.includes('wa') || originStr.includes('seattle')) && (destStr.includes('ca') || destStr.includes('san diego'))) {
        estimatedDistance = 1250;
      } else if (originStr.length > 0 && destStr.length > 0) {
        // Deterministic pseudo-distance
        const hash = Math.abs(originStr.split('').reduce((a, b) => a + b.charCodeAt(0), 0) * 17 + destStr.split('').reduce((a, b) => a + b.charCodeAt(0), 0) * 23);
        estimatedDistance = 450 + (hash % 2100);
      }

      // Base per mile rate
      let ratePerMile = 0.72;
      if (estimatedDistance < 500) ratePerMile = 1.35;
      else if (estimatedDistance < 1000) ratePerMile = 0.88;
      else if (estimatedDistance < 2000) ratePerMile = 0.68;
      else ratePerMile = 0.58;

      let basePrice = estimatedDistance * ratePerMile;

      // Modifiers
      if (formData.carrierType === 'enclosed') {
        basePrice *= 1.45;
      }
      if (formData.condition === 'inoperable') {
        basePrice += 175;
      }
      if (formData.vehicleType === 'SUV') {
        basePrice += 95;
      } else if (formData.vehicleType === 'Truck' || formData.vehicleType === 'Van') {
        basePrice += 160;
      } else if (formData.vehicleType === 'Exotic') {
        basePrice += 220;
      }

      const minPrice = Math.round((basePrice * 0.94) / 10) * 10;
      const maxPrice = Math.round((basePrice * 1.06) / 10) * 10;

      let estDays = "3-5 Business Days";
      if (estimatedDistance < 500) estDays = "1-2 Business Days";
      else if (estimatedDistance < 1200) estDays = "2-4 Business Days";
      else if (estimatedDistance < 2000) estDays = "4-6 Business Days";
      else estDays = "6-9 Business Days";

      const quoteId = `RZ-${Math.floor(100000 + Math.random() * 900000)}`;

      setQuoteResult({
        minPrice,
        maxPrice,
        estDays,
        quoteId,
        distanceMiles: estimatedDistance,
      });

      setIsSubmitting(false);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore if not supported
      }

      if (onSuccess) onSuccess();
    }, 900);
  };

  const handleReset = () => {
    setQuoteResult(null);
    setStep(1);
  };

  const years = Array.from({ length: 35 }, (_, i) => `${2026 - i}`);
  const commonMakes = [
    'Acura', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge',
    'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jeep', 'Kia', 'Lexus',
    'Lincoln', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Porsche', 'Ram', 'Subaru',
    'Tesla', 'Toyota', 'Volkswagen', 'Volvo', 'Other'
  ];

  return (
    <div className={`quote-card ${darkTheme ? 'dark-theme' : ''}`}>
      {!quoteResult ? (
        <>
          <div className="quote-card-header">
            <h3 className="quote-card-title">Get an Instant Car Shipping Quote</h3>
            <p className="quote-card-subtitle">Zero upfront fees • Guaranteed carrier rates • $1M Insurance included</p>
          </div>

          {/* Progress Indicator */}
          <div className="quote-steps">
            <div 
              className="quote-step-bar-fill"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
            {[
              { num: 1, label: 'Route' },
              { num: 2, label: 'Vehicle' },
              { num: 3, label: 'Carrier' },
              { num: 4, label: 'Details' }
            ].map((s) => (
              <div 
                key={s.num} 
                className={`quote-step-item ${step === s.num ? 'active' : ''} ${step > s.num ? 'completed' : ''}`}
              >
                <div className="quote-step-circle">
                  {step > s.num ? <CheckCircle size={18} /> : s.num}
                </div>
                <span className="quote-step-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* STEP 1: ROUTE */}
          {step === 1 && (
            <div className="animate-fade-in">
              <div className="form-group">
                <label className="form-label">Pickup Location (Moving From)</label>
                <div className="input-with-icon">
                  <MapPin size={18} className="input-icon" />
                  <input
                    type="text"
                    className={`form-input ${errors.origin ? 'error' : ''}`}
                    placeholder="Enter City, State or ZIP Code (e.g. Los Angeles, CA 90001)"
                    value={formData.origin}
                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                  />
                </div>
                {errors.origin && <span className="form-error-msg">{errors.origin}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Delivery Location (Moving To)</label>
                <div className="input-with-icon">
                  <MapPin size={18} className="input-icon" />
                  <input
                    type="text"
                    className={`form-input ${errors.destination ? 'error' : ''}`}
                    placeholder="Enter City, State or ZIP Code (e.g. Miami, FL 33101)"
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  />
                </div>
                {errors.destination && <span className="form-error-msg">{errors.destination}</span>}
              </div>

              <div className="quote-actions" style={{ justifyContent: 'flex-end' }}>
                <button 
                  type="button" 
                  className="btn btn-primary btn-block"
                  onClick={handleNext}
                >
                  <span>Continue to Vehicle Details</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: VEHICLE */}
          {step === 2 && (
            <div className="animate-fade-in">
              <div className="form-grid-3">
                <div className="form-group">
                  <label className="form-label">Year</label>
                  <select
                    className="form-select"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  >
                    {years.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Make</label>
                  <select
                    className="form-select"
                    value={formData.make}
                    onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                  >
                    {commonMakes.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Model</label>
                  <input
                    type="text"
                    className={`form-input ${errors.model ? 'error' : ''}`}
                    placeholder="e.g. Camry, F-150"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Vehicle Type</label>
                <select
                  className="form-select"
                  value={formData.vehicleType}
                  onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                >
                  <option value="Sedan">Sedan / Coupe / Hatchback</option>
                  <option value="SUV">SUV / Crossover</option>
                  <option value="Truck">Pickup Truck (Standard / Heavy Duty)</option>
                  <option value="Van">Minivan / Passenger Van</option>
                  <option value="Exotic">Exotic / Classic / Supercar</option>
                  <option value="Motorcycle">Motorcycle / Trike / ATV</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Vehicle Condition</label>
                <div className="radio-cards-grid">
                  <div 
                    className={`radio-card ${formData.condition === 'operable' ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, condition: 'operable' })}
                  >
                    <div className="radio-card-head">
                      <span>Operable (Runs & Drives)</span>
                      <CheckCircle size={16} color={formData.condition === 'operable' ? 'var(--color-accent)' : '#CBD5E1'} />
                    </div>
                    <span className="radio-card-desc">Vehicle turns on, rolls, brakes, and steers properly.</span>
                  </div>

                  <div 
                    className={`radio-card ${formData.condition === 'inoperable' ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, condition: 'inoperable' })}
                  >
                    <div className="radio-card-head">
                      <span>Inoperable (Non-Running)</span>
                      <CheckCircle size={16} color={formData.condition === 'inoperable' ? 'var(--color-accent)' : '#CBD5E1'} />
                    </div>
                    <span className="radio-card-desc">Requires carrier winch for safe loading and unloading.</span>
                  </div>
                </div>
              </div>

              <div className="quote-actions">
                <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
                <button type="button" className="btn btn-primary" onClick={handleNext}>
                  <span>Continue to Carrier Type</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CARRIER & SCHEDULE */}
          {step === 3 && (
            <div className="animate-fade-in">
              <div className="form-group">
                <label className="form-label">Select Carrier Transport Method</label>
                <div className="radio-cards-grid">
                  <div 
                    className={`radio-card ${formData.carrierType === 'open' ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, carrierType: 'open' })}
                  >
                    <div className="radio-card-head">
                      <span>Open Auto Carrier</span>
                      <span className="badge badge-gold">Most Popular</span>
                    </div>
                    <span className="radio-card-desc">Cost-effective multi-car transport. Insured up to $1M. Used for 90%+ of shipments.</span>
                  </div>

                  <div 
                    className={`radio-card ${formData.carrierType === 'enclosed' ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, carrierType: 'enclosed' })}
                  >
                    <div className="radio-card-head">
                      <span>Enclosed Carrier</span>
                      <span className="badge badge-gold">White Glove</span>
                    </div>
                    <span className="radio-card-desc">100% weather-tight and road debris protection. Ideal for luxury, exotic & classic vehicles.</span>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Pickup Date</label>
                <div className="input-with-icon">
                  <Calendar size={18} className="input-icon" />
                  <select
                    className="form-select"
                    value={formData.shipDate}
                    onChange={(e) => setFormData({ ...formData, shipDate: e.target.value })}
                  >
                    <option value="asap">As Soon As Possible (Next 24-48 Hours)</option>
                    <option value="within_7">Within the Next 7 Days</option>
                    <option value="within_14">Within 1 to 2 Weeks</option>
                    <option value="within_30">Within 30 Days (Flexible)</option>
                  </select>
                </div>
              </div>

              <div className="quote-actions">
                <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
                <button type="button" className="btn btn-primary" onClick={handleNext}>
                  <span>Continue to Contact Info</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: CONTACT INFO & INSTANT CALCULATION */}
          {step === 4 && (
            <div className="animate-fade-in">
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">First Name *</label>
                  <div className="input-with-icon">
                    <User size={18} className="input-icon" />
                    <input
                      type="text"
                      className={`form-input ${errors.firstName ? 'error' : ''}`}
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  {errors.firstName && <span className="form-error-msg">{errors.firstName}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Last Name *</label>
                  <input
                    type="text"
                    className={`form-input ${errors.lastName ? 'error' : ''}`}
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                  {errors.lastName && <span className="form-error-msg">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <div className="input-with-icon">
                    <Phone size={18} className="input-icon" />
                    <input
                      type="tel"
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <div className="input-with-icon">
                    <Mail size={18} className="input-icon" />
                    <input
                      type="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  {errors.email && <span className="form-error-msg">{errors.email}</span>}
                </div>
              </div>

              {/* Consent check */}
              <div className="consent-checkbox-wrap">
                <input
                  type="checkbox"
                  id="calc-consent-check"
                  checked={formData.agreeConsent}
                  onChange={(e) => setFormData({ ...formData, agreeConsent: e.target.checked })}
                />
                <label htmlFor="calc-consent-check">
                  I agree to {COMPANY_INFO.name}'s <a href="/terms-conditions" target="_blank" rel="noreferrer">Terms & Conditions</a> and consent to receive automated SMS text messages and calls regarding this quote. Standard rates apply. Reply STOP to cancel.
                </label>
              </div>
              {errors.agreeConsent && <span className="form-error-msg">{errors.agreeConsent}</span>}

              <div className="quote-actions">
                <button type="button" className="btn btn-secondary" onClick={handlePrev}>
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={calculateEstimate}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw size={18} className="animate-spin" />
                      <span>Calculating Rates...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} />
                      <span>Calculate Instant Quote</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        /* QUOTE RESULT VIEW */
        <div className="quote-result-card animate-fade-in">
          <div className="result-badge-success">
            <CheckCircle size={18} />
            <span>Instant Rate Calculated Successfully</span>
          </div>

          <h3 className="quote-card-title" style={{ fontSize: '1.75rem' }}>
            Estimated Transport Cost
          </h3>
          <p className="quote-card-subtitle">
            Quote Reference: <strong>{quoteResult.quoteId}</strong> • Locked for 7 Days
          </p>

          <div className="price-highlight-box">
            <div className="price-amount">
              ${quoteResult.minPrice} - ${quoteResult.maxPrice}
            </div>
            <div className="price-note">
              All-inclusive rate (Taxes, Tolls, Fuel & $1M Cargo Insurance Included)
            </div>
          </div>

          <div className="quote-summary-details">
            <div className="summary-row">
              <span className="summary-label">Route:</span>
              <span className="summary-val">{formData.origin} &rarr; {formData.destination}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Estimated Distance:</span>
              <span className="summary-val">~{quoteResult.distanceMiles.toLocaleString()} Miles</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Vehicle:</span>
              <span className="summary-val">{formData.year} {formData.make} {formData.model} ({formData.condition})</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Carrier Type:</span>
              <span className="summary-val">{formData.carrierType === 'open' ? 'Open Multi-Car Carrier' : 'Enclosed Hard-Side Carrier'}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Estimated Transit Time:</span>
              <span className="summary-val">{quoteResult.estDays}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Customer:</span>
              <span className="summary-val">{formData.firstName} {formData.lastName} ({formData.phone})</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1.5rem' }}>
            <a 
              href={`tel:${COMPANY_INFO.phone.raw}`}
              className="btn btn-primary"
              style={{ flex: 1, minWidth: '200px' }}
            >
              <Phone size={18} />
              <span>Call Dispatch to Book ({COMPANY_INFO.phone.display})</span>
            </a>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleReset}
              style={{ flex: 1, minWidth: '160px' }}
            >
              <RefreshCw size={18} />
              <span>New Calculation</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
