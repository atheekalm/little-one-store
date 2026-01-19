import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
  url?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image, type = 'website', url, keywords }) => {
  const siteTitle = 'Little One Store';
  const fullTitle = `${title} | ${siteTitle}`;
  const defaultImage = 'https://picsum.photos/1200/630'; // Replace with your actual logo/banner URL
  const currentUrl = url || window.location.href;

  const defaultKeywords = "baby clothes, kids wear, sri lanka baby shop, online shopping, cotton baby clothes";
  const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Schema.org for Organization (Global) */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OnlineStore",
          "name": "Little One Store",
          "url": SITE_URL,
          "logo": `${SITE_URL}/logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+94771669699",
            "contactType": "customer service",
            "areaServed": "LK"
          },
          "sameAs": [
            "https://www.facebook.com/littleoneclothesLanka/",
            "https://www.instagram.com/littleonestore.lk/"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;