// メインコンポーネント（仮）
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* 他のセクションは後で追加 */}
    </div>
  );
}

export default App;
