import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Truck, 
  ShieldCheck, 
  Bike, 
  Check, 
  ArrowRight 
} from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: <Home size={26} />,
      image: '/images/open-hauler-truck.jpg',
      badge: 'Residential & Office',
      title: "Door-to-Door Auto Transport",
      desc: "Maximum convenience. Our carriers pick up and deliver your vehicle directly at your residence, office, or designated address without terminal stops.",
      href: "/door-to-door-auto-transport",
      features: [
        "Residential pickup & delivery",
        "No terminal drop-off delays",
        "Live driver arrival coordination",
        "Photo BOL inspection at doorstep"
      ]
    },
    {
      icon: <Truck size={26} />,
      image: '/images/peterbilt-carrier-truck.jpg',
      badge: 'Most Popular Rate',
      title: "Open Auto Transport",
      desc: "The standard and most affordable way to ship any daily vehicle across the nation. Over 90% of US vehicles are transported safely via open trailers.",
      href: "/open-auto-transport",
      features: [
        "Most cost-effective rate",
        "Fastest carrier availability",
        "Up to $1,000,000 insurance",
        "Sedans, SUVs, trucks & vans"
      ]
    },
    {
      icon: <ShieldCheck size={26} />,
      image: '/images/enclosed-hauler-truck.jpg',
      badge: 'White Glove Sealed',
      title: "Enclosed Auto Transport",
      desc: "White-glove, premium protection inside a fully enclosed trailer with hydraulic liftgates. Perfect for luxury exotics, classic, vintage, and high-value cars.",
      href: "/enclosed-auto-transport",
      features: [
        "100% weather & road debris sealed",
        "Hydraulic liftgate loading",
        "Higher insurance limits",
        "Soft strapping & car covers"
      ]
    },
    {
      icon: <Bike size={26} />,
      image: '/images/white-glove-truck.jpg',
      badge: 'Specialized Carrier',
      title: "Motorcycle Shipping",
      desc: "Specialized transport for all motorcycles, custom choppers, trikes, and ATVs using heavy-duty enclosed pallets and specialized soft-tie strapping.",
      href: "/motorcycle-shipping",
      features: [
        "Specialized motorcycle pallets",
        "Air-ride suspension transport",
        "Zero fluid draining required",
        "Full transit insurance coverage"
      ]
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Comprehensive Solutions</span>
          <h2 className="section-title">Specialized Vehicle Transportation Services</h2>
          <p className="section-subtitle">
            From everyday commuters to multi-million dollar exotics and vintage motorcycles, Reyzen Logistics provides customized transport solutions for every vehicle.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc, idx) => (
            <div key={idx} className="service-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div className="service-card-img-wrap">
                <img src={svc.image} alt={svc.title} className="service-card-img" loading="lazy" />
                <span className="service-card-img-badge">{svc.badge}</span>
              </div>

              <div style={{ padding: '1.75rem 1.75rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div className="service-card-icon" style={{ margin: 0, width: '42px', height: '42px' }}>
                    {svc.icon}
                  </div>
                  <h3 className="service-card-title" style={{ margin: 0, fontSize: '1.15rem' }}>{svc.title}</h3>
                </div>

                <p className="service-card-desc">{svc.desc}</p>

                <div className="service-features-list">
                  {svc.features.map((feat, fIdx) => (
                    <div key={fIdx} className="service-feature-item">
                      <Check size={16} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <Link to={svc.href} className="service-card-link" style={{ marginTop: 'auto' }}>
                  <span>Explore {svc.title.split(' ')[0]} Transport</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
