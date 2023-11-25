//App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import Board from './components/Board';
import store from './redux/store';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Jogo da Velha</h1>
        <Board />
      </div>
    </Provider>
  );
};

export default App;
 