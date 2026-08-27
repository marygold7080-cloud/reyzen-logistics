import React from 'react';
import { 
  Truck, 
  DollarSign, 
  Calendar, 
  ShieldCheck, 
  Check, 
  Clock, 
  Car 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { FaqAccordion } from '../components/FaqAccordion';
import { CtaBanner } from '../components/CtaBanner';

export const OpenTransportPage: React.FC = () => {
  const openFaqs = [
    {
      id: "open-safety",
      question: "Is Open Auto Transport safe for my vehicle?",
      answer: "Yes, open auto transport is extremely safe and is the standard method used by automotive manufacturers (such as Ford, GM, and Toyota) to deliver brand new vehicles to dealerships. All vehicles are secured using soft wheel straps and covered by $1,000,000 cargo insurance."
    },
    {
      id: "open-weather",
      question: "Will my vehicle be exposed to weather on an open carrier?",
      answer: "Vehicles on open carriers are exposed to highway air, rain, and dust, similar to driving your car on the interstate. A standard car wash after delivery will restore it to pristine condition."
    },
    {
      id: "open-vs-enclosed-cost",
      question: "How much cheaper is Open Carrier vs Enclosed Transport?",
      answer: "Open transport is typically 35% to 50% more affordable than enclosed shipping because open trailers can transport 7 to 10 vehicles at once, maximizing fuel efficiency and carrier availability."
    },
    {
      id: "open-transit-time",
      question: "How fast can an open carrier pick up my vehicle?",
      answer: "Because open carriers make up the vast majority of commercial transport trucks on the road, open carrier pickups are typically arranged within 1 to 3 business days of booking."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Open Auto Transport | Reliable & Affordable Car Hauling USA"
        description="The most popular and affordable way to ship your vehicle nationwide. Fast carrier assignment, $1M cargo insurance, and reliable open multi-car transport."
        canonicalPath="/open-auto-transport"
      />

      <PageHero 
        tag="Affordable Vehicle Shipping"
        title="Open Auto Transport"
        subtitle="The industry standard for car hauling across the USA. Efficient, budget-friendly, and fully insured for everyday sedans, SUVs, and trucks."
        image="/images/trucks/open-transport-truck.jpg"
        imageBadge="Standard 7-10 Car Multi-Carrier"
        breadcrumbs={[
          { label: 'Services', href: '/#services' },
          { label: 'Open Transport' }
        ]}
      />

      {/* Main Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="service-overview-grid">
            <div>
              <span className="section-tag">Most Popular Method</span>
              <h2 className="section-title">The Cost-Effective Choice for Nationwide Vehicle Transport</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                <strong>Open Auto Transport</strong> is the most common and economical vehicle shipping method in North America. Over 90% of all personal vehicles and dealership inventories are transported on multi-tier open carriers capable of hauling 7 to 10 cars simultaneously.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Because open carriers represent the largest fleet of commercial trucks on US highways, scheduling is fast and flexible. You benefit from the lowest per-mile shipping rates and quickest pickup dispatch windows while maintaining full $1,000,000 primary cargo liability protection.
              </p>

              <div className="service-highlight-card" style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <DollarSign size={20} color="var(--color-accent)" />
                  Why Choose Open Auto Transport?
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>Maximum Cost Savings:</strong> Lowest cost-per-mile across all US routes.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>Fastest Dispatch:</strong> Largest network of available daily trucks.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>Fully Insured:</strong> Covered up to $1,000,000 against transit liability.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>All Vehicle Sizes:</strong> Accommodates sedans, SUVs, trucks, and vans.</span>
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

      {/* Comparison: Open vs Enclosed */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Comparison Guide</span>
            <h2 className="section-title">Open vs. Enclosed Transport: What is Right for You?</h2>
            <p className="section-subtitle">
              Learn the functional differences between open trailers and enclosed transport to make the right choice for your vehicle.
            </p>
          </div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th style={{ width: '30%' }}>Factor</th>
                  <th style={{ width: '35%', background: 'var(--color-primary)' }}>Open Auto Transport</th>
                  <th style={{ width: '35%', background: 'var(--color-accent)' }}>Enclosed Auto Transport</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600 }}>Pricing Level</td>
                  <td style={{ color: 'var(--color-success)', fontWeight: 700 }}>Most Affordable (Standard Rate)</td>
                  <td>35% - 50% Premium</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Best Suited For</td>
                  <td>Daily drivers, sedans, SUVs, pickup trucks</td>
                  <td>Exotics, classics, luxury, vintage, high-value cars</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Trailer Capacity</td>
                  <td>7 to 10 Vehicles</td>
                  <td>2 to 6 Vehicles</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Weather Protection</td>
                  <td>Open-air (Exposed to rain/dust)</td>
                  <td style={{ color: 'var(--color-success)', fontWeight: 700 }}>100% Sealed & Weather-Tight</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Loading Mechanism</td>
                  <td>Drive-on ramps</td>
                  <td>Hydraulic liftgates & soft ties</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Dispatch Speed</td>
                  <td style={{ color: 'var(--color-success)', fontWeight: 700 }}>Fast (1-3 days on average)</td>
                  <td>2-5 days on average</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Open Transport FAQs */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Open Auto Transport FAQs</h2>
          </div>
          <FaqAccordion customFaqs={openFaqs} showCategories={false} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
};
