import React from 'react';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';

const SavedTips = ({ savedTips, onSelectTip, onBack, onBackToHome }) => {
  return (
    <div className="min-h-screen relative p-4 md:p-8 overflow-hidden">
      {/* Motivational Exercise Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-88 h-88 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagon" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
                <polygon points="28,0 56,15 56,45 28,60 0,45 0,15" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagon)"/>
          </svg>
        </div>
        {/* Floating Hearts and Fitness Icons */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 text-6xl opacity-10 animate-bounce" style={{animationDuration: '3s'}}>❤️</div>
          <div className="absolute top-1/3 right-16 text-5xl opacity-10 animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}>⭐</div>
          <div className="absolute bottom-20 left-1/4 text-7xl opacity-10 animate-bounce" style={{animationDuration: '3.5s', animationDelay: '1s'}}>💪</div>
          <div className="absolute bottom-1/3 right-1/4 text-6xl opacity-10 animate-bounce" style={{animationDuration: '4.5s', animationDelay: '1.5s'}}>🎯</div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:gap-3 transition-all"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span className="font-medium">Back to Tips</span>
          </button>
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Home</span>
          </button>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Saved Tips</h2>
          <p className="text-blue-200">Your favorite wellness recommendations</p>
        </div>

        {savedTips.length === 0 ? (
          <div className="text-center py-16 bg-white/10 backdrop-blur-sm rounded-3xl">
            <Heart className="w-16 h-16 text-white/50 mx-auto mb-4" />
            <p className="text-white text-lg">No saved tips yet</p>
            <p className="text-blue-200">Tap the heart icon to save your favorites</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedTips.map((tip) => (
              <div
                key={tip.id}
                onClick={() => onSelectTip(tip)}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{tip.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{tip.title}</h3>
                <p className="text-gray-600 mb-4">{tip.short}</p>
                <div className="flex items-center text-purple-600 font-medium group-hover:gap-3 transition-all">
                  View details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedTips;