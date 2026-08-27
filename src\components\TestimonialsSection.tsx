import React from 'react';
import { Star, CheckCircle2, Quote, Truck, Award } from 'lucide-react';
import { COMPANY_INFO } from '../config/company';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: "Marcus Vance",
      initials: "MV",
      location: "San Diego, CA to Dallas, TX",
      vehicle: "2023 Porsche 911 Carrera (Enclosed)",
      rating: 5,
      date: "Verified Customer",
      review: "I was extremely nervous shipping my 911 across four states. Reyzen Logistics set me up with a pristine enclosed trailer with hydraulic liftgate. Driver called 2 hours before pickup, provided full photo inspection, and arrived 1 day ahead of schedule in Dallas. Flawless white-glove service!"
    },
    {
      name: "Elena Rostova",
      initials: "ER",
      location: "Miami, FL to Boston, MA",
      vehicle: "2022 BMW X5 & Honda Civic (Open)",
      rating: 5,
      date: "Verified Customer",
      review: "Zero upfront deposit gave me complete trust from day one. Our coordinator kept us in the loop through text messages daily. Both cars arrived without a single scratch and exactly on the estimated delivery date. Best price across 5 quotes I received."
    },
    {
      name: "David Sterling",
      initials: "DS",
      location: "Seattle, WA to Atlanta, GA",
      vehicle: "2021 Ford F-250 Super Duty (Open)",
      rating: 5,
      date: "Verified Customer",
      review: "Cross-country move with a heavy-duty truck. Reyzen’s driver navigated my residential neighborhood easily and conducted a thorough Bill of Lading inspection. Communication was 10/10. Will only use Reyzen for auto shipping from now on."
    }
  ];

  return (
    <section className="section-padding bg-subtle">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Reviews</span>
          <h2 className="section-title">Trusted by Drivers, Dealerships & Families</h2>
          <p className="section-subtitle">
            Rated {COMPANY_INFO.stats.rating} stars across {COMPANY_INFO.stats.reviewsCount} verified vehicle shipments nationwide.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="testimonial-card">
              <div>
                <div className="testimonial-top-row">
                  <div className="testimonial-stars">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <div className="testimonial-badge">
                    <CheckCircle2 size={13} />
                    <span>{rev.date}</span>
                  </div>
                </div>

                <p className="testimonial-text">"{rev.review}"</p>
              </div>

              <div className="testimonial-author-wrap">
                <div className="testimonial-avatar">
                  {rev.initials}
                </div>
                <div className="testimonial-author-meta">
                  <div className="testimonial-author-name">{rev.name}</div>
                  <div className="testimonial-route">{rev.location}</div>
                  <div className="testimonial-vehicle-tag">
                    <Truck size={13} />
                    <span>{rev.vehicle}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

