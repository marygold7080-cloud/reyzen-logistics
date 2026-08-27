import React from 'react';
import { 
  ShieldCheck, 
  DollarSign, 
  Truck, 
  Clock, 
  MapPin, 
  FileCheck,
  Award,
  Headphones
} from 'lucide-react';
import { COMPANY_INFO } from '../config/company';

interface TrustSectionProps {
  darkBg?: boolean;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ darkBg = false }) => {
  const trustPoints = [
    {
      icon: <DollarSign size={26} />,
      title: "Zero Upfront Deposit",
      desc: "You never pay a penny until your carrier is officially vetted, scheduled, and dispatched to your pickup location.",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "$1,000,000 Cargo Coverage",
      desc: "Every vehicle is covered under the carrier's primary insurance policy against transit damage from pickup to final drop-off.",
    },
    {
      icon: <Truck size={26} />,
      title: "14,500+ Vetted Carriers",
      desc: "We rigorously verify carrier safety records, active operating authority (FMCSA), and insurance certificates prior to dispatch.",
    },
    {
      icon: <Clock size={26} />,
      title: "24/7 Live Dispatch & Support",
      desc: "Connect directly with a dedicated logistics specialist who knows your route details, pickup schedule, and live driver location.",
    },
    {
      icon: <FileCheck size={26} />,
      title: "BOL Photo Inspection",
      desc: "Drivers document pre-existing vehicle condition with detailed photo inspections at pickup and delivery for total peace of mind.",
    },
    {
      icon: <Award size={26} />,
      title: "100% Transparent Pricing",
      desc: "All quotes are comprehensive and all-inclusive. Zero hidden fuel surcharges, road tolls, or terminal transfer markups.",
    },
  ];

  return (
    <section className={`section-padding ${darkBg ? 'bg-dark' : 'bg-subtle'}`}>
      <div className="container">
        <div className="section-header">
          <span className={`section-tag ${darkBg ? 'light' : ''}`}>Why Reyzen Logistics</span>
          <h2 className="section-title">The Gold Standard in Nationwide Auto Transport</h2>
          <p className="section-subtitle">
            Shipping your vehicle should be effortless and dependable. Discover why private collectors, dealerships, and families trust {COMPANY_INFO.name}.
          </p>
        </div>

        <div className="trust-grid">
          {trustPoints.map((item, idx) => (
            <div key={idx} className="trust-card">
              <div className="trust-card-icon">
                {item.icon}
              </div>
              <h3 className="trust-card-title">{item.title}</h3>
              <p className="trust-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
