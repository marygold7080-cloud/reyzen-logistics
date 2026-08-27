import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Lock, 
  Check, 
  Award, 
  Zap, 
  Car 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { FaqAccordion } from '../components/FaqAccordion';
import { CtaBanner } from '../components/CtaBanner';

export const EnclosedTransportPage: React.FC = () => {
  const enclosedFaqs = [
    {
      id: "when-enclosed",
      question: "When should I choose Enclosed Auto Transport over Open Carrier?",
      answer: "We strongly recommend enclosed auto transport for high-end luxury vehicles, vintage and classic collector automobiles, exotics (such as Ferrari, Lamborghini, McLaren, Porsche), race cars, vehicles with custom paint jobs, or cars with low ground clearance that require horizontal hydraulic liftgate loading."
    },
    {
      id: "enclosed-weather",
      question: "How are vehicles protected from road hazards in an enclosed trailer?",
      answer: "Enclosed trailers are completely sealed with solid walls and roofs, preventing any contact with rain, hail, snow, road salt, gravel, tree branches, or UV sunlight during cross-country transport."
    },
    {
      id: "hydraulic-lift",
      question: "How do you load low ground-clearance exotic cars?",
      answer: "Our enclosed trailers are equipped with specialized horizontal hydraulic liftgates and extended race ramps, ensuring that zero bumper scraping or undercarriage contact occurs during loading and unloading."
    },
    {
      id: "enclosed-insurance",
      question: "What is the insurance policy limit on enclosed carriers?",
      answer: "Enclosed carriers in the Reyzen Logistics network maintain comprehensive high-limit primary cargo insurance policies, typically ranging from $500,000 up to $1,000,000+ per vehicle load."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Enclosed Auto Transport | White-Glove Luxury & Classic Car Shipping"
        description="Premium enclosed vehicle transport for exotic, classic, luxury, and high-value cars. Hydraulic liftgates, sealed weather protection, and high-limit cargo insurance."
        canonicalPath="/enclosed-auto-transport"
      />

      <PageHero 
        tag="White-Glove Service"
        title="Enclosed Auto Transport"
        subtitle="The pinnacle of vehicle protection. 100% sealed, climate-shielded trailers designed exclusively for exotics, classic cars, luxury vehicles, and collector investments."
        image="/images/trucks/enclosed-transport-truck.jpg"
        imageBadge="White-Glove Enclosed Carrier"
        breadcrumbs={[
          { label: 'Services', href: '/#services' },
          { label: 'Enclosed Transport' }
        ]}
      />

      {/* Main Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="service-overview-grid">
            <div>
              <span className="section-tag">Elite Cargo Protection</span>
              <h2 className="section-title">Maximum Security &amp; Care for Your High-Value Vehicle</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                When transporting an exotic supercar, vintage classic, custom hot rod, or luxury daily driver, compromise is not an option. <strong>Enclosed Auto Transport</strong> provides complete isolation from highway debris, harsh weather conditions, road grime, and curious onlookers.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Reyzen Logistics partners with premier enclosed car haulers utilizing hard-side trailers, air-ride suspension systems, specialized wheel soft-ties, and hydraulic horizontal liftgates designed specifically for vehicles with ultra-low ride heights.
              </p>

              <div className="service-highlight-card" style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={20} color="var(--color-accent)" />
                  Enclosed Transport Highlights:
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>100% Road & Weather Shielded:</strong> Zero exposure to gravel, rain, snow, or road salts.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>Hydraulic Liftgates:</strong> Flat loading plane prevents front-lip scraping on exotics.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>Air-Ride Suspension:</strong> Ultra-smooth highway cushioning for delicate chassis.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>High-Limit Cargo Insurance:</strong> Full coverage up to $1,000,000+ included.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <QuoteCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Enclosed Feature Grid */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Premium Equipment</span>
            <h2 className="section-title">Engineered for Perfection</h2>
            <p className="section-subtitle">
              Every enclosed carrier is outfitted with specialized automotive transport technology to safeguard your investment.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Hard-Sided Enclosures</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Solid composite and aluminum walls provide an impenetrable physical barrier against highway gravel, severe weather, and debris.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Zap size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Hydraulic Liftgate Loading</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Horizontal liftgate elevators keep the vehicle completely parallel with the ground during loading, eliminating steep ramp angles.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Lock size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Soft-Tie Wheel Straps</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                We secure vehicles exclusively by the tires using non-abrasive soft nylon ties. No metal chains or chassis contact ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enclosed FAQs */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Enclosed Auto Transport FAQs</h2>
          </div>
          <FaqAccordion customFaqs={enclosedFaqs} showCategories={false} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
};
