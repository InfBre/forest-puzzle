import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PuzzleSelect from './components/PuzzleSelect';
import PuzzleWorkspace from './components/PuzzleWorkspace';
import AmbientLayer from './components/AmbientLayer';
import BreathingChamber from './components/BreathingChamber';
import SidebarExtras from './components/SidebarExtras';
import AppHeader from './components/AppHeader';
import useForestAudio from './hooks/useForestAudio';
import './App.css';

export default function App() {
  const [puzzle, setPuzzle] = useState(null);
  const [solved, setSolved] = useState(() => {
    try { return JSON.parse(localStorage.getItem('mori-solved') || '[]'); } catch { return []; }
  });

  const audio = useForestAudio();
  const [mistIntensity, setMistIntensity] = useState(40);
  const [breathingSpeed, setBreathingSpeed] = useState(12);

  const handleSolve = (id) => {
    setSolved((prev) => {
      if (prev.includes(id)) return prev;
      const next = [...prev, id];
      try { localStorage.setItem('mori-solved', JSON.stringify(next)); } catch {}
      return next;
    });
  };

  return (
    <div className="app-root">
      <AmbientLayer mistIntensity={mistIntensity} dim={!!puzzle} />

      <AppHeader audio={audio} />

      <main className="app-main">
        <aside className="sidebar">
          <BreathingChamber
            speed={breathingSpeed}
            setSpeed={setBreathingSpeed}
            mistIntensity={mistIntensity}
            setMistIntensity={setMistIntensity}
            volume={audio.volume}
            setVolume={audio.setVolume}
            soundEnabled={audio.enabled}
          />
          <SidebarExtras solved={solved} />
        </aside>

        <section className="content">
          <AnimatePresence mode="wait">
            {!puzzle ? (
              <motion.div
                key="select"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <PuzzleSelect
                  onPick={(p) => setPuzzle(p)}
                  solved={solved}
                />
              </motion.div>
            ) : (
              <motion.div
                key="workspace"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
              >
                <PuzzleWorkspace
                  puzzle={puzzle}
                  onExit={() => setPuzzle(null)}
                  onSolve={handleSolve}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}
