import React from 'react';
import { 
  Package, 
  ShieldAlert, 
  CheckCircle, 
  XCircle, 
  Scale, 
  AlertTriangle,
  FileText
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { FaqAccordion } from '../components/FaqAccordion';
import { CtaBanner } from '../components/CtaBanner';

export const PersonalItemsPage: React.FC = () => {
  const personalFaqs = [
    {
      id: "how-much-weight",
      question: "How many pounds of personal items can I leave in my vehicle?",
      answer: "Most auto transport carriers allow up to 100 pounds of personal belongings or luggage, provided the items are placed securely in the trunk or below the window line in the back seat."
    },
    {
      id: "personal-insurance",
      question: "Are my personal items covered by the carrier's cargo insurance?",
      answer: "No. Federal DOT regulations license auto transport carriers specifically for motor vehicles. Carrier primary cargo insurance covers damage to the vehicle itself, but does not cover lost, stolen, or damaged personal belongings left inside. We advise not leaving valuable, fragile, or irreplaceable items inside the car."
    },
    {
      id: "weight-inspection",
      question: "Why do carriers care about weight inside the vehicle?",
      answer: "Commercial auto haulers must pass through mandatory Department of Transportation (DOT) weigh stations across state borders. Overweight trailers face heavy fines, delays, or citations if gross axle weight limits are exceeded."
    },
    {
      id: "prohibited-items",
      question: "What items are strictly prohibited from being shipped inside the car?",
      answer: "Prohibited items include firearms, ammunition, hazardous chemicals, flammable liquids, fireworks, illegal contraband, live plants, pets, alcohol, and perishable foods."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Can I Put Personal Items in My Car When Shipping? | Reyzen Logistics"
        description="Learn the official rules for shipping personal items and luggage in your car. Understand the 100 lb weight limit, DOT guidelines, insurance coverage, and prohibited items."
        canonicalPath="/personal-items-in-car-shipping"
      />

      <PageHero 
        tag="Auto Shipping Guidelines"
        title="Personal Items in Car Shipping"
        subtitle="Understand the rules, weight allowances, insurance policies, and DOT regulations regarding luggage and personal belongings in your vehicle."
        image="/images/trucks/personal-items-truck.jpg"
        imageBadge="100 lbs Free Trunk Luggage Allowance"
        breadcrumbs={[
          { label: 'How It Works', href: '/#how-it-works' },
          { label: 'Personal Items' }
        ]}
      />

      {/* Main Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="service-overview-grid">
            <div>
              <span className="section-tag">Essential Policy Guide</span>
              <h2 className="section-title">Rules for Packing Personal Belongings in Your Vehicle</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                One of the most common questions customers ask when preparing to ship a car is: <em>"Can I pack personal items or moving boxes inside my vehicle?"</em>
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                The short answer is <strong>yes, with limitations</strong>. Under Reyzen Logistics carrier guidelines, you may place up to <strong>100 pounds</strong> of personal items or luggage in your vehicle, as long as all items are secured inside the trunk or kept strictly below the window line in the rear seating area.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                However, there are important Department of Transportation (DOT) weight rules and insurance exclusions you must understand before packing.
              </p>

              <div className="service-highlight-card">
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Scale size={20} color="var(--color-accent)" />
                  Key Personal Item Rules:
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <CheckCircle size={16} color="var(--color-success)" />
                    <span><strong>100 lb Weight Limit:</strong> Keep combined luggage weight under 100 lbs.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <CheckCircle size={16} color="var(--color-success)" />
                    <span><strong>Keep Trunk Locked:</strong> Store items out of plain view in the trunk.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <CheckCircle size={16} color="var(--color-success)" />
                    <span><strong>Front Seats Clear:</strong> Driver and front passenger seats must remain 100% empty.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <CheckCircle size={16} color="var(--color-success)" />
                    <span><strong>Below Window Line:</strong> Rear seat items must not obstruct the driver's mirrors.</span>
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

      {/* Allowed vs Prohibited Items */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Safety Standards</span>
            <h2 className="section-title">Allowed vs. Prohibited Belongings</h2>
            <p className="section-subtitle">
              Follow this breakdown to ensure your vehicle complies with federal highway safety inspections.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Allowed Card */}
            <div style={{ background: '#FFFFFF', border: '1.5px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--color-success)' }}>
                <CheckCircle size={24} />
                <h3 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--text-main)' }}>Allowed (Under 100 lbs)</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <CheckCircle size={16} color="var(--color-success)" />
                  <span>Luggage & Suitcases in the trunk</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <CheckCircle size={16} color="var(--color-success)" />
                  <span>Clothing, shoes & linens in sealed boxes</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <CheckCircle size={16} color="var(--color-success)" />
                  <span>Spare tire, jack & emergency roadside kit</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <CheckCircle size={16} color="var(--color-success)" />
                  <span>Child safety car seats (securely buckled)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <CheckCircle size={16} color="var(--color-success)" />
                  <span>Small non-fragile household goods</span>
                </li>
              </ul>
            </div>

            {/* Prohibited Card */}
            <div style={{ background: '#FFFFFF', border: '1.5px solid #FECACA', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: 'var(--color-danger)' }}>
                <XCircle size={24} />
                <h3 style={{ margin: 0, fontSize: '1.3rem', color: 'var(--text-main)' }}>Strictly Prohibited</h3>
              </div>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <XCircle size={16} color="var(--color-danger)" />
                  <span>Firearms, weapons, or ammunition</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <XCircle size={16} color="var(--color-danger)" />
                  <span>Flammables, gas cans, or chemicals</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <XCircle size={16} color="var(--color-danger)" />
                  <span>Perishable food, alcohol, or live plants</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <XCircle size={16} color="var(--color-danger)" />
                  <span>High-value jewelry, laptops & cash</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                  <XCircle size={16} color="var(--color-danger)" />
                  <span>Illegal substances or unregulated goods</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Insurance Warning Box */}
          <div style={{ background: 'rgba(220, 38, 38, 0.05)', border: '1.5px solid rgba(220, 38, 38, 0.25)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', marginTop: '2.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <AlertTriangle size={24} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
            <div>
              <h4 style={{ color: '#991B1B', marginBottom: '0.35rem', fontSize: '1.05rem' }}>Important Insurance Notice</h4>
              <p style={{ fontSize: '0.925rem', color: '#B91C1C', margin: 0, lineHeight: '1.6' }}>
                The carrier’s $1,000,000 primary cargo liability policy legally protects the vehicle itself against transit damage. <strong>Personal items, luggage, and household goods inside the vehicle are NOT covered by carrier insurance.</strong> Any personal belongings left in the car are shipped solely at the owner's risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Items FAQs */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Personal Items in Car FAQs</h2>
          </div>
          <FaqAccordion customFaqs={personalFaqs} showCategories={false} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
};
