import React from 'react';
import { MapPin, ExternalLink, Navigation, Building2, Clock, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';
import { trackEvent } from '../../utils/analytics';

interface NatexLocationMapProps {
  className?: string;
  showTitle?: boolean;
}

export const NatexLocationMap: React.FC<NatexLocationMapProps> = ({
  className = '',
  showTitle = true,
}) => {
  const mapsLink = COMPANY_INFO.address.coordinates?.mapsUrl || 'https://www.google.com/maps/place/Natex+Confec%C3%A7%C3%B5es/@-26.8370166,-48.6307307,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8cfb43bdb9bb5:0xdb94f21fac8f2cd1!8m2!3d-26.8370166!4d-48.6307307!16s%2Fg%2F11ntp_r7hw';
  const embedSrc = 'https://maps.google.com/maps?q=-26.8370166,-48.6307307&hl=pt-BR&z=16&output=embed';
  const routeLink = 'https://www.google.com/maps/dir/?api=1&destination=-26.8370166,-48.6307307';

  return (
    <div className={`space-y-6 ${className}`}>
      {showTitle && (
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-stone-100 text-slate-700 text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Localização da Fábrica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Natex Confecções em Navegantes / SC
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Sede fabril própria localizada em Navegantes - Santa Catarina, com acesso ágil à malha logística nacional.
          </p>
        </div>
      )}

      {/* Main Interactive Map Card */}
      <div className="relative rounded-[4px] overflow-hidden border border-stone-200 bg-white shadow-2xs">
        
        {/* Top Info Banner on the Map */}
        <div className="p-4 bg-stone-50 border-b border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[4px] bg-white border border-stone-200 flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4 text-[#1B365D]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-sm">
                  Natex Confecções
                </span>
                <span className="px-2 py-0.5 rounded-[2px] bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200 font-mono">
                  Fábrica Própria
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Bairro Gravatá, Navegantes – SC • Coordenadas: -26.8370166, -48.6307307
              </p>
            </div>
          </div>

          {/* Direct CTA Buttons */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('maps_click', { source: 'location_map_banner' })}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-[4px] transition-all cursor-pointer whitespace-nowrap"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Abrir Google Maps</span>
            </a>

            <a
              href={routeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('maps_click', { source: 'location_map_route' })}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-white hover:bg-stone-100 text-slate-700 text-xs font-bold rounded-[4px] border border-stone-300 transition-colors whitespace-nowrap"
            >
              <Navigation className="w-3.5 h-3.5 text-[#1B365D]" />
              <span>Traçar Rota</span>
            </a>
          </div>
        </div>

        {/* Map Frame with Interactive Pin Overlay */}
        <div className="relative w-full h-[360px] sm:h-[420px] bg-slate-100">
          <iframe
            title="Localização da Natex Confecções no Google Maps"
            src={embedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />

          {/* Floating Location Badge with Company Name */}
          <div className="absolute top-4 left-4 z-10 max-w-[260px] sm:max-w-xs p-3.5 rounded-[4px] bg-white/95 backdrop-blur-xs border border-stone-200 shadow-sm text-slate-800 space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-[2px] bg-[#FF6B00] flex items-center justify-center text-white shrink-0">
                <MapPin className="w-3.5 h-3.5 fill-white" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase text-slate-400 block leading-tight font-mono">
                  Ponto Fabril
                </span>
                <span className="text-xs font-bold text-slate-900 block">
                  Natex Confecções
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-600 leading-tight">
              Bairro Gravatá, Navegantes – SC
            </p>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1B365D] hover:underline"
            >
              <span>Ver ponto no mapa</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom Details Bar */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#1B365D] shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">Horário de Funcionamento</span>
              <span>{COMPANY_INFO.operatingHours}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">Telefone & WhatsApp</span>
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FF6B00] shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">Atendimento Fabril</span>
              <span>Visitas com agendamento prévio</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
