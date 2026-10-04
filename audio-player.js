// ==============================================================================
// KIRSTY'S BIRTHDAY AUDIO ENGINE
// Supports real MP3s + Fallback Web Audio Melodic Synthesizer
// ==============================================================================

class BirthdayAudioEngine {
  constructor() {
    this.audioElement = new Audio();
    this.audioElement.preload = "auto";
    this.isPlaying = false;
    this.currentTrackIndex = 0;
    this.volume = 0.7;
    this.audioContext = null;
    this.synthInterval = null;
    this.isUsingSynth = false;
    this.onStateChangeCallbacks = [];

    // Track audio error to gracefully switch to synthesized ambient music
    this.audioElement.addEventListener("ended", () => {
      this.nextTrack();
    });

    this.audioElement.addEventListener("error", (e) => {
      console.log("Local audio file not detected or format unplayable. Switching gracefully to built-in acoustic synthesizer.");
      if (this.isPlaying) {
        this.startSynthMelody();
      }
    });
  }

  onStateChange(callback) {
    this.onStateChangeCallbacks.push(callback);
  }

  notifyStateChange() {
    const track = window.KIRSTY_DATA.playlist[this.currentTrackIndex];
    this.onStateChangeCallbacks.forEach(cb => cb({
      isPlaying: this.isPlaying,
      currentTrack: track,
      isUsingSynth: this.isUsingSynth,
      volume: this.volume
    }));
  }

  initAudioContext() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
      }
    }
    if (this.audioContext && this.audioContext.state === "suspended") {
      this.audioContext.resume();
    }
  }

  playTrack(index = 0) {
    this.initAudioContext();
    this.currentTrackIndex = (index + window.KIRSTY_DATA.playlist.length) % window.KIRSTY_DATA.playlist.length;
    const track = window.KIRSTY_DATA.playlist[this.currentTrackIndex];

    this.stopSynthMelody();
    this.audioElement.src = track.src;
    this.audioElement.volume = this.volume;

    const playPromise = this.audioElement.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.isUsingSynth = false;
          this.notifyStateChange();
        })
        .catch((err) => {
          console.warn("Could not play audio element (likely missing local file):", err.message);
          // Fallback to built-in lovely acoustic chords
          this.isPlaying = true;
          this.startSynthMelody();
          this.notifyStateChange();
        });
    }
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      if (this.isUsingSynth) {
        this.initAudioContext();
        this.isPlaying = true;
        this.startSynthMelody();
        this.notifyStateChange();
      } else {
        this.playTrack(this.currentTrackIndex);
      }
    }
  }

  pause() {
    this.isPlaying = false;
    this.audioElement.pause();
    this.stopSynthMelody();
    this.notifyStateChange();
  }

  nextTrack() {
    this.playTrack(this.currentTrackIndex + 1);
  }

  prevTrack() {
    this.playTrack(this.currentTrackIndex - 1);
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    this.audioElement.volume = this.volume;
    this.notifyStateChange();
  }

  // Built-in sad and deeply impactful acoustic piano melody generator (Am9 - Fmaj7 - C - G/B)
  startSynthMelody() {
    this.isUsingSynth = true;
    this.initAudioContext();
    if (!this.audioContext) return;

    // Poignant, tear-jerking friendship chord progression:
    // Am9 -> Fmaj7 -> C -> G
    const chordProgressions = [
      [220.00, 261.63, 329.63, 392.00, 493.88], // Am9 (Deep, reflective, sentimental)
      [174.61, 261.63, 329.63, 440.00, 523.25], // Fmaj7 (Tender longing, warmth)
      [261.63, 329.63, 392.00, 523.25, 659.25], // Cmaj (Cherished university memory)
      [196.00, 246.94, 293.66, 392.00, 493.88]  // G (Peaceful, emotional resolution)
    ];

    let chordIndex = 0;
    let noteInChord = 0;

    const playNextNote = () => {
      if (!this.isPlaying || !this.isUsingSynth) return;
      try {
        const chord = chordProgressions[chordIndex];
        const freq = chord[noteInChord % chord.length];
        
        // Play acoustic piano-like harmonic voice
        this.playPianoTone(freq, 2.2, 0.16 * this.volume);

        noteInChord++;
        if (noteInChord >= chord.length) {
          noteInChord = 0;
          chordIndex = (chordIndex + 1) % chordProgressions.length;
        }
      } catch (err) {
        console.error("Audio synth error:", err);
      }
    };

    playNextNote();
    if (this.synthInterval) clearInterval(this.synthInterval);
    this.synthInterval = setInterval(playNextNote, 820);
  }

  stopSynthMelody() {
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
  }

  // Dual-harmonic piano tone with warm acoustic low-pass filter
  playPianoTone(freq, duration = 2.2, gainLevel = 0.15) {
    if (!this.audioContext) return;
    const now = this.audioContext.currentTime;

    const osc1 = this.audioContext.createOscillator();
    const osc2 = this.audioContext.createOscillator();
    const filter = this.audioContext.createBiquadFilter();
    const gainNode = this.audioContext.createGain();

    // Warm piano tone
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(freq, now);

    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(freq * 2, now); // soft octave harmonic

    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(350, now + duration);

    // Expressive acoustic envelope
    gainNode.gain.setValueAtTime(0.0001, now);
    gainNode.gain.exponentialRampToValueAtTime(gainLevel, now + 0.04);
    gainNode.gain.exponentialRampToValueAtTime(gainLevel * 0.4, now + 0.6);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }

  playTone(freq, duration = 1.5, gainLevel = 0.1) {
    this.playPianoTone(freq, duration, gainLevel);
  }

  // Play a soft sparkle sound effect on button clicks / candle lighting
  playSparkleChime() {
    this.initAudioContext();
    if (!this.audioContext) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 0.8, 0.08 * this.volume);
      }, idx * 100);
    });
  }
}

window.birthdayAudio = new BirthdayAudioEngine();
