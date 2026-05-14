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
  CheckCircle2,
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
  Trophy,
  Target,
  FileDown,
  Download,
  Headphones,
  Mail,
  Calendar,
  ListChecks
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import SalesNotification from './components/SalesNotification';

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
  return (
    <a 
      href="https://ibb.co/39tZ8M9Q" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block relative group overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl hover:shadow-[#10B981]/20 transition-all duration-300 transform hover:-translate-y-1"
    >
      <img 
        src="https://i.ibb.co/wFDmbwFj/Untitled-design-5.png" 
        alt="Acesso Completo +250 Dinâmicas" 
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
    </a>
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
      <SalesNotification />
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
                  Você escolheu o acesso essencial de <span className="font-bold text-gray-800">R$ 9,90</span>, mas por apenas <span className="font-bold text-[#00C853]">R$ 10 a mais</span> pode liberar o Pacote Completo, com acesso total a +250 Dinâmicas de Segurança do Trabalho e todos os bônus.
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
                  SIM, QUERO O ACESSO COMPLETO!
                </button>

                <button 
                  onClick={() => (window as any).redirectWithParams('https://checkout.pagseguropay.shop/VCCL1O8SCXF8')}
                  className="w-full bg-white border-2 border-[#E2E8F0] text-[#94A3B8] font-bold py-3 px-4 rounded-xl text-sm sm:text-base transition-colors cursor-pointer text-center leading-tight"
                >
                  Não, prefiro o acesso essencial
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
            <span className="block sm:inline">+250 Dinâmicas de</span>{' '}
            <span className="text-[#10B981]">Segurança do Trabalho</span>{' '}
            <span>prontas para aplicar</span>
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
            <VortexVSL />
          </div>

          <div className="w-full flex justify-center">
            <motion.button id="7797d19f-431d-9888-cc44-83f43eb2b991" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={scrollToPricing} className="inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-bold py-4 px-6 rounded-full text-lg sm:text-xl uppercase tracking-wide shadow-md transition-all w-[85%] max-w-[280px] animate-scale-pulse leading-tight text-center cursor-pointer"> <HardHat className="w-6 h-6 sm:w-8 sm:h-8" /> QUERO AGORA! </motion.button>
          </div>
        </div>
      </section>

      {/* O Que Você Vai Receber - Detailed Section */}
      <section className="py-16 md:py-24 bg-slate-50" id="receber">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 px-4 sm:px-0 tracking-tight">O Que Você Vai Receber</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-[#10B981]/30 transition-all group flex flex-col transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#10B981] rounded-xl flex items-center justify-center text-white mb-5 sm:mb-6 shadow-[#10B981]/10 shadow-md">
                <ListChecks className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-tight">+250 Dinâmicas Prontas</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Atividades organizadas e fáceis de aplicar. É só abrir e usar nos treinamentos e DDS.</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-[#10B981]/30 transition-all group flex flex-col transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#10B981] rounded-xl flex items-center justify-center text-white mb-5 sm:mb-6 shadow-[#10B981]/10 shadow-md">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-tight">Ideal Para Qualquer Ambiente</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Aplicável em empresas, indústrias, escolas técnicas e diferentes equipes.</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-[#10B981]/30 transition-all group flex flex-col transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#10B981] rounded-xl flex items-center justify-center text-white mb-5 sm:mb-6 shadow-[#10B981]/10 shadow-md">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-tight">100% Organizado</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Separadas por tema, risco e objetivo para facilitar a aplicação.</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-[#10B981]/30 transition-all group flex flex-col transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#10B981] rounded-xl flex items-center justify-center text-white mb-5 sm:mb-6 shadow-[#10B981]/10 shadow-md">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" aria-hidden="true" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-tight">Passo a Passo Completo</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Cada dinâmica com objetivo e execução explicados de forma simples.</p>
            </div>
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
          <h2 className="section-title text-[28px] sm:text-4xl font-bold text-center text-gray-900 mb-6 tracking-tight leading-tight">Escolha Seu <span className="text-[#10B981]">Acesso</span></h2>
          
          <div className="bg-[#FFF5F5] border border-[#FED7D7] rounded-xl py-2 px-4 mb-6 flex items-center justify-center gap-3 shadow-sm max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <Zap className="text-amber-500 fill-amber-400 w-8 h-8 flex-shrink-0" />
            <span className="text-[#C53030] font-bold text-sm sm:text-lg uppercase tracking-tight leading-none pt-1 text-left sm:text-center">ÚLTIMAS UNIDADES POR ESTE VALOR PROMOCIONAL</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Essential Access */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden relative p-6 flex flex-col items-center">
              <h3 className="text-xl font-bold text-gray-900 mb-1 uppercase">Acesso Essencial</h3>
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
                <li className="flex items-center gap-2 text-gray-900 font-bold text-[13px] sm:text-[15px]">
                  <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  +250 Dinâmicas de Segurança do Trabalho
                </li>
                <li className="flex items-center gap-2 text-gray-900 font-bold text-[13px] sm:text-[15px]">
                  <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  Acesso Vitalício
                </li>
                <li className="flex items-center gap-2 text-gray-900 font-bold text-[13px] sm:text-[15px]">
                  <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  Garantia de 14 dias
                </li>
                <li className="flex items-center gap-2 text-gray-900 font-bold text-[13px] sm:text-[15px]">
                  <div className="bg-red-500 rounded-full p-1 flex-shrink-0">
                    <X className="w-3 h-3 text-white" strokeWidth={4} />
                  </div>
                  Bônus Exclusivos
                </li>
                <li className="flex items-center gap-2 text-gray-900 font-bold text-[13px] sm:text-[15px]">
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

            {/* Complete Access */}
            <div className="bg-[#F0FDF4] rounded-3xl shadow-xl border-2 border-[#10B981] overflow-hidden relative flex flex-col items-center transform md:-translate-y-4">
              <div className="bg-[#10B981] w-full text-center py-1.5 text-white font-bold uppercase text-xs flex items-center justify-center gap-1.5">
                <Star className="w-3 h-3 fill-white" /> Mais Escolhido
              </div>
              <div className="p-6 flex flex-col items-center w-full">
                <h3 className="text-xl font-bold text-[#10B981] mb-1 uppercase">Acesso Completo</h3>
                <p className="text-gray-500 text-xs mb-4 text-center">Tudo incluso + bônus exclusivos para o ano todo</p>
                <div className="flex items-start text-[#10B981] font-extrabold mb-1">
                  <span className="text-lg mt-2">R$</span>
                  <span className="text-6xl">27</span>
                  <div className="flex flex-col items-start mt-2">
                    <span className="text-2xl">,00</span>
                  </div>
                </div>
                <p className="text-gray-400 text-[10px] font-medium uppercase tracking-wider mb-6">Pagamento Único</p>
                
                <ul className="w-full space-y-3 mb-8 text-left">
                  {[
                    { text: "+250 Dinâmicas de Segurança do Trabalho", icon: <Check className="w-3 h-3 text-white" strokeWidth={4} /> },
                    { text: "Acesso Vitalício", icon: <Check className="w-3 h-3 text-white" strokeWidth={4} /> },
                    { text: "Garantia de 14 dias", icon: <Check className="w-3 h-3 text-white" strokeWidth={4} /> },
                    { text: "BÔNUS: Certificado de Conclusão", isBonus: true },
                    { text: "BÔNUS: Quiz Interativo", isBonus: true },
                    { text: "BÔNUS: Cartazes Prontos de Segurança do Trabalho", isBonus: true },
                    { text: "Atualizações Mensais", icon: <Check className="w-3 h-3 text-white" strokeWidth={4} /> },
                    { text: "Suporte 24/7", icon: <Check className="w-3 h-3 text-white" strokeWidth={4} /> }
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-900 font-bold text-[13px] sm:text-[15px]">
                      {item.isBonus ? (
                        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                          <Gift className="w-5 h-5 text-pink-500" />
                        </div>
                      ) : (
                        <div className="bg-[#10B981] rounded-full p-1 flex-shrink-0">
                          {item.icon}
                        </div>
                      )}
                      {item.text}
                    </li>
                  ))}
                </ul>

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


        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-white py-6 px-4" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] p-6 text-center border border-gray-100">
          <div className="w-20 h-20 bg-[#F0FDF4] rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-10 h-10 text-[#10B981]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Garantia de 14 dias</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4">Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.</p>
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
              { q: "E se eu não gostar?", a: "Você tem 14 dias de garantia incondicional para pedir reembolso." }
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

