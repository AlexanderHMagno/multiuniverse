import { create } from 'zustand';
import type { GameState } from '../types/game';
import { gameData } from '../types/game';

interface GameStore extends GameState {
  makeChoice: (key: string) => void;
  resetGame: () => void;
  timeTravel: (step: number) => void;
}

const initialState: GameState = {
  round: 0,
  path: [],
  isGameOver: false,
  result: null,
  ending: undefined,
  isDarkPath: false,
};

export const useGameStore = create<GameStore>((set) => ({
  ...initialState,
  makeChoice: (key: string) => {
    set((state) => {
      const currentRound = gameData[state.round];
      const choice = currentRound.choices.find((c) => c.key === key);
      
      if (!choice) return state;
      
      const newPath = [...state.path.slice(0, state.round), key];
      const isLastRound = state.round === gameData.length - 1;
      
      // Handle dark path transition
      if (choice.result === 'dark' && !state.isDarkPath) {
        return {
          ...state,
          round: state.round + 1,
          path: newPath,
          isDarkPath: true,
        };
      }

      // Handle redemption path
      if (choice.result === 'valid' && state.isDarkPath) {
        return {
          ...state,
          round: state.round + 1,
          path: newPath,
          isDarkPath: false,
        };
      }
      
      // Handle final round
      if (isLastRound) {
        return {
          ...state,
          path: newPath,
          isGameOver: true,
          result: choice.result === 'valid' ? 'success' : 'dark',
          ending: choice.ending,
        };
      }
      
      // Continue to next round
      return {
        ...state,
        round: state.round + 1,
        path: newPath,
      };
    });
  },
  timeTravel: (step: number) => {
    set((state) => {
      if (step >= state.path.length || step < 0) return state;
      
      // When time traveling, check if we need to switch paths
      const newPath = state.path.slice(0, step + 1);
      let isDarkPath = false;
      
      // Recalculate isDarkPath based on choices up to this point
      for (let i = 0; i <= step; i++) {
        const round = gameData[i];
        const choice = round.choices.find(c => c.key === newPath[i]);
        if (choice?.result === 'dark') isDarkPath = true;
        if (choice?.result === 'valid') isDarkPath = false;
      }

      return {
        ...state,
        round: step + 1,
        path: newPath,
        isGameOver: false,
        result: null,
        ending: undefined,
        isDarkPath,
      };
    });
  },
  resetGame: () => {
    set(initialState);
  },
})); 