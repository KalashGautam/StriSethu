import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowLeft, Heart } from 'lucide-react';
import { Message } from '../App';

interface ChatInterfaceProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  onBackToWelcome: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  messages, 
  onSendMessage, 
  onBackToWelcome 
}) => {
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      onSendMessage(inputMessage.trim());
      setInputMessage('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative z-10">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-pink-200 p-4 shadow-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToWelcome}
            className="p-2 hover:bg-pink-100 rounded-full transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-lg">🌸</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-800">StriSethu</h1>
              <p className="text-sm text-gray-600">Your caring digital sister</p>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl shadow-sm ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-br-md'
                    : 'bg-white border border-purple-100 text-gray-800 rounded-bl-md'
                }`}
              >
                <p className="text-sm md:text-base leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-2 ${
                  message.sender === 'user' ? 'text-pink-100' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Form */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm border-t border-pink-200">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Share what's on your mind... I'm here to listen and help 💕"
              className="flex-1 px-4 py-3 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none bg-white/80 text-gray-800 placeholder-gray-500"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="px-4 py-3 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;