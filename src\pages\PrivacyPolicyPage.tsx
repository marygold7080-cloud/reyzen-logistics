import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Smartphone, FileText } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { COMPANY_INFO } from '../config/company';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | Reyzen Logistics"
        description="Learn how Reyzen Logistics protects your privacy, handles personal quote data, and manages SMS text communication per FCC and carrier guidelines."
        canonicalPath="/privacy-policy"
      />

      <PageHero 
        tag="Data Protection"
        title="Privacy Policy"
        subtitle={`Your privacy and security are paramount. Learn how ${COMPANY_INFO.name} collects, manages, and safeguards your information.`}
        image="/images/trucks/heavy-carrier-highway.jpg"
        imageBadge="Encrypted Customer Data & Privacy"
        breadcrumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="legal-content-wrap">
            <div className="legal-section-block">
              <h2>1. Overview & Information We Collect</h2>
              <p>
                <strong>{COMPANY_INFO.legalName}</strong> ("{COMPANY_INFO.name}", "we", "us") values your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you access <strong>{COMPANY_INFO.domain}</strong> or submit an auto transport quote request.
              </p>
              <p>
                When you request an estimate or contact us, we collect:
              </p>
              <ul>
                <li><strong>Contact Details:</strong> First and last name, email address, telephone/mobile phone number.</li>
                <li><strong>Transport Specifications:</strong> Pickup city/ZIP code, delivery city/ZIP code, vehicle year, make, model, operational condition, carrier preference (open or enclosed), and requested shipping timeline.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and site interaction data collected via standard cookies to improve website performance.</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>2. How We Use Your Information</h2>
              <p>
                We use the information collected exclusively for legitimate vehicle transport logistics purposes:
              </p>
              <ul>
                <li>To generate accurate instant shipping rate quotes based on market lane data.</li>
                <li>To schedule, coordinate, and dispatch vetted motor carriers to your pickup address.</li>
                <li>To provide live shipping tracking, driver ETA notifications, and customer support.</li>
                <li>To execute legal Bill of Lading (BOL) documentation and condition receipts.</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>3. SMS & Automated Communication Terms</h2>
              <p>
                By providing your telephone number on our website forms and submitting a quote request, you expressly consent to receive communications from <strong>{COMPANY_INFO.name}</strong>, including SMS text messages, phone calls, and automated notifications regarding your auto transport quote and active shipment status.
              </p>
              <ul>
                <li><strong>Message Frequency:</strong> Message frequency varies depending on your shipping inquiry and active order status.</li>
                <li><strong>Rates:</strong> Standard message and data rates may apply as determined by your cellular carrier.</li>
                <li><strong>Opt-Out Instructions:</strong> You may opt out of SMS messages at any time by replying <strong>STOP</strong> to any message received from us.</li>
                <li><strong>Help Assistance:</strong> Reply <strong>HELP</strong> for customer support, or call us directly at <strong>{COMPANY_INFO.phone.display}</strong>.</li>
                <li><strong>No Sale of Phone Numbers:</strong> Mobile information and phone numbers collected for SMS consent will <strong>NEVER</strong> be shared, sold, or leased to third-party marketers or affiliates for promotional purposes.</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>4. Information Sharing & Third-Party Disclosure</h2>
              <p>
                We do not sell, rent, or trade your personal information. We share your transport details only with:
              </p>
              <ul>
                <li><strong>Assigned Motor Carriers:</strong> Contact details, vehicle specifics, and pickup/delivery addresses provided strictly to the vetted carrier assigned to transport your vehicle.</li>
                <li><strong>Legal Compliance:</strong> When required by federal law, FMCSA/DOT regulatory audits, or judicial subpoenas.</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>5. Data Security</h2>
              <p>
                We implement industry-standard SSL 256-bit encryption, firewalls, and restricted data access protocols to protect your personal and transport information against unauthorized access, alteration, or disclosure.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>6. Contact Us</h2>
              <p>
                For any privacy inquiries, data deletion requests, or questions regarding this policy, please contact:
              </p>
              <p>
                <strong>{COMPANY_INFO.legalName} - Privacy Officer</strong><br />
                Address: {COMPANY_INFO.address.fullDisplay}<br />
                Phone: {COMPANY_INFO.phone.display}<br />
                Email: {COMPANY_INFO.email.general}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
