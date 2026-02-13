import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ChatWindow } from './ChatWindow';
import { cn } from '../../utils/cn';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      <div
        className={cn(
          'fixed z-50 transition-all duration-300 ease-in-out',
          // Mobile: full screen with padding
          'inset-4 sm:inset-auto',
          // Desktop: bottom right corner, wider
          'sm:bottom-24 sm:right-6 sm:w-[500px] sm:h-[650px] sm:max-h-[85vh]',
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        <ChatWindow onClose={() => setIsOpen(false)} />
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-6 right-6 z-50',
          'shadow-lg',
          'flex items-center justify-center gap-2',
          'transition-all duration-300 ease-in-out',
          'hover:scale-105 active:scale-95',
          isOpen
            ? 'w-14 h-14 rounded-full bg-slate-700 hover:bg-slate-800'
            : 'px-5 py-3 rounded-full bg-primary-600 hover:bg-primary-700'
        )}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <>
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="text-white font-medium text-sm">Ask me anything</span>
          </>
        )}
      </button>
    </>
  );
}
