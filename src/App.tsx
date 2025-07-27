import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import ChatInterface from './components/ChatInterface';
import FlowerAnimation from './components/FlowerAnimation';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'chat'>('welcome');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm so glad you're here. I'm your digital sister, ready to listen and support you with any questions about menstrual health, PCOS, body awareness, or emotional wellbeing. What would you like to talk about today? 💕",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  const handleStartChat = () => {
    setCurrentPage('chat');
  };

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple bot responses for demo
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(text),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userMessage: string): string => {
    const responses = [
      "Thank you for sharing that with me. I'm here to support you through this journey. 💕",
      "That's a very common concern, and you're not alone in feeling this way. Let me help you understand more about this. 🌸",
      "I appreciate you trusting me with this question. Your health and wellbeing are so important. 💖",
      "It's wonderful that you're taking care of your health by asking these questions. You're doing great! 🌺",
      "Every woman's experience is unique, and what you're feeling is valid. Let's explore this together. 🌷"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-rose-100 font-poppins relative overflow-hidden">
      <FlowerAnimation />
      
      {currentPage === 'welcome' ? (
        <WelcomePage onStartChat={handleStartChat} />
      ) : (
        <ChatInterface 
          messages={messages} 
          onSendMessage={handleSendMessage}
          onBackToWelcome={() => setCurrentPage('welcome')} 
        />
      )}
    </div>
  );
}

export default App;