import { create } from 'zustand';
import type { GameState } from '../types/game';
import { gameData, getTitleByMorality } from '../types/game';

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
  goodChoices: 0,
  evilChoices: 0,
  title: undefined,
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
      
      // Update morality counters
      const newGoodChoices = state.goodChoices + (choice.morality === 'good' ? 1 : 0);
      const newEvilChoices = state.evilChoices + (choice.morality === 'evil' ? 1 : 0);
      
      // Handle final round
      if (isLastRound) {
        return {
          ...state,
          path: newPath,
          isGameOver: true,
          result: choice.result === 'valid' ? 'success' : 'dark',
          goodChoices: newGoodChoices,
          evilChoices: newEvilChoices,
          title: getTitleByMorality(newGoodChoices),
        };
      }
      
      // Continue to next round
      return {
        ...state,
        round: state.round + 1,
        path: newPath,
        goodChoices: newGoodChoices,
        evilChoices: newEvilChoices,
      };
    });
  },
  timeTravel: (step: number) => {
    set((state) => {
      if (step >= state.path.length || step < 0) return state;
      
      // Recalculate morality up to this point
      const newPath = state.path.slice(0, step + 1);
      let goodChoices = 0;
      let evilChoices = 0;
      
      // Count good and evil choices up to this point
      for (let i = 0; i <= step; i++) {
        const round = gameData[i];
        const choice = round.choices.find(c => c.key === newPath[i]);
        if (choice?.morality === 'good') goodChoices++;
        if (choice?.morality === 'evil') evilChoices++;
      }

      return {
        ...state,
        round: step + 1,
        path: newPath,
        isGameOver: false,
        result: null,
        ending: undefined,
        goodChoices,
        evilChoices,
        title: undefined,
      };
    });
  },
  resetGame: () => {
    set(initialState);
  },
})); 