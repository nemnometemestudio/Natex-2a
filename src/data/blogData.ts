import { BlogPost, BlogCategory } from '../types';
import { PRIVATE_LABEL_POSTS } from './blog/privateLabelPosts';
import { UNIFORMES_POSTS } from './blog/uniformesPosts';
import { TECIDOS_POSTS } from './blog/tecidosPosts';
import { ESTAMPARIA_POSTS } from './blog/estampariaPosts';
import { PROCESSO_POSTS } from './blog/processoPosts';
import { GEO_REGIONAL_POSTS } from './blog/geoRegionalPosts';
import { PROMOCIONAL_OUTLET_POSTS } from './blog/promocionalOutletPosts';

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    name: 'Todos os Artigos',
    slug: 'todos',
    description: 'Explore todos os artigos técnicos, novidades da indústria têxtil e guias práticos da Natex.'
  },
  {
    name: 'Private Label & Marcas',
    slug: 'private-label',
    description: 'Guia de confecção em escala, desenvolvimento de coleções, modelagens e terceirização têxtil para lojistas.'
  },
  {
    name: 'Uniformes Profissionais',
    slug: 'uniformes-profissionais',
    description: 'Soluções para o setor corporativo, industrial, saúde, frigoríficos, hotelaria e instituições de ensino.'
  },
  {
    name: 'Tecidos & Malharia',
    slug: 'tecidos-malharia',
    description: 'Comparações técnicas entre fios de algodão, gramaturas, composições e resistência a lavagens.'
  },
  {
    name: 'Estamparia & Bordado',
    slug: 'estamparia-bordado',
    description: 'Tecnologia de personalização: bordado computadorizado, DTF têxtil, Silk Screen e Sublimação Digital.'
  },
  {
    name: 'Processo & Qualidade',
    slug: 'processo-qualidade',
    description: 'Engenharia de produto têxtil, corte computadorizado, fichas técnicas homologadas e controle de qualidade.'
  },
  {
    name: 'Outlet & Loja de Fábrica',
    slug: 'outlet-loja-fabrica',
    description: 'Novidades da loja de fábrica em Navegantes - SC, reposições de araras e dicas de compra direto do fabricante.'
  },
  {
    name: 'Material Promocional & Visual',
    slug: 'material-promocional-visual',
    description: 'Banners, wind banners personalizados, faixas e material de comunicação visual para empresas e eventos.'
  }
];

// Aggregating exactly 50 technical, SEO, GEO, and IEO optimized blog posts with high-quality textile & garment imagery
export const INITIAL_BLOG_POSTS: BlogPost[] = [
  ...UNIFORMES_POSTS,
  ...PRIVATE_LABEL_POSTS,
  ...TECIDOS_POSTS,
  ...ESTAMPARIA_POSTS,
  ...PROCESSO_POSTS,
  ...GEO_REGIONAL_POSTS,
  ...PROMOCIONAL_OUTLET_POSTS
];
