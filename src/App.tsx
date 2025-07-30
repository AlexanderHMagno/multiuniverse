import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GameScreen } from './components/GameScreen';
import { TitlesList } from './components/TitlesList';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<'game' | 'titles'>('game');

  return (
    <div className="min-h-screen bg-base-100 flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-base-200/50 backdrop-blur-sm min-h-screen sticky top-0">
        <motion.div 
          className="p-4 text-2xl font-bold text-primary"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Dimensional Choices
        </motion.div>
        
        {/* Journey Map Style Navigation */}
        <div className="flex flex-col items-center gap-4 p-4 relative">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary/20 transform -translate-x-1/2" />
          
          {/* Game Node */}
          <div className="relative w-full">
            <motion.button 
              className={`relative w-full px-6 py-4 text-left transition-colors duration-200 rounded-xl border-2 ${
                activeTab === 'game' 
                  ? 'border-primary bg-base-100 text-primary font-bold shadow-lg shadow-primary/20' 
                  : 'border-base-300 hover:border-primary/50'
              }`}
              onClick={() => setActiveTab('game')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  activeTab === 'game' ? 'bg-primary animate-pulse' : 'bg-base-300'
                }`} />
                <span className="relative z-10">Play Game</span>
              </div>
            </motion.button>
          </div>

          {/* Titles Node */}
          <div className="relative w-full">
            <motion.button 
              className={`relative w-full px-6 py-4 text-left transition-colors duration-200 rounded-xl border-2 ${
                activeTab === 'titles' 
                  ? 'border-primary bg-base-100 text-primary font-bold shadow-lg shadow-primary/20' 
                  : 'border-base-300 hover:border-primary/50'
              }`}
              onClick={() => setActiveTab('titles')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${
                  activeTab === 'titles' ? 'bg-primary animate-pulse' : 'bg-base-300'
                }`} />
                <span className="relative z-10">View Titles</span>
              </div>
            </motion.button>
          </div>
        </div>

        <div className="mt-auto p-4">
          <motion.div 
            className="badge badge-primary badge-outline gap-2 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            {/* v1.0 */}
          </motion.div>
        </div>
      </div>

      {/* Mobile Top Bar */}
      <div className="md:hidden bg-base-200/50 backdrop-blur-sm sticky top-0 z-50 p-4">
        <motion.div 
          className="text-2xl font-bold text-primary text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Dimensional Choices
        </motion.div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto pb-24 md:pb-16 px-4">
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
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-base-200/50 backdrop-blur-sm p-4">
        <div className="flex justify-around items-center relative">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-primary/20 transform -translate-y-1/2" />
          
          {/* Game Node */}
          <motion.button 
            className={`relative flex-1 mx-2 px-4 py-3 rounded-xl border-2 ${
              activeTab === 'game' 
                ? 'border-primary bg-base-100 text-primary font-bold shadow-lg shadow-primary/20' 
                : 'border-base-300 hover:border-primary/50'
            }`}
            onClick={() => setActiveTab('game')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                activeTab === 'game' ? 'bg-primary animate-pulse' : 'bg-base-300'
              }`} />
              <span className="relative z-10 text-sm">Play Game</span>
            </div>
          </motion.button>

          {/* Titles Node */}
          <motion.button 
            className={`relative flex-1 mx-2 px-4 py-3 rounded-xl border-2 ${
              activeTab === 'titles' 
                ? 'border-primary bg-base-100 text-primary font-bold shadow-lg shadow-primary/20' 
                : 'border-base-300 hover:border-primary/50'
            }`}
            onClick={() => setActiveTab('titles')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex flex-col items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                activeTab === 'titles' ? 'bg-primary animate-pulse' : 'bg-base-300'
              }`} />
              <span className="relative z-10 text-sm">View Titles</span>
            </div>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default App;
