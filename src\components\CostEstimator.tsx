import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, Gauge, Navigation } from 'lucide-react';
import { POPULAR_ROUTES } from '../config/company';

export const CostEstimator: React.FC = () => {
  const [miles, setMiles] = useState(1200);
  const [carrier, setCarrier] = useState<'open' | 'enclosed'>('open');
  const [vType, setVType] = useState<'sedan' | 'suv' | 'truck'>('sedan');

  // Calculation formula
  let baseRate = 0.72;
  if (miles < 500) baseRate = 1.35;
  else if (miles < 1000) baseRate = 0.88;
  else if (miles < 2000) baseRate = 0.68;
  else baseRate = 0.58;

  let totalCost = miles * baseRate;
  if (carrier === 'enclosed') totalCost *= 1.45;
  if (vType === 'suv') totalCost += 80;
  if (vType === 'truck') totalCost += 140;

  const minEst = Math.round((totalCost * 0.95) / 10) * 10;
  const maxEst = Math.round((totalCost * 1.05) / 10) * 10;

  let estTransit = "3-4 Days";
  if (miles < 500) estTransit = "1-2 Days";
  else if (miles < 1200) estTransit = "2-4 Days";
  else if (miles < 2000) estTransit = "4-6 Days";
  else estTransit = "6-9 Days";

  return (
    <div className="cost-estimator-card">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
        <Gauge size={22} color="var(--color-accent)" />
        <h3 style={{ margin: 0, fontSize: '1.4rem' }}>Interactive Rate Estimator</h3>
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        Adjust mileage, vehicle type, and trailer option to explore realistic nationwide shipping estimates.
      </p>

      {/* Distance Slider */}
      <div className="estimator-slider-wrap">
        <div className="estimator-slider-head">
          <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Shipping Distance:</span>
          <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-accent)' }}>
            {miles.toLocaleString()} Miles
          </span>
        </div>

        <input
          type="range"
          min="150"
          max="3000"
          step="50"
          value={miles}
          onChange={(e) => setMiles(Number(e.target.value))}
          className="estimator-range-input"
          aria-label="Shipping distance in miles"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
          <span>150 mi (Local/Regional)</span>
          <span>1,500 mi (Midwest/Coast)</span>
          <span>3,000 mi (Coast-to-Coast)</span>
        </div>
      </div>

      {/* Toggles */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
            Carrier Type
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              type="button"
              className={`btn btn-sm ${carrier === 'open' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ flex: 1 }}
              onClick={() => setCarrier('open')}
            >
              Open
            </button>
            <button
              type="button"
              className={`btn btn-sm ${carrier === 'enclosed' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ flex: 1 }}
              onClick={() => setCarrier('enclosed')}
            >
              Enclosed
            </button>
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.4rem' }}>
            Vehicle Size
          </label>
          <div style={{ display: 'flex', gap: '0.35rem' }}>
            <button
              type="button"
              className={`btn btn-sm ${vType === 'sedan' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ flex: 1, padding: '0.5rem 0.4rem', fontSize: '0.8rem' }}
              onClick={() => setVType('sedan')}
            >
              Sedan
            </button>
            <button
              type="button"
              className={`btn btn-sm ${vType === 'suv' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ flex: 1, padding: '0.5rem 0.4rem', fontSize: '0.8rem' }}
              onClick={() => setVType('suv')}
            >
              SUV
            </button>
            <button
              type="button"
              className={`btn btn-sm ${vType === 'truck' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ flex: 1, padding: '0.5rem 0.4rem', fontSize: '0.8rem' }}
              onClick={() => setVType('truck')}
            >
              Truck
            </button>
          </div>
        </div>
      </div>

      {/* Result Output Highlight */}
      <div style={{
        background: 'var(--grad-primary)',
        color: '#FFFFFF',
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div>
          <div style={{ fontSize: '0.8rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Estimated Average Rate
          </div>
          <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--color-accent)' }}>
            ${minEst} - ${maxEst}
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Est. Transit Time</div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#FFFFFF' }}>{estTransit}</div>
        </div>
      </div>

      {/* Popular Route Presets */}
      <div style={{ marginTop: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)' }}>
          <Navigation size={15} />
          <span>Or Click a Popular Route Preset:</span>
        </div>

        <div className="route-presets-grid">
          {POPULAR_ROUTES.slice(0, 4).map((r, idx) => (
            <button
              key={idx}
              type="button"
              className="route-preset-btn"
              onClick={() => setMiles(r.miles)}
            >
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-main)' }}>
                {r.from} &rarr; {r.to}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {r.miles} mi • Est. {r.openAvg}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <Link to="/car-shipping-cost" className="btn btn-primary btn-block">
          <Calculator size={18} />
          <span>Lock In Your Exact Guaranteed Rate</span>
        </Link>
      </div>
    </div>
  );
};
