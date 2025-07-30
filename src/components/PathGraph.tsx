import React from 'react';
import { motion } from 'framer-motion';
import { gameData } from '../types/game';
import { MoralityOrb } from './MoralityOrb';

interface PathGraphProps {
  path: string[];
  currentStep: number;
  onNodeClick: (step: number) => void;
}

const getNodeColor = (goodChoices: number, totalChoices: number): string => {
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

export const PathGraph = ({ path, currentStep, onNodeClick }: PathGraphProps) => {
  // Function to count good choices up to a specific step
  const countGoodChoicesUpTo = (step: number): number => {
    let count = 0;
    for (let i = 0; i <= step; i++) {
      const round = gameData[i];
      const choice = round?.choices.find(c => c.key === path[i]);
      if (choice?.morality === 'good') count++;
    }
    return count;
  };

  return (
    <div className="card backdrop-blur-sm shadow-xl">
      <div className="card-body p-4">
        <h3 className="card-title justify-center mb-6">Journey Map</h3>
        
        {/* Path visualization */}
        <div className="flex flex-col items-center gap-4">
          {path.map((choice, index) => {
            const goodChoices = countGoodChoicesUpTo(index);
            const color = getNodeColor(goodChoices, index + 1);
            const round = gameData[index];
            const choiceDetails = round?.choices.find(c => c.key === choice);

            return (
              <React.Fragment key={index}>
                {/* Node */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="relative group w-full"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onNodeClick(index)}
                    className="w-full rounded-lg p-4 flex items-center gap-4 bg-base-200/50 hover:bg-base-100/50 transition-all duration-300"
                  >
                    <MoralityOrb color={color} size="sm" showGlow={false} />
                    <div className="flex-1 text-left">
                      <div className="font-bold">{choiceDetails?.label}</div>
                      <div className="text-sm opacity-70">Step {index + 1}</div>
                    </div>
                  </motion.button>
                </motion.div>

                {/* Connector */}
                {index < path.length - 1 && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="h-8 w-0.5 bg-base-300"
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}; 