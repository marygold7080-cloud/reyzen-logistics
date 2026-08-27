import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../config/company';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = "Ready to Ship Your Vehicle Safely Across the Country?",
  subtitle = "Get an instant, guaranteed quote with zero upfront deposit and up to $1,000,000 comprehensive cargo insurance."
}) => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <span className="section-tag light" style={{ marginBottom: '1.25rem' }}>
              <ShieldCheck size={16} /> Fully Insured & Bonded
            </span>
            <h2 className="cta-banner-title">{title}</h2>
            <p className="cta-banner-desc">{subtitle}</p>

            <div className="cta-banner-actions">
              <Link to="/car-shipping-cost" className="btn btn-primary btn-lg">
                <Calculator size={20} />
                <span>Calculate Your Instant Quote</span>
                <ArrowRight size={18} />
              </Link>

              <a 
                href={`tel:${COMPANY_INFO.phone.raw}`} 
                className="btn btn-outline-white btn-lg"
              >
                <Phone size={20} />
                <span>Call Dispatch: {COMPANY_INFO.phone.display}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
