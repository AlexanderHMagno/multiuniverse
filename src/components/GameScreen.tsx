import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { gameData } from '../types/game';
import { DecisionCard } from './DecisionCard';
import { PathGraph } from './PathGraph';

export const GameScreen = () => {
  const { round, path, isGameOver, result, ending, isDarkPath, makeChoice, resetGame, timeTravel } = useGameStore();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const currentRound = gameData[round];

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
            <div className={`card backdrop-blur-sm shadow-xl mb-8 ${result === 'dark' ? 'bg-base-300/50 border-2 border-error/50' : 'bg-base-200/50'}`}>
              <div className="card-body">
                <h2 className={`card-title text-3xl justify-center mb-4 ${result === 'dark' ? 'text-error' : 'text-success'}`}>
                  {result === 'success' ? 'Journey Complete!' : 'Dark Ascension Complete!'}
                </h2>
                <p className="text-xl mb-6 text-center">
                  {ending}
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={resetGame}
                    className={`btn btn-lg gap-2 ${result === 'dark' ? 'btn-error' : 'btn-primary'}`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
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
              isDarkPath={isDarkPath}
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
              <div className={`card glass shadow-lg mb-8 ${isDarkPath ? 'bg-base-300/50 border border-error/30' : 'bg-base-200/50'}`}>
                <div className="card-body py-8">
                  <h2 className={`card-title text-3xl justify-center mb-4 ${isDarkPath ? 'text-error' : 'text-primary'}`}>
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
                    className={`btn btn-lg btn-outline h-auto py-6 flex flex-col gap-2 
                      ${isDarkPath && choice.result === 'dark' ? 'border-error hover:bg-error' : ''}`}
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
                    isDarkPath={isDarkPath}
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
                className="btn btn-ghost btn-lg"
              >
                Choose Different Path
              </button>
              <button
                onClick={handleConfirm}
                className={`btn btn-lg gap-2 ${isDarkPath ? 'btn-error' : 'btn-primary'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                Continue with this path
              </button>
            </motion.div>
          )}
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center"
          >
            <div className={`badge badge-lg gap-2 glass ${isDarkPath ? 'border-error' : ''}`}>
              <span className={`w-2 h-2 rounded-full animate-pulse ${isDarkPath ? 'bg-error' : 'bg-primary'}`}></span>
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
            isDarkPath={isDarkPath}
          />
        </div>
      </div>
    </div>
  );
}; 