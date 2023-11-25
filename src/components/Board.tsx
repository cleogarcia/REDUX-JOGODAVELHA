import React from 'react';
import { connect } from 'react-redux';
import { RootState, GameAction } from '../redux/types';
import { makeMove } from '../redux/actions';
import Square from './Square';
import GameStatus from './GameStatus'; // Importe o componente GameStatus

interface BoardProps {
  squares: string[];
  onClick: (i: number) => void;
  status: string; // Adicione a propriedade status
}

const Board: React.FC<BoardProps> = ({ squares, onClick, status }) => {
  const renderSquare = (i: number) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div className="board">
      <GameStatus status={status} /> {/* Renderiza o componente GameStatus */}
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    squares: state.squares,
    status: state.status, // Mapeie o status do estado Redux para a propriedade status
  };
};

const mapDispatchToProps = (dispatch: (action: GameAction) => void) => {
  return {
    onClick: (i: number) => dispatch(makeMove(i)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);