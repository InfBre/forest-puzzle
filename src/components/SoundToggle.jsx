import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SoundToggle.css';

export default function SoundToggle({ enabled, setEnabled, volume, setVolume }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="sound-toggle">
      <AnimatePresence>
        {open && (
          <motion.div
            className="sound-panel"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
          >
            <div className="sp-row">
              <span>森音</span>
              <button
                className={`sp-switch ${enabled ? 'on' : ''}`}
                onClick={() => setEnabled((v) => !v)}
              >
                <span className="sp-knob" />
              </button>
            </div>
            <div className="sp-row sp-vol">
              <span>音量</span>
              <input
                type="range"
                min="0"
                max="100"
                value={Math.round(volume * 100)}
                onChange={(e) => setVolume(parseInt(e.target.value, 10) / 100)}
                disabled={!enabled}
              />
            </div>
            <p className="sp-hint">合成的森林微风 + 偶发鸟鸣</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`sound-btn ${enabled ? 'active' : ''}`}
        onClick={() => {
          if (!enabled) setEnabled(true);
          setOpen((o) => !o);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={enabled ? { boxShadow: [
          '0 0 12px rgba(180, 220, 170, 0.3)',
          '0 0 28px rgba(180, 220, 170, 0.6)',
          '0 0 12px rgba(180, 220, 170, 0.3)',
        ] } : {}}
        transition={{ duration: 3, repeat: Infinity }}
        title={enabled ? '森音 · 开' : '森音 · 关'}
      >
        {enabled ? (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M15.5 8.5a5 5 0 010 7" />
            <path d="M19 5a9 9 0 010 14" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="22" y1="9" x2="16" y2="15" />
            <line x1="16" y1="9" x2="22" y2="15" />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
