import { create } from 'zustand';
import type { GameState } from '../types/game';
import { gameData } from '../types/game';

interface GameStore extends GameState {
  makeChoice: (key: string) => void;
  resetGame: () => void;
}

const initialState: GameState = {
  round: 0,
  path: [],
  isGameOver: false,
  result: null,
};

export const useGameStore = create<GameStore>((set) => ({
  ...initialState,
  makeChoice: (key: string) => {
    set((state) => {
      const currentRound = gameData[state.round];
      const choice = currentRound.choices.find((c) => c.key === key);
      
      if (!choice) return state;
      
      const newPath = [...state.path, key];
      const isLastRound = state.round === gameData.length - 1;
      
      if (choice.result === 'fail') {
        return {
          ...state,
          path: newPath,
          isGameOver: true,
          result: 'fail',
        };
      }
      
      if (isLastRound && choice.result === 'valid') {
        return {
          ...state,
          path: newPath,
          isGameOver: true,
          result: 'success',
        };
      }
      
      return {
        ...state,
        round: state.round + 1,
        path: newPath,
      };
    });
  },
  resetGame: () => {
    set(initialState);
  },
})); 