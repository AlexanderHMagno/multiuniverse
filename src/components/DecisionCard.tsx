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
      whileHover={!isRevealed ? { scale: 1.02 } : {}}
      onClick={() => !isRevealed && onSelect(choice.key)}
      className={`
        card w-full bg-base-300 shadow-xl hover:shadow-2xl transition-all duration-300
        ${isSelected ? 'ring-2 ring-primary ring-offset-2 ring-offset-base-100' : ''}
        ${isRevealed && choice.result === 'valid' ? 'bg-success/10 border border-success/30' : ''}
        ${isRevealed && choice.result === 'fail' ? 'bg-error/10 border border-error/30' : ''}
      `}
    >
      <div className="card-body relative overflow-hidden p-6">
        {/* Glowing effect for selected card */}
        {isSelected && (
          <div className="absolute inset-0 bg-primary/5 animate-pulse" />
        )}

        {/* Card header */}
        <div className="flex items-center gap-4">
          <div className={`
            avatar placeholder
            ${isSelected ? 'bg-primary/20 ring-2 ring-primary/50' : 'bg-base-content/5'}
            rounded-full transition-all duration-300
          `}>
            <div className="w-12 h-12 flex items-center justify-center text-xl font-bold">
              {choice.key}
            </div>
          </div>
          <h3 className={`
            card-title flex-1
            ${isSelected ? 'text-primary' : 'text-base-content'}
          `}>

<span className="flex items-center gap-2">
              {choice.result === 'valid' 
                ? '✨' 
                : '⚠️' 
              }
            {choice.label}
              </span>
          </h3>
        </div>

        {/* Card content */}
        {isRevealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.4 }}
            className="mt-6 space-y-4"
          >
            <div className="divider my-2"></div>
            <p className="text-base-content/80 text-lg leading-relaxed">
              {choice.description}
            </p>
            <div className={`
              badge badge-lg gap-2 mt-4
              ${choice.result === 'valid' 
                ? 'badge-success badge-outline' 
                : 'badge-error badge-outline'}
            `}>
           
            </div>
          </motion.div>
        )}

        {/* Hover indicator */}
        {!isRevealed && (
          <div className="absolute bottom-4 right-4 opacity-50">
            <div className="badge badge-ghost gap-2">
              Click to choose
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </div>
          </div>
        )}

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -mr-16 -mt-16 opacity-50"></div>
        {isSelected && (
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-full -ml-12 -mb-12"></div>
        )}
      </div>
    </motion.div>
  );
}; 