import React from 'react';
import { motion } from 'framer-motion';

interface PathGraphProps {
  path: string[];
  currentStep: number;
  onNodeClick: (step: number) => void;
}

export const PathGraph = ({ path, currentStep, onNodeClick }: PathGraphProps) => {
  return (
    <div className="card bg-base-200/50 backdrop-blur-sm shadow-xl">
      <div className="card-body p-4">
        <h3 className="card-title text-primary justify-center mb-6">Journey Map</h3>
        
        {/* Path visualization */}
        <div className="flex flex-col items-center gap-4">
          {path.map((choice, index) => (
            <React.Fragment key={index}>
              {/* Node */}
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNodeClick(index)}
                className={`
                  w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg
                  transition-all duration-300 relative group
                  ${index === currentStep ? 'bg-primary text-primary-content ring-2 ring-primary-focus' : 'bg-base-300 hover:bg-base-100'}
                  ${index < currentStep ? 'cursor-pointer' : 'cursor-default'}
                `}
              >
                {choice}
                {/* Tooltip */}
                <span className="absolute -right-32 transform 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-200
                               text-sm bg-base-300 px-3 py-1.5 rounded-lg whitespace-nowrap">
                  Step {index + 1}
                </span>
              </motion.button>

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
        <div className="flex flex-col gap-3 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span>Current Step</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-base-300"></div>
            <span>Click to go back</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 