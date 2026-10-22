import React from 'react';
import { portalInfo } from '@/data/portalData';

interface SeoProps {
  pageTitle: string;
  pageDescription: string;
  canonicalUrl: string;
  roleName?: string;
  faqs?: Array<{ question: string; answer: string }>;
  breadcrumbs?: Array<{ name: string; item: string }>;
}

export default function SeoStructuredData({
  pageTitle,
  pageDescription,
  canonicalUrl,
  roleName = "DevOps & Cloud Talent",
  faqs = [],
  breadcrumbs = [
    { name: "Home", item: "https://devopsmumbai.com/" },
    { name: "Hire From Us", item: "https://devopsmumbai.com/hire-from-us" }
  ]
}: SeoProps) {
  // 1. Organization & Local Business Schema (with Google Review 4.7★ from 130 reviews)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": "https://devopsmumbai.com/#organization",
    "name": "DevOps Institute Mumbai (DIM)",
    "alternateName": "DevOps Institute - AWS, Azure & GCP Course",
    "url": "https://devopsmumbai.com/",
    "logo": "https://devopsmumbai.com/logo-blue-cropped.png",
    "image": "https://devopsmumbai.com/campus/campus-classroom.webp",
    "description": "Mumbai's leading practical cloud & DevOps institute. Training and hiring portal for pre-screened L1/L2 Support, DevOps, and Cloud engineers.",
    "telephone": portalInfo.phone,
    "email": portalInfo.email,
    "priceRange": "₹0 (Free Placement Drives for Employers)",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Lodha Supremus, B 1307, Saki Vihar Rd, Tunga Village, Chandivali",
        "addressLocality": "Powai, Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400072",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor, Awfis, Kalpataru Prime, Neheru Nagar, Wagle Industrial Estate",
        "addressLocality": "Thane West, Thane",
        "addressRegion": "Maharashtra",
        "postalCode": "400604",
        "addressCountry": "IN"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.1176,
      "longitude": 72.8943
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "130",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.google.com/maps",
      "https://www.instagram.com/devopsinstituteinmumbai/"
    ]
  };

  // 2. BreadcrumbList Schema for Google SERP breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.item
    }))
  };

  // 3. FAQPage Schema for Expandable Rich Results in Google
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // 4. Service Schema for Employer Recruitment
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Hire ${roleName} - DevOps Institute Mumbai`,
    "serviceType": "Technical Recruitment & Placement Drives",
    "provider": {
      "@id": "https://devopsmumbai.com/#organization"
    },
    "areaServed": [
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Thane" },
      { "@type": "City", "name": "Navi Mumbai" },
      { "@type": "Country", "name": "India" }
    ],
    "description": pageDescription,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "description": "Zero placement fees for employers. Fast turnaround in 24 to 48 hours."
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
