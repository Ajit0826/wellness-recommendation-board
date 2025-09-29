import React, { useState } from 'react';
import { Sparkles, ArrowRight, Apple, Zap, Moon, Droplets, Brain, Dumbbell } from 'lucide-react';

const goals = [
  { id: 'weight', label: 'Weight Management', icon: Apple },
  { id: 'energy', label: 'Boost Energy', icon: Zap },
  { id: 'sleep', label: 'Better Sleep', icon: Moon },
  { id: 'hydration', label: 'Stay Hydrated', icon: Droplets },
  { id: 'mental', label: 'Mental Wellness', icon: Brain },
  { id: 'exercise', label: 'Fitness & Exercise', icon: Dumbbell }
];

const ProfileScreen = ({ onComplete }) => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');

  const handleSubmit = () => {
    if (age && gender && selectedGoal) {
      onComplete({ age, gender, goal: selectedGoal });
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Exercise Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-pink-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-44 h-44 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
        {/* Exercise Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="exercise-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="white" opacity="0.5"/>
                <circle cx="75" cy="75" r="2" fill="white" opacity="0.5"/>
                <path d="M 30 30 L 40 40 M 60 60 L 70 70" stroke="white" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#exercise-pattern)"/>
          </svg>
        </div>
        {/* Floating Icons Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 text-6xl opacity-10 animate-bounce" style={{animationDuration: '3s'}}>💪</div>
          <div className="absolute top-1/3 right-1/4 text-5xl opacity-10 animate-bounce" style={{animationDuration: '4s', animationDelay: '0.5s'}}>🏃</div>
          <div className="absolute bottom-1/4 left-1/3 text-7xl opacity-10 animate-bounce" style={{animationDuration: '3.5s', animationDelay: '1s'}}>🧘</div>
          <div className="absolute bottom-1/3 right-1/3 text-6xl opacity-10 animate-bounce" style={{animationDuration: '4.5s', animationDelay: '1.5s'}}>⚡</div>
        </div>
      </div>
      
      <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-transform duration-300">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Wellness AI</h1>
          <p className="text-gray-600">Personalized health recommendations</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              placeholder="Enter your age"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
            <div className="grid grid-cols-3 gap-3">
              {['Male', 'Female', 'Other'].map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`py-3 rounded-xl font-medium transition-all ${
                    gender === g
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Wellness Goal</label>
            <div className="space-y-2">
              {goals.map((goal) => {
                const Icon = goal.icon;
                return (
                  <button
                    key={goal.id}
                    onClick={() => setSelectedGoal(goal.id)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all ${
                      selectedGoal === goal.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{goal.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!age || !gender || !selectedGoal}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
          >
            Generate My Tips
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;