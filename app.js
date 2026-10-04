// ==============================================================================
// KIRSTY WANGU'S 22ND BIRTHDAY EXPERIENCE - INTERACTIVE ENGINE
// Native JavaScript • Zero Babel Dependencies • Instant file:// & GitHub Pages Support
// ==============================================================================

document.addEventListener("DOMContentLoaded", () => {
  const data = window.KIRSTY_DATA;
  const audio = window.birthdayAudio;

  if (!data || !audio) {
    console.error("Required data or audio engine not found.");
    return;
  }

  // State
  let currentLightboxIndex = 0;
  let selectedRoomIndex = 0;
  let isCandleLit = false;
  let candleCount = 22;

  // ----------------------------------------------------------------------------
  // Helper: Trigger Confetti
  // ----------------------------------------------------------------------------
  function triggerCelebrationConfetti(count = 80, colors = ['#D99B95', '#C5A059', '#FAF7F2', '#E7C97F', '#5B1C28']) {
    if (window.confetti) {
      window.confetti({
        particleCount: count,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors
      });
    }
  }

  function triggerBigConfetti() {
    if (!window.confetti) return;
    const count = 220;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      window.confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }

    fire(0.25, { spread: 30, startVelocity: 55, colors: ['#D99B95', '#C5A059', '#FAF7F2'] });
    fire(0.2, { spread: 65, colors: ['#E7C97F', '#5B1C28', '#FAF7F2'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ['#FAF7F2', '#D99B95', '#C5A059'] });
  }

  // ----------------------------------------------------------------------------
  // 1. Landing "Open Letter" Button
  // ----------------------------------------------------------------------------
  const openLetterBtn = document.getElementById("open-letter-btn");
  if (openLetterBtn) {
    openLetterBtn.addEventListener("click", (e) => {
      // Start audio and confetti
      audio.playTrack(0);
      audio.playSparkleChime();
      triggerCelebrationConfetti(90);
    });
  }

  // ----------------------------------------------------------------------------
  // 2. Audio Player UI & Controls
  // ----------------------------------------------------------------------------
  const musicCard = document.getElementById("music-card");
  const musicPillBtn = document.getElementById("music-pill-btn");
  const musicMinimizeBtn = document.getElementById("music-minimize-btn");
  const navMusicBtn = document.getElementById("nav-music-btn");
  const playerPlayBtn = document.getElementById("player-play-btn");
  const playerPrevBtn = document.getElementById("player-prev-btn");
  const playerNextBtn = document.getElementById("player-next-btn");
  const playerVolumeSlider = document.getElementById("player-volume-slider");
  const playerTrackTitle = document.getElementById("player-track-title");
  const playerTrackArtist = document.getElementById("player-track-artist");
  const musicPillTitle = document.getElementById("music-pill-title");
  const playerStatusNote = document.getElementById("player-status-note");

  if (musicMinimizeBtn) {
    musicMinimizeBtn.addEventListener("click", () => {
      musicCard.classList.add("hidden");
      musicPillBtn.classList.remove("hidden");
    });
  }

  if (musicPillBtn) {
    musicPillBtn.addEventListener("click", () => {
      musicPillBtn.classList.add("hidden");
      musicCard.classList.remove("hidden");
    });
  }

  if (navMusicBtn) {
    navMusicBtn.addEventListener("click", () => {
      audio.togglePlay();
      if (musicCard.classList.contains("hidden")) {
        musicPillBtn.classList.add("hidden");
        musicCard.classList.remove("hidden");
      }
    });
  }

  if (playerPlayBtn) {
    playerPlayBtn.addEventListener("click", () => {
      audio.togglePlay();
    });
  }

  if (playerPrevBtn) {
    playerPrevBtn.addEventListener("click", () => {
      audio.prevTrack();
    });
  }

  if (playerNextBtn) {
    playerNextBtn.addEventListener("click", () => {
      audio.nextTrack();
    });
  }

  if (playerVolumeSlider) {
    playerVolumeSlider.addEventListener("input", (e) => {
      audio.setVolume(parseFloat(e.target.value));
    });
  }

  // Sync Audio State
  audio.onStateChange((state) => {
    if (playerPlayBtn) {
      playerPlayBtn.textContent = state.isPlaying ? "⏸ Pause" : "▶ Play";
    }
    if (playerTrackTitle) {
      playerTrackTitle.textContent = state.currentTrack.title;
    }
    if (playerTrackArtist) {
      playerTrackArtist.innerHTML = `${state.currentTrack.artist} • <span class="text-[#FAF7F2]/60">${state.currentTrack.tag}</span>`;
    }
    if (musicPillTitle) {
      musicPillTitle.textContent = `🎵 ${state.currentTrack.title}`;
    }
    if (playerStatusNote) {
      if (state.isUsingSynth) {
        playerStatusNote.textContent = "✨ Playing soft acoustic melody (or your Tanto Wavie MP3 in audio/)";
      } else {
        playerStatusNote.textContent = "🎵 Playing from audio playlist";
      }
    }
  });

  // ----------------------------------------------------------------------------
  // 3. Room Memories Interactive Scene
  // ----------------------------------------------------------------------------
  const roomContainer = document.getElementById("room-items-container");
  const roomTitle = document.getElementById("room-memory-title");
  const roomText = document.getElementById("room-memory-text");

  const icons = ["💻", "📱", "💡", "📚", "🔌", "🛏️"];

  function updateRoomMemory(index) {
    selectedRoomIndex = index;
    const item = data.roomMemories.interactiveItems[index];
    if (roomTitle) roomTitle.textContent = item.name;
    if (roomText) roomText.textContent = `"${item.caption}"`;

    // Highlight active button
    if (roomContainer) {
      const btns = roomContainer.querySelectorAll("button");
      btns.forEach((btn, idx) => {
        if (idx === index) {
          btn.className = "p-4 rounded-2xl border transition-all text-center flex flex-col items-center gap-2 bg-[#5B1C28] text-[#FAF7F2] border-[#C5A059] shadow-lg scale-105";
        } else {
          btn.className = "p-4 rounded-2xl border transition-all text-center flex flex-col items-center gap-2 bg-[#FFFDF9] text-[#201311] border-[#C5A059]/20 hover:border-[#C5A059] hover:bg-[#FAF6F0]";
        }
      });
    }
  }

  if (roomContainer) {
    data.roomMemories.interactiveItems.forEach((item, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = idx === 0
        ? "p-4 rounded-2xl border transition-all text-center flex flex-col items-center gap-2 bg-[#5B1C28] text-[#FAF7F2] border-[#C5A059] shadow-lg scale-105"
        : "p-4 rounded-2xl border transition-all text-center flex flex-col items-center gap-2 bg-[#FFFDF9] text-[#201311] border-[#C5A059]/20 hover:border-[#C5A059] hover:bg-[#FAF6F0]";

      btn.innerHTML = `
        <span class="text-2xl">${icons[idx] || "✨"}</span>
        <span class="text-xs font-semibold leading-tight line-clamp-2">${item.name}</span>
      `;

      btn.addEventListener("click", () => {
        audio.playSparkleChime();
        updateRoomMemory(idx);
      });

      roomContainer.appendChild(btn);
    });
  }

  // ----------------------------------------------------------------------------
  // 4. Photo Scrapbook Wall & Lightbox
  // ----------------------------------------------------------------------------
  const photoWallGrid = document.getElementById("photo-wall-grid");
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxCloseBtn = document.getElementById("lightbox-close-btn");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxNote = document.getElementById("lightbox-note");
  const lightboxDate = document.getElementById("lightbox-date");
  const lightboxCounter = document.getElementById("lightbox-counter");
  const lightboxPrevBtn = document.getElementById("lightbox-prev-btn");
  const lightboxNextBtn = document.getElementById("lightbox-next-btn");

  function openLightbox(index) {
    currentLightboxIndex = index;
    const photo = data.photos[index];
    if (!photo) return;

    if (lightboxImage) lightboxImage.src = photo.src;
    if (lightboxCaption) lightboxCaption.textContent = photo.caption;
    if (lightboxNote) lightboxNote.textContent = photo.note;
    if (lightboxDate) lightboxDate.textContent = photo.date;
    if (lightboxCounter) lightboxCounter.textContent = `${index + 1} of ${data.photos.length}`;

    if (lightboxModal) lightboxModal.classList.remove("hidden");
    audio.playSparkleChime();
  }

  function closeLightbox() {
    if (lightboxModal) lightboxModal.classList.add("hidden");
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener("click", closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener("click", () => {
      openLightbox((currentLightboxIndex - 1 + data.photos.length) % data.photos.length);
    });
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener("click", () => {
      openLightbox((currentLightboxIndex + 1) % data.photos.length);
    });
  }

  // Keyboard navigation for lightbox
  document.addEventListener("keydown", (e) => {
    if (!lightboxModal || lightboxModal.classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lightboxPrevBtn && lightboxPrevBtn.click();
    if (e.key === "ArrowRight") lightboxNextBtn && lightboxNextBtn.click();
  });

  if (photoWallGrid) {
    data.photos.forEach((photo, idx) => {
      const card = document.createElement("div");
      card.className = "polaroid-card rounded-md cursor-pointer group";
      card.style.transform = `rotate(${photo.rotation})`;

      const tapeRot = idx % 2 === 0 ? "-rotate-3" : "rotate-2";

      card.innerHTML = `
        <div class="washi-tape washi-tape-${photo.tapeColor} -top-3 left-1/2 -translate-x-1/2 ${tapeRot}"></div>
        <div class="overflow-hidden rounded bg-[#FAF6F0] aspect-[4/5] relative">
          <img src="${photo.src}" alt="${photo.caption}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <span class="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#201311] text-xs px-3 py-1.5 rounded-full font-sans font-medium shadow">
              View Photo 🔍
            </span>
          </div>
        </div>
        <div class="pt-4 text-center space-y-1">
          <p class="font-handwritten text-xl text-[#5B1C28] leading-tight">${photo.caption}</p>
          <p class="text-[10px] font-sans uppercase tracking-widest text-[#201311]/50">${photo.date}</p>
        </div>
      `;

      card.addEventListener("click", () => {
        openLightbox(idx);
      });

      photoWallGrid.appendChild(card);
    });
  }

  // ----------------------------------------------------------------------------
  // 5. Things I Love About Us
  // ----------------------------------------------------------------------------
  const thingsContainer = document.getElementById("things-list-container");
  if (thingsContainer) {
    data.thingsWeLove.items.forEach((item) => {
      const div = document.createElement("div");
      div.className = "flex items-start gap-4 p-5 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/20 shadow-sm hover:shadow-md hover:border-[#C5A059]/50 transition-all duration-300";
      div.innerHTML = `
        <span class="flex-shrink-0 w-8 h-8 rounded-full bg-[#5B1C28] text-[#FAF7F2] flex items-center justify-center font-serif text-sm font-bold shadow-sm">
          ${item.id}
        </span>
        <p class="font-sans text-sm sm:text-base text-[#201311]/85 leading-relaxed pt-0.5">
          ${item.text}
        </p>
      `;
      thingsContainer.appendChild(div);
    });
  }

  // ----------------------------------------------------------------------------
  // 6. 22 Things For 22 (Interactive 3D Flip Cards)
  // ----------------------------------------------------------------------------
  const cardsGrid = document.getElementById("cards-grid");
  const flipAllBtn = document.getElementById("flip-all-btn");
  const resetCardsBtn = document.getElementById("reset-cards-btn");

  if (cardsGrid) {
    data.twentyTwoThings.forEach((cardData, idx) => {
      const cardEl = document.createElement("div");
      cardEl.className = "flip-card";

      cardEl.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <span class="text-xs font-serif text-[#C5A059] uppercase tracking-widest font-bold">Reason #${cardData.number}</span>
            <h3 class="font-serif text-lg font-semibold text-[#5B1C28] my-3">${cardData.title}</h3>
            <div class="mt-auto inline-flex items-center gap-1 text-[11px] font-sans text-[#201311]/50 uppercase tracking-wider">
              <span>Tap to read</span>
              <span>💌</span>
            </div>
          </div>
          <div class="flip-card-back">
            <span class="text-[10px] uppercase tracking-widest text-[#E7C97F] font-medium">For Kirsty #${cardData.number}</span>
            <p class="font-editorial italic text-base leading-relaxed my-auto text-[#FAF7F2]">"${cardData.message}"</p>
            <span class="text-xs text-[#FAF7F2]/60 mt-auto">Mother mhamha 🤍</span>
          </div>
        </div>
      `;

      cardEl.addEventListener("click", () => {
        cardEl.classList.toggle("flipped");
        audio.playSparkleChime();
      });

      cardsGrid.appendChild(cardEl);
    });

    if (flipAllBtn) {
      flipAllBtn.addEventListener("click", () => {
        const cards = cardsGrid.querySelectorAll(".flip-card");
        cards.forEach(c => c.classList.add("flipped"));
        audio.playSparkleChime();
      });
    }

    if (resetCardsBtn) {
      resetCardsBtn.addEventListener("click", () => {
        const cards = cardsGrid.querySelectorAll(".flip-card");
        cards.forEach(c => c.classList.remove("flipped"));
      });
    }
  }

  // ----------------------------------------------------------------------------
  // 7. Bible Verses Section
  // ----------------------------------------------------------------------------
  const versesContainer = document.getElementById("verses-container");
  if (versesContainer) {
    data.bibleVerses.forEach((verse) => {
      const card = document.createElement("div");
      card.className = "p-7 rounded-2xl bg-[#1A100E]/70 border border-[#C5A059]/30 backdrop-blur-sm shadow-xl flex flex-col justify-between hover:border-[#C5A059] transition-all duration-300";
      card.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <span class="text-xs uppercase tracking-widest text-[#C5A059] font-medium font-sans">${verse.theme}</span>
            <span class="text-sm">✝</span>
          </div>
          <h3 class="font-serif text-lg text-[#FAF7F2] font-semibold">${verse.ref}</h3>
          <p class="font-editorial italic text-lg text-[#FAF7F2]/90 leading-relaxed">"${verse.text}"</p>
        </div>
        <div class="pt-4 border-t border-white/5 text-right">
          <span class="font-handwritten text-base text-[#D99B95]">${verse.title}</span>
        </div>
      `;
      versesContainer.appendChild(card);
    });
  }

  // ----------------------------------------------------------------------------
  // 8. Birthday Candle
  // ----------------------------------------------------------------------------
  const lightCandleBtn = document.getElementById("light-candle-btn");
  const candleFlame = document.getElementById("candle-flame");
  const candleWick = document.getElementById("candle-wick");
  const candleStatusText = document.getElementById("candle-status-text");

  if (lightCandleBtn) {
    lightCandleBtn.addEventListener("click", () => {
      if (isCandleLit) return;
      isCandleLit = true;
      candleCount++;

      if (candleFlame) candleFlame.classList.remove("hidden");
      if (candleWick) candleWick.classList.add("hidden");

      lightCandleBtn.textContent = "✨ Kirsty's 22nd Birthday Candle Is Lit! ✨";
      lightCandleBtn.className = "px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-md bg-[#5B1C28] text-[#FAF7F2] cursor-default";

      if (candleStatusText) {
        candleStatusText.textContent = `A prayer has ascended for Mother. (Candles lit: ${candleCount})`;
      }

      audio.playSparkleChime();
      triggerCelebrationConfetti(50, ['#C5A059', '#FAF7F2', '#E7C97F']);
    });
  }

  // ----------------------------------------------------------------------------
  // 9. Memory Timeline
  // ----------------------------------------------------------------------------
  const timelineContainer = document.getElementById("timeline-container");
  if (timelineContainer) {
    data.timeline.forEach((item) => {
      const div = document.createElement("div");
      div.className = "relative pl-8 sm:pl-10";
      div.innerHTML = `
        <div class="hidden sm:block absolute -left-32 top-0 text-right w-24">
          <span class="font-serif font-bold text-sm text-[#5B1C28] block">${item.year}</span>
          <span class="text-[10px] uppercase tracking-wider text-[#C5A059] font-sans">${item.tag}</span>
        </div>
        <span class="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#FAF7F2] border-4 border-[#5B1C28]"></span>
        <div class="p-6 rounded-2xl bg-[#FFFDF9] border border-[#C5A059]/20 shadow-sm hover:shadow-md transition">
          <div class="sm:hidden mb-1">
            <span class="text-xs font-serif font-bold text-[#5B1C28]">${item.year}</span>
            <span class="text-[10px] ml-2 uppercase text-[#C5A059] font-sans">(${item.tag})</span>
          </div>
          <h3 class="font-serif text-xl text-[#5B1C28] font-semibold mb-2">${item.title}</h3>
          <p class="font-sans text-sm sm:text-base text-[#201311]/80 leading-relaxed">${item.desc}</p>
        </div>
      `;
      timelineContainer.appendChild(div);
    });
  }

  // ----------------------------------------------------------------------------
  // 10. Thank You Note Climax
  // ----------------------------------------------------------------------------
  const thankYouBtn = document.getElementById("thank-you-trigger-btn");
  const thankYouPre = document.getElementById("thank-you-pre-reveal");
  const thankYouRev = document.getElementById("thank-you-revealed");

  if (thankYouBtn) {
    thankYouBtn.addEventListener("click", () => {
      if (thankYouPre) thankYouPre.classList.add("hidden");
      if (thankYouRev) thankYouRev.classList.remove("hidden");
      audio.playSparkleChime();
      triggerCelebrationConfetti(85, ['#C5A059', '#D99B95', '#FAF7F2']);
    });
  }

  // ----------------------------------------------------------------------------
  // 11. Surprise Modal
  // ----------------------------------------------------------------------------
  const surpriseTriggerBtn = document.getElementById("surprise-trigger-btn");
  const surpriseModal = document.getElementById("surprise-modal");
  const surpriseCloseBtn = document.getElementById("surprise-close-btn");
  const surpriseMoreConfettiBtn = document.getElementById("surprise-more-confetti-btn");

  if (surpriseTriggerBtn) {
    surpriseTriggerBtn.addEventListener("click", () => {
      if (surpriseModal) surpriseModal.classList.remove("hidden");
      audio.playSparkleChime();
      triggerBigConfetti();
    });
  }

  if (surpriseCloseBtn) {
    surpriseCloseBtn.addEventListener("click", () => {
      if (surpriseModal) surpriseModal.classList.add("hidden");
    });
  }

  if (surpriseModal) {
    surpriseModal.addEventListener("click", (e) => {
      if (e.target === surpriseModal) {
        surpriseModal.classList.add("hidden");
      }
    });
  }

  if (surpriseMoreConfettiBtn) {
    surpriseMoreConfettiBtn.addEventListener("click", () => {
      triggerBigConfetti();
      audio.playSparkleChime();
    });
  }
});
