import React, { useState, useEffect, useRef } from 'react';
import { Upload, CheckCircle2, AlertCircle, Link as LinkIcon, Play, RefreshCw, Copy, Check, ArrowLeft, Video } from 'lucide-react';
import { useRouter } from '../context/RouterContext';

interface VideoStatus {
  exists: boolean;
  size: number;
  formattedSize: string;
  url: string;
  lastModified: string | null;
}

export const VideoUploadPage: React.FC = () => {
  const { navigate } = useRouter();
  const [status, setStatus] = useState<VideoStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [videoUrlInput, setVideoUrlInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [videoTimestamp, setVideoTimestamp] = useState(Date.now());
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchStatus = async () => {
    try {
      const res = await fetch('/api/video-status');
      if (res.ok) {
        const data = await res.json();
        setStatus(data);
      }
    } catch (e) {
      console.error('Error fetching video status:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const handleFileUpload = async (file: File) => {
    if (!file.type.includes('mp4') && !file.name.endsWith('.mp4')) {
      setMessage({ type: 'error', text: 'Por favor, selecione um arquivo no formato MP4.' });
      return;
    }

    setUploading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append('video', file);

    try {
      const res = await fetch('/api/upload-video', {
        method: 'POST',
        body: formData
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setMessage({ type: 'success', text: 'Vídeo enviado e atualizado com sucesso na Hero!' });
        setVideoTimestamp(Date.now());
        fetchStatus();
      } else {
        setMessage({ type: 'error', text: data.error || 'Erro ao enviar vídeo.' });
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Erro de conexão no envio.' });
    } finally {
      setUploading(false);
    }
  };

  const handleUrlSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrlInput.trim()) return;

    setUploading(true);
    setMessage(null);

    try {
      const res = await fetch('/api/upload-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ videoUrl: videoUrlInput.trim() })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setMessage({ type: 'success', text: 'Vídeo importado e atualizado com sucesso na Hero!' });
        setVideoUrlInput('');
        setVideoTimestamp(Date.now());
        fetchStatus();
      } else {
        setMessage({ type: 'error', text: data.error || 'Erro ao importar vídeo da URL.' });
      }
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Erro ao importar vídeo.' });
    } finally {
      setUploading(false);
    }
  };

  const directVideoUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/videos/natex-morph-hero.mp4`
    : 'https://ais-dev-rswwmqqwravyi2gigs2lxr-189482800751.us-west1.run.app/videos/natex-morph-hero.mp4';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(directVideoUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a Página Inicial
          </button>
          <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider rounded-full">
            Painel do Vídeo Hero
          </span>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            Gerenciamento e Upload do Vídeo da Hero
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Você pode visualizar o vídeo atual, copiar o link direto ou enviar um novo arquivo <code className="text-amber-300 font-mono">.mp4</code> sem precisar mexer em nenhuma pasta de código.
          </p>
        </div>

        {/* Notifications */}
        {message && (
          <div
            className={`p-4 rounded-xl mb-6 flex items-start gap-3 border ${
              message.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-200'
            }`}
          >
            {message.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            )}
            <div className="text-sm font-medium">{message.text}</div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Link & Preview */}
          <div className="lg:col-span-7 space-y-6">
            {/* Direct Link Card */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-amber-400" />
                  <h2 className="text-lg font-bold text-white">Link Direto do Vídeo</h2>
                </div>
                {status?.formattedSize && (
                  <span className="text-xs bg-slate-700 text-slate-300 px-2.5 py-1 rounded-full">
                    {status.formattedSize}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-400 mb-3">
                Este é o link direto público do arquivo carregado no servidor. Você pode abrir em nova aba, baixar ou compartilhar:
              </p>

              <div className="flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-xl p-2 mb-4">
                <input
                  type="text"
                  readOnly
                  value={directVideoUrl}
                  className="bg-transparent text-xs text-amber-200 font-mono w-full px-2 outline-none selection:bg-amber-500/30"
                />
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-semibold rounded-lg transition-colors shrink-0 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>
              </div>

              {/* Video Player Preview */}
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black border border-slate-700">
                <video
                  key={videoTimestamp}
                  src={`/videos/natex-morph-hero.mp4?v=${videoTimestamp}`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Caminho: <code className="text-slate-300">/videos/natex-morph-hero.mp4</code></span>
                <button
                  onClick={() => {
                    setVideoTimestamp(Date.now());
                    fetchStatus();
                  }}
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  Recarregar Player
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Upload Forms */}
          <div className="lg:col-span-5 space-y-6">
            {/* Upload File Box */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Upload className="w-5 h-5 text-amber-400" />
                <h2 className="text-lg font-bold text-white">Enviar Novo Vídeo</h2>
              </div>

              <p className="text-xs text-slate-400 mb-4">
                Arraste o arquivo <code className="text-amber-300">.mp4</code> aqui ou clique para selecionar do seu dispositivo:
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept="video/mp4,video/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileUpload(e.target.files[0]);
                  }
                }}
              />

              <div
                onClick={() => !uploading && fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (!uploading && e.dataTransfer.files && e.dataTransfer.files[0]) {
                    handleFileUpload(e.dataTransfer.files[0]);
                  }
                }}
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                  uploading
                    ? 'border-amber-500/50 bg-amber-500/5 cursor-wait'
                    : 'border-slate-600 hover:border-amber-500 hover:bg-slate-750'
                }`}
              >
                {uploading ? (
                  <div className="flex flex-col items-center py-4">
                    <RefreshCw className="w-8 h-8 text-amber-400 animate-spin mb-3" />
                    <p className="text-sm font-semibold text-white">Gravando vídeo no servidor...</p>
                    <p className="text-xs text-slate-400 mt-1">Aguarde a gravação finalizar</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center py-4">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-3">
                      <Upload className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-medium text-white mb-1">
                      Clique ou arraste seu vídeo MP4
                    </p>
                    <p className="text-xs text-slate-400">
                      Substitui automaticamente o vídeo da Hero
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Import from URL Box */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <LinkIcon className="w-5 h-5 text-amber-400" />
                <h2 className="text-base font-bold text-white">Importar por Link</h2>
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Cole o link público do Google Drive, Dropbox ou link direto .mp4:
              </p>

              <form onSubmit={handleUrlSubmit} className="space-y-3">
                <input
                  type="url"
                  placeholder="https://drive.google.com/file/d/... ou link .mp4"
                  value={videoUrlInput}
                  onChange={(e) => setVideoUrlInput(e.target.value)}
                  disabled={uploading}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  disabled={uploading || !videoUrlInput.trim()}
                  className="w-full py-2.5 bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  {uploading ? 'Baixando e Processando...' : 'Baixar e Aplicar Vídeo'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
