/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloating } from './components/common/WhatsAppFloating';
import { QuoteFormModal } from './components/common/QuoteFormModal';

// Pages
import { HomePage } from './pages/HomePage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { CatalogPage } from './pages/CatalogPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ProcessPage } from './pages/ProcessPage';
import { DifferentialsPage } from './pages/DifferentialsPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { GeoLandingPage } from './pages/GeoLandingPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './pages/TermsOfUsePage';
import { OutletPage } from './pages/OutletPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { VideoUploadPage } from './pages/VideoUploadPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Import geo pages list for dynamic matching
import { GEO_PAGES } from './data/geoPagesData';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();

  // Route matching logic
  const renderCurrentPage = () => {
    const path = currentPath.toLowerCase().replace(/\/$/, '') || '/';

    if (path === '/') {
      return <HomePage />;
    }

    // Solutions / Category pages
    if (path === '/uniformes' || path === '/uniformes-profissionais') {
      return <SolutionDetailPage categorySlug="uniformes-profissionais" />;
    }
    if (path === '/uniformes-industriais') {
      return <SolutionDetailPage categorySlug="uniformes-industriais" />;
    }
    if (path === '/uniformes-frigorifico') {
      return <SolutionDetailPage categorySlug="uniformes-frigorifico" />;
    }
    if (path === '/uniformes-corporativos') {
      return <SolutionDetailPage categorySlug="uniformes-corporativos" />;
    }
    if (path === '/uniformes-escolares') {
      return <SolutionDetailPage categorySlug="uniformes-escolares" />;
    }
    if (path === '/private-label' || path === '/confeccao-para-marcas') {
      return <SolutionDetailPage categorySlug="private-label" />;
    }
    if (path === '/camisetas-eventos' || path === '/merchandising-textil' || path === '/camisetas-e-eventos' || path === '/merchandising' || path === '/camisetas-eventos-e-merchandising') {
      return <SolutionDetailPage categorySlug="camisetas-eventos" />;
    }
    if (path === '/wind-banners') {
      return <SolutionDetailPage categorySlug="wind-banners" />;
    }
    if (path === '/bandeiras') {
      return <SolutionDetailPage categorySlug="bandeiras" />;
    }

    // Institutional pages
    if (path === '/catalogo') {
      return <CatalogPage />;
    }
    if (path === '/portfolio' || path === '/galeria') {
      return <PortfolioPage />;
    }
    if (path === '/sobre' || path === '/a-natex') {
      return <AboutPage />;
    }
    if (path === '/processo' || path === '/como-funciona') {
      return <ProcessPage />;
    }
    if (path === '/diferenciais') {
      return <DifferentialsPage />;
    }
    if (path === '/orcamento' || path === '/cotacao') {
      return <QuotePage />;
    }
    if (path === '/contato' || path === '/fale-conosco') {
      return <ContactPage />;
    }
    if (path === '/faq' || path === '/duvidas') {
      return <FaqPage />;
    }
    if (path === '/politica-de-privacidade') {
      return <PrivacyPolicyPage />;
    }
    if (path === '/termos-de-uso') {
      return <TermsOfUsePage />;
    }
    if (path === '/outlet' || path === '/loja-de-fabrica' || path === '/outlet-natex' || path === '/loja-outlet' || path === '/loja') {
      return <OutletPage />;
    }
    if (path === '/blog' || path === '/artigos' || path === '/noticias') {
      return <BlogPage />;
    }
    if (path === '/upload-video' || path === '/admin/video' || path === '/video-hero') {
      return <VideoUploadPage />;
    }
    if (path.startsWith('/blog/')) {
      const blogSlug = path.replace('/blog/', '').trim();
      return <BlogPostPage slug={blogSlug} />;
    }

    // Geo SEO Pages match
    const cleanSlug = path.replace(/^\//, '');
    const matchedGeo = GEO_PAGES.find(g => g.slug === cleanSlug);
    if (matchedGeo) {
      return <GeoLandingPage slug={cleanSlug} />;
    }

    // 404 Fallback
    return <NotFoundPage />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#FF6B00] selection:text-white">
      <Header />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />
      <WhatsAppFloating />
      <QuoteFormModal />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
