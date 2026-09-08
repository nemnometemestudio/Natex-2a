import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const { navigate } = useRouter();

  return (
    <nav aria-label="Breadcrumb" className={`text-xs text-slate-400 py-3 ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
        <li className="flex items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-slate-400"
            title="Página Inicial"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Início</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              {item.path && !isLast ? (
                <button
                  onClick={() => navigate(item.path!)}
                  className="hover:text-white transition-colors cursor-pointer text-slate-400 truncate max-w-[200px]"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-[#00B4D8] font-medium truncate max-w-[240px]" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
