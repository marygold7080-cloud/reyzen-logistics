import React from 'react';
import { 
  ShieldCheck, 
  DollarSign, 
  Truck, 
  Check, 
  X, 
  Clock, 
  MapPin, 
  Award, 
  Headphones, 
  FileCheck 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { TrustSection } from '../components/TrustSection';
import { FaqAccordion } from '../components/FaqAccordion';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { CtaBanner } from '../components/CtaBanner';
import { COMPANY_INFO } from '../config/company';

export const WhyChooseUsPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Why Choose Reyzen Logistics | Zero Upfront Deposit & $1M Insurance"
        description="Discover why thousands of vehicle owners choose Reyzen Logistics: zero upfront fees, $1,000,000 cargo insurance, 14,500+ vetted carriers, and 24/7 dedicated dispatch support."
        canonicalPath="/why-choose-us"
      />

      <PageHero 
        tag="Why Reyzen"
        title="Why Choose Reyzen Logistics"
        subtitle="We have reimagined auto shipping around what matters most: total vehicle safety, honest pricing, and transparent communication."
        image="/images/trucks/why-choose-us-truck.jpg"
        imageBadge="100% Vetted FMCSA Carriers"
        breadcrumbs={[{ label: 'Why Choose Us' }]}
      />

      {/* Trust Grid Feature */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Key Differentiators</span>
            <h2 className="section-title">How We Protect You at Every Step</h2>
            <p className="section-subtitle">
              Shipping a vehicle shouldn't feel like a gamble. Here is how we guarantee a smooth, professional experience.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <DollarSign size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Zero Upfront Fees</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                You do not pay a single dollar until your vehicle has been assigned to a vetted carrier and a confirmed pickup window is established.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>$1,000,000 Insurance Policy</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Every truck in our network carries up to $1M in primary cargo liability coverage. Your vehicle is protected from origin to destination.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Truck size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Strict Carrier Vetting</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                We actively check FMCSA safety records, safety ratings, and valid certificates of insurance for every driver dispatched.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Headphones size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Dedicated Dispatch Coordinator</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                No automated phone trees. You work directly with a dedicated logistics specialist who answers your calls and provides real-time updates.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <FileCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Photo-Documented BOL</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Complete condition reports with photo and video documentation conducted at pickup and drop-off on the official Bill of Lading.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>100% Price Lock Guarantee</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                The rate we quote is the rate you pay. All taxes, fuel charges, and transit tolls are fully accounted for upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table: Reyzen vs Generic Lead Brokers vs Driving */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Direct Comparison</span>
            <h2 className="section-title">See How Reyzen Compares to Alternatives</h2>
            <p className="section-subtitle">
              Evaluating your auto transport options? See why shipping with Reyzen Logistics is the smart, cost-effective choice.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>Feature / Guarantee</th>
                  <th style={{ width: '25%', background: 'var(--color-primary)' }}>Reyzen Logistics</th>
                  <th style={{ width: '20%' }}>Other Brokers</th>
                  <th style={{ width: '20%' }}>Driving Yourself</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600 }}>Upfront Deposit Required</td>
                  <td style={{ color: 'var(--color-success)', fontWeight: 700 }}>$0 (Zero Down)</td>
                  <td style={{ color: 'var(--color-danger)' }}>Often $150 - $300 upfront</td>
                  <td>Fuel, Hotels, Meals upfront</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Cargo Insurance Coverage</td>
                  <td style={{ color: 'var(--color-success)', fontWeight: 700 }}>Up to $1,000,000</td>
                  <td>Varies / Often minimal</td>
                  <td>Personal auto insurance deductible</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Vehicle Mileage Added</td>
                  <td style={{ color: 'var(--color-success)', fontWeight: 700 }}>0 Miles (Zero Wear)</td>
                  <td>0 Miles</td>
                  <td style={{ color: 'var(--color-danger)' }}>1,000 - 3,000+ Miles</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Driver Safety & FMCSA Vetting</td>
                  <td style={{ color: 'var(--color-success)', fontWeight: 700 }}>100% Vetted Daily</td>
                  <td>Unregulated / Hit-or-miss</td>
                  <td>N/A (Driver fatigue risk)</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Dedicated 24/7 Dispatch Specialist</td>
                  <td style={{ color: 'var(--color-success)', fontWeight: 700 }}>Yes (Direct phone & text)</td>
                  <td>Call centers & bots</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Door-to-Door Delivery</td>
                  <td style={{ color: 'var(--color-success)', fontWeight: 700 }}>Included standard</td>
                  <td>Extra fees or terminal drop</td>
                  <td>Direct destination</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Time Required by You</td>
                  <td style={{ color: 'var(--color-success)', fontWeight: 700 }}>15 mins inspection</td>
                  <td>15 mins inspection</td>
                  <td style={{ color: 'var(--color-danger)' }}>3 to 7 days on the highway</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Quote Embed */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="service-overview-grid">
            <div>
              <span className="section-tag">Get Started</span>
              <h2 className="section-title">Ready for a Better Auto Transport Experience?</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Join thousands of satisfied vehicle owners who trust Reyzen Logistics for reliable, damage-free vehicle delivery across the nation.
              </p>
              <div style={{ background: 'var(--bg-subtle)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
                <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Speak Directly with a Dispatcher</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                  Have an urgent or customized transport request? Our vehicle logistics team is available 24/7.
                </p>
                <a href={`tel:${COMPANY_INFO.phone.raw}`} className="btn btn-primary">
                  <Truck size={18} />
                  <span>Call {COMPANY_INFO.phone.display}</span>
                </a>
              </div>
            </div>

            <div>
              <QuoteCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Common Questions</span>
            <h2 className="section-title">Why Choose Reyzen Logistics FAQs</h2>
          </div>
          <FaqAccordion limit={6} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
};
