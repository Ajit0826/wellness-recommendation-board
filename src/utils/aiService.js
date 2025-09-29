import { tipsDatabase } from '../data/tipsData';

export const generateTips = (profile) => {
  // Simulate AI generation by selecting tips based on goal
  const selectedTips = tipsDatabase[profile.goal] || tipsDatabase.weight;
  
  // Return 5 tips for the selected goal
  return selectedTips.slice(0, 5);
};

export const regenerateTips = (profile) => {
  // Simulate regeneration by shuffling and selecting different tips
  const allTips = tipsDatabase[profile.goal] || tipsDatabase.weight;
  const shuffled = [...allTips].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
};