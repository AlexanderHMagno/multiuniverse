import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameScreen } from './components/GameScreen';
import { TitlesList } from './components/TitlesList';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<'game' | 'titles'>('game');

  // Enforce dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#111827] text-gray-100 flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-48 bg-base-200 backdrop-blur-sm min-h-screen sticky top-0 border-r border-base-300/20">
        <motion.div 
          className="p-2 text-lg font-bold text-primary"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dimensional Choices
        </motion.div>
        
        {/* Journey Map Style Navigation */}
        <div className="flex flex-col items-center gap-2 p-2 relative">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-base-300/20 transform -translate-x-1/2" />
          
          {/* Game Node */}
          <div className="relative w-full">
            <motion.button 
              className={`relative w-full px-3 py-2 text-left transition-colors duration-200 rounded-lg border ${
                activeTab === 'game' 
                  ? 'border-primary/50 bg-base-300/20 text-primary font-bold shadow-md shadow-primary/10' 
                  : 'border-base-300/10 hover:border-primary/30 hover:bg-base-300/10'
              }`}
              onClick={() => setActiveTab('game')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  activeTab === 'game' ? 'bg-primary animate-pulse' : 'bg-base-300/50'
                }`} />
                <span className="relative z-10 text-sm">Play Game</span>
              </div>
            </motion.button>
          </div>

          {/* Titles Node */}
          <div className="relative w-full">
            <motion.button 
              className={`relative w-full px-3 py-2 text-left transition-colors duration-200 rounded-lg border ${
                activeTab === 'titles' 
                  ? 'border-primary/50 bg-base-300/20 text-primary font-bold shadow-md shadow-primary/10' 
                  : 'border-base-300/10 hover:border-primary/30 hover:bg-base-300/10'
              }`}
              onClick={() => setActiveTab('titles')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  activeTab === 'titles' ? 'bg-primary animate-pulse' : 'bg-base-300/50'
                }`} />
                <span className="relative z-10 text-sm">View Titles</span>
              </div>
            </motion.button>
          </div>
        </div>

        <div className="mt-auto p-2">
          <motion.div 
            className="badge badge-primary badge-outline gap-1 p-2 text-xs opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            {/* v1.0 */}
          </motion.div>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden bg-base-200/80 backdrop-blur-sm sticky top-0 z-50 p-2 border-b border-base-300/20">
        <motion.div 
          className="text-lg font-bold text-primary text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Dimensional Choices
        </motion.div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto pb-16 md:pb-8 px-2">
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

      {/* Mobile Bottom Navigation - Journey Style */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm p-2 border-t border-base-300/20">
        <div className="flex justify-around items-center relative">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-base-300/20 transform -translate-y-1/2" />
          
          {/* Game Node */}
          <motion.button 
            className={`relative flex-1 mx-1 px-2 py-1.5 rounded-lg border ${
              activeTab === 'game' 
                ? 'border-primary/50 bg-base-300/20 text-primary font-bold shadow-md shadow-primary/10' 
                : 'border-base-300/10 hover:border-primary/30 hover:bg-base-300/10'
            }`}
            onClick={() => setActiveTab('game')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${
                activeTab === 'game' ? 'bg-primary animate-pulse' : 'bg-base-300/50'
              }`} />
              <span className="relative z-10 text-xs">Play Game</span>
            </div>
          </motion.button>

          {/* Titles Node */}
          <motion.button 
            className={`relative flex-1 mx-1 px-2 py-1.5 rounded-lg border ${
              activeTab === 'titles' 
                ? 'border-primary/50 bg-base-300/20 text-primary font-bold shadow-md shadow-primary/10' 
                : 'border-base-300/10 hover:border-primary/30 hover:bg-base-300/10'
            }`}
            onClick={() => setActiveTab('titles')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${
                activeTab === 'titles' ? 'bg-primary animate-pulse' : 'bg-base-300/50'
              }`} />
              <span className="relative z-10 text-xs">View Titles</span>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default App;
