import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

interface WelcomePageProps {
  onStartChat: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onStartChat }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-8 relative z-10">
      <div className="text-center max-w-2xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 bg-clip-text text-transparent mb-6 leading-tight">
          Welcome to StriSethu 🌸
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed font-medium">
          Your trusted companion for all menstrual and hormonal health queries.
        </p>
        
        {/* Central Message */}
        <div className="mb-12 flex justify-center">
          <div className="text-center bg-white/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-white/20 max-w-lg">
            <div className="text-4xl md:text-5xl mb-4">🌸</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-tight">
              🌸 Hey love, I'm StriSethu
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Ask me anything about your period, cramps, or your body without hesitation. I'm here for you 💖
            </p>
          </div>
        </div>
        
        {/* Start Chat Button */}
        <button
          onClick={onStartChat}
          className="group bg-gradient-to-r from-pink-400 via-pink-500 to-rose-500 hover:from-pink-500 hover:via-pink-600 hover:to-rose-600 text-white font-semibold py-4 px-8 md:py-5 md:px-10 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto text-lg md:text-xl"
        >
          Start Chatting
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        
        {/* Additional decorative text */}
        <p className="text-sm text-gray-600 mt-8 italic max-w-2xl mx-auto leading-relaxed">
          Disclaimer: StriSethu provides general health information and is not a substitute for professional medical advice. Always consult with a healthcare provider for medical concerns.
        </p>
        <div className="text-center mt-2">
          <p className="text-xs text-gray-500">
            Made with 💖 for every woman's health journey
          </p>
          <p className="text-xs text-gray-500 font-medium">
            StriSethu - Your caring digital sister
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;