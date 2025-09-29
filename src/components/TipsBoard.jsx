import React from 'react';
import { RefreshCw, ArrowRight } from 'lucide-react';

const TipsBoard = ({ tips, onSelectTip, onRegenerate, profile, onBackToHome }) => {
  const goalLabels = {
    weight: 'Weight Management',
    energy: 'Boost Energy',
    sleep: 'Better Sleep',
    hydration: 'Stay Hydrated',
    mental: 'Mental Wellness',
    exercise: 'Fitness & Exercise'
  };

  return (
    <div className="min-h-screen relative p-4 md:p-8 overflow-hidden">
      {/* Exercise-themed Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
        {/* Floating Exercise Emojis */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-6xl opacity-10 animate-bounce" style={{animationDuration: '4s'}}>🏋️</div>
          <div className="absolute top-20 right-20 text-5xl opacity-10 animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>🚴</div>
          <div className="absolute bottom-20 left-20 text-7xl opacity-10 animate-bounce" style={{animationDuration: '4.5s', animationDelay: '1s'}}>💪</div>
          <div className="absolute bottom-10 right-10 text-6xl opacity-10 animate-bounce" style={{animationDuration: '3s', animationDelay: '1.5s'}}>🏃</div>
          <div className="absolute top-1/2 left-1/4 text-5xl opacity-10 animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}}>🧘</div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <button
          onClick={onBackToHome}
          className="mb-4 flex items-center gap-2 text-white hover:gap-3 transition-all hover:text-cyan-300"
        >
          <ArrowRight className="w-5 h-5 rotate-180" />
          <span className="font-medium">Back to Home</span>
        </button>

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Your Wellness Tips</h2>
            <p className="text-cyan-200">Tailored for your {goalLabels[profile.goal]?.toLowerCase()} goal</p>
          </div>
          <button
            onClick={onRegenerate}
            className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <RefreshCw className="w-4 h-4" />
            <span className="font-medium">Regenerate</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={tip.id}
              onClick={() => onSelectTip(tip)}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{tip.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{tip.title}</h3>
              <p className="text-gray-600 mb-4">{tip.short}</p>
              <div className="flex items-center text-purple-600 font-medium group-hover:gap-3 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipsBoard;