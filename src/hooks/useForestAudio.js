import { useEffect, useRef, useState } from 'react';

// Web Audio 合成的森林环境音：低频风 + 高频随机鸟鸣/水滴
class ForestSynth {
  constructor() {
    this.ctx = null;
    this.windGain = null;
    this.bandpass = null;
    this.chimeTimer = null;
    this.oscInterval = null;
    this.volume = 0.5;
  }

  start(volume = 0.5) {
    this.volume = volume;
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();
    if (this.ctx.state === 'suspended') this.ctx.resume();

    // 4 秒白噪声缓冲循环
    const bufSize = 4 * this.ctx.sampleRate;
    const buf = this.ctx.createBuffer(1, bufSize, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
    const noise = this.ctx.createBufferSource();
    noise.buffer = buf;
    noise.loop = true;

    // 低通 + 带通：制造温柔风声
    const lowpass = this.ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 380;

    const bandpass = this.ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = 350;
    bandpass.Q.value = 2.5;
    this.bandpass = bandpass;

    this.windGain = this.ctx.createGain();
    this.windGain.gain.setValueAtTime(volume * 0.4, this.ctx.currentTime);

    noise.connect(lowpass);
    lowpass.connect(bandpass);
    bandpass.connect(this.windGain);
    this.windGain.connect(this.ctx.destination);
    noise.start();

    // 风的强弱波动
    let t = 0;
    this.oscInterval = setInterval(() => {
      if (!this.ctx || !this.bandpass) return;
      t += 0.05;
      const f = 280 + Math.sin(t) * 110;
      this.bandpass.frequency.setValueAtTime(f, this.ctx.currentTime);
    }, 60);

    this.scheduleChime();
  }

  scheduleChime() {
    if (!this.ctx) return;
    const next = 4000 + Math.random() * 9000;
    this.chimeTimer = setTimeout(() => {
      this.playChime();
      this.scheduleChime();
    }, next);
  }

  playChime() {
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const type = Math.random();
      if (type < 0.5) {
        // 鸟鸣：两连音下行
        for (let i = 0; i < 2; i++) {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          const base = 1200 + Math.random() * 800;
          osc.frequency.setValueAtTime(base, now + i * 0.18);
          osc.frequency.exponentialRampToValueAtTime(base * 0.7, now + i * 0.18 + 0.14);
          gain.gain.setValueAtTime(0, now + i * 0.18);
          gain.gain.linearRampToValueAtTime(0.08 * this.volume, now + i * 0.18 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.18 + 0.16);
          osc.connect(gain).connect(this.ctx.destination);
          osc.start(now + i * 0.18);
          osc.stop(now + i * 0.18 + 0.2);
        }
      } else {
        // 水滴/磬音：单音下行
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        const base = 700 + Math.random() * 500;
        osc.frequency.setValueAtTime(base, now);
        osc.frequency.exponentialRampToValueAtTime(base * 0.55, now + 1.2);
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.12 * this.volume, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);
        osc.connect(gain).connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 1.6);
      }
    } catch {}
  }

  setVolume(v) {
    this.volume = v;
    if (this.windGain && this.ctx) {
      this.windGain.gain.linearRampToValueAtTime(v * 0.4, this.ctx.currentTime + 0.2);
    }
  }

  stop() {
    if (this.chimeTimer) clearTimeout(this.chimeTimer);
    if (this.oscInterval) clearInterval(this.oscInterval);
    if (this.ctx) this.ctx.close();
    this.ctx = null;
    this.bandpass = null;
    this.windGain = null;
    this.chimeTimer = null;
    this.oscInterval = null;
  }
}

export default function useForestAudio() {
  const synthRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (!synthRef.current) synthRef.current = new ForestSynth();
    return () => synthRef.current?.stop();
  }, []);

  useEffect(() => {
    if (!synthRef.current) return;
    if (enabled) synthRef.current.start(volume);
    else synthRef.current.stop();
  }, [enabled]);

  useEffect(() => {
    if (enabled) synthRef.current?.setVolume(volume);
  }, [volume, enabled]);

  return { enabled, setEnabled, volume, setVolume };
}
