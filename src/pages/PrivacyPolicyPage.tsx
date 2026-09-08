import React from 'react';
import { SEOHead } from '../components/layout/SEOHead';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#080E1E] text-slate-100 pb-20">
      <SEOHead
        title="Política de Privacidade & LGPD | Natex Confecções"
        description="Conheça como a Natex Confecções coleta, utiliza e protege os dados corporativos em conformidade com a LGPD."
      />

      <section className="pt-8 pb-12 bg-[#0F172A]/80 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Política de Privacidade' }]} />

          <div className="mt-4">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Conformidade LGPD (Lei 13.709/2018)
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Última atualização: {new Date().toLocaleDateString('pt-BR')} • {COMPANY_INFO.name}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <div className="bg-[#0F172A] p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            1. Informações Gerais e Compromisso
          </h2>
          <p>
            A <strong>{COMPANY_INFO.name}</strong> respeita a privacidade de seus visitantes, clientes e parceiros comerciais. Esta Política de Privacidade descreve de forma clara e transparente como tratamos e protegemos os dados coletados através do nosso site e canais de atendimento B2B.
          </p>
        </div>

        <div className="bg-[#0F172A] p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#00B4D8]" />
            2. Dados Coletados e Finalidade
          </h2>
          <p>
            Coletamos estritamente os dados necessários para a elaboração de propostas comerciais e atendimento técnico, incluindo:
          </p>
          <ul className="space-y-1.5 pl-4 list-disc text-slate-300">
            <li><strong>Dados de contato corporativo:</strong> Nome da empresa, nome do responsável, e-mail corporativo, número de WhatsApp/telefone, cidade e estado.</li>
            <li><strong>Dados do projeto:</strong> Tipo de produto pretendido, quantidade estimada de peças, segmento de atuação, preferências de personalização e eventuais arquivos de arte/briefing enviados.</li>
            <li><strong>Dados técnicos de navegação:</strong> Informações de dispositivo, páginas acessadas e eventos de interação para fins de métricas de tráfego (Google Analytics / Meta Pixel).</li>
          </ul>
        </div>

        <div className="bg-[#0F172A] p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#FF6B00]" />
            3. Armazenamento e Segurança
          </h2>
          <p>
            Adotamos medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração ou comunicação. Não comercializamos nem transferimos suas informações a terceiros, exceto quando estritamente necessário para cumprimento de obrigações fiscais ou transporte de pedidos.
          </p>
        </div>

        <div className="bg-[#0F172A] p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Eye className="w-5 h-5 text-purple-400" />
            4. Cookies e Tecnologias de Análise
          </h2>
          <p>
            Utilizamos cookies essenciais para o funcionamento do site e tags de análise de conversão (Google Tag Manager, Google Analytics e Meta) para compreender o comportamento dos usuários e otimizar campanhas institucionais. Você pode desabilitar os cookies nas configurações do seu navegador a qualquer momento.
          </p>
        </div>

        <div className="bg-[#0F172A] p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            5. Direitos do Titular e Contato
          </h2>
          <p>
            Em conformidade com a LGPD, você possui o direito de confirmar a existência de tratamento, acessar seus dados, solicitar correção ou eliminação dos mesmos. Para exercer seus direitos, entre em contato através do e-mail oficial: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#00B4D8] underline">{COMPANY_INFO.email}</a>.
          </p>
        </div>
      </section>
    </div>
  );
};
