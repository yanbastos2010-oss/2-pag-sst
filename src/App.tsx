/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, 
  Smartphone,
  Printer,
  ArrowRight,
  ClipboardList,
  Flower,
  Play, 
  Check, 
  ArrowDown, 
  Star, 
  Gift, 
  Users, 
  BookOpen, 
  Zap, 
  LockOpen, 
  ShieldCheck, 
  ChevronDown,
  X,
  HardHat,
  FileText,
  FileDown,
  Download,
  Headphones,
  Mail,
  Calendar
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left font-bold text-gray-800 hover:bg-gray-50 transition text-sm sm:text-base cursor-pointer"
      >
        {question}
        <ChevronDown className={`text-gray-400 w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-gray-600 text-sm">
          {answer}
        </div>
      )}
    </div>
  );
};

const VortexVSL: React.FC = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [showOverlay, setShowOverlay] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [showPauseIcon, setShowPauseIcon] = React.useState(false);

  const curvatura = 0.5;

  const handleFirstClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setShowOverlay(false);
    }
  };

  const togglePlay = () => {
    if (videoRef.current && !showOverlay) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setShowPauseIcon(false);
      } else {
        videoRef.current.pause();
        setShowPauseIcon(true);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      let progressoLogico = Math.pow((videoRef.current.currentTime / videoRef.current.duration), curvatura) * 100;
      if (progressoLogico > 100) progressoLogico = 100;
      setProgress(progressoLogico);
    }
  };

  const handleEnded = () => {
    setShowPauseIcon(false);
    setProgress(100);
  };

  return (
    <div id="vsl-container-9187" style={{ position: 'relative', width: '100%', maxWidth: '400px', margin: '20px auto', aspectRatio: '9/16', background: '#000', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.5)', fontFamily: 'sans-serif' }}>
      <video 
        ref={videoRef}
        id="vsl-video" 
        autoPlay 
        muted 
        playsInline 
        preload="auto"
        onClick={togglePlay} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
      >
        <source src="https://imgur.com/u20c05W.mp4" type="video/mp4" />
      </video>

      {showOverlay && (
        <div id="vsl-overlay" onClick={handleFirstClick} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 30 }}>
          <div style={{ background: '#10B981', color: 'white', padding: '15px 25px', borderRadius: '50px', fontWeight: 'bold', fontSize: '16px', boxShadow: '0 4px 15px #10B98180' }}>
            🔊 CLIQUE PARA OUVIR
          </div>
        </div>
      )}

      {showPauseIcon && (
        <div id="pause-icon" onClick={togglePlay} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: 20 }}>
          <div className="vortex-pulse-button" style={{ width: '80px', height: '80px', background: '#10B98166', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: '25px solid white', marginLeft: '5px' }}></div>
          </div>
        </div>
      )}

      <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '12px', background: 'rgba(255,255,255,0.2)', zIndex: 25 }}>
        <div id="progress-bar" style={{ width: `${progress}%`, height: '100%', background: '#10B981', transition: 'width 0.1s linear' }}></div>
      </div>

      <style>{`
        @keyframes vortex-pulse-green {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.8; }
        }
        .vortex-pulse-button { animation: vortex-pulse-green 2s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default function App() {
  const [showUpsell, setShowUpsell] = useState(false);

  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <AnimatePresence>
        {showUpsell && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <button 
                onClick={() => setShowUpsell(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="px-4 pb-4 pt-6 flex flex-col items-center">
                <div className="bg-pink-50 text-pink-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 mb-3">
                  <Star className="w-3 h-3 fill-pink-600" /> OFERTA VÁLIDA SÓ NESTE MOMENTO
                </div>
                <h2 className="text-center font-bold text-gray-900 text-3xl leading-tight mb-2">Espere! Antes de finalizar...</h2>
                <p className="text-center text-sm text-gray-600 mb-4 leading-relaxed px-2">
                  Você escolheu o plano básico de <span className="font-bold text-gray-800">R$ 9,90</span>, mas por apenas <span className="font-bold text-[#00C853]">R$ 10 a mais</span> pode liberar o Pacote Completo, com acesso total a +250 Dinâmicas de Segurança do Trabalho e todos os bônus.
                </p>
                
                <div className="bg-[#F0FDF4] w-full rounded-2xl p-4 mb-4 border border-slate-100 flex flex-col items-center">
                  <div className="flex justify-center items-start text-[#10B981] font-bold leading-none mb-4">
                    <span className="text-xl mt-1 mr-1">R$</span>
                    <span className="text-6xl tracking-tighter">19</span>
                    <span className="text-2xl mt-1">,90</span>
                  </div>
                  <div className="flex flex-col gap-2.5 w-full">
                    <div className="flex items-center gap-2">
                      <div className="bg-[#00C853] rounded-full p-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={4} />
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold text-gray-900 uppercase">+250 DINÂMICAS DE SEGURANÇA DO TRABALHO</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-[#00C853] rounded-full p-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={4} />
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold text-gray-900 uppercase">ACESSO VITALÍCIO + ATUALIZAÇÕES</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-[#00C853] rounded-full p-0.5 flex-shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={4} />
                      </div>
                      <span className="text-[10px] sm:text-xs font-semibold text-gray-900 uppercase">+R$ 198 EM BÔNUS INCLUSOS</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => (window as any).redirectWithParams('https://checkout.pagseguropay.shop/VCCL1O8SCXF9')}
                  className="w-full bg-[#00C853] hover:bg-[#00E676] text-white font-bold py-3 px-4 rounded-xl text-sm sm:text-base uppercase tracking-wide transition-colors cursor-pointer mb-4 text-center leading-tight shadow-md"
                >
                  SIM, QUERO O PLANO COMPLETO!
                </button>

                <button 
                  onClick={() => (window as any).redirectWithParams('https://checkout.pagseguropay.shop/VCCL1O8SCXF8')}
                  className="w-full bg-white border-2 border-[#E2E8F0] text-[#94A3B8] font-bold py-3 px-4 rounded-xl text-sm sm:text-base transition-colors cursor-pointer text-center leading-tight"
                >
                  Não, prefiro o plano básico
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Urgency Bar */}
      <div className="bg-[#D92525] text-white py-2 px-2 sm:px-4 shadow-md relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-4 relative z-10">
          
          <p className="text-sm font-bold uppercase tracking-wide leading-none text-center sm:text-left whitespace-nowrap">DESCONTO SÓ HOJE</p>
          <div className="bg-white text-[#D92525] rounded-md px-2 py-0.5 font-bold text-sm shadow-sm">
            {currentDate}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white pt-8 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-[#10B981]/10 text-[#10B981] px-4 py-2 rounded-full font-bold text-sm mb-6 border border-[#10B981]/20">
            <Check className="w-4 h-4" strokeWidth={3} />
            Alinhado às NRs
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] sm:leading-[1.1] mb-4 sm:mb-6 tracking-[-0.03em] max-w-5xl mx-auto"
          >
            <span className="block sm:inline">+250 Dinâmicas</span>{' '}
            <span className="block sm:inline">Interativas de</span>{' '}
            <span className="block sm:inline">Segurança do</span>{' '}
            <span className="block sm:inline">Trabalho + <span className="text-[#10B981]">BÔNUS</span></span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Tenha acesso a dinâmicas práticas, envolventes e estratégicas para promover mais atenção, participação e consciência no dia a dia da segurança.
          </motion.p>

          <div className="block max-w-4xl mx-auto mb-12">
            <picture><source srcSet="https://i.ibb.co/wFDmbwFj/Untitled-design-5.png" type="image/webp" /><img src="https://i.ibb.co/wFDmbwFj/Untitled-design-5.png" alt="Untitled design (5)" width="896" height="500" fetchPriority="high" decoding="async" className="w-full object-cover" /></picture>
          </div>

          <div className="w-full flex justify-center">
            <motion.button id="7797d19f-431d-9888-cc44-83f43eb2b991" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={scrollToPricing} className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-bold py-4 px-6 rounded-full text-lg sm:text-xl uppercase tracking-wide shadow-md transition-all w-[85%] max-w-[280px] animate-scale-pulse leading-tight text-center cursor-pointer"> <HardHat className="w-6 h-6 sm:w-8 sm:h-8" /> QUERO AGORA! </motion.button>
          </div>
        </div>
      </section>

      {/* Receber Section */}
      <section className="bg-slate-50 py-16 px-4" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title text-[28px] sm:text-4xl font-bold text-gray-900 mb-12 tracking-tight leading-tight">O Que Você Vai Receber</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FileText className="w-8 h-8 text-white" />,
                title: "Material Completo em PDF",
                desc: "+250 dinâmicas de Segurança do Trabalho organizadas e prontas para aplicar em DDS, SIPAT e treinamentos"
              },
              {
                icon: <ClipboardList className="w-8 h-8 text-white" />,
                title: "Roteiros Prontos",
                desc: "Cada dinâmica já vem com objetivo, passo a passo e tempo definido, é só abrir e aplicar"
              },
              {
                icon: <Smartphone className="w-8 h-8 text-white" />,
                title: "Acesso Digital Completo",
                desc: "Acesse por celular, tablet ou computador a qualquer hora e lugar"
              },
              {
                icon: <Printer className="w-8 h-8 text-white" />,
                title: "Pronto para Imprimir",
                desc: "Material formatado para impressão e uso imediato com qualquer equipe"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-[0_5px_20px_rgba(16,185,129,0.15)] border border-transparent flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(16,185,129,0.25)]">
                <div className="bg-[#10B981] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="bg-white py-16 px-4" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="section-title text-[28px] sm:text-4xl font-bold text-gray-900 mb-12 tracking-tight leading-tight">Benefícios Exclusivos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "Para Qualquer Tipo de Equipe",
                desc: "Dinâmicas adaptadas desde equipes iniciantes até equipes avançadas"
              },
              {
                icon: <Zap className="w-8 h-8 text-white" />,
                title: "Mais Engajamento na Prática",
                desc: "Atividades que realmente prendem a atenção e fazem os colaboradores participarem"
              },
              {
                icon: <Calendar className="w-8 h-8 text-white" />,
                title: "Atualizações Mensais",
                desc: "Novas dinâmicas adicionadas todo mês sem custo extra"
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-white" />,
                title: "Foco em Prevenção Real",
                desc: "Dinâmicas pensadas para reforçar comportamentos seguros, reduzir riscos e evitar acidentes no dia a dia"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-[0_5px_20px_rgba(16,185,129,0.15)] border border-transparent flex flex-col items-center text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(16,185,129,0.25)]">
                <div className="bg-[#10B981] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="bg-[#F0F4F8] py-16 px-4" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="section-title text-[28px] sm:text-4xl font-bold text-gray-900 mb-3 tracking-tight leading-tight">
              Bônus Exclusivos – Valor <span className="block sm:inline">R$97 (Grátis!)</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
            {[
              { title: "Certificado de Conclusão", oldPrice: "27", price: "GRATUITO", img: "https://i.ibb.co/v6yd5jS3/Chat-GPT-Image-16-de-abr-de-2026-17-39-59.png", desc: "Certificado para comprovar a conclusão do material, contribuindo para o desenvolvimento profissional e fortalecimento do seu portfólio na área de segurança do trabalho." },
              { title: "Quiz Interativo", oldPrice: "33", price: "GRATUITO", img: "https://i.ibb.co/V0T5s2DF/Chat-GPT-Image-16-de-abr-de-2026-17-38-36.png", desc: "Atividades em perguntas e respostas para testar o conhecimento dos colaboradores, deixando os treinamentos mais dinâmicos e fáceis de aplicar." },
              { title: "Cartazes Prontos de Segurança do Trabalho", oldPrice: "37", price: "GRATUITO", img: "https://i.ibb.co/274F2ZNh/Chat-GPT-Image-16-de-abr-de-2026-17-37-56.png", desc: "Cartazes prontos para imprimir e usar na empresa, reforçando regras de segurança e prevenção de acidentes de forma prática." }
            ].map((bonus, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border-2 border-[#10B981] shadow-md flex flex-col transform transition hover:-translate-y-1"
              >
                <div className="w-full bg-[#FDF6E3] flex items-center justify-center border-b border-gray-100">
                  <img alt={bonus.title} className="w-full aspect-[1536/1024] object-cover" src={bonus.img} width="1536" height="1024" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                </div>
                <div className="p-4 sm:p-5 text-center flex flex-col flex-grow justify-center">
                  <h4 className="font-bold text-[#0F172A] text-base sm:text-lg mb-1.5 leading-tight">{bonus.title}</h4>
                  <div className="text-[#10B981] font-bold text-lg sm:text-xl mb-2 uppercase">
                    <span className="line-through mr-2 text-red-500">R$ {bonus.oldPrice}</span>
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-auto">{bonus.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="total-bonus bg-white border-2 border-[#10B981] p-4 rounded-xl shadow-sm text-center max-w-md mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Total em Bônus: <span className="line-through text-red-500 opacity-60">R$97</span> <span className="text-[#10B981] uppercase ml-2">GRÁTIS!</span>
            </h3>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white py-12 px-4 relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-[28px] sm:text-4xl font-bold text-center text-gray-900 mb-6 tracking-tight leading-tight">Escolha Seu <span className="text-[#10B981]">Plano</span></h2>
          
          <div className="bg-[#FFF5F5] border border-[#FED7D7] rounded-xl py-2 px-4 mb-6 flex items-center justify-center gap-3 shadow-sm max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <Zap className="text-amber-500 fill-amber-400 w-8 h-8 flex-shrink-0" />
            <span className="text-[#C53030] font-bold text-sm sm:text-lg uppercase tracking-tight leading-none pt-1 text-left sm:text-center">ÚLTIMAS UNIDADES POR ESTE VALOR PROMOCIONAL</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden relative p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold text-gray-900 mb-1 uppercase">Plano Básico</h3>
              <p className="text-gray-500 text-xs mb-4">Para quem quer testar o método</p>
              <div className="flex items-start text-gray-900 font-extrabold mb-1">
                <span className="text-lg mt-2">R$</span>
                <span className="text-5xl">9</span>
                <div className="flex flex-col items-start mt-2">
                  <span className="text-2xl">,90</span>
                </div>
              </div>
              <p className="text-gray-400 text-[10px] font-medium uppercase tracking-wider mb-6">Pagamento Único</p>
              
              <ul className="w-full space-y-3 mb-6 text-left">
                <li className="flex items-center gap-2 text-gray-700 font-medium text-xs sm:text-sm">
                  <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  +250 Dinâmicas de Segurança do Trabalho
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-medium text-xs sm:text-sm">
                  <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  Acesso digital
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-medium text-xs sm:text-sm">
                  <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  Garantia de 7 dias
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-medium text-xs sm:text-sm">
                  <div className="bg-red-500 rounded-full p-1 flex-shrink-0">
                    <X className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  Bônus Exclusivos
                </li>
                <li className="flex items-center gap-2 text-gray-700 font-medium text-xs sm:text-sm">
                  <div className="bg-red-500 rounded-full p-1 flex-shrink-0">
                    <X className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  Atualizações mensais
                </li>
              </ul>
              
              <button 
                onClick={() => setShowUpsell(true)}
                className="w-[90%] mx-auto bg-[#10B981] hover:bg-[#059669] text-white font-bold py-2.5 rounded-lg uppercase tracking-wide transition shadow-lg transform active:scale-95 animate-scale-pulse text-lg cursor-pointer"
              >
                Comprar Agora
              </button>
            </div>

            {/* Complete Plan */}
            <div className="bg-[#F0FDF4] rounded-3xl shadow-xl border-2 border-[#10B981] overflow-hidden relative flex flex-col items-center transform md:-translate-y-4">
              <div className="bg-[#10B981] w-full text-center py-1.5 text-white font-bold uppercase text-xs flex items-center justify-center gap-1.5">
                <Star className="w-3 h-3 fill-white" /> Mais Escolhido
              </div>
              <div className="p-6 flex flex-col items-center w-full">
                <h3 className="text-xl font-bold text-[#10B981] mb-1 uppercase">Plano Completo</h3>
                <p className="text-gray-500 text-xs mb-4 text-center">Para transformar sua vida</p>
                <div className="flex items-start text-[#10B981] font-extrabold mb-1">
                  <span className="text-lg mt-2">R$</span>
                  <span className="text-6xl">27</span>
                  <div className="flex flex-col items-start mt-2">
                    <span className="text-2xl">,00</span>
                  </div>
                </div>
                <p className="text-gray-400 text-[10px] font-medium uppercase tracking-wider mb-6">Pagamento Único</p>
                
                <div className="w-full bg-[#EAB308] text-white font-bold py-3 rounded-lg uppercase tracking-wide flex items-center justify-center gap-2 mb-6 text-lg">
                  <Star className="w-4 h-4 fill-white" /> Acesso Vitalício
                </div>

                <div className="w-full mb-4 text-left">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                      <Check className="w-4 h-4 text-white" strokeWidth={4} />
                    </div>
                    <h4 className="text-[#10B981] font-medium text-sm sm:text-base leading-tight">+250 Dinâmicas de Segurança do Trabalho:</h4>
                  </div>
                  <ul className="space-y-1 text-gray-700 font-bold text-sm ml-8 list-disc">
                    <li>Prevenção de Acidentes</li>
                    <li>Uso de EPIs</li>
                    <li>Comportamento Seguro</li>
                    <li>Normas e Procedimentos (NRs)</li>
                    <li>Situações de Risco e Emergência</li>
                  </ul>
                </div>

                <div className="w-full bg-white rounded-xl p-3 border border-[#DCFCE7] mb-4 text-left">
                  <div className="flex items-center gap-2 mb-2 text-pink-500 font-semibold text-xs uppercase">
                    <Gift className="w-3 h-3" />
                    Mais de R$ 97 reais em bônus GRÁTIS:
                  </div>
                  <ul className="space-y-1.5 text-gray-600 text-[11px] font-medium">
                    <li className="flex items-center gap-2">• Certificado de Conclusão</li>
                    <li className="flex items-center gap-2">• Quiz Interativo</li>
                    <li className="flex items-center gap-2">• Cartazes Prontos de SST</li>
                  </ul>
                </div>

                <div className="w-full space-y-3 mb-6 text-left">
                  <div className="flex items-center gap-2 text-[#10B981] font-medium text-xs sm:text-sm">
                    <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                      <Users className="w-3 h-3 text-white" />
                    </div>
                    Para DDS, SIPAT e Treinamentos
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981] font-medium text-xs sm:text-sm">
                    <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                      <BookOpen className="w-3 h-3 text-white" />
                    </div>
                    Alinhado às Normas de Segurança (NRs)
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981] font-medium text-xs sm:text-sm">
                    <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                    Aplicação Imediata
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981] font-medium text-xs sm:text-sm">
                    <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                      <Calendar className="w-3 h-3 text-white" />
                    </div>
                    Atualizações Mensais
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981] font-medium text-xs sm:text-sm">
                    <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                      <LockOpen className="w-3 h-3 text-white" />
                    </div>
                    Materiais 100% Baixáveis
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981] font-medium text-xs sm:text-sm">
                    <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                      <Users className="w-3 h-3 text-white" />
                    </div>
                    Suporte Rápido
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981] font-medium text-xs sm:text-sm">
                    <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                      <ShieldCheck className="w-3 h-3 text-white" />
                    </div>
                    Garantia de 7 dias
                  </div>
                </div>

                <button 
                  onClick={() => (window as any).redirectWithParams('https://checkout.pagseguropay.shop/VCCL1O8SCXF6')}
                  className="w-[90%] mx-auto bg-[#10B981] hover:bg-[#059669] text-white font-bold py-2.5 rounded-lg uppercase tracking-wide transition shadow-lg animate-scale-pulse text-lg block text-center cursor-pointer"
                >
                  Comprar Agora
                </button>
                <div className="text-center mt-3 text-gray-400 text-xs flex items-center justify-center gap-1">
                  <LockOpen className="w-3 h-3" /> Ambiente seguro para pagamentos
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Notice */}
          <div className="mt-8 md:mt-12 bg-white rounded-2xl border-2 border-[#10B981] p-4 flex items-center gap-4 shadow-sm max-w-sm mx-auto">
            <div className="bg-[#10B981] rounded-full p-2 shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <p className="text-gray-900 font-medium text-sm leading-snug">Após a compra, você recebe acesso ao Material diretamente no seu E-mail</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-10 px-4" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#0F172A] mb-8">Depoimentos Reais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Carlos M.", role: "Técnico de Segurança", text: "Uso em DDS direto aqui na empresa e mudou bastante a atenção do pessoal, antes ninguém ligava muito", img: "https://i.ibb.co/BJPQMBx/Captura-de-tela-2026-04-12-012538.png" },
              { name: "Ricardo S.", role: "Engenheiro de Segurança", text: "Eu travava muito pra montar treinamento agora só abro escolho e aplico facilitou demais", img: "https://i.ibb.co/hFh1KPqd/Captura-de-tela-2026-01-24-154100.png" },
              { name: "Ana P.", role: "RH / SIPAT", text: "SIPAT aqui ficou muito melhor esse ano o pessoal participou de verdade não ficou só ouvindo", img: "https://i.ibb.co/r25SBbLx/Captura-de-tela-2026-04-12-012425.png" }
            ].map((t, i) => (
              <div key={i} className="bg-white border border-orange-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <img alt={t.name} className="w-10 h-10 rounded-full object-cover" src={t.img} width="40" height="40" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-sm">{t.name}</h3>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-600 italic text-xs leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Section removed - backed up in backup_sections.json */}

      {/* Guarantee Section */}
      <section className="bg-white py-6 px-4" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] p-6 text-center border border-gray-100">
          <div className="w-20 h-20 bg-[#F0FDF4] rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-10 h-10 text-[#10B981]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Risco zero por 7 dias</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4">Você pode acessar o material e testar por 7 dias. Se não gostar, é só pedir o reembolso e recebe 100% do seu dinheiro de volta.</p>
          <p className="text-gray-400 font-medium text-xs sm:text-sm">Sem perguntas. Sem burocracia.</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-12 px-4" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">Perguntas Frequentes</h2>
          <div className="space-y-3">
            {[
              { q: "Como recebo o material?", a: "Você recebe acesso imediato no seu e-mail logo após a confirmação do pagamento." },
              { q: "Serve para qualquer tipo de empresa?", a: "Sim, pode ser aplicado em diferentes áreas, equipes e segmentos, independente do porte da empresa." },
              { q: "Preciso ter experiência?", a: "Não, o material é simples, explicativo e qualquer pessoa consegue aplicar mesmo sem experiência." },
              { q: "As atividades estão alinhadas às NRs?", a: "Sim, seguem as Normas Regulamentadoras e facilitam a aplicação prática no dia a dia." },
              { q: "E se eu não gostar?", a: "Você tem 7 dias de garantia incondicional para pedir reembolso." }
            ].map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
          </div>
          
          <div className="mt-8">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToPricing}
              className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold py-3.5 rounded-lg uppercase tracking-wide transition shadow-lg text-base sm:text-2xl animate-scale-pulse whitespace-normal sm:whitespace-nowrap block text-center cursor-pointer"
            >
              QUERO MINHAS DINÂMICAS PRONTAS
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center text-gray-500 text-xs sm:text-sm border-t border-gray-100">
        <p>© 2026 – Todos os direitos reservados.</p>
        <p>Este projeto é protegido por direitos autorais.</p>
      </footer>
    </div>
  );
}

