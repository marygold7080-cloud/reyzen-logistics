import React from 'react';
import { 
  Calculator, 
  DollarSign, 
  MapPin, 
  Truck, 
  Calendar, 
  Percent, 
  Check, 
  HelpCircle,
  TrendingDown
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { CostEstimator } from '../components/CostEstimator';
import { FaqAccordion } from '../components/FaqAccordion';
import { CtaBanner } from '../components/CtaBanner';
import { POPULAR_ROUTES } from '../config/company';

export const CarShippingCostPage: React.FC = () => {
  const costFaqs = [
    {
      id: "average-cost",
      question: "What is the average cost to ship a car across the United States?",
      answer: "The average cost to ship a vehicle ranges from $500 to $900 for short to medium distances (under 1,000 miles) and $1,000 to $1,500+ for cross-country moves (over 2,500 miles). Exact pricing depends on vehicle dimensions, carrier type (open vs enclosed), and route popularity."
    },
    {
      id: "cheapest-way",
      question: "What is the cheapest way to ship a car?",
      answer: "The most economical way to ship a car is via Open Auto Transport during shoulder seasons (late fall or early spring). Booking 1 to 2 weeks in advance and maintaining flexibility on exact pickup and delivery dates ensures you get the most competitive carrier rate."
    },
    {
      id: "hidden-fees",
      question: "Are there any hidden fees or extra surcharges with Reyzen Logistics?",
      answer: "No. All Reyzen Logistics quotes are 100% all-inclusive. Taxes, road tolls, carrier fuel costs, and $1,000,000 cargo insurance coverage are fully bundled into your guaranteed quote."
    },
    {
      id: "inoperable-cost",
      question: "How much extra does it cost to ship an inoperable car?",
      answer: "Shipping an inoperable or non-running vehicle typically adds approximately $150 to $200 to the total cost. This accounts for the specialized winch equipment and additional labor required by the carrier driver to pull the vehicle onto the trailer safely."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Car Shipping Cost & Instant Quote Calculator | Reyzen Logistics"
        description="Calculate the exact cost to ship a car across the USA. Explore mileage pricing tiers, route averages, and get a guaranteed instant rate with zero upfront fees."
        canonicalPath="/car-shipping-cost"
      />

      <PageHero 
        tag="Transparent Pricing Guide"
        title="Car Shipping Cost & Calculator"
        subtitle="Understand how auto transport pricing works, explore mileage tiers, and calculate your guaranteed instant quote with zero hidden surcharges."
        image="/images/trucks/cost-hero-truck.jpg"
        imageBadge="Transparent Carrier Rates"
        breadcrumbs={[
          { label: 'How It Works', href: '/#how-it-works' },
          { label: 'Car Shipping Cost' }
        ]}
      />

      {/* Main Calculator & Breakdown Grid */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="service-overview-grid">
            <div>
              <span className="section-tag">Pricing Transparency</span>
              <h2 className="section-title">How Auto Transport Pricing Is Determined</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                Auto transport rates are determined by real-time market supply and demand across specific interstate lanes. Rather than relying on rigid static charts, our pricing engine calculates real-time carrier availability to deliver the lowest possible rate while ensuring your vehicle is assigned to a top-tier driver promptly.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Below are the primary factors that influence your final vehicle shipping quote:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div style={{ background: 'var(--color-accent-subtle)', padding: '0.6rem', borderRadius: '8px', color: 'var(--color-accent)', height: 'fit-content' }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>1. Distance & Route Popularity</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                      Longer distances cost more overall, but feature a lower cost-per-mile rate. Major metropolitan routes along interstate corridors (e.g. I-95, I-10, I-80) cost less than rural locations.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div style={{ background: 'var(--color-accent-subtle)', padding: '0.6rem', borderRadius: '8px', color: 'var(--color-accent)', height: 'fit-content' }}>
                    <Truck size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>2. Vehicle Size & Dimensions</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                      Compact sedans take up less weight and trailer space than large 3-row SUVs, lifted trucks, or passenger vans.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div style={{ background: 'var(--color-accent-subtle)', padding: '0.6rem', borderRadius: '8px', color: 'var(--color-accent)', height: 'fit-content' }}>
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>3. Carrier Type (Open vs Enclosed)</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                      Open transport is the standard budget-friendly option. Enclosed white-glove shipping carries a 35% to 50% premium for sealed weather protection.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.85rem' }}>
                  <div style={{ background: 'var(--color-accent-subtle)', padding: '0.6rem', borderRadius: '8px', color: 'var(--color-accent)', height: 'fit-content' }}>
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>4. Seasonality & Weather Conditions</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
                      Summer peak moving months and winter snowbird migrations (Northeast to Florida/Arizona) experience elevated demand compared to early spring and late fall.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <QuoteCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Estimator Slider */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Interactive Tool</span>
            <h2 className="section-title">Calculate Estimated Rates by Distance</h2>
            <p className="section-subtitle">
              Use our interactive slider to explore estimated rates for short, medium, and coast-to-coast auto shipments.
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <CostEstimator />
          </div>
        </div>
      </section>

      {/* Distance Tier Matrix Table */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Pricing Matrix</span>
            <h2 className="section-title">National Auto Transport Distance Tier Matrix</h2>
            <p className="section-subtitle">
              Estimated average cost per mile across standard vehicle shipping distances in the USA.
            </p>
          </div>

          <div className="comparison-table-wrapper" style={{ maxWidth: '960px', margin: '0 auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Distance Tier</th>
                  <th>Est. Mileage Rate</th>
                  <th>Avg. Open Carrier Price</th>
                  <th>Avg. Transit Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: 600 }}>Short Haul (100 - 500 Miles)</td>
                  <td>$1.20 - $1.60 / mile</td>
                  <td style={{ color: 'var(--color-accent)', fontWeight: 700 }}>$350 - $650</td>
                  <td>1 - 2 Business Days</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Medium Haul (500 - 1,200 Miles)</td>
                  <td>$0.80 - $1.10 / mile</td>
                  <td style={{ color: 'var(--color-accent)', fontWeight: 700 }}>$650 - $950</td>
                  <td>2 - 4 Business Days</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Long Haul (1,200 - 2,000 Miles)</td>
                  <td>$0.65 - $0.85 / mile</td>
                  <td style={{ color: 'var(--color-accent)', fontWeight: 700 }}>$950 - $1,300</td>
                  <td>4 - 6 Business Days</td>
                </tr>
                <tr>
                  <td style={{ fontWeight: 600 }}>Coast-to-Coast (2,000 - 3,000+ Miles)</td>
                  <td>$0.50 - $0.70 / mile</td>
                  <td style={{ color: 'var(--color-accent)', fontWeight: 700 }}>$1,200 - $1,650</td>
                  <td>6 - 9 Business Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Money Saving Tips */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Pro Tips</span>
            <h2 className="section-title">How to Save Money on Car Shipping</h2>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <TrendingDown size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Choose Open Transport</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Open carriers are the most cost-effective solution, saving you 35% to 50% compared to enclosed shipping with full $1M insurance included.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Calendar size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Book 1-2 Weeks Ahead</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Booking ahead of time gives our dispatchers the leverage to negotiate the most competitive carrier rate on your preferred route.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <MapPin size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Be Flexible on Dates</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Allowing a 1 to 3 day window for pickup enables us to slot your vehicle into existing high-volume carrier routes at discounted rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost FAQs */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Car Shipping Cost FAQs</h2>
          </div>
          <FaqAccordion customFaqs={costFaqs} showCategories={false} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
};
