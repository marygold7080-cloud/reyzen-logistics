import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Shield, CheckCircle2, Truck, Award, Radio } from 'lucide-react';
import { COMPANY_INFO } from '../config/company';

export const FleetVideoShowcase: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<'highway' | 'parked'>('highway');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoData = {
    highway: {
      src: '/videos/truck-sunset-transit.mp4',
      title: 'Interstate Long-Haul Carrier in Motion',
      subtitle: 'Active GPS-Monitored Highway Dispatch Across US Interstate Corridors',
      stats: [
        { label: 'Carrier Speed', val: '65 MPH Cruising' },
        { label: 'Cargo Coverage', val: '$1,000,000' },
        { label: 'Tracking Interval', val: 'Real-Time GPS' }
      ]
    },
    parked: {
      src: '/videos/truck-parked.mp4',
      title: 'Heavy-Duty Commercial Fleet & Staging Hub',
      subtitle: 'Rigorous Multi-Point Safety Check & White-Glove Equipment Standards',
      stats: [
        { label: 'Carrier Type', val: 'Class-8 Heavy Hauler' },
        { label: 'Safety Rating', val: 'FMCSA Certified' },
        { label: 'Inspection', val: 'Pre-Trip BOL' }
      ]
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const current = videoData[activeVideo];

  return (
    <section className="section-padding bg-white" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Radio size={14} className="animate-pulse" style={{ color: 'var(--color-accent)' }} />
            Live Fleet Operations
          </span>
          <h2 className="section-title">See Our Nationwide Carrier Fleet in Action</h2>
          <p className="section-subtitle">
            Every vehicle entrusted to {COMPANY_INFO.name} travels on modern, rigorously maintained multi-car haulers with licensed, seasoned interstate drivers.
          </p>
        </div>

        {/* Video Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <button
            type="button"
            className={`btn ${activeVideo === 'highway' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => {
              setActiveVideo('highway');
              setIsPlaying(true);
            }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Truck size={18} />
            <span>Highway Long-Haul Transit</span>
          </button>

          <button
            type="button"
            className={`btn ${activeVideo === 'parked' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => {
              setActiveVideo('parked');
              setIsPlaying(true);
            }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <Shield size={18} />
            <span>Peterbilt Fleet &amp; Staging Hub</span>
          </button>
        </div>

        {/* Video Cinema Card */}
        <div className="fleet-video-card">
          <div className="fleet-video-wrapper">
            <video
              ref={videoRef}
              key={current.src}
              src={current.src}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="fleet-video-player"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Overlays */}
            <div className="fleet-video-overlay-top">
              <div className="fleet-live-badge">
                <span className="live-dot"></span>
                <span>VERIFIED FLEET FOOTAGE</span>
              </div>

              <div className="fleet-video-controls">
                <button 
                  type="button" 
                  onClick={toggleMute}
                  className="fleet-control-btn"
                  title={isMuted ? "Unmute Audio" : "Mute Audio"}
                  aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button 
                  type="button" 
                  onClick={togglePlay}
                  className="fleet-control-btn"
                  title={isPlaying ? "Pause Video" : "Play Video"}
                  aria-label={isPlaying ? "Pause Video" : "Play Video"}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
              </div>
            </div>

            <div className="fleet-video-overlay-bottom">
              <h3 className="fleet-video-title">{current.title}</h3>
              <p className="fleet-video-subtitle">{current.subtitle}</p>

              <div className="fleet-video-stats">
                {current.stats.map((stat, idx) => (
                  <div key={idx} className="fleet-stat-pill">
                    <span className="stat-label">{stat.label}:</span>
                    <span className="stat-value">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
