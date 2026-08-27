import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PageHero } from '../components/PageHero';
import { COMPANY_INFO } from '../config/company';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Terms & Conditions | Reyzen Logistics"
        description="Review the terms and conditions for auto transport services arranged through Reyzen Logistics LLC. Transparent terms, cancellation rules, and carrier cargo policies."
        canonicalPath="/terms-conditions"
      />

      <PageHero 
        tag="Legal & Agreement"
        title="Terms & Conditions"
        subtitle={`Please read these terms and conditions carefully before booking your vehicle transportation with ${COMPANY_INFO.name}.`}
        image="/images/trucks/fleet-hauler-sunset.jpg"
        imageBadge="FMCSA Compliance & Carrier Terms"
        breadcrumbs={[{ label: 'Terms & Conditions' }]}
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="legal-content-wrap">
            <div className="legal-section-block">
              <h2>1. Introduction & Brokerage Role</h2>
              <p>
                Welcome to <strong>{COMPANY_INFO.legalName}</strong> ("{COMPANY_INFO.name}", "we", "us", or "our"). {COMPANY_INFO.name} is a licensed and bonded property broker registered with the Federal Motor Carrier Safety Administration (FMCSA).
              </p>
              <p>
                {COMPANY_INFO.name} acts solely as an authorized auto transportation broker. We arrange for the transportation of your vehicle with independent, licensed, insured, and FMCSA-authorized Department of Transportation (DOT) motor carriers ("Carriers"). {COMPANY_INFO.name} does not directly operate motor carrier equipment or employ drivers.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>2. Quotations, Pricing & Payments</h2>
              <p>
                All rate quotations provided online or by telephone are estimated based on origin/destination distance, vehicle size, operational condition, and prevailing market carrier rates.
              </p>
              <ul>
                <li><strong>Zero Upfront Fees:</strong> No deposit or charge is processed until a qualified carrier has been officially scheduled and dispatched to your pickup location.</li>
                <li><strong>All-Inclusive Rates:</strong> Quotations include all standard transit fees, fuel surcharges, road tolls, and carrier cargo insurance up to $1,000,000.</li>
                <li><strong>Payment Execution:</strong> The deposit portion is processed upon carrier dispatch. Any remaining carrier balance is paid directly to the driver upon delivery via Cash, Certified Check, Cashier's Check, or pre-authorized electronic payment.</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>3. Cancellation & Refund Policy</h2>
              <p>
                We believe in fair and transparent cancellation terms:
              </p>
              <ul>
                <li><strong>Cancellation Prior to Dispatch:</strong> You may cancel your shipping order at any time before a carrier is officially assigned without any financial penalty or fee.</li>
                <li><strong>Cancellation After Dispatch Confirmation:</strong> If you cancel after a driver has been officially scheduled, dispatched, and assigned to your pickup route, an administrative dispatch fee of <strong>$100</strong> will apply to offset the carrier's route reservation.</li>
                <li><strong>Carrier Assignment Guarantee:</strong> If for any reason {COMPANY_INFO.name} is unable to assign a driver to your requested route, you are entitled to a <strong>100% full refund</strong> of any deposit paid.</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>4. Pickup, Delivery & Bill of Lading (BOL)</h2>
              <p>
                The official <strong>Bill of Lading (BOL)</strong> is the primary legal receipt and condition report governing your vehicle transit:
              </p>
              <ul>
                <li><strong>Pickup Inspection:</strong> At pickup, the carrier driver and customer (or designated representative 18 years or older) will thoroughly inspect the vehicle, noting any pre-existing scratches, dents, or blemishes on the BOL, accompanied by photographic documentation.</li>
                <li><strong>Delivery Walkthrough:</strong> At delivery, the customer must carefully inspect the vehicle prior to signing the delivery BOL. Any alleged transit damage must be explicitly notated on the delivery BOL in the presence of the driver.</li>
                <li><strong>Representative Authorization:</strong> If the customer is unable to be physically present at pickup or delivery, you may authorize a third party (relative, neighbor, or dealership agent) to sign on your behalf.</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>5. Personal Belongings in Vehicle</h2>
              <p>
                Per Federal DOT guidelines, auto transport carriers are authorized specifically for motor vehicles. Customers are permitted to store up to <strong>100 lbs</strong> of personal luggage in the trunk below the window line.
              </p>
              <p>
                <strong>Important Notice:</strong> Personal belongings, electronics, luggage, and household goods inside the vehicle are <strong>NOT covered</strong> under the carrier’s cargo insurance policy. {COMPANY_INFO.name} and the carrier assume zero liability for loss or damage to personal items left in the car.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>6. Carrier Cargo Insurance & Liability</h2>
              <p>
                All Carriers dispatched by {COMPANY_INFO.name} maintain active primary cargo insurance policies with coverage up to <strong>$1,000,000</strong>. The Carrier is solely liable for any physical damage caused to the vehicle resulting from carrier negligence or transport equipment failure during transit.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>7. Contact Information</h2>
              <p>
                If you have questions regarding these Terms & Conditions, contact our compliance team:
              </p>
              <p>
                <strong>{COMPANY_INFO.legalName}</strong><br />
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
