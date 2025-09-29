import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { WellnessProvider } from './context/WellnessContext';
import ProfileScreen from './components/ProfileScreen';
import TipsBoard from './components/TipsBoard';
import TipDetail from './components/TipDetail';
import SavedTips from './components/SavedTips';
import { generateTips, regenerateTips } from './utils/aiService';

function App() {
  const [screen, setScreen] = useState('profile');
  const [profile, setProfile] = useState(null);
  const [tips, setTips] = useState([]);
  const [selectedTip, setSelectedTip] = useState(null);
  const [savedTips, setSavedTips] = useState([]);

  const handleProfileComplete = (profileData) => {
    setProfile(profileData);
    const generatedTips = generateTips(profileData);
    setTips(generatedTips);
    setScreen('board');
  };

  const handleRegenerate = () => {
    const newTips = regenerateTips(profile);
    setTips(newTips);
  };

  const handleSelectTip = (tip) => {
    setSelectedTip(tip);
    setScreen('detail');
  };

  const handleSaveTip = () => {
    if (savedTips.find(t => t.id === selectedTip.id)) {
      setSavedTips(savedTips.filter(t => t.id !== selectedTip.id));
    } else {
      setSavedTips([...savedTips, selectedTip]);
    }
  };

  const handleBack = () => {
    setScreen('board');
    setSelectedTip(null);
  };

  const handleBackToHome = () => {
    setScreen('profile');
    setSelectedTip(null);
  };

  const handleViewSaved = () => {
    setScreen('saved');
  };

  const contextValue = {
    profile,
    tips,
    savedTips,
    selectedTip
  };

  return (
    <WellnessProvider value={contextValue}>
      <div className="relative">
        {screen === 'profile' && <ProfileScreen onComplete={handleProfileComplete} />}
        
        {screen === 'board' && (
          <>
            <TipsBoard
              tips={tips}
              onSelectTip={handleSelectTip}
              onRegenerate={handleRegenerate}
              profile={profile}
              onBackToHome={handleBackToHome}
            />
            {savedTips.length > 0 && (
              <button
                onClick={handleViewSaved}
                className="fixed bottom-8 right-8 flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-110 transition-all z-50"
              >
                <Heart className="w-5 h-5 fill-current" />
                <span className="font-semibold">{savedTips.length}</span>
              </button>
            )}
          </>
        )}
        
        {screen === 'detail' && (
          <TipDetail
            tip={selectedTip}
            onBack={handleBack}
            onSave={handleSaveTip}
            isSaved={savedTips.some(t => t.id === selectedTip.id)}
            onBackToHome={handleBackToHome}
          />
        )}
        
        {screen === 'saved' && (
          <SavedTips
            savedTips={savedTips}
            onSelectTip={handleSelectTip}
            onBack={handleBack}
            onBackToHome={handleBackToHome}
          />
        )}
      </div>
    </WellnessProvider>
  );
}

export default App;