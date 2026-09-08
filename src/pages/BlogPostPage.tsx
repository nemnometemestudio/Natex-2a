import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Check, 
  Copy, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Tag, 
  ChevronRight,
  ExternalLink,
  Layers,
  HelpCircle,
  MapPin
} from 'lucide-react';
import { useRouter } from '../context/RouterContext';
import { BlogPost } from '../types';
import { GooglePostsService } from '../services/googlePostsService';
import { trackEvent, createWhatsAppLink } from '../utils/analytics';
import { COMPANY_INFO } from '../data/companyData';
import { getOptimizedImageUrl } from '../utils/imageOptimizer';
import { getCategoryFallbackImage } from '../data/blogImageAssets';

interface BlogPostPageProps {
  slug: string;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  const { navigate, openQuoteModal } = useRouter();
  
  // Instant lookup
  const initialFound = GooglePostsService.getInitialPosts().find(p => p.slug === slug) || null;
  const initialRelated = initialFound 
    ? GooglePostsService.getInitialPosts().filter(p => p.slug !== slug && (p.categorySlug === initialFound.categorySlug || true)).slice(0, 3)
    : [];

  const [post, setPost] = useState<BlogPost | null>(initialFound);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>(initialRelated);
  const [copiedUrl, setCopiedUrl] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const found = GooglePostsService.getInitialPosts().find(p => p.slug === slug) || null;
    setPost(found);
    if (found) {
      const others = GooglePostsService.getInitialPosts().filter(p => p.slug !== slug).slice(0, 3);
      setRelatedPosts(others);
    }
  }, [slug]);

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      trackEvent('blog_share_copy', { slug: post?.slug });
      setTimeout(() => setCopiedUrl(false), 3000);
    }
  };

  const handleShareWhatsApp = () => {
    if (!post) return;
    const url = typeof window !== 'undefined' ? window.location.href : `https://natexconfeccoes.com.br/blog/${post.slug}`;
    const text = `Confira este artigo da Natex Confecções: *${post.title}*\n${url}`;
    const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    trackEvent('blog_share_whatsapp', { slug: post.slug });
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center space-y-4 bg-slate-50">
        <h1 className="text-2xl font-black text-slate-900">Artigo não encontrado</h1>
        <p className="text-sm text-slate-600 max-w-md">
          O artigo que você está procurando pode ter sido atualizado ou o link está incorreto.
        </p>
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#6200EA] text-white font-bold text-xs rounded-[6px] shadow-md cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Blog</span>
        </button>
      </div>
    );
  }

  // JSON-LD Schema for Article / SEO / GEO / AEO
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    'headline': post.title,
    'description': post.seo.metaDescription || post.excerpt,
    'image': [post.coverImage],
    'datePublished': post.publishedAt,
    'dateModified': post.publishedAt,
    'author': {
      '@type': 'Organization',
      'name': COMPANY_INFO.name,
      'url': 'https://natexconfeccoes.com.br'
    },
    'publisher': {
      '@type': 'Organization',
      'name': COMPANY_INFO.name,
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://natexconfeccoes.com.br/logo.png'
      }
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://natexconfeccoes.com.br/blog/${post.slug}`
    },
    'keywords': post.seo.keywords.join(', ')
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Inject Article JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* 1. BREADCRUMBS & TOP NAV */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 overflow-x-auto no-scrollbar py-0.5">
            <button onClick={() => navigate('/')} className="hover:text-slate-900 cursor-pointer shrink-0">
              Início
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <button onClick={() => navigate('/blog')} className="hover:text-slate-900 cursor-pointer shrink-0 font-medium">
              Blog
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-bold truncate max-w-[200px] sm:max-w-xs">
              {post.title}
            </span>
          </nav>

          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6200EA] hover:underline cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Todos os Artigos</span>
          </button>
        </div>
      </div>

      {/* 2. ARTICLE HEADER */}
      <header className="bg-white pt-10 pb-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          
          {/* Metadata badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-[4px] bg-purple-50 text-[#6200EA] text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 pl-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTimeMinutes} min de leitura</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 pl-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.formattedDate}</span>
            </div>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Excerpt Lead */}
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Author & Share Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6200EA] text-white flex items-center justify-center font-black text-sm shadow-sm">
                NX
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">{post.author}</span>
                <span className="text-[11px] text-slate-500 block">Polo Têxtil • Navegantes - SC</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleShareWhatsApp}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200 transition-colors cursor-pointer"
                title="Compartilhar no WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors cursor-pointer"
                title="Copiar Link"
              >
                {copiedUrl ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copiar Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* 3. COVER IMAGE */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        <div className="rounded-[4px] overflow-hidden shadow-md border border-slate-200/80 bg-white">
          <img
            src={getOptimizedImageUrl(post.coverImage, 1000, 80)}
            alt={post.title}
            loading="eager"
            decoding="async"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = getCategoryFallbackImage(post.categorySlug);
            }}
            className="w-full h-72 sm:h-[440px] object-cover"
          />
          <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Foto oficial de produção e mostruário • Natex Confecções</span>
            <span className="font-semibold text-slate-700">Santa Catarina, Brasil</span>
          </div>
        </div>
      </div>

      {/* 4. MAIN ARTICLE CONTENT */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        
        {/* AEO / GEO QUICK ANSWER HIGHLIGHT BOX */}
        {post.seo?.aeoQuickAnswer && (
          <div className="mb-10 p-6 rounded-3xl bg-purple-50/80 border border-purple-200/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-black text-[#6200EA] uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#6200EA]" />
              <span>Resposta Rápida (Direto da Fábrica)</span>
            </div>
            <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
              {post.seo.aeoQuickAnswer}
            </p>
          </div>
        )}

        {/* KEY TAKEAWAYS BULLETS (Optimized for AI summary and busy readers) */}
        {post.seo?.keyTakeaways && post.seo.keyTakeaways.length > 0 && (
          <div className="mb-10 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Pontos-Chave Deste Artigo:</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              {post.seo.keyTakeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* SPECIAL GOOGLE BUSINESS PROFILE VERIFIED BADGE & CARD */}
        {post.isGooglePost && (
          <div className="mb-10 p-6 sm:p-7 rounded-3xl bg-blue-50/80 border-2 border-blue-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-blue-600 text-white">
                  <Sparkles className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-sm font-black text-blue-950 uppercase tracking-wider">
                    Publicação Oficial • Google Meu Negócio
                  </h3>
                  <p className="text-xs text-blue-700 font-medium">
                    Perfil Verificado da Natex Confecções em Navegantes – SC
                  </p>
                </div>
              </div>
              <a
                href={post.googlePostUrl || 'https://www.google.com/maps/place/Natex+Confec%C3%A7%C3%B5es/@-26.8370166,-48.6307307,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8cfb43bdb9bb5:0xdb94f21fac8f2cd1!8m2!3d-26.8370166!4d-48.6307307!16s%2Fg%2F11ntp_r7hw'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Abrir no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* MARKDOWN PARSED BODY CONTENT WITH EXPERT DIAGRAMMING */}
        <article className="w-full max-w-full overflow-hidden">
          <div className="markdown-body">
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children, ...props }: any) => (
                  <h1 {...props} className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mt-12 mb-6 text-balance">
                    {children}
                  </h1>
                ),
                h2: ({ children, ...props }: any) => (
                  <h2 {...props} className="text-xl sm:text-2xl lg:text-[28px] font-black text-slate-900 tracking-tight leading-snug mt-12 mb-5 pt-6 border-t border-slate-200 text-balance flex items-start gap-2.5">
                    <span className="w-2 h-7 bg-[#6200EA] rounded-full mt-0.5 shrink-0 hidden sm:inline-block" />
                    <span>{children}</span>
                  </h2>
                ),
                h3: ({ children, ...props }: any) => (
                  <h3 {...props} className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 tracking-tight leading-snug mt-9 mb-4 text-balance">
                    {children}
                  </h3>
                ),
                h4: ({ children, ...props }: any) => (
                  <h4 {...props} className="text-base sm:text-lg font-bold text-slate-800 tracking-tight mt-7 mb-3">
                    {children}
                  </h4>
                ),
                p: ({ children, ...props }: any) => (
                  <p {...props} className="text-slate-700 text-base sm:text-[17.5px] leading-[1.85] mb-6 font-normal tracking-normal break-words">
                    {children}
                  </p>
                ),
                ul: ({ children, ...props }: any) => (
                  <ul {...props} className="space-y-3.5 my-6 pl-1 list-none">
                    {children}
                  </ul>
                ),
                ol: ({ children, ...props }: any) => (
                  <ol {...props} className="space-y-3.5 my-6 pl-6 list-decimal marker:font-bold marker:text-[#6200EA] text-slate-700 text-base sm:text-[17.5px] leading-[1.85]">
                    {children}
                  </ol>
                ),
                li: ({ children, ...props }: any) => (
                  <li {...props} className="flex items-start gap-3 text-slate-700 text-base sm:text-[17.5px] leading-[1.85] break-words">
                    <span className="w-2 h-2 rounded-full bg-[#6200EA] mt-2.5 shrink-0" />
                    <span className="flex-1 min-w-0">{children}</span>
                  </li>
                ),
                blockquote: ({ children, ...props }: any) => (
                  <blockquote {...props} className="my-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-purple-50/90 to-slate-50/80 border-l-4 border-[#6200EA] text-slate-800 text-base sm:text-lg font-medium leading-relaxed shadow-xs break-words">
                    {children}
                  </blockquote>
                ),
                table: ({ children, ...props }: any) => (
                  <div className="my-8 w-full max-w-full overflow-x-auto rounded-2xl border border-slate-200/90 bg-white shadow-xs">
                    <table {...props} className="min-w-full divide-y divide-slate-200 text-left text-sm">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children, ...props }: any) => (
                  <thead {...props} className="bg-slate-100/90 text-slate-900 border-b border-slate-200">
                    {children}
                  </thead>
                ),
                th: ({ children, ...props }: any) => (
                  <th {...props} className="p-4 text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-200 whitespace-nowrap bg-slate-100">
                    {children}
                  </th>
                ),
                tbody: ({ children, ...props }: any) => (
                  <tbody {...props} className="divide-y divide-slate-100 bg-white">
                    {children}
                  </tbody>
                ),
                tr: ({ children, ...props }: any) => (
                  <tr {...props} className="hover:bg-slate-50/80 transition-colors">
                    {children}
                  </tr>
                ),
                td: ({ children, ...props }: any) => (
                  <td {...props} className="p-4 text-sm text-slate-700 align-top leading-relaxed whitespace-normal break-words">
                    {children}
                  </td>
                ),
                code: ({ inline, className, children, ...props }: any) => {
                  if (inline) {
                    return (
                      <code {...props} className="px-2 py-0.5 rounded-lg bg-slate-100 text-purple-900 font-mono text-xs sm:text-sm font-semibold border border-slate-200/80 break-all">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code {...props} className="block font-mono text-xs sm:text-sm leading-relaxed text-slate-100 whitespace-pre-wrap break-words">
                      {children}
                    </code>
                  );
                },
                pre: ({ children, ...props }: any) => (
                  <pre {...props} className="my-6 p-5 rounded-[4px] bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap break-words border border-slate-800 shadow-md">
                    {children}
                  </pre>
                ),
                hr: ({ ...props }: any) => (
                  <hr {...props} className="my-10 border-t border-slate-200" />
                ),
                a: ({ children, href, ...props }: any) => (
                  <a
                    {...props}
                    href={href}
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-[#6200EA] font-semibold underline underline-offset-4 decoration-[#6200EA]/30 hover:decoration-[#6200EA] hover:text-[#FF6B00] transition-colors break-words"
                  >
                    {children}
                  </a>
                ),
                strong: ({ children, ...props }: any) => (
                  <strong {...props} className="font-bold text-slate-900">
                    {children}
                  </strong>
                )
              }}
            >
              {post.content}
            </Markdown>
          </div>
        </article>

        {/* IMAGE GALLERY (if any) */}
        {post.galleryImages && post.galleryImages.length > 0 && (
          <div className="mt-12 space-y-4">
            <h3 className="text-base font-bold text-slate-900">Galeria de Fotos da Peça</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {post.galleryImages.map((img, i) => (
                <div key={i} className="rounded-[4px] overflow-hidden border border-slate-200 bg-white shadow-xs">
                  <img
                    src={img}
                    alt={`${post.title} detalhe ${i + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAGS FOOTER */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-slate-400 mr-1" />
          {post.tags.map((tag, idx) => (
            <span key={idx} className="px-3 py-1.5 rounded-[4px] bg-white border border-slate-200 text-xs font-medium text-slate-700">
              #{tag}
            </span>
          ))}
        </div>

        {/* IN-ARTICLE CONVERSION CARD */}
        <div className="mt-12 p-8 rounded-[4px] bg-slate-900 text-white shadow-xl space-y-6">
          <div className="max-w-2xl space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Precisa Produzir Roupas ou Uniformes com Este Padrão de Qualidade?
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Solicite uma análise técnica da sua demanda. Nossa engenharia têxtil apoia na escolha de tecidos, modelagem e entrega com pontualidade para todo o Brasil.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => {
                trackEvent('quote_modal_open', { origin: 'blog_post_inarticle_cta', slug: post.slug });
                openQuoteModal({ source: `blog_${post.slug}` });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF6B00] hover:bg-[#ff7b1a] text-white font-bold text-xs sm:text-sm rounded-[6px] shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Solicitar Orçamento Gratuito</span>
            </button>

            <a
              href={createWhatsAppLink(`Olá! Li o artigo "${post.title}" no blog e gostaria de conversar com um especialista da Natex.`, 'blog_post_cta')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm rounded-[6px] border border-slate-700 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Conversar no WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* 5. RELATED ARTICLES CAROUSEL */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Artigos Relacionados
              </h3>
              <button
                onClick={() => navigate('/blog')}
                className="text-xs font-bold text-[#6200EA] hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Ver todos os artigos</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigate(`/blog/${rel.slug}`)}
                  className="group bg-slate-50 rounded-[4px] border border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="h-44 overflow-hidden bg-slate-200">
                      <img
                        src={getOptimizedImageUrl(rel.coverImage, 500, 70)}
                        alt={rel.title}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = getCategoryFallbackImage(rel.categorySlug);
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[11px] font-bold text-[#6200EA] block">
                        {rel.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#6200EA] transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {rel.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-1 text-xs font-bold text-[#6200EA] flex items-center justify-between">
                    <span>Ler artigo</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

    </div>
  );
};
