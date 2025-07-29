import React from 'react';
import { motion } from 'framer-motion';
import type { Choice } from '../types/game';

interface DecisionCardProps {
  choice: Choice;
  onSelect: () => void;
  isSelected: boolean;
  isRevealed: boolean;
  isDarkPath?: boolean;
}

export const DecisionCard = ({ choice, onSelect, isSelected, isRevealed, isDarkPath }: DecisionCardProps) => {
  return (
    <motion.div
      whileHover={!isSelected ? { scale: 1.02 } : undefined}
      whileTap={!isSelected ? { scale: 0.98 } : undefined}
      onClick={() => !isSelected && onSelect()}
      className={`
        card shadow-lg cursor-pointer overflow-hidden
        ${isDarkPath ? 'bg-base-300/50 border border-error/30' : 'bg-base-200/50'}
        ${isSelected ? 'ring-2 ring-primary' : ''}
      `}
    >
      <div className="card-body">
        <div className="flex items-center gap-4">
          <div className={`
            w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold
            ${isDarkPath ? 'bg-error text-error-content' : 'bg-primary text-primary-content'}
          `}>
            {choice.key}
          </div>
          <h3 className="card-title flex-1">{choice.label}</h3>
        </div>

        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="mt-4 text-base-content/80">{choice.description}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}; 