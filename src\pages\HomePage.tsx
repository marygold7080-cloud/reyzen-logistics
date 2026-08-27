import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Truck, 
  DollarSign, 
  Clock, 
  Phone, 
  ArrowRight, 
  Star, 
  Award, 
  CheckCircle2, 
  MapPin, 
  FileText 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { HowItWorks } from '../components/HowItWorks';
import { ServicesGrid } from '../components/ServicesGrid';
import { FleetVideoShowcase } from '../components/FleetVideoShowcase';
import { TrustSection } from '../components/TrustSection';
import { CostEstimator } from '../components/CostEstimator';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqAccordion } from '../components/FaqAccordion';
import { CtaBanner } from '../components/CtaBanner';
import { COMPANY_INFO, POPULAR_ROUTES } from '../config/company';

export const HomePage: React.FC = () => {
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = true;
      heroVideoRef.current.defaultMuted = true;
      heroVideoRef.current.play().catch(() => {
        // Autoplay handled
      });
    }
  }, []);

  return (
    <>
      <SEOHead 
        title="Nationwide Auto Transport & Vehicle Shipping USA"
        description="Reyzen Logistics delivers premier nationwide vehicle shipping with $1,000,000 cargo insurance, zero upfront deposit, and door-to-door open & enclosed carrier transport across all 50 states."
        canonicalPath="/"
      />

      {/* HERO SECTION WITH REAL TRUCK VIDEO BACKGROUND */}
      <section className="hero-section has-video-bg">
        <div className="hero-video-bg-wrap">
          <video 
            ref={heroVideoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            preload="auto"
            className="hero-video-bg"
          >
            <source src="/videos/truck-highway.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 4 }}>
          <div className="hero-grid">
            {/* Hero Left Content */}
            <div className="hero-content">
              <span className="hero-tag">
                <ShieldCheck size={16} /> Committed to Safe & Timely Delivery
              </span>

              <h1 className="hero-title">
                Reliable &amp; Secure <span className="highlight-text">Auto Transport</span> Across the USA
              </h1>

              <p className="hero-description">
                Enjoy peace of mind with our dependable, expeditious vehicle transportation services. We connect you directly with over 14,500 fully insured, licensed carriers nationwide with zero upfront deposit.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <a 
                  href={`tel:${COMPANY_INFO.phone.raw}`}
                  className="btn btn-primary btn-lg"
                >
                  <Phone size={20} />
                  <span>Call {COMPANY_INFO.phone.display}</span>
                </a>
                <a 
                  href="#how-it-works"
                  className="btn btn-outline-white btn-lg"
                >
                  <span>Explore Services</span>
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="hero-trust-badges">
                <div className="hero-badge-item">
                  <div className="hero-badge-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="hero-badge-text-title">$1M Coverage</div>
                    <div className="hero-badge-text-sub">Primary Cargo Policy</div>
                  </div>
                </div>

                <div className="hero-badge-item">
                  <div className="hero-badge-icon">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <div className="hero-badge-text-title">Zero Upfront</div>
                    <div className="hero-badge-text-sub">Pay When Dispatched</div>
                  </div>
                </div>

                <div className="hero-badge-item">
                  <div className="hero-badge-icon">
                    <Star size={20} fill="var(--color-accent)" color="var(--color-accent)" />
                  </div>
                  <div>
                    <div className="hero-badge-text-title">4.9 / 5.0 Rating</div>
                    <div className="hero-badge-text-sub">2,800+ Verified Reviews</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right: Integrated Quote Calculator */}
            <div className="hero-calc-card">
              <QuoteCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER STRIP */}
      <section className="container" style={{ marginTop: '-2.5rem', position: 'relative', zIndex: 10 }}>
        <div className="stats-strip">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-val">{COMPANY_INFO.stats.vehiclesShipped}</span>
              <span className="stat-label">Vehicles Safely Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">{COMPANY_INFO.stats.carrierNetwork}</span>
              <span className="stat-label">Vetted Active Carriers</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">{COMPANY_INFO.stats.insuranceCoverage}</span>
              <span className="stat-label">Cargo Insurance per Carrier</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">{COMPANY_INFO.stats.satisfactionRate}</span>
              <span className="stat-label">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3-STEP SIMPLE PROCEDURE */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* SERVICES GRID WITH REAL PHOTOGRAPHY */}
      <ServicesGrid />

      {/* FLEET VIDEO SHOWCASE (FEATURING DOWNLOADED TRUCK VIDEOS) */}
      <FleetVideoShowcase />

      {/* REAL PHOTOGRAPHY INSPECTION & DISPATCH SPOTLIGHT */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="visual-split-grid">
            <div className="visual-split-media">
              <img 
                src="/images/highway-transit-truck.jpg" 
                alt="Long-Haul Interstate Auto Transport Carrier" 
                className="visual-split-img"
                loading="lazy"
              />
              <div className="visual-split-floating-badge">
                <ShieldCheck size={28} color="#F59E0B" />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>100% BOL Photo Documentation</div>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>Pickup &amp; Delivery Condition Locked</div>
                </div>
              </div>
            </div>

            <div>
              <span className="section-tag">Uncompromising Safety</span>
              <h2 className="section-title">21-Point Inspection &amp; Real-Time Tracking</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '1.025rem' }}>
                Every vehicle shipped through {COMPANY_INFO.name} undergoes a strict pre-trip walkaround inspection. Drivers capture high-resolution photos of your vehicle's odometer, exterior panels, and glass before loading onto the trailer.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--color-primary)', marginBottom: '0.2rem' }}>Digital Bill of Lading (e-BOL)</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Signed by you at pickup and delivery for verifiable, transparent record-keeping.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--color-primary)', marginBottom: '0.2rem' }}>Dedicated 24/7 Dispatch Coordination</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Direct phone and SMS connection with the logistical coordinator managing your interstate route.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--color-primary)', marginBottom: '0.2rem' }}>$1,000,000 Direct Carrier Insurance</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>Primary comprehensive insurance in effect from the instant your car rolls onto the ramps until delivery.</p>
                  </div>
                </div>
              </div>

              <Link to="/why-choose-us" className="btn btn-primary">
                <span>Learn More About Our Safety Standards</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY REYZEN LOGISTICS TRUST SECTION */}
      <TrustSection darkBg={false} />

      {/* INTERACTIVE RATE ESTIMATOR & POPULAR ROUTES */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Pricing Guide</span>
            <h2 className="section-title">Transparent Car Shipping Cost Calculator</h2>
            <p className="section-subtitle">
              We believe in upfront, transparent pricing. Explore average rates across major interstate shipping lanes.
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <CostEstimator />
          </div>

          {/* Popular Routes Table */}
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
              Sample Nationwide Auto Transport Rates
            </h3>
            <div className="comparison-table-wrapper">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Route (Origin &rarr; Destination)</th>
                    <th>Est. Distance</th>
                    <th>Est. Transit</th>
                    <th>Open Carrier Avg.</th>
                    <th>Enclosed Carrier Avg.</th>
                  </tr>
                </thead>
                <tbody>
                {POPULAR_ROUTES.map((route, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{route.from} &rarr; {route.to}</td>
                    <td style={{ color: 'var(--text-muted)' }}>{route.miles} miles</td>
                    <td><span style={{ background: '#F1F5F9', color: '#475569', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600 }}>{route.estDays}</span></td>
                    <td><span style={{ color: '#B91C1C', fontWeight: 800, background: 'rgba(220, 38, 38, 0.08)', padding: '0.25rem 0.65rem', borderRadius: '4px' }}>{route.openAvg}</span></td>
                    <td style={{ color: '#111827', fontWeight: 700 }}>{route.enclosedAvg}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

      {/* FAQ SECTION */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Everything You Need to Know About Auto Transport</h2>
            <p className="section-subtitle">
              Have questions about how auto transport works, insurance, personal belongings, or timelines? We've got you covered.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* CTA BANNER */}
      <CtaBanner />
    </>
  );
};
