import React from 'react';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';

const TipDetail = ({ tip, onBack, onSave, isSaved, onBackToHome }) => {
  return (
    <div className="min-h-screen relative p-4 md:p-8 overflow-hidden">
      {/* Dynamic Exercise Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-10 w-80 h-80 bg-yellow-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, white 0, white 1px, transparent 1px, transparent 10px)'}}></div>
        {/* Exercise Emojis */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 text-8xl opacity-10 animate-bounce" style={{animationDuration: '3s'}}>💪</div>
          <div className="absolute bottom-1/3 left-1/4 text-7xl opacity-10 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>🔥</div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
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

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="text-6xl">{tip.icon}</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{tip.title}</h2>
                <p className="text-gray-600 mt-1">{tip.short}</p>
              </div>
            </div>
            <button
              onClick={onSave}
              className={`p-3 rounded-xl transition-all ${
                isSaved
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-pink-100'
              }`}
            >
              <Heart className={`w-6 h-6 ${isSaved ? 'fill-current' : ''}`} />
            </button>
          </div>

          <div className="prose max-w-none">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Why This Works</h3>
              <p className="text-gray-700 leading-relaxed">{tip.full}</p>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Step-by-Step Guide</h3>
              <div className="space-y-3">
                {tip.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipDetail;