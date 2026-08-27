import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calculator, Truck, Phone, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../config/company';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Page Not Found (404) | Reyzen Logistics"
        description="The page you are looking for does not exist. Explore our nationwide vehicle transport services or calculate an instant car shipping quote."
      />

      <section className="section-padding bg-subtle" style={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(217, 119, 6, 0.12)',
            color: 'var(--color-accent)',
            marginBottom: '1.5rem',
            fontFamily: 'var(--font-heading)',
            fontSize: '2rem',
            fontWeight: 800
          }}>
            404
          </div>

          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>
            Page Not Found
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2.5rem' }}>
            We could not find the page you were looking for. Use the quick links below to explore our services or calculate your instant auto shipping quote.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <Link to="/" className="btn btn-primary btn-lg">
              <Home size={18} />
              <span>Return Home</span>
            </Link>

            <Link to="/car-shipping-cost" className="btn btn-secondary btn-lg">
              <Calculator size={18} />
              <span>Calculate Instant Quote</span>
            </Link>
          </div>

          <div style={{ background: '#FFFFFF', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--border-light)', textAlign: 'left' }}>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Popular Pages &amp; Services:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
              <Link to="/door-to-door-auto-transport" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent)', fontSize: '0.925rem', fontWeight: 600 }}>
                <ArrowRight size={14} /> Door-to-Door Transport
              </Link>
              <Link to="/open-auto-transport" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent)', fontSize: '0.925rem', fontWeight: 600 }}>
                <ArrowRight size={14} /> Open Auto Transport
              </Link>
              <Link to="/enclosed-auto-transport" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent)', fontSize: '0.925rem', fontWeight: 600 }}>
                <ArrowRight size={14} /> Enclosed Auto Transport
              </Link>
              <Link to="/motorcycle-shipping" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent)', fontSize: '0.925rem', fontWeight: 600 }}>
                <ArrowRight size={14} /> Motorcycle Shipping
              </Link>
              <Link to="/ship-car-across-country" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent)', fontSize: '0.925rem', fontWeight: 600 }}>
                <ArrowRight size={14} /> Ship Across Country
              </Link>
              <Link to="/contact-us" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-accent)', fontSize: '0.925rem', fontWeight: 600 }}>
                <ArrowRight size={14} /> Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
