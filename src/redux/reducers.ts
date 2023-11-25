import { RootState, GameAction, ActionType } from './types';

const calculateWinner = (squares: string[]): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }

  return null;
};

const initialState: RootState = {
  squares: Array(9).fill(null),
  xIsNext: true,
  status: 'Em andamento',
};

const gameReducer = (
  state: RootState = initialState,
  action: GameAction
): RootState => {
  switch (action.type) {
    case ActionType.MAKE_MOVE: {
      const squares = state.squares.slice();
      if (squares[action.payload] || calculateWinner(squares)) {
        return state;
      }
      squares[action.payload] = state.xIsNext ? 'X' : 'O';
      const winner = calculateWinner(squares);
      const status = winner
        ? `O jogador ${winner} venceu!`
        : squares.every((square) => square !== null)
        ? 'Empate'
        : 'Em andamento';

      return {
        ...state,
        squares,
        xIsNext: !state.xIsNext,
        status,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;