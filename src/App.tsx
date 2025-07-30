import React, { useState } from 'react';
import { GameScreen } from './components/GameScreen';
import { TitlesList } from './components/TitlesList';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<'game' | 'titles'>('game');

  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-base-200/50 backdrop-blur-sm sticky top-0 z-50 mb-8">
        <div className="navbar-start">
          <div className="text-2xl font-bold text-primary">Dimensional Choices</div>
        </div>
        <div className="navbar-center">
          <div className="tabs tabs-boxed bg-base-300/50">
            <button 
              className={`tab ${activeTab === 'game' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('game')}
            >
              Play Game
            </button>
            <button 
              className={`tab ${activeTab === 'titles' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('titles')}
            >
              View Titles
            </button>
          </div>
        </div>
        <div className="navbar-end">
          <div className="badge badge-ghost">v1.0</div>
        </div>
      </div>

      <main className="container mx-auto pb-16">
        {activeTab === 'game' ? <GameScreen /> : <TitlesList />}
      </main>
    </div>
  );
}

export default App;
