import React from 'react';
import { 
  Compass, 
  CheckCircle, 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { FaqAccordion } from '../components/FaqAccordion';
import { CtaBanner } from '../components/CtaBanner';
import { COMPANY_INFO, POPULAR_ROUTES } from '../config/company';

export const ShipCarAcrossCountryPage: React.FC = () => {
  const crossCountryFaqs = [
    {
      id: "cross-country-time",
      question: "How long does it take to ship a car across the country?",
      answer: "A typical cross-country shipment (e.g. California to New York, or Florida to Washington, roughly 2,500 to 3,000 miles) takes between 6 to 9 business days once loaded onto the carrier truck. Drivers are regulated by federal FMCSA Hours of Service (HOS) rules limiting them to roughly 500-600 miles per day."
    },
    {
      id: "cross-country-cost",
      question: "How much does it cost to ship a car across the country?",
      answer: "Coast-to-coast vehicle shipping generally costs between $1,100 and $1,600 on an open carrier for a standard sedan or crossover. Enclosed transport for exotics or luxury vehicles averages $1,700 to $2,400 depending on exact cities."
    },
    {
      id: "cross-country-tracking",
      question: "Can I track my vehicle while it travels across country?",
      answer: "Yes, you receive regular dispatch updates and your dedicated logistics coordinator provides real-time location check-ins along major interstate checkpoints."
    },
    {
      id: "cross-country-fly-vs-drive",
      question: "Is shipping cheaper than driving my car across the country?",
      answer: "When you account for gasoline, 4-6 nights of hotels, meals, highway tolls, vehicle depreciation, and adding 3,000 miles of wear and tear on your car, shipping with Reyzen Logistics is often less expensive and saves you nearly a week of stressful driving."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Ship Car Across Country | Coast-to-Coast Auto Transport USA"
        description="Reliable coast-to-coast car shipping across the USA. 6-9 day transit, zero upfront fees, $1,000,000 cargo insurance, and door-to-door vehicle delivery."
        canonicalPath="/ship-car-across-country"
      />

      <PageHero 
        tag="Coast-to-Coast Specialists"
        title="Ship Car Across Country"
        subtitle="Moving across the United States? Trust Reyzen Logistics for fast, reliable, and fully insured coast-to-coast auto transport."
        image="/images/trucks/cross-country-truck.jpg"
        imageBadge="Coast-to-Coast Interstate Carrier"
        breadcrumbs={[
          { label: 'How It Works', href: '/#how-it-works' },
          { label: 'Ship Car Across Country' }
        ]}
      />

      {/* Main Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="service-overview-grid">
            <div>
              <span className="section-tag">Coast-to-Coast Logistics</span>
              <h2 className="section-title">Effortless Cross-Country Vehicle Transportation</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                Moving a vehicle 2,500+ miles from coast to coast is a major undertaking. Driving yourself means facing 30 to 40 hours behind the wheel, high fuel costs, multi-night hotel stays, weather delays, and adding thousands of miles of mechanical wear to your odometer.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                With <strong>{COMPANY_INFO.name}</strong>, cross-country vehicle shipping is simplified. Our dedicated interstate carriers run daily routes along major cross-country freight corridors (I-80, I-90, I-40, and I-10), delivering your car safely from doorstep to doorstep in 6 to 9 days.
              </p>

              <div className="service-highlight-card" style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Compass size={20} color="var(--color-accent)" />
                  Why Ship Across Country with Reyzen?
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <CheckCircle size={16} color="var(--color-success)" />
                    <span><strong>0 Miles Added:</strong> Protect your vehicle from 3,000 miles of highway wear.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <CheckCircle size={16} color="var(--color-success)" />
                    <span><strong>$1,000,000 Cargo Insurance:</strong> Complete primary protection across all 50 states.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <CheckCircle size={16} color="var(--color-success)" />
                    <span><strong>Zero Upfront Deposit:</strong> Pay nothing until your carrier is confirmed and dispatched.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <CheckCircle size={16} color="var(--color-success)" />
                    <span><strong>Save Time & Stress:</strong> Fly comfortably to your new city while we handle the transit.</span>
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

      {/* Major Interstate Shipping Lanes Table */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Interstate Routes</span>
            <h2 className="section-title">Major Cross-Country Shipping Corridors</h2>
            <p className="section-subtitle">
              Explore average transit times and sample pricing across our most popular long-distance shipping lanes.
            </p>
          </div>

          <div className="comparison-table-wrapper" style={{ maxWidth: '960px', margin: '0 auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Origin &rarr; Destination</th>
                  <th>Total Distance</th>
                  <th>Estimated Transit</th>
                  <th>Open Carrier Rate</th>
                  <th>Enclosed Rate</th>
                </tr>
              </thead>
              <tbody>
                {POPULAR_ROUTES.map((route, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 600, color: 'var(--color-primary)' }}>{route.from} &rarr; {route.to}</td>
                    <td style={{ color: 'var(--text-muted)' }}>~{route.miles} Miles</td>
                    <td><span style={{ background: '#F1F5F9', color: '#475569', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.875rem', fontWeight: 600 }}>{route.estDays}</span></td>
                    <td><span style={{ color: '#B91C1C', fontWeight: 800, background: 'rgba(220, 38, 38, 0.08)', padding: '0.25rem 0.65rem', borderRadius: '4px' }}>{route.openAvg}</span></td>
                    <td style={{ color: '#111827', fontWeight: 700 }}>{route.enclosedAvg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cross-Country FAQs */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Ship Car Across Country FAQs</h2>
          </div>
          <FaqAccordion customFaqs={crossCountryFaqs} showCategories={false} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
};
