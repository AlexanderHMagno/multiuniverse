import React from 'react';
import { motion } from 'framer-motion';
import { GameScreen } from './components/GameScreen';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-base-300" data-theme="mytheme">
      <div className="hero min-h-screen bg-base-200 bg-opacity-50 backdrop-blur-sm">
        <div className="hero-content text-center">
          <div className="max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary">
                Forking Paths
              </h1>
              <p className="text-xl md:text-2xl text-base-content opacity-80">
                A Multiverse Game
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GameScreen />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
