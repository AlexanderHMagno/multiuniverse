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
    setTimeout(() => {
      makeChoice(key);
      setSelectedKey(null);
    }, 1500);
  };

  if (isGameOver) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-sm border-2 border-white/10"
      >
        <motion.h2 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className={`text-4xl font-bold mb-6 text-center ${
            result === 'success' 
              ? 'text-green-400' 
              : 'text-red-400'
          }`}
        >
          {result === 'success' ? '🌟 Congratulations! You escaped!' : '💀 Game Over'}
        </motion.h2>
        <div className="space-y-6">
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-indigo-300">Your Journey</h3>
            <p className="text-lg">
              {path.map((key, index) => (
                <span key={index} className="inline-flex items-center">
                  <span className="px-3 py-1 rounded-full bg-white/10">
                    {key}
                  </span>
                  {index < path.length - 1 && (
                    <span className="mx-2 text-white/40">→</span>
                  )}
                </span>
              ))}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetGame}
            className="w-full py-4 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 
              text-white font-bold text-lg transition-colors duration-200
              shadow-lg shadow-indigo-600/30"
          >
            Play Again
          </motion.button>
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
        <motion.h2
          key={currentRound.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300"
        >
          {currentRound.title}
        </motion.h2>
        <motion.p
          key={currentRound.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-indigo-200/80"
        >
          {currentRound.description}
        </motion.p>
      </motion.div>
      
      <div className="space-y-6">
        <AnimatePresence mode="wait">
          {currentRound.choices.map((choice) => (
            <div key={choice.key}>
              <DecisionCard
                choice={choice}
                onSelect={handleChoice}
                isSelected={selectedKey === choice.key}
                isRevealed={selectedKey !== null}
              />
            </div>
          ))}
        </AnimatePresence>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 text-center"
      >
        <span className="inline-block px-4 py-2 rounded-full bg-white/5 text-indigo-300 font-medium">
          Round {round + 1} of {gameData.length}
        </span>
      </motion.div>
    </div>
  );
}; 