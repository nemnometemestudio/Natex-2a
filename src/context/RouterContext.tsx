import React, { createContext, useContext, useEffect, useState } from 'react';
import { trackEvent } from '../utils/analytics';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string, options?: { scrollToTop?: boolean; replace?: boolean }) => void;
  isQuoteModalOpen: boolean;
  openQuoteModal: (context?: { productType?: string; source?: string; quantity?: number; selectedSolution?: string; initialMessage?: string }) => void;
  closeQuoteModal: () => void;
  quoteModalContext: { productType?: string; source?: string; quantity?: number; selectedSolution?: string; initialMessage?: string };
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname || '/';
      return pathname === '' ? '/' : pathname;
    }
    return '/';
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteModalContext, setQuoteModalContext] = useState<{ productType?: string; source?: string; quantity?: number; selectedSolution?: string; initialMessage?: string }>({});

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string, options?: { scrollToTop?: boolean; replace?: boolean }) => {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    
    if (options?.replace) {
      window.history.replaceState({}, '', normalized);
    } else {
      window.history.pushState({}, '', normalized);
    }
    
    setCurrentPath(normalized);

    if (options?.scrollToTop !== false) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openQuoteModal = (context?: { productType?: string; source?: string }) => {
    setQuoteModalContext(context || {});
    setIsQuoteModalOpen(true);
    trackEvent('quote_modal_open', { source: context?.source || 'direct', product: context?.productType });
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setQuoteModalContext({});
  };

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigate,
        isQuoteModalOpen,
        openQuoteModal,
        closeQuoteModal,
        quoteModalContext,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
