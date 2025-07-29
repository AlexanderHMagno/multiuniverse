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
  timeTravel: (step: number) => {
    set((state) => {
      if (step >= state.path.length || step < 0) return state;
      
      return {
        ...state,
        round: step,
        path: state.path.slice(0, step),
        isGameOver: false,
        result: null,
      };
    });
  },
  resetGame: () => {
    set(initialState);
  },
})); 