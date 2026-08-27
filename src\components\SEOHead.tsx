import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../config/company';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  schema?: Record<string, any>;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = "Reyzen Logistics is a premier auto transport broker offering dependable, nationwide door-to-door vehicle shipping, open and enclosed carriers, and motorcycle transport with $1,000,000 cargo insurance and 0 upfront deposit.",
  canonicalPath = "",
  schema,
}) => {
  const fullTitle = title
    ? `${title} | ${COMPANY_INFO.name}`
    : `${COMPANY_INFO.name} | Nationwide Vehicle Transport & Premier Auto Logistics`;

  const canonicalUrl = `${COMPANY_INFO.websiteUrl}${canonicalPath}`;

  useEffect(() => {
    document.title = fullTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    // Schema JSON-LD injection
    const defaultSchema = {
      "@context": "https://schema.org",
      "@type": "AutoTransport",
      "name": COMPANY_INFO.name,
      "url": COMPANY_INFO.websiteUrl,
      "logo": `${COMPANY_INFO.websiteUrl}/logo.png`,
      "description": description,
      "telephone": COMPANY_INFO.phone.raw,
      "email": COMPANY_INFO.email.general,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": COMPANY_INFO.address.street,
        "addressLocality": COMPANY_INFO.address.city,
        "addressRegion": COMPANY_INFO.address.state,
        "postalCode": COMPANY_INFO.address.zip,
        "addressCountry": "US"
      },
      "priceRange": "$$",
      "areaServed": "US"
    };

    const activeSchema = schema || defaultSchema;
    let schemaScript = document.getElementById('seo-json-ld') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'seo-json-ld';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(activeSchema);
  }, [fullTitle, description, canonicalUrl, schema]);

  return null;
};
