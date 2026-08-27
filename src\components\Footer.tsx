import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle, 
  Star, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube 
} from 'lucide-react';
import { COMPANY_INFO } from '../config/company';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="brand-logo footer-brand-logo" aria-label="Reyzen Logistics Home">
              <img 
                src="/images/logo.png" 
                alt="Reyzen Logistics - Classic American Transport" 
                className="footer-logo-img"
              />
            </Link>

            <p className="footer-desc">
              Reyzen Logistics is a licensed and bonded nationwide vehicle shipping broker. We connect private owners, auto dealerships, auctions, and corporate fleets with fully insured, top-rated auto haulers across all 50 US states.
            </p>

            <div className="footer-trust-chips">
              <span className="trust-chip">
                <ShieldCheck size={14} /> $1M Cargo Insurance
              </span>
              <span className="trust-chip">
                <CheckCircle size={14} /> Zero Upfront Deposit
              </span>
              <span className="trust-chip">
                <Star size={14} fill="var(--color-accent)" color="var(--color-accent)" /> 4.9/5.0 Rated Carrier Network
              </span>
            </div>

            <div className="footer-socials">
              <a href={COMPANY_INFO.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={COMPANY_INFO.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href={COMPANY_INFO.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={COMPANY_INFO.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={COMPANY_INFO.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div className="footer-column">
            <h4 className="footer-column-title">Our Services</h4>
            <div className="footer-links">
              <Link to="/door-to-door-auto-transport" className="footer-link">Door-to-Door Auto Transport</Link>
              <Link to="/open-auto-transport" className="footer-link">Open Auto Transport</Link>
              <Link to="/enclosed-auto-transport" className="footer-link">Enclosed Auto Transport</Link>
              <Link to="/motorcycle-shipping" className="footer-link">Motorcycle Shipping</Link>
              <Link to="/ship-car-across-country" className="footer-link">Cross-Country Shipping</Link>
              <Link to="/car-shipping-cost" className="footer-link">Car Shipping Calculator</Link>
            </div>
          </div>

          {/* Column 3: Useful Links & How It Works */}
          <div className="footer-column">
            <h4 className="footer-column-title">How It Works</h4>
            <div className="footer-links">
              <Link to="/about-us" className="footer-link">About Reyzen Logistics</Link>
              <Link to="/why-choose-us" className="footer-link">Why Choose Us</Link>
              <Link to="/car-shipping-cost" className="footer-link">How Much Does It Cost?</Link>
              <Link to="/personal-items-in-car-shipping" className="footer-link">Personal Items in Car?</Link>
              <Link to="/ship-car-across-country" className="footer-link">Ship Car Across Country</Link>
              <Link to="/contact-us" className="footer-link">Contact & Support</Link>
            </div>
          </div>

          {/* Column 4: Contact Information */}
          <div className="footer-column">
            <h4 className="footer-column-title">Contact Information</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Phone size={18} />
                <div>
                  <div>Call / Dispatch:</div>
                  <a href={`tel:${COMPANY_INFO.phone.raw}`}>{COMPANY_INFO.phone.display}</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <Mail size={18} />
                <div>
                  <div>Email Support:</div>
                  <a href={`mailto:${COMPANY_INFO.email.general}`}>{COMPANY_INFO.email.general}</a>
                </div>
              </div>

              <div className="footer-contact-item">
                <MapPin size={18} />
                <div>
                  <div>Headquarters:</div>
                  <span>{COMPANY_INFO.address.fullDisplay}</span>
                </div>
              </div>

              <div className="footer-contact-item">
                <Clock size={18} />
                <div>
                  <div>Hours of Operation:</div>
                  <span>{COMPANY_INFO.hours.weekdays}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SMS & Privacy Consent Notice Box */}
        <div className="footer-sms-notice">
          <p>
            <strong>SMS & Automated Communication Disclosure:</strong> By submitting a quote request or providing your telephone number on {COMPANY_INFO.name}, you are consenting to be contacted by SMS text message, telephone call, or email regarding your auto transport quote and booking updates. Message frequency may vary. Standard message and data rates may apply. Reply STOP at any time to opt out of further messaging, or HELP for more information. For details on how your data is protected, review our <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/terms-conditions">Terms & Conditions</Link>.
          </p>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>
            &copy; {currentYear} {COMPANY_INFO.legalName}. All rights reserved. Nationwide Vehicle Logistics Brokerage.
          </div>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms & Conditions</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
