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
  // 1. Organization & Local Business Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": "https://devopsmumbai.com/#organization",
    "name": "DevOps Institute Mumbai (DIM)",
    "alternateName": "DevOps Institute - AWS, Azure & GCP Course",
    "url": "https://devopsmumbai.com/",
    "logo": "https://devopsmumbai.com/logo-blue-cropped.png",
    "image": "https://devopsmumbai.com/campus/campus-classroom.webp",
    "description": "DevOps and cloud training institute in Mumbai with candidate profiles for support, infrastructure and engineering roles.",
    "telephone": portalInfo.phone,
    "email": portalInfo.email,
    "priceRange": "₹0 (Free Placement Drives for Employers)",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": portalInfo.address,
      "addressLocality": "Thane West",
      "addressRegion": "Maharashtra",
      "postalCode": "400604",
      "addressCountry": "IN"
    },
    "sameAs": [
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

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": pageTitle,
    "description": pageDescription,
    "inLanguage": "en-IN",
    "about": roleName,
    "isPartOf": {
      "@id": "https://devopsmumbai.com/#website"
    },
    "publisher": {
      "@id": "https://devopsmumbai.com/#organization"
    }
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
    "@id": `${canonicalUrl}#service`,
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
      "description": "No placement fee for employers."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
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
