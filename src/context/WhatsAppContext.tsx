import React, { createContext, useContext, useState, useCallback } from 'react';

export type ChatPreset = 'choose' | 'A' | 'B' | 'AB' | 'duvida';

interface WhatsAppContextValue {
  isOpen: boolean;
  preset: ChatPreset;
  presetNonce: number;
  openWhatsAppModal: (preset?: ChatPreset) => void;
  closeWhatsAppModal: () => void;
  toggleWhatsAppModal: () => void;
}

const WhatsAppContext = createContext<WhatsAppContextValue | undefined>(undefined);

export const WhatsAppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState<ChatPreset>('choose');
  const [presetNonce, setPresetNonce] = useState(0);

  const openWhatsAppModal = useCallback((nextPreset: ChatPreset = 'choose') => {
    setPreset(nextPreset);
    setPresetNonce((n) => n + 1);
    setIsOpen(true);
  }, []);

  const closeWhatsAppModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleWhatsAppModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <WhatsAppContext.Provider
      value={{
        isOpen,
        preset,
        presetNonce,
        openWhatsAppModal,
        closeWhatsAppModal,
        toggleWhatsAppModal,
      }}
    >
      {children}
    </WhatsAppContext.Provider>
  );
};

export const useWhatsAppModal = () => {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) {
    throw new Error('useWhatsAppModal must be used within a WhatsAppProvider');
  }
  return ctx;
};
