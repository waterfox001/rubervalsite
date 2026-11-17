import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  MessageCircle,
  X,
  RotateCcw,
  ChevronRight,
  Send,
  Car,
  Bike,
  Award,
  ShieldCheck,
  Clock,
  HelpCircle,
  ArrowLeft,
} from 'lucide-react';
import { INSTRUCTOR_INFO, createWhatsAppUrl } from '../data/content';
import { useWhatsAppModal, ChatPreset } from '../context/WhatsAppContext';

interface QuickOption {
  id: string;
  label: string;
  topicText: string;
  icon: React.ReactNode;
}

const QUICK_OPTIONS: QuickOption[] = [
  {
    id: 'cat-b',
    label: 'Quero aprender a dirigir (Carro)',
    topicText: 'Aulas práticas – Categoria B (Carro)',
    icon: <Car className="w-4 h-4 text-[#EAB308]" />,
  },
  {
    id: 'cat-a',
    label: 'Quero aulas de moto (Categoria A)',
    topicText: 'Aulas práticas – Categoria A (Moto)',
    icon: <Bike className="w-4 h-4 text-[#EAB308]" />,
  },
  {
    id: 'cat-ab',
    label: 'Habilitação nas Categorias A e B',
    topicText: 'Aulas práticas – Categorias A e B (Moto e Carro)',
    icon: <Award className="w-4 h-4 text-[#EAB308]" />,
  },
  {
    id: 'medo',
    label: 'Já tenho CNH e quero perder o medo',
    topicText: 'Treinamento para habilitados / perder o medo de dirigir',
    icon: <ShieldCheck className="w-4 h-4 text-[#EAB308]" />,
  },
  {
    id: 'horarios',
    label: 'Consultar disponibilidade e horários',
    topicText: 'Consultar disponibilidade de horários para aulas',
    icon: <Clock className="w-4 h-4 text-[#EAB308]" />,
  },
  {
    id: 'outra',
    label: 'Tenho outra dúvida',
    topicText: 'Dúvida geral sobre as aulas práticas',
    icon: <HelpCircle className="w-4 h-4 text-[#EAB308]" />,
  },
];

function topicForPreset(preset: ChatPreset): string | null {
  if (preset === 'A') return 'Aulas práticas – Categoria A (Moto)';
  if (preset === 'B') return 'Aulas práticas – Categoria B (Carro)';
  if (preset === 'AB') return 'Aulas práticas – Categorias A e B (Moto e Carro)';
  if (preset === 'duvida') return 'Dúvida geral sobre as aulas práticas';
  return null;
}

export const FloatingWhatsApp: React.FC = () => {
  const { isOpen, preset, presetNonce, closeWhatsAppModal, toggleWhatsAppModal } =
    useWhatsAppModal();

  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [freeInput, setFreeInput] = useState('');
  const [studentName, setStudentName] = useState('');
  const [extraNote, setExtraNote] = useState('');
  const [nameError, setNameError] = useState('');

  const nameInputRef = useRef<HTMLInputElement>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Sync preset when opened from specific CTA buttons (e.g. Moto or Carro card)
  useEffect(() => {
    if (!isOpen) return;
    const preTopic = topicForPreset(preset);
    if (preTopic) {
      setSelectedTopic(preTopic);
      setNameError('');
    } else {
      setSelectedTopic(null);
      setNameError('');
    }
  }, [isOpen, preset, presetNonce]);

  // Focus name input when entering name step
  useEffect(() => {
    if (isOpen && selectedTopic) {
      const timer = setTimeout(() => {
        nameInputRef.current?.focus();
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [isOpen, selectedTopic]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeWhatsAppModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeWhatsAppModal]);

  const handleReset = () => {
    setSelectedTopic(null);
    setFreeInput('');
    setStudentName('');
    setExtraNote('');
    setNameError('');
  };

  const handleSelectOption = (opt: QuickOption) => {
    setSelectedTopic(opt.topicText);
    setNameError('');
  };

  const handleFreeSend = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = freeInput.trim();
    if (!trimmed) return;
    setSelectedTopic(trimmed);
    setFreeInput('');
    setNameError('');
  };

  const whatsappHref = useMemo(() => {
    const cleanName = studentName.trim();
    const cleanTopic = selectedTopic || 'Informações sobre aulas práticas';
    const cleanNote = extraNote.trim();

    const lines = [
      `Olá, Ruberval! Meu nome é ${cleanName}.`,
      `Assunto: ${cleanTopic}`,
    ];
    if (cleanNote) {
      lines.push(`Observação: ${cleanNote}`);
    }
    return createWhatsAppUrl(lines.join('\n'));
  }, [studentName, selectedTopic, extraNote]);

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!studentName.trim()) {
      e.preventDefault();
      setNameError('Informe seu nome para enviar no WhatsApp.');
      nameInputRef.current?.focus();
      return;
    }
    setNameError('');
  };

  return (
    <aside aria-label="Chat de atendimento WhatsApp" className="fixed bottom-5 right-5 z-50">
      {/* Floating Chat Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Atendimento Ruberval"
          className="fixed bottom-22 right-4 sm:right-5 w-[calc(100vw-2rem)] sm:w-[390px] max-h-[calc(100vh-7rem)] rounded-2xl shadow-2xl border border-emerald-900/70 bg-[#082416] text-white flex flex-col overflow-hidden"
        >
          {/* Chat Header */}
          <div className="bg-[#061A10] px-4 py-3.5 border-b border-white/10 flex items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-9 h-9 rounded-full bg-[#0D3B26] border border-[#EAB308]/50 text-[#EAB308] font-extrabold text-sm flex items-center justify-center shrink-0">
                R
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#22C55E] border-2 border-[#061A10]"
                />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm text-white truncate leading-tight">
                  {INSTRUCTOR_INFO.fullName}
                </p>
                <p className="text-[11px] text-emerald-200/75 truncate mt-0.5">
                  Atendimento oficial · {INSTRUCTOR_INFO.city}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={handleReset}
                title="Reiniciar conversa"
                aria-label="Reiniciar conversa"
                className="w-8 h-8 rounded-lg text-emerald-200/75 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={closeWhatsAppModal}
                title="Fechar chat"
                aria-label="Fechar chat"
                className="w-8 h-8 rounded-lg text-emerald-200/75 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Chat Body */}
          <div ref={chatBodyRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Greeting Message Bubble */}
            <div className="bg-[#0D311E] border border-white/10 rounded-xl rounded-tl-xs p-3.5 text-[13px] leading-relaxed text-neutral-100">
              <p className="font-medium">
                Olá! Aqui é o atendimento do <strong>Ruberval – Instrutor de Autoescola</strong>. Como podemos ajudar nas suas aulas?
              </p>
              <p className="text-xs text-emerald-200/75 mt-2">
                Organizamos sua solicitação aqui para atendimento ágil no WhatsApp oficial.
              </p>
            </div>

            {/* Step 1: Option Selection */}
            {!selectedTopic && (
              <div className="space-y-2">
                <p className="text-[11px] font-semibold tracking-wider text-emerald-200/75 uppercase">
                  Selecione uma opção para começar:
                </p>

                <div className="space-y-2">
                  {QUICK_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectOption(opt)}
                      className="w-full bg-[#0B2A1A] hover:bg-[#113B25] border border-white/10 hover:border-[#EAB308]/50 rounded-xl px-3.5 py-2.5 flex items-center justify-between gap-3 transition-colors text-left cursor-pointer group"
                    >
                      <span className="flex items-center gap-2.5 text-[13px] font-medium text-neutral-100 group-hover:text-white">
                        {opt.icon}
                        <span>{opt.label}</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-emerald-200/50 group-hover:text-[#EAB308] shrink-0 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: User Topic Bubble + Required Name & Details */}
            {selectedTopic && (
              <div className="space-y-3.5">
                {/* User's selected option bubble */}
                <div className="ml-auto max-w-[85%] bg-[#164A30] border border-[#EAB308]/35 text-white rounded-xl rounded-tr-xs px-3.5 py-2.5 text-[13px] font-medium">
                  {selectedTopic}
                </div>

                {/* Assistant response asking for required Name */}
                <div className="bg-[#0D311E] border border-white/10 rounded-xl rounded-tl-xs p-3.5 text-[13px] leading-relaxed text-neutral-100">
                  <p>
                    Perfeito! Para encaminhar sua mensagem ao WhatsApp do Ruberval, informe seu nome abaixo:
                  </p>
                </div>

                {/* Required Name & Observation Form */}
                <div className="bg-[#061A10] border border-white/10 rounded-xl p-3.5 space-y-3">
                  <div>
                    <label
                      htmlFor="chat-student-name"
                      className="block text-xs font-semibold text-emerald-100 mb-1"
                    >
                      Seu Nome <span className="text-[#EAB308]">*</span>
                    </label>
                    <input
                      ref={nameInputRef}
                      id="chat-student-name"
                      type="text"
                      required
                      aria-required="true"
                      aria-invalid={Boolean(nameError)}
                      value={studentName}
                      onChange={(e) => {
                        setStudentName(e.target.value);
                        if (nameError && e.target.value.trim()) setNameError('');
                      }}
                      placeholder="Digite seu nome completo"
                      className={`w-full px-3 py-2 text-sm rounded-lg bg-[#0B2A1A] text-white placeholder:text-emerald-200/40 border focus:outline-none focus:ring-2 transition-colors ${
                        nameError
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-white/15 focus:ring-[#EAB308]'
                      }`}
                    />
                    {nameError && (
                      <p role="alert" className="mt-1 text-[11px] font-medium text-red-300">
                        {nameError}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="chat-student-note"
                      className="block text-xs font-semibold text-emerald-100 mb-1"
                    >
                      Alguma observação ou dúvida?
                    </label>
                    <textarea
                      id="chat-student-note"
                      rows={2}
                      value={extraNote}
                      onChange={(e) => setExtraNote(e.target.value)}
                      placeholder="Ex: Gostaria de saber os horários disponíveis"
                      className="w-full px-3 py-2 text-sm rounded-lg bg-[#0B2A1A] text-white placeholder:text-emerald-200/40 border border-white/15 focus:outline-none focus:ring-2 focus:ring-[#EAB308] resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setSelectedTopic(null)}
                      className="px-3 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-emerald-100 inline-flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar</span>
                    </button>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleWhatsAppClick}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#082416] bg-[#EAB308] hover:bg-[#F59E0B] rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chamar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Free-text Input Bar (visible on initial option selection step) */}
          {!selectedTopic && (
            <form
              onSubmit={handleFreeSend}
              className="px-4 py-3 bg-[#061A10] border-t border-white/10 shrink-0"
            >
              <label
                htmlFor="chat-free-message"
                className="block text-[11px] text-emerald-200/75 mb-1.5"
              >
                Ou digite uma mensagem livre diretamente:
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="chat-free-message"
                  type="text"
                  value={freeInput}
                  onChange={(e) => setFreeInput(e.target.value)}
                  placeholder="Ex: Gostaria de saber os horários disponíveis"
                  className="flex-1 px-3 py-2 text-xs sm:text-sm rounded-lg bg-[#0B2A1A] text-white placeholder:text-emerald-200/40 border border-white/15 focus:outline-none focus:ring-2 focus:ring-[#EAB308]"
                />
                <button
                  type="submit"
                  aria-label="Continuar com esta mensagem"
                  className="w-9 h-9 rounded-lg bg-[#EAB308] hover:bg-[#F59E0B] text-[#082416] flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* Footer Caption */}
          <div className="bg-[#04120B] px-4 py-2 text-center text-[11px] text-emerald-200/60 border-t border-white/5 shrink-0">
            Atendimento oficial · Resposta direta no WhatsApp do Ruberval
          </div>
        </div>
      )}

      {/* Floating Toggle Button (matching gold circle with X / chat icon) */}
      <button
        type="button"
        onClick={toggleWhatsAppModal}
        aria-label={isOpen ? 'Fechar atendimento' : 'Abrir chat de atendimento no WhatsApp'}
        aria-expanded={isOpen}
        className="w-14 h-14 rounded-full bg-[#EAB308] hover:bg-[#F59E0B] text-[#082416] flex items-center justify-center shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308] focus-visible:ring-offset-2 cursor-pointer"
      >
        {isOpen ? (
          <X className="w-6 h-6 stroke-[2.5]" aria-hidden="true" />
        ) : (
          <MessageCircle className="w-6 h-6 stroke-[2.2]" aria-hidden="true" />
        )}
      </button>
    </aside>
  );
};
