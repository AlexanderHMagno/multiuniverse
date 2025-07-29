import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { gameData } from '../types/game';
import { DecisionCard } from './DecisionCard';

export const GameScreen = () => {
  const { round, path, isGameOver, result, makeChoice, resetGame } = useGameStore();
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

  if (isGameOver) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="card glass bg-base-200/50 shadow-xl">
          <div className="card-body">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-center space-y-6"
            >
              <h2 className={`
                text-4xl font-bold
                ${result === 'success' ? 'text-success' : 'text-error'}
              `}>
                {result === 'success' ? '🌟 Congratulations!' : '💀 Game Over'}
              </h2>

              <div className="divider"></div>

              {/* Journey visualization */}
              <div className="card bg-base-300/50 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title text-primary mb-4">Your Journey</h3>
                  <div className="flex flex-wrap gap-3 items-center justify-center">
                    {path.map((key, index) => (
                      <div key={index} className="flex items-center">
                        <div className="badge badge-primary badge-lg font-bold">
                          {key}
                        </div>
                        {index < path.length - 1 && (
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2 text-base-content/30">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xl text-base-content/80">
                {result === 'success' 
                  ? "You've successfully escaped the multiverse trap!"
                  : "Your journey ends here, but there are other paths to explore..."}
              </p>

              <button
                onClick={resetGame}
                className="btn btn-primary btn-lg gap-2 w-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                Explore Another Path
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <motion.div
          key={currentRound.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="card bg-base-200/50 glass shadow-lg mb-8">
            <div className="card-body py-8">
              <h2 className="card-title text-3xl justify-center text-primary mb-4">
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
        <AnimatePresence mode="wait">
          {currentRound.choices.map((choice) => (
            <motion.div 
              key={choice.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DecisionCard
                choice={choice}
                onSelect={handleChoice}
                isSelected={selectedKey === choice.key}
                isRevealed={selectedKey !== null}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* Confirmation button */}
      {selectedKey && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={handleConfirm}
            className="btn btn-primary btn-lg gap-2"
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
        <div className="badge badge-lg gap-2 glass">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
          <span className="font-medium">Round {round + 1} of {gameData.length}</span>
        </div>
      </motion.div>
    </div>
  );
}; 