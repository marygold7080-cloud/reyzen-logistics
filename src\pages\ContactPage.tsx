import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  Headphones, 
  ShieldCheck,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { FaqAccordion } from '../components/FaqAccordion';
import { COMPANY_INFO } from '../config/company';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Transport Inquiry',
    message: '',
    agreeConsent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';
    if (!formData.agreeConsent) newErrors.agreeConsent = 'You must agree to terms & communication consent';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        try {
          confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
        } catch (err) {}
      }, 700);
    }
  };

  return (
    <>
      <SEOHead 
        title="Contact Reyzen Logistics | 24/7 Vehicle Transport Support"
        description={`Get in touch with Reyzen Logistics. Speak with our 24/7 vehicle dispatch coordinators by phone at ${COMPANY_INFO.phone.display} or send us an inquiry online.`}
        canonicalPath="/contact-us"
      />

      <PageHero 
        tag="Get in Touch"
        title="Contact Reyzen Logistics"
        subtitle="Have a question about your vehicle shipment or need custom multi-car dispatch assistance? Our team is available 24/7."
        image="/images/trucks/contact-truck.jpg"
        imageBadge="24/7 Dedicated Live Dispatch"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="contact-grid">
            {/* Left: Contact Info Box */}
            <div className="contact-info-card">
              <span className="section-tag light" style={{ marginBottom: '1rem' }}>
                <Headphones size={15} /> 24/7 Dispatch Team
              </span>

              <h2 style={{ fontSize: '2rem', color: '#FFFFFF', marginBottom: '1rem' }}>
                A Vehicle Logistics Company You Can Rely On
              </h2>

              <p style={{ color: '#CBD5E1', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                Whether you need a quick quote clarification, expedited carrier dispatch, or route updates, our dedicated specialists are here to help.
              </p>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Telephone / Dispatch
                  </div>
                  <a 
                    href={`tel:${COMPANY_INFO.phone.raw}`}
                    style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', textDecoration: 'none' }}
                  >
                    {COMPANY_INFO.phone.display}
                  </a>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-accent)', marginTop: '0.2rem' }}>
                    24/7 Emergency & Driver Support
                  </div>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Email Support
                  </div>
                  <a 
                    href={`mailto:${COMPANY_INFO.email.general}`}
                    style={{ fontSize: '1.05rem', fontWeight: 600, color: '#FFFFFF', textDecoration: 'none' }}
                  >
                    {COMPANY_INFO.email.general}
                  </a>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E1', marginTop: '0.2rem' }}>
                    Typical response in under 30 minutes
                  </div>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-icon-bubble">
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Headquarters
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: '#FFFFFF' }}>
                    {COMPANY_INFO.address.fullDisplay}
                  </div>
                </div>
              </div>

              <div className="contact-detail-row" style={{ marginBottom: 0 }}>
                <div className="contact-icon-bubble">
                  <Clock size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Office Hours
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#CBD5E1' }}>
                    {COMPANY_INFO.hours.weekdays}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                    {COMPANY_INFO.hours.saturday}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-card">
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
                    Send Us a Message
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginBottom: '1.75rem' }}>
                    Fill out the form below and an auto transport coordinator will follow up immediately.
                  </p>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label className="form-label">First Name *</label>
                      <input
                        type="text"
                        className={`form-input ${errors.firstName ? 'error' : ''}`}
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
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
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      {errors.email && <span className="form-error-msg">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                      {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Inquiry Subject</label>
                    <select
                      className="form-select"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="General Transport Inquiry">General Auto Transport Inquiry</option>
                      <option value="Quote Question">Question About a Quote / Rate</option>
                      <option value="Active Shipment Status">Active Shipment Tracking Update</option>
                      <option value="Dealership / Fleet Inquiry">Dealership or Commercial Fleet Solutions</option>
                      <option value="Other">Other Request</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea
                      rows={4}
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      placeholder="Tell us about your vehicle, route, preferred dates, or special transport needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                    {errors.message && <span className="form-error-msg">{errors.message}</span>}
                  </div>

                  {/* Consent */}
                  <div className="consent-checkbox-wrap" style={{ marginBottom: '1.5rem' }}>
                    <input
                      type="checkbox"
                      id="contact-consent-check"
                      checked={formData.agreeConsent}
                      onChange={(e) => setFormData({ ...formData, agreeConsent: e.target.checked })}
                    />
                    <label htmlFor="contact-consent-check">
                      I agree to {COMPANY_INFO.name}'s <a href="/terms-conditions" target="_blank" rel="noreferrer">Terms & Conditions</a> and <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a> and consent to be contacted by SMS text message and telephone call. Standard message rates apply. Reply STOP to cancel.
                    </label>
                  </div>
                  {errors.agreeConsent && <span className="form-error-msg">{errors.agreeConsent}</span>}

                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw size={20} className="animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Submit Message</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }} className="animate-fade-in">
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', color: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <CheckCircle size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                    Message Received Successfully!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                    Thank you, <strong>{formData.firstName}</strong>. A dedicated Reyzen Logistics coordinator has received your inquiry and will contact you via phone or email shortly.
                  </p>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        subject: 'General Transport Inquiry',
                        message: '',
                        agreeConsent: true,
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Common Questions Before Contacting</h2>
          </div>
          <FaqAccordion limit={5} />
        </div>
      </section>
    </>
  );
};
