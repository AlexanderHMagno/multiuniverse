import React from 'react';
import { motion } from 'framer-motion';
import type { Choice } from '../types/game';

interface DecisionCardProps {
  choice: Choice;
  onSelect: (key: string) => void;
  isSelected: boolean;
  isRevealed: boolean;
}

export const DecisionCard = ({ choice, onSelect, isSelected, isRevealed }: DecisionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={!isRevealed ? { scale: 1.02, transition: { duration: 0.2 } } : {}}
      className={`
        relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300
        backdrop-blur-sm
        ${isSelected 
          ? 'bg-indigo-600/20 border-2 border-indigo-500/50 shadow-indigo-500/20' 
          : 'bg-white/10 hover:bg-white/20 border-2 border-transparent'
        }
        ${isRevealed 
          ? (choice.result === 'valid' 
              ? 'bg-green-600/20 border-green-500/50 shadow-green-500/20' 
              : 'bg-red-600/20 border-red-500/50 shadow-red-500/20') 
          : ''
        }
      `}
      onClick={() => !isRevealed && onSelect(choice.key)}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className={`
            text-lg font-mono font-bold mr-3 px-3 py-1 rounded-full
            ${isSelected ? 'bg-indigo-500/30' : 'bg-white/10'}
          `}>
            {choice.key}
          </span>
          <h3 className="text-xl font-bold">{choice.label}</h3>
        </div>
        
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg mt-4 leading-relaxed">
              {choice.description}
            </p>
            <div className={`
              mt-4 text-sm font-semibold inline-block px-3 py-1 rounded-full
              ${choice.result === 'valid' ? 'bg-green-500/30 text-green-300' : 'bg-red-500/30 text-red-300'}
            `}>
              {choice.result === 'valid' ? '✓ Valid Path' : '✗ Dead End'}
            </div>
          </motion.div>
        )}
      </div>
      
      {!isRevealed && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </motion.div>
  );
}; 