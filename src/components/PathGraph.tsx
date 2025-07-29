import React from 'react';
import { motion } from 'framer-motion';
import { gameData } from '../types/game';

interface PathGraphProps {
  path: string[];
  currentStep: number;
  onNodeClick: (step: number) => void;
}

export const PathGraph = ({ path, currentStep, onNodeClick }: PathGraphProps) => {
  // Function to get the label for a choice
  const getChoiceLabel = (step: number, key: string) => {
    const round = gameData[step];
    const choice = round?.choices.find(c => c.key === key);
    return choice?.label || '';
  };

  return (
    <div className="card bg-base-200/50 backdrop-blur-sm shadow-xl">
      <div className="card-body p-4">
        <h3 className="card-title text-primary justify-center mb-6">Journey Map</h3>
        
        {/* Path visualization */}
        <div className="flex flex-col items-center gap-4">
          {path.map((choice, index) => (
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
                  className={`
                    w-full rounded-lg p-4 flex flex-col items-center gap-2
                    transition-all duration-300
                    ${index === currentStep ? 'bg-primary text-primary-content ring-2 ring-primary-focus' : 'bg-base-300 hover:bg-base-100'}
                    ${index < currentStep ? 'cursor-pointer' : 'cursor-default'}
                  `}
                >
                  <span className="text-2xl font-bold">{choice}</span>
                  <span className="text-sm text-center">{getChoiceLabel(index, choice)}</span>
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
          ))}
        </div>

        {/* Legend */}
        <div className="divider my-6"></div>
        <div className="flex justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span>Current Step</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-base-300"></div>
            <span>Previous Steps</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 