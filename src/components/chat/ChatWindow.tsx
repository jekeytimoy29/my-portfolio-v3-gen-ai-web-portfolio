import { useEffect, useRef } from 'react';
import { X, Sparkles, RotateCcw } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { useChatStore } from '../../store/chatStore';
import { profile } from '../../config/portfolio.config';
import { cn } from '../../utils/cn';

// Mock responses for demo
const mockResponses: Record<string, string> = {
  default: `I'm an AI assistant that can answer questions about ${profile.name}'s professional background. Feel free to ask about their skills, experience, or projects!`,
  skills: `${profile.name} is skilled in:\n\n• Frontend: React, TypeScript, Next.js, Tailwind CSS\n• Backend: Node.js, NestJS, Python\n• Database: PostgreSQL, MongoDB, Redis\n• DevOps: Docker, AWS, CI/CD\n\nWould you like to know more about any specific skill?`,
  experience: `${profile.name} has worked at several companies:\n\n• Senior Full Stack Developer at Tech Company Inc. (2022-Present)\n• Full Stack Developer at Startup Labs (2020-2021)\n• Frontend Developer at Digital Agency Co. (2018-2020)\n\nWant details about any specific role?`,
  projects: `Here are some notable projects:\n\n• E-Commerce Platform - Full-stack solution with payment processing\n• AI Chat Application - LLM-powered chatbot with RAG\n• Task Management System - Real-time collaboration tool\n\nWould you like more details about any project?`,
  contact: `You can reach ${profile.name} at:\n\n📧 Email: ${profile.email}\n📍 Location: ${profile.location}\n\nFeel free to connect on LinkedIn or GitHub as well!`,
};

const suggestedQuestions = [
  'What are your main skills?',
  'Tell me about your experience',
  'What projects have you worked on?',
  'How can I contact you?',
];

export function ChatWindow({ onClose }: { onClose: () => void }) {
  const { messages, addMessage, isLoading, setLoading, clearChat } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Add welcome message on first open
  useEffect(() => {
    if (messages.length === 0) {
      addMessage({
        role: 'assistant',
        content: `Hi! I'm an AI assistant. Ask me anything about ${profile.name}'s skills, experience, or projects!`,
      });
    }
  }, []);

  const getMockResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase();
    if (lower.includes('skill') || lower.includes('tech') || lower.includes('know')) {
      return mockResponses.skills;
    }
    if (lower.includes('experience') || lower.includes('work') || lower.includes('job') || lower.includes('company')) {
      return mockResponses.experience;
    }
    if (lower.includes('project') || lower.includes('built') || lower.includes('portfolio')) {
      return mockResponses.projects;
    }
    if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('hire')) {
      return mockResponses.contact;
    }
    return mockResponses.default;
  };

  const handleSendMessage = async (content: string) => {
    // Add user message
    addMessage({ role: 'user', content });
    setLoading(true);

    // Simulate AI response delay
    setTimeout(() => {
      const response = getMockResponse(content);
      addMessage({ role: 'assistant', content: response });
      setLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-primary-600 text-white">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5" />
          <div>
            <span className="font-medium">AI Assistant</span>
            <span className="text-xs text-white/80 ml-2">— Ask me anything!</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={clearChat}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Clear chat"
            title="Clear chat"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
        ))}
        {isLoading && <ChatMessage role="assistant" content="" isLoading />}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested questions (show when few messages) */}
      {messages.length <= 2 && !isLoading && (
        <div className="px-4 pb-2">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSuggestedQuestion(q)}
                className={cn(
                  'px-3 py-1 text-xs rounded-full',
                  'bg-slate-100 dark:bg-slate-700',
                  'text-slate-700 dark:text-slate-300',
                  'hover:bg-primary-100 hover:text-primary-700',
                  'dark:hover:bg-primary-900/30 dark:hover:text-primary-400',
                  'transition-colors'
                )}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <ChatInput onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
}
