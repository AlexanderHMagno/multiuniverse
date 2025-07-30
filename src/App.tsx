import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameScreen } from './components/GameScreen';
import { TitlesList } from './components/TitlesList';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<'game' | 'titles'>('game');

  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-base-200/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="navbar-start">
          <motion.div 
            className="text-2xl font-bold text-primary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Dimensional Choices
          </motion.div>
        </div>
        <div className="navbar-center">
          <div className="tabs tabs-boxed bg-base-300/50 p-1">
            <motion.button 
              className={`relative tab tab-lg px-8 transition-colors duration-200 ${activeTab === 'game' ? 'text-primary font-bold' : 'hover:text-primary'}`}
              onClick={() => setActiveTab('game')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Play Game</span>
              {activeTab === 'game' && (
                <motion.div
                  className="absolute inset-0 bg-base-100 rounded-btn"
                  layoutId="tab-background"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
            <motion.button 
              className={`relative tab tab-lg px-8 transition-colors duration-200 ${activeTab === 'titles' ? 'text-primary font-bold' : 'hover:text-primary'}`}
              onClick={() => setActiveTab('titles')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Titles</span>
              {activeTab === 'titles' && (
                <motion.div
                  className="absolute inset-0 bg-base-100 rounded-btn"
                  layoutId="tab-background"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          </div>
        </div>
        <div className="navbar-end">
          <motion.div 
            className="badge badge-primary badge-outline gap-2 p-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            v1.0
          </motion.div>
        </div>
      </div>

      <main className="container mx-auto pb-16 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'game' ? <GameScreen /> : <TitlesList />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
