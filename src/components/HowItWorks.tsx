import React from 'react';
import { Calculator, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../config/company';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: <Calculator size={24} />,
      title: 'Get Free Instant Quote',
      desc: 'Use our online calculator or call our dispatchers. Choose between open or enclosed shipping and lock in your price with zero upfront payment.',
      img: '/images/trucks/hw-quote-truck.jpg',
      alt: 'Instant Auto Transport Rate Calculation'
    },
    {
      step: '02',
      icon: <Truck size={24} />,
      title: 'Carrier Assignment & Pickup',
      desc: 'We match your route with a top-rated, fully insured carrier. The driver conducts a thorough 12-point photo inspection and loads your vehicle.',
      img: '/images/trucks/hw-pickup-truck.jpg',
      alt: 'Professional Carrier Truck Vehicle Loading'
    },
    {
      step: '03',
      icon: <CheckCircle2 size={24} />,
      title: 'Door-to-Door Delivery',
      desc: 'Your vehicle is delivered directly to your doorstep. You or your representative inspect the vehicle, sign off on the Bill of Lading, and you are done!',
      img: '/images/trucks/hw-delivery-truck.jpg',
      alt: 'Direct Doorstep Vehicle Delivery by Carrier'
    },
  ];

  return (
    <section className="section-padding bg-subtle">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Simple Procedure</span>
          <h2 className="section-title">How Vehicle Transport Works with Reyzen</h2>
          <p className="section-subtitle">
            We have streamlined auto shipping into three effortless steps so you can relax knowing your vehicle is in expert hands.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((item, idx) => (
            <div key={idx} className="process-card">
              <span className="process-step-num">Step {item.step}</span>
              <div className="process-card-img-wrap">
                <img 
                  src={item.img} 
                  alt={item.alt} 
                  className="process-card-img" 
                  loading="lazy"
                />
              </div>
              <div className="process-card-body">
                <div className="process-icon-wrap">
                  {item.icon}
                </div>
                <h3 className="process-title">{item.title}</h3>
                <p className="process-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/car-shipping-cost" className="btn btn-primary btn-lg">
            <span>Calculate Your Rate Now</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
