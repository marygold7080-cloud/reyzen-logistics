import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Users, 
  Award, 
  Truck, 
  Clock, 
  CheckCircle,
  Phone
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { TrustSection } from '../components/TrustSection';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { CtaBanner } from '../components/CtaBanner';
import { COMPANY_INFO } from '../config/company';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="About Reyzen Logistics | Nationwide Auto Shipping Leaders"
        description="Learn about Reyzen Logistics, our mission, vision, and nationwide network of over 14,500 insured carriers providing safe, transparent vehicle transport across the USA."
        canonicalPath="/about-us"
      />

      <PageHero 
        tag="Company Profile"
        title="About Reyzen Logistics"
        subtitle="We are a nationwide vehicle logistics brokerage committed to transparency, punctuality, and uncompromised cargo safety."
        image="/images/trucks/about-us-truck.jpg"
        imageBadge="14,500+ Active Carrier Fleet"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Main About Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="service-overview-grid">
            <div>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">Your Trusted Vehicle Transport Partner Across America</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                At <strong>{COMPANY_INFO.name}</strong>, we specialize in organizing seamless, reliable auto transport for individual car owners, auto dealerships, military personnel, corporate relocations, and collector car auctions nationwide.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                The auto transport industry has traditionally been plagued by hidden fees, bait-and-switch pricing, and unreliable dispatch scheduling. Reyzen Logistics was founded with a singular mission: to restore trust and transparency to car shipping through guaranteed all-inclusive pricing, zero upfront deposits, and 24/7 dedicated human dispatch support.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                Whether you are transporting a family sedan across two states, relocating a heavy-duty pickup truck, or shipping a priceless classic Ferrari in a climate-controlled enclosed carrier, our logistics specialists manage every detail from pickup inspection to final doorstep handover.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} color="var(--color-success)" />
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>FMCSA Licensed & Bonded</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} color="var(--color-success)" />
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>$1,000,000 Cargo Insurance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} color="var(--color-success)" />
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Zero Upfront Payment</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle size={18} color="var(--color-success)" />
                  <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>14,500+ Vetted Carriers</span>
                </div>
              </div>
            </div>

            {/* Quick Quote Side Card */}
            <div>
              <QuoteCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Core Pillars</span>
            <h2 className="section-title">Built on Trust, Precision & Safety</h2>
            <p className="section-subtitle">
              Every decision we make is guided by our commitment to vehicle owners and high safety standards.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Target size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Our Mission</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                To provide effortless, secure, and cost-effective auto shipping solutions that eliminate the stress of moving vehicles across the United States.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Eye size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Our Vision</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                To become the most dependable and customer-recommended auto transport partner in North America through technological innovation and human-centric service.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Vetted Safety</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                We enforce strict screening on every carrier truck in our network, validating active operating authorities, insurance policies, and driver safety ratings daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Operations Showcase */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="visual-split-grid">
            <div>
              <span className="section-tag">Real Logistics Network</span>
              <h2 className="section-title">Centralized Dispatch &amp; Live Highway Tracking</h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Behind every vehicle shipped is a dedicated dispatch coordinator managing real-time weather conditions, traffic corridors, and carrier compliance.
              </p>
              <p style={{ fontSize: '0.975rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                We bridge the gap between individual customers and vetted interstate truck drivers, ensuring transparent communication every step of the journey.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div style={{ borderLeft: '3px solid var(--color-accent)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary)' }}>14,500+</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Licensed Interstate Carriers</div>
                </div>
                <div style={{ borderLeft: '3px solid var(--color-accent)', paddingLeft: '1rem' }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-primary)' }}>99.4%</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Damage-Free Delivery Record</div>
                </div>
              </div>
            </div>

            <div className="visual-split-media">
              <img 
                src="/images/fleet-terminal-truck.jpg" 
                alt="Reyzen Logistics Nationwide Fleet and Staging Hub" 
                className="visual-split-img"
                loading="lazy"
              />
              <div className="visual-split-floating-badge">
                <Truck size={24} color="#F59E0B" />
                <div>
                  <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>14,500+ Active Carrier Trucks</div>
                  <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>Vetted Interstate Fleet Network</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection darkBg={true} />

      {/* CTA */}
      <CtaBanner 
        title="Experience Stress-Free Vehicle Transport with Reyzen"
        subtitle="Get your guaranteed, no-obligation auto shipping quote today in less than 60 seconds."
      />
    </>
  );
};
