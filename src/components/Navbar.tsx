import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Calculator
} from 'lucide-react';
import { COMPANY_INFO, NAV_LINKS } from '../config/company';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleMobileDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-inner">
            <div className="top-bar-left">
              <div className="top-bar-item">
                <ShieldCheck size={14} />
                <span>$1,000,000 Cargo Insurance on Every Transport</span>
              </div>
              <div className="top-bar-item">
                <Truck size={14} />
                <span>50-State Nationwide Carrier Network</span>
              </div>
            </div>

            <div className="top-bar-right">
              <div className="top-bar-item">
                <Clock size={14} />
                <span>24/7 Live Dispatch:</span>
                <a href={`tel:${COMPANY_INFO.phone.raw}`}>{COMPANY_INFO.phone.display}</a>
              </div>
              <span className="top-bar-badge">Zero Upfront Deposit</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="navbar-container">
            {/* Brand Logo with Official Emblem */}
            <Link to="/" className="brand-logo" aria-label="Reyzen Logistics Home">
              <img 
                src="/images/logo.png" 
                alt="Reyzen Logistics - Classic American Transport" 
                className="brand-logo-img"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav-menu" aria-label="Main Navigation">
              {NAV_LINKS.map((item, idx) => {
                if ('children' in item && item.children) {
                  return (
                    <div className="nav-item" key={idx}>
                      <button 
                        className="nav-link" 
                        aria-expanded="false"
                        type="button"
                      >
                        <span>{item.label}</span>
                        <ChevronDown size={14} className="dropdown-chevron" />
                      </button>
                      <div className="nav-dropdown">
                        {item.children.map((child, cIdx) => (
                          <Link 
                            to={child.href} 
                            key={cIdx} 
                            className="dropdown-item"
                          >
                            <div className="dropdown-item-title">
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="dropdown-item-desc">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <div className="nav-item" key={idx}>
                    <Link 
                      to={item.href || '/'} 
                      className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </div>
                );
              })}
            </nav>

            {/* Navbar Actions Right - Pixel-perfect to screenshot */}
            <div className="nav-actions">
              {/* Phone Pill Box */}
              <a 
                href={`tel:${COMPANY_INFO.phone.raw}`} 
                className="nav-phone-pill"
                title="Call Reyzen Logistics Dispatch"
              >
                <div className="phone-pill-icon">
                  <Phone size={15} />
                </div>
                <span className="phone-pill-number">{COMPANY_INFO.phone.display}</span>
              </a>

              {/* Get Instant Quote Button */}
              <Link 
                to="/car-shipping-cost" 
                className="nav-quote-cta-btn"
              >
                <Calculator size={16} />
                <span>Get Instant Quote</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button 
                className="mobile-toggle-btn"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <img 
              src="/images/logo.png" 
              alt="Reyzen Logistics" 
              style={{ height: '48px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          <button 
            className="mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-nav-list">
          {NAV_LINKS.map((item, idx) => {
            if ('children' in item && item.children) {
              const isOpen = activeDropdown === item.label;
              return (
                <div key={idx} style={{ marginBottom: '0.5rem' }}>
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="mobile-nav-item"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.75rem',
                      color: 'var(--text-main)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronDown 
                      size={18} 
                      style={{ 
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s ease',
                        color: 'var(--color-accent)'
                      }} 
                    />
                  </button>

                  {isOpen && (
                    <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.25rem' }}>
                      {item.children.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          to={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          style={{
                            padding: '0.6rem 0.75rem',
                            fontSize: '0.9rem',
                            color: 'var(--text-muted)',
                            display: 'block',
                            borderRadius: '4px',
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div className="mobile-nav-item" key={idx}>
                <Link to={item.href || '/'} onClick={() => setMobileMenuOpen(false)}>
                  <span>{item.label}</span>
                </Link>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid #E5E7EB' }}>
          <a 
            href={`tel:${COMPANY_INFO.phone.raw}`}
            className="btn btn-secondary btn-block"
            style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}
          >
            <Phone size={18} />
            <span>Call {COMPANY_INFO.phone.display}</span>
          </a>

          <Link
            to="/car-shipping-cost"
            className="btn btn-primary btn-block"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Calculator size={18} />
            <span>Calculate Instant Quote</span>
          </Link>
        </div>
      </div>
    </>
  );
};
