import { create } from 'zustand';
import type { ChatMessage, ResumeData } from '../types';

interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  resumeData: ResumeData | null;
  sessionId: string | null;
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  setLoading: (loading: boolean) => void;
  setResumeData: (data: ResumeData | null) => void;
  setSessionId: (id: string) => void;
  clearChat: () => void;
}

const generateId = () => Math.random().toString(36).substring(2, 15);

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  messages: [],
  isLoading: false,
  resumeData: null,
  sessionId: null,

  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),

  openChat: () => set({ isOpen: true }),

  closeChat: () => set({ isOpen: false }),

  addMessage: (message) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          ...message,
          id: generateId(),
          timestamp: new Date(),
        },
      ],
    })),

  setLoading: (loading) => set({ isLoading: loading }),

  setResumeData: (data) => set({ resumeData: data }),

  setSessionId: (id) => set({ sessionId: id }),

  clearChat: () =>
    set({
      messages: [],
      resumeData: null,
      sessionId: null,
    }),
}));
