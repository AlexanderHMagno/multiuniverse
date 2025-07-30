import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { gameData } from '../types/game';
import { DecisionCard } from './DecisionCard';
import { PathGraph } from './PathGraph';
import { MoralityOrb } from './MoralityOrb';

const getCardColorByGoodChoices = (goodChoices: number, totalChoices: number): string => {
  // Calculate the equivalent score out of 10 for consistent coloring
  const ratio = totalChoices === 0 ? 1 : (goodChoices / totalChoices);
  const scoreOutOf10 = Math.round(ratio * 10);

  switch (scoreOutOf10) {
    case 10:
      return 'bg-sky-200 border-sky-200';
    case 9:
      return 'bg-sky-300 border-sky-200';
    case 8:
      return 'bg-sky-200 border-sky-300';
    case 7:
      return 'bg-indigo-300 border-indigo-400';
    case 6:
      return 'bg-indigo-400 border-indigo-500';
    case 5:
      return 'bg-orange-400 border-orange-500';
    case 4:
      return 'bg-orange-500 border-orange-600';
    case 3:
      return 'bg-red-500 border-red-600';
    case 2:
      return 'bg-red-600 border-red-700';
    case 1:
      return 'bg-red-700 border-red-800';
    case 0:
      return 'bg-red-800 border-red-900';
    default:
      return 'bg-base-200 border-base-300';
  }
};

const getTextColorByGoodChoices = (goodChoices: number, totalChoices: number): string => {
  const ratio = totalChoices === 0 ? 1 : (goodChoices / totalChoices);
  const scoreOutOf10 = Math.round(ratio * 10);

  if (scoreOutOf10 >= 7) {
    return 'text-sky-950';
  } else if (scoreOutOf10 >= 4) {
    return 'text-white';
  } else {
    return 'text-red-100';
  }
};

export const GameScreen = () => {
  const { 
    round, 
    path, 
    isGameOver, 
    result, 
    title,
    goodChoices,
    makeChoice, 
    resetGame, 
    timeTravel 
  } = useGameStore();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const currentRound = gameData[round];

  const totalChoices = path.length;
  const cardColor = getCardColorByGoodChoices(goodChoices, totalChoices);
  const textColor = getTextColorByGoodChoices(goodChoices, totalChoices);

  const handleChoice = (key: string) => {
    setSelectedKey(key);
  };

  const handleConfirm = () => {
    if (selectedKey) {
      makeChoice(selectedKey);
      setSelectedKey(null);
    }
  };

  const handleTimeTravel = (step: number) => {
    if (step < round) {
      timeTravel(step);
      setSelectedKey(null);
    }
  };

  if (isGameOver) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="card backdrop-blur-sm shadow-xl mb-8">
              <div className="card-body items-center text-center">
                <MoralityOrb color={cardColor} size="lg" />
                <p className="text-lg mb-2">Based on your decisions, you have been awarded the title of</p>
                <h2 className="card-title text-4xl mb-8 font-bold">
                  {title}
                </h2>
                <div className="flex justify-center">
                  <button
                    onClick={resetGame}
                    className="btn btn-lg gap-2 glass btn-primary"
                  >
                    Start New Journey
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3 lg:sticky lg:top-4 lg:self-start">
            <PathGraph
              path={path}
              currentStep={path.length - 1}
              onNodeClick={handleTimeTravel}
            />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left side - Game content */}
        <div className="lg:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <motion.div
              key={currentRound.title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="card glass shadow-xl mb-8">
                <div className="card-body py-8">
                  <div className="flex justify-center mb-6">
                    <MoralityOrb color={cardColor} size="lg" />
                  </div>
                  <h2 className="card-title text-3xl justify-center mb-4">
                    {currentRound.title}
                  </h2>
                  <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
                    {currentRound.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="space-y-6">
            {!selectedKey ? (
              // Show all cards as small buttons when none is selected
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentRound.choices.map((choice) => (
                  <motion.button
                    key={choice.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleChoice(choice.key)}
                    className="btn btn-lg btn-outline h-auto py-6 flex flex-col gap-2 glass"
                  >
                    <span className="text-2xl font-bold">{choice.key}</span>
                    <span className="text-sm opacity-80">{choice.label}</span>
                  </motion.button>
                ))}
              </div>
            ) : (
              // Show only the selected card
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedKey}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <DecisionCard
                    choice={currentRound.choices.find(c => c.key === selectedKey)!}
                    onSelect={() => setSelectedKey(null)}
                    isSelected={true}
                    isRevealed={true}
                  />
                </motion.div>
              </AnimatePresence>
            )}
          </div>
          
          {/* Confirmation button */}
          {selectedKey && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 flex justify-center gap-4"
            >
              <button
                onClick={() => setSelectedKey(null)}
                className="btn btn-ghost btn-lg glass"
              >
                Choose Different Path
              </button>
              <button
                onClick={handleConfirm}
                className="btn btn-primary btn-lg gap-2 glass"
              >
                Continue with this path
              </button>
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <div className="badge badge-lg gap-2 glass">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="font-medium">Step {round + 1} of {gameData.length}</span>
            </div>
          </motion.div>
        </div>

        {/* Right side - Path Graph */}
        <div className="lg:w-1/3 lg:sticky lg:top-4 lg:self-start">
          <PathGraph
            path={path}
            currentStep={round}
            onNodeClick={handleTimeTravel}
          />
        </div>
      </div>
    </div>
  );
}; 