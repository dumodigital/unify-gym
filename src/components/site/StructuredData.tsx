import Script from 'next/script';

interface StructuredDataProps {
  type?: 'organization' | 'service' | 'review' | 'product';
  data?: any;
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://unifygym.com/#organization",
    "name": "Unify Fitness",
    "alternateName": "Unify Gym",
    "description": "Premium boutique fitness center in Glencoe, Illinois offering personal training, boxing, pilates, and chiropractic services.",
    "url": "https://unifygym.com",
    "logo": "https://unifygym.com/content/home/brand.svg",
    "image": [
      "https://unifygym.com/content/home/optimized/Unify-Fitness.webp",
      "https://unifygym.com/content/home/optimized/facility.webp",
      "https://unifygym.com/content/home/optimized/team.webp"
    ],
    "telephone": "+12245229040",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "662 Vernon Avenue",
      "addressLocality": "Glencoe",
      "addressRegion": "IL",
      "postalCode": "60022",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 42.1356,
      "longitude": -87.7606
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "05:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "07:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "areaServed": [
      {
        "@type": "City",
        "name": "Glencoe",
        "addressRegion": "IL"
      },
      {
        "@type": "City", 
        "name": "Winnetka",
        "addressRegion": "IL"
      },
      {
        "@type": "City",
        "name": "Highland Park", 
        "addressRegion": "IL"
      },
      {
        "@type": "City",
        "name": "Northbrook",
        "addressRegion": "IL"
      }
    ],
    "serviceType": "Fitness Center",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fitness Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personal Training",
            "description": "One-on-one fitness coaching with certified personal trainers"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Boxing Training",
            "description": "Elite boxing classes and training programs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Pilates Classes",
            "description": "Expert-led Pilates classes for strength and flexibility"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Chiropractic Care",
            "description": "Professional chiropractic services through Lakefront Chiropractic partnership"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.google.com/maps/place/Unify+Fitness",
      "https://www.facebook.com/UnifyFitness",
      "https://www.instagram.com/unifyfitness"
    ]
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://unifygym.com/#website",
    "url": "https://unifygym.com",
    "name": "Unify Fitness",
    "description": "Premium boutique fitness center in Glencoe, Illinois",
    "publisher": {
      "@id": "https://unifygym.com/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://unifygym.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ]
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://unifygym.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Services",
        "item": "https://unifygym.com/services"
      }
    ]
  };

  let structuredData;
  
  if (data) {
    structuredData = data;
  } else {
    switch (type) {
      case 'organization':
        structuredData = [organizationData, websiteData];
        break;
      case 'service':
        structuredData = organizationData;
        break;
      default:
        structuredData = organizationData;
    }
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
