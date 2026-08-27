import React from 'react';
import { 
  Home, 
  Check, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Truck, 
  AlertCircle 
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { FaqAccordion } from '../components/FaqAccordion';
import { CtaBanner } from '../components/CtaBanner';
import { COMPANY_INFO } from '../config/company';

export const DoorToDoorPage: React.FC = () => {
  const doorFaqs = [
    {
      id: "door-worth-it",
      question: "Are Door-to-Door transport services worth it?",
      answer: "Yes. Door-to-door vehicle shipping is the most convenient method because the carrier arrives directly at your residence or designated location, eliminating terminal storage fees, cab rides, and long trips to freight depots."
    },
    {
      id: "narrow-street",
      question: "What if my street is too narrow for an 80-foot car hauler?",
      answer: "If your residential street has low-hanging trees, tight cul-de-sacs, or weight restrictions that prevent an 8-10 car hauler from entering safely, the driver will arrange to meet you at a nearby accessible parking lot (such as a grocery store, shopping center, or wide avenue) just minutes from your home."
    },
    {
      id: "someone-else-receive",
      question: "Can someone else release or receive the vehicle on my behalf?",
      answer: "Yes! Any authorized representative who is 18 years or older (a friend, relative, neighbor, or dealership agent) can be present to inspect the vehicle, review the Bill of Lading (BOL), and sign with the driver."
    },
    {
      id: "door-insurance",
      question: "Is my vehicle insured during door-to-door transit?",
      answer: "Yes, every vehicle shipped through Reyzen Logistics is covered under the carrier's primary cargo insurance policy up to $1,000,000 from the moment it is loaded until final delivery."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Door-to-Door Auto Transport | Direct Residential Vehicle Shipping"
        description="Ship your vehicle straight from your front door to your new destination with Reyzen Logistics. Door-to-door residential pickup, $1M cargo coverage, and zero upfront deposit."
        canonicalPath="/door-to-door-auto-transport"
      />

      <PageHero 
        tag="Direct Vehicle Shipping"
        title="Door-to-Door Auto Transport"
        subtitle="The ultimate in convenience. We pick up your vehicle from your residence and deliver it directly to your new address anywhere in the United States."
        image="/images/trucks/door-to-door-truck.jpg"
        imageBadge="Direct Residential Auto Hauler"
        breadcrumbs={[
          { label: 'Services', href: '/#services' },
          { label: 'Door-to-Door' }
        ]}
      />

      {/* Main Overview */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="service-overview-grid">
            <div>
              <span className="section-tag">Convenience & Simplicity</span>
              <h2 className="section-title">Direct Residential Vehicle Transport Without the Hassle</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
                With <strong>Door-to-Door Auto Transport</strong>, you never have to waste hours driving to an industrial shipping terminal or pay expensive vehicle storage fees. The transport carrier comes directly to your physical address to load and unload your vehicle.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                Our experienced drivers navigate residential neighborhoods safely. If local city regulations, low-hanging wires, or narrow roads prevent an 80-foot multi-car trailer from pulling directly in front of your house, the driver will coordinate with you to meet at an open, well-lit parking plaza nearby.
              </p>

              <div className="service-highlight-card" style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={20} color="var(--color-accent)" />
                  Key Advantages of Door-to-Door Shipping:
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingLeft: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>No terminal drop-off fees:</strong> Avoid costly secondary storage charges.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>Personal convenience:</strong> Hand over the keys right at your driveway.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>Direct driver coordination:</strong> Live ETA calls before pickup and delivery.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.925rem' }}>
                    <Check size={16} color="var(--color-success)" />
                    <span><strong>Representative handover:</strong> Friends or family can receive the car on your behalf.</span>
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

      {/* How Door-to-Door Works Steps */}
      <section className="section-padding bg-subtle">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Step-by-Step</span>
            <h2 className="section-title">The Door-to-Door Delivery Process</h2>
            <p className="section-subtitle">
              From the initial inspection to your driveway delivery, here is how we ensure seamless transit.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Clock size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>1. Schedule & ETA Call</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Your assigned driver calls you 2 to 4 hours in advance to confirm your address and establish an accurate arrival window.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <FileText size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>2. 12-Point Inspection</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                The driver performs a thorough walkthrough, taking photos and documenting vehicle condition on the digital Bill of Lading (BOL).
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">
                <Home size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>3. Doorstep Arrival</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                Your vehicle arrives safely at the destination address. You conduct a final inspection, sign the BOL, and drive away!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Frequently Asked Questions</span>
            <h2 className="section-title">Door-to-Door Auto Transport FAQs</h2>
          </div>
          <FaqAccordion customFaqs={doorFaqs} showCategories={false} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
};
