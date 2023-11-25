import React from 'react';
import { RootState } from '../redux/types';
import { connect, ConnectedProps } from 'react-redux'; // Importe ConnectedProps para usar o mapDispatchToProps de forma tipada
import { startNewGame } from '../redux/actions';

// Define a propriedade de status para o componente
interface GameStatusProps {
  status: string;
  startNewGame: () => void;
}

const GameStatus: React.FC<GameStatusProps> = ({ status, startNewGame }) => {
  const handleNewGameClick = () => {
    startNewGame(); 
    window.location.reload();
  };

  return (
    <div className="game-status">
      <p>Status do jogo: {status}</p>
      {status !== 'Em andamento' && (
        <button onClick={handleNewGameClick}>Iniciar Nova Partida</button>
      )}
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  return {
    status: state.status,
  };
};


const mapDispatchToProps = {
  startNewGame,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;


export default connector(GameStatus);