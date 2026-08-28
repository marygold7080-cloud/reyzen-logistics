export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  domain: string;
  websiteUrl: string;
  phone: {
    display: string;
    raw: string;
    dispatchDisplay: string;
    dispatchRaw: string;
  };
  email: {
    general: string;
    quotes: string;
    support: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    fullDisplay: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    dispatch: string;
  };
  stats: {
    insuranceCoverage: string;
    vehiclesShipped: string;
    carrierNetwork: string;
    satisfactionRate: string;
    rating: string;
    reviewsCount: string;
  };
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
}

export const COMPANY_INFO: CompanyConfig = {
  name: "Reyzen Logistics",
  legalName: "Reyzen Logistics LLC",
  tagline: "Nationwide Vehicle Transport & Premier Auto Logistics",
  domain: "reyzenlogistics.com",
  websiteUrl: "https://reyzenlogistics.com",
  phone: {
    display: "(818) 278-1789",
    raw: "+18182781789",
    dispatchDisplay: "(818) 278-1789",
    dispatchRaw: "+18182781789",
  },
  email: {
    general: "info@reyzenlogistics.com",
    quotes: "info@reyzenlogistics.com",
    support: "info@reyzenlogistics.com",
  },
  address: {
    street: "100 Logistics Blvd, Suite 300",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    country: "USA",
    fullDisplay: "100 Logistics Blvd, Suite 300, Dallas, TX 75201, USA",
  },
  hours: {
    weekdays: "Monday - Friday: 7:00 AM – 9:00 PM EST",
    saturday: "Saturday: 8:00 AM – 6:00 PM EST",
    sunday: "Sunday: 9:00 AM – 5:00 PM EST",
    dispatch: "24/7 Live Carrier Dispatch & Emergency Support",
  },
  stats: {
    insuranceCoverage: "$1,000,000",
    vehiclesShipped: "75,000+",
    carrierNetwork: "14,500+",
    satisfactionRate: "99.4%",
    rating: "4.9 / 5.0",
    reviewsCount: "2,840+",
  },
  socialLinks: {
    facebook: "https://facebook.com",
    twitter: "https://x.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
  },
};

export interface RouteLink {
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export const NAV_LINKS = [
  {
    label: "Why Reyzen Logistics",
    children: [
      {
        label: "About Reyzen Logistics",
        href: "/about-us",
        description: "Our mission, nationwide fleet network, and commitment to safe auto transport.",
      },
      {
        label: "Why Choose Reyzen",
        href: "/why-choose-us",
        description: "Zero upfront fees, $1M cargo insurance, and dedicated vehicle transport experts.",
      },
    ],
  },
  {
    label: "Our Services",
    children: [
      {
        label: "Door-to-Door Auto Transport",
        href: "/door-to-door-auto-transport",
        description: "Direct residential pickup and delivery straight to your doorstep.",
      },
      {
        label: "Open Auto Transport",
        href: "/open-auto-transport",
        description: "The most cost-effective, reliable standard nationwide car carrier service.",
      },
      {
        label: "Enclosed Auto Transport",
        href: "/enclosed-auto-transport",
        description: "Maximum protection and climate shielding for luxury, vintage & exotic cars.",
      },
      {
        label: "Motorcycle Shipping",
        href: "/motorcycle-shipping",
        description: "Specialized strapping, pallets, and secure transit for bikes, trikes & ATVs.",
      },
    ],
  },
  {
    label: "How It Works",
    children: [
      {
        label: "Car Shipping Cost / Calculator",
        href: "/car-shipping-cost",
        description: "Understand transport pricing, mileage tiers, and calculate your instant rate.",
      },
      {
        label: "Personal Items in Car",
        href: "/personal-items-in-car-shipping",
        description: "Rules, safety guidelines, and 100 lb luggage allowances in vehicle transit.",
      },
      {
        label: "Ship Car Across Country",
        href: "/ship-car-across-country",
        description: "Coast-to-coast auto shipping schedules, cross-country routes & timelines.",
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export const POPULAR_ROUTES = [
  { from: "Los Angeles, CA", to: "New York, NY", miles: 2790, estDays: "7-9 Days", openAvg: "$1,150", enclosedAvg: "$1,750" },
  { from: "Miami, FL", to: "New York, NY", miles: 1280, estDays: "3-5 Days", openAvg: "$750", enclosedAvg: "$1,150" },
  { from: "Chicago, IL", to: "Houston, TX", miles: 1080, estDays: "3-4 Days", openAvg: "$690", enclosedAvg: "$1,050" },
  { from: "Seattle, WA", to: "San Diego, CA", miles: 1250, estDays: "3-5 Days", openAvg: "$780", enclosedAvg: "$1,190" },
  { from: "Dallas, TX", to: "Atlanta, GA", miles: 780, estDays: "2-3 Days", openAvg: "$550", enclosedAvg: "$890" },
  { from: "San Francisco, CA", to: "Denver, CO", miles: 1250, estDays: "3-4 Days", openAvg: "$720", enclosedAvg: "$1,100" },
];

export const COMMON_FAQS = [
  {
    id: "how-long-to-ship",
    category: "General",
    question: "How long does it take to ship a car from one place to another?",
    answer:
      "Transit time depends on the total distance between the origin and destination. Typically, vehicle pickup is scheduled within 1 to 3 business days of booking. Once loaded on the carrier, cross-country transit takes approximately 6 to 9 days, while regional routes (500-1,000 miles) take 2 to 4 days, and short distances under 500 miles take 1 to 2 days.",
  },
  {
    id: "personal-items",
    category: "Preparation",
    question: "Can I ship personal items in the car while transiting?",
    answer:
      "Yes, you may place up to 100 pounds of personal belongings or luggage in the trunk or below the window line in the back seat. All items must be securely packed. Please note that per Department of Transportation (DOT) regulations, carriers are licensed to transport vehicles, so household goods inside the vehicle are not covered by carrier transit insurance.",
  },
  {
    id: "vehicle-insurance",
    category: "Insurance & Safety",
    question: "Is my vehicle insured during transport?",
    answer:
      "Yes! Every carrier in the Reyzen Logistics network is thoroughly vetted and carries comprehensive cargo liability insurance with coverage up to $1,000,000. Your vehicle is fully protected from the moment it is loaded and inspected onto the carrier until it is safely unloaded and signed off on the Bill of Lading (BOL).",
  },
  {
    id: "presence-required",
    category: "Pickup & Delivery",
    question: "Do I need to be present at the time of vehicle pickup or delivery?",
    answer:
      "Your physical presence is not strictly required. You can designate any authorized representative (family member, friend, neighbor, or dealership agent) who is 18 years or older to inspect the vehicle with the carrier driver and sign the Bill of Lading (BOL). For auction or dealership pickups (e.g. Copart, Manheim, IAAI), you simply provide the release documents and gate pass.",
  },
  {
    id: "cost-calculator",
    category: "Pricing",
    question: "How can I use the Car Shipping Cost Calculator?",
    answer:
      "Our instant online quote calculator factors in the exact origin and destination ZIP codes, vehicle make/model/year, operational condition (operable vs. inoperable), carrier type (open vs. enclosed), and requested shipping timeframe to give you a transparent, guaranteed rate without hidden surcharges.",
  },
  {
    id: "tracking",
    category: "Tracking",
    question: "Can I track the vehicle I am shipping with Reyzen Logistics?",
    answer:
      "Yes. Reyzen Logistics provides 24/7 shipment tracking and regular dispatch status updates. You will receive a unique booking number and direct contact with your dedicated logistics coordinator, who can provide live location updates and coordinate driver ETA directly with you.",
  },
  {
    id: "vehicle-types",
    category: "Services",
    question: "What types of vehicles do you ship?",
    answer:
      "We ship all vehicle types across the United States, including compact cars, sedans, SUVs, luxury exotics, classic/vintage automobiles, heavy-duty pickup trucks, electric vehicles (EVs), vans, motorcycles, ATVs, custom modified vehicles, and operable or inoperable auction purchases.",
  },
  {
    id: "gas-level",
    category: "Preparation",
    question: "What amount of gas should be left in the tank during transit?",
    answer:
      "We recommend keeping between 1/8 to 1/4 tank of fuel in the vehicle. This provides enough gas for the driver to load and unload the vehicle onto the transport truck while minimizing unnecessary weight and adhering to federal fire and safety standards.",
  },
  {
    id: "refund-cancellation",
    category: "Policies",
    question: "Do you offer a refund if I cancel my reservation?",
    answer:
      "Reyzen Logistics operates with transparent, customer-first terms. You can cancel at any time prior to carrier assignment without penalty. If a carrier has already been officially scheduled and dispatched to your pickup location, a standard $100 administrative dispatch fee applies. If for any reason we are unable to assign a driver on your requested route, 100% of your deposit is refunded immediately.",
  },
  {
    id: "door-to-door-worth",
    category: "Services",
    question: "Is door-to-door auto transport worth it?",
    answer:
      "Absolutely. Door-to-door transport is the most convenient and stress-free way to ship a vehicle. The carrier picks up the car directly from your residence or office and delivers it straight to the new address, eliminating the hassle, storage fees, and travel associated with terminal drop-off yards.",
  },
  {
    id: "hidden-fees",
    category: "Pricing",
    question: "Are there any hidden charges in your auto shipping rates?",
    answer:
      "No. All Reyzen Logistics quotes are 100% all-inclusive. Your quote covers taxes, tolls, carrier fuel surcharges, full cargo insurance up to $1,000,000, and door-to-door service with zero hidden fees.",
  },
  {
    id: "inoperable-vehicle",
    category: "Services",
    question: "Can I transport an inoperable vehicle?",
    answer:
      "Yes, we regularly transport inoperable cars, project vehicles, and salvage purchases. As long as the vehicle rolls, steers, and brakes, our drivers can load it onto the carrier using specialized winches and ramps. Please specify that the car is inoperable during your quote so we dispatch a winch-equipped trailer.",
  },
  {
    id: "open-vs-enclosed",
    category: "Services",
    question: "Which is better: Open Carrier or Enclosed Auto Transport?",
    answer:
      "Open carrier transport is the industry standard and the most budget-friendly option, chosen for over 90% of all vehicle shipments. Enclosed transport provides a fully sealed, weather-tight trailer with hydraulic liftgates, which we highly recommend for high-value exotics, classic cars, high-end luxury vehicles, or vehicles with low ground clearance.",
  },
];
