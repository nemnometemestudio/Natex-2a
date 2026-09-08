import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../../data/companyData';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  schemaData?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  schemaData,
}) => {
  const fullTitle = title 
    ? `${title} | ${COMPANY_INFO.name}`
    : `${COMPANY_INFO.name} | Indústria Têxtil B2B, Uniformes & Private Label em Escala`;

  const metaDescription = description || COMPANY_INFO.heroSubheadline;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://natexconfeccoes.com.br';
  const canonical = canonicalUrl || currentUrl;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Update Meta Description & General SEO
    setMeta('name', 'description', metaDescription);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMeta('name', 'author', 'Natex Confecções Indústria Têxtil');

    // Geo Meta Tags for Santa Catarina and Brazil
    setMeta('name', 'geo.region', 'BR-SC');
    setMeta('name', 'geo.placename', 'Navegantes, Santa Catarina, Brasil');
    setMeta('name', 'geo.position', '-26.8986;-48.6548');
    setMeta('name', 'ICBM', '-26.8986, -48.6548');

    // Update Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Open Graph
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', metaDescription);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:site_name', COMPANY_INFO.name);
    setMeta('property', 'og:locale', 'pt_BR');

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', metaDescription);
    setMeta('name', 'twitter:image', ogImage);

    // Rich Organization, LocalBusiness & Manufacturer Schema (JSON-LD)
    const baseOrganizationSchema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'Manufacturer'],
      '@id': 'https://natexconfeccoes.com.br/#organization',
      'name': COMPANY_INFO.name,
      'legalName': 'Natex Confecções e Indústria Têxtil Ltda',
      'image': ogImage,
      'telephone': `+${COMPANY_INFO.phoneRaw}`,
      'email': COMPANY_INFO.email,
      'url': 'https://natexconfeccoes.com.br',
      'priceRange': '$$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': COMPANY_INFO.address.street,
        'addressLocality': COMPANY_INFO.address.city,
        'addressRegion': COMPANY_INFO.address.state,
        'postalCode': COMPANY_INFO.address.cep,
        'addressCountry': 'BR'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': -26.8986,
        'longitude': -48.6548
      },
      'areaServed': [
        { '@type': 'Country', 'name': 'Brasil' },
        { '@type': 'State', 'name': 'Santa Catarina' },
        { '@type': 'State', 'name': 'São Paulo' },
        { '@type': 'State', 'name': 'Paraná' },
        { '@type': 'State', 'name': 'Rio Grande do Sul' },
        { '@type': 'State', 'name': 'Minas Gerais' },
        { '@type': 'State', 'name': 'Rio de Janeiro' }
      ],
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        'opens': '07:30',
        'closes': '17:30'
      },
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Linhas de Confecção Têxtil B2B',
        'itemListElement': [
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Uniformes Profissionais e Corporativos' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Uniformes Industriais e Operacionais' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Confecção Private Label para Marcas' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Uniformes para Frigoríficos e Câmaras Frias' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Uniformes Escolares' } },
          { '@type': 'Offer', 'itemOffered': { '@type': 'Service', 'name': 'Camisetas Promocionais e Merchandising' } }
        ]
      },
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': `+${COMPANY_INFO.phoneRaw}`,
          'contactType': 'sales',
          'areaServed': 'BR',
          'availableLanguage': 'Portuguese'
        },
        {
          '@type': 'ContactPoint',
          'email': COMPANY_INFO.commercialEmail,
          'contactType': 'customer support',
          'areaServed': 'BR',
          'availableLanguage': 'Portuguese'
        }
      ],
      'description': COMPANY_INFO.heroSubheadline
    };

    const combinedSchemas = schemaData 
      ? Array.isArray(schemaData) 
        ? [baseOrganizationSchema, ...schemaData]
        : [baseOrganizationSchema, schemaData]
      : [baseOrganizationSchema];

    // Inject JSON-LD
    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(combinedSchemas);
  }, [fullTitle, metaDescription, canonical, ogImage, ogType, schemaData]);

  return null;
};
