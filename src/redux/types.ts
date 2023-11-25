//types.ts
export enum ActionType {
  MAKE_MOVE = 'MAKE_MOVE',
}

export interface GameAction {
  type: ActionType;
  payload: number;
}

export interface RootState {
  squares: string[];
  xIsNext: boolean;
  status: string;
}