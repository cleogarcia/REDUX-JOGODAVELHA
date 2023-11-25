// actions.ts

import { ActionType } from './types';

export const MAKE_MOVE = 'MAKE_MOVE';
export const START_NEW_GAME = 'START_NEW_GAME'; // Adicione uma nova constante para a ação

export const makeMove = (index: number): ActionType => {
  return {
    type: MAKE_MOVE,
    payload: index,
  };
};

export const startNewGame = (): ActionType => {
  return {
    type: START_NEW_GAME,
    payload: null, // Se necessário, ajuste o payload para reiniciar o jogo
  };
};