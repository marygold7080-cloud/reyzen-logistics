import React from 'react';
import { 
  Bike, 
  ShieldCheck, 
  Check, 
  CheckCircle, 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { FaqAccordion } from '../components/FaqAccordion';
import { CtaBanner } from '../components/CtaBanner';
import { COMPANY_INFO } from '../config/company';

export const MotorcycleShippingPage: React.FC = () => {
  const motoFaqs = [
    {
      id: "moto-prep",
      question: "How do I prepare my motorcycle for transport?",
      answer: "Preparation is simple: clean your motorcycle, leave approximately 1/4 tank of gas (do not drain fluids entirely), unlock the steering column so the driver can roll it onto the loading ramp/pallet, remove personal loose accessories, and conduct a photo inspection with the driver on the BOL."
    },
    {
      id: "moto-types",
      question: "What types of motorcycles can you ship?",
      answer: "We ship all types of motorcycles including Harley-Davidson cruisers, sportbikes, adventure/touring motorcycles, custom choppers, dirt bikes, trikes, sidecars, vintage classics, and all-terrain vehicles (ATVs & UTVs)."
    },
    {
      id: "moto-crate",
      question: "Do I need to crate my motorcycle before transport?",
      answer: "No, crating is not required! Our specialized motorcycle transport carriers use heavy-duty steel base pallets with integrated soft-tie wheel chocks and high-grade nylon strapping to hold your bike upright and secure throughout transit."
    },
    {
      id: "moto-insurance",
      question: "Is my motorcycle fully insured during shipping?",
      answer: "Yes, every motorcycle shipment through Reyzen Logistics is covered under the carrier's primary cargo insurance policy up to $1,000,000 for total peace of mind."
    }
  ];

  const prepChecklist = [
    "Clean the motorcycle thoroughly to ensure any existing cosmetic blemishes are easily noted on the BOL inspection report.",
    "Maintain approximately 1/4 tank of fuel (enough for loading/unloading, but adhering to fire safety standards).",
    "Ensure the steering column is unlocked and tires are inflated to facilitate smooth roll-on loading.",
    "Remove or securely pack detachable accessories, saddlebags, aftermarket GPS mounts, and loose items.",
    "Deactivate or set any alarm systems to transport mode.",
    "Conduct a joint photo walkthrough with the carrier driver at pickup and confirm the Bill of Lading documentation."
  ];

  return (
    <>
      <SEOHead 
        title="Motorcycle Shipping Nationwide | Safe & Secure Bike Transport"
        description="Specialized motorcycle shipping for cruisers, sportbikes, customs, trikes, and ATVs across the USA. Heavy-duty pallets, soft-tie strapping, and $1M cargo insurance."
        canonicalPath="/motorcycle-shipping"
      />

      <PageHero 
        tag="Specialized Two-Wheel Transport"
        title="Motorcycle Shipping Nationwide"
        subtitle="Safe, reliable, and specialized transport for all motorcycles, custom choppers, trikes, and ATVs across all 50 US states."
        image="/images/trucks/motorcycle-shipping-truck.jpg"
        imageBadge="Specialized Drive-On Pallet Carrier"
        breadcrumbs={[
          { label: 'Services', href: '/#services' },
          { label: 'Motorcycle Shipping' }
        ]}
      />

      {/* Main Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="service-overview-grid">
            <div>
              <span className="section-tag">Specialized Handling</span>
              <h2 className="section-title">Dedicated Care for Every Two-Wheeled Machine</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                Transporting a motorcycle requires specialized equipment and expertise that standard freight companies simply do not possess. At <strong>{COMPANY_INFO.name}</strong>, our network includes experienced motorcycle transport specialists equipped with specialized steel base pallets, integrated wheel chocks, and four-point soft-tie nylon tension strapping.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Your bike remains upright and securely stabilized throughout its journey. We transport motorcycles inside air-ride enclosed and specialized open trailers, shielding your bike from excess road vibration and ensuring it arrives ready to ride.
              </p>

              <div className="service-highlight-card" style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Bike size={20} color="var(--color-accent)" />
                  Motorcycle Transport Highlights:
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>No Crating Required:</strong> Specialized drive-on pallets eliminate expensive crating.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>Soft-Tie Strapping:</strong> Non-abrasive nylon straps protect handlebars and chrome.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>Full Transit Coverage:</strong> $1,000,000 primary cargo liability insurance included.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>Door-to-Door Delivery:</strong> Direct pickup and delivery at your home or garage.</span>
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

      {/* Preparation Checklist */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Preparation Guide</span>
            <h2 className="section-title">Motorcycle Shipping Checklist</h2>
            <p className="section-subtitle">
              Follow these simple preparation steps to ensure a smooth, worry-free transport experience for your motorcycle.
            </p>
          </div>

          <div className="checklist-grid">
            {prepChecklist.map((item, idx) => (
              <div key={idx} className="checklist-card">
                <div className="checklist-icon">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.35rem', color: 'var(--color-primary)' }}>
                    Step {idx + 1}
                  </h4>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: '1.55', margin: 0 }}>
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motorcycle FAQs */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Motorcycle Shipping FAQs</h2>
          </div>
          <FaqAccordion customFaqs={motoFaqs} showCategories={false} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
};
