# 🤍 Happy 22nd Birthday, Kirsty Wangu (Paidamoyo Kirsty Makoni)

> *"You are one of the most beautiful things university gave me, and I hope you know how much your presence has meant to me."*

A bespoke, deeply personal, cinematic digital scrapbook, love letter to friendship, and university time capsule created for Kirsty's 22nd birthday.

---

## ✨ Features Included

1. **Cinematic Landing Experience**:
   - Private digital letter with dark velvety espresso background, glowing lights, and film grain.
   - Dedicated "Open Your Birthday Letter 💌" reveal button.
   - Starts the music and confetti on first touch.

2. **Hero Section with Her Photo**:
   - Featuring Kirsty in her green #12 football jersey laughing on campus steps.
   - Elegant scrapbook polaroid framing, gold foil accents, and washi tape.
   - "To Paidamoyo Kirsty Makoni, my safe place at university, my unexpected blessing..."

3. **Floating Music Player**:
   - Fixed at bottom-right corner with minimize/expand controls.
   - Pre-configured playlist with:
     - **Track 1**: *Somewhere Only We Know (Acoustic Piano & Cello)* — Sad & Very Impactful Friendship Tribute
     - **Track 2**: *My Safe Place at University (Deep Emotional Piano)*
     - **Track 3**: *Count on Me / Until We Grow Old (Tearjerker Acoustic)*
   - Animated 4-bar equalizer, volume slider, track switcher.
   - Built-in Web Audio API cinematic acoustic piano synthesizer fallback (plays a slow, poignant Am9-Fmaj7-C-G progression in real-time).

4. **"How Did You Become This Important?"**:
   - Storytelling letter section printed on textured vintage paper with deckle edges.
   - *"University gave me lectures, assignments, deadlines, stress... but somehow it also gave me you."*
   - Pinned handwritten sticky notes with inside jokes ("Mother mhamha, look at us 😭").

5. **"The Room Memories" (Interactive University Room)**:
   - Dedicated to the quiet companionship that defines your friendship.
   - *"You doing your thing. Me doing mine. Both of us in the same room. Sometimes talking. Sometimes laughing. Sometimes completely silent. And somehow... that was enough."*
   - 6 clickable room objects (Laptop, Phone & Charger, Desk Lamp, University Notes, Water/Snacks, Cozy Corner) that reveal specific memories with sparkle chimes.

6. **Photo Memory Wall & Fullscreen Lightbox**:
   - Dynamic scrapbook polaroids with staggered natural rotations, realistic shadows, washi tape, dates, and handwritten captions ("Look at us 😭", "Mother activities 🤍", "Proof that we actually survived university").
   - Click any photo to open a fullscreen high-resolution lightbox with Next/Previous navigation.

7. **"Things I Hope We Never Forget"**:
   - 10 beautifully numbered memory cards capturing 3-hour unplanned conversations, stomach-hurting laughter, comfortable silence, and *"Wait till I tell Mother."*

8. **"22 Little Things I Want You to Know at 22"**:
   - 22 interactive 3D flip cards!
   - Each card flips over to reveal a heartfelt, personal message for her 22nd year on a deep wine-burgundy velvet card with gold trim.
   - Includes "Reveal All 22" and "Reset Cards" buttons.

9. **"A Blessing for Your 22nd Year" (Bible Verses)**:
   - Numbers 6:24–26, Jeremiah 29:11, Proverbs 3:5–6, Psalm 121, Ecclesiastes 4:9–10, 1 Corinthians 13:4, 7.
   - Peaceful, starlit aesthetic with glowing cards.

10. **"A Personal Prayer for Kirsty"**:
    - Deep, intimate personal prayer asking God to guide her, protect her peace, open closed doors, and remind her she is never alone.
    - Interactive **"Light a Birthday Candle"** feature that lights a golden flame with floating embers.

11. **Memory Timeline: "Us, so far..."**:
    - Interactive university chapters from freshman beginnings to the birth of "Mother & Mother" through late-night exam cramming and future dreams.

12. **"If University Had a Thank-You Note"**:
    - Emotional climax section with a dramatic pause button:
      *"If university asked me what the best thing it gave me was... Honestly? You."*

13. **Final Letter & Surprise Ending**:
    - Heartfelt letter signed *"— Your forever university partner in crime 🤍"*.
    - "Wait... there's one more thing" button that triggers multi-stage celebratory confetti, floating photo memories, and a toast to year 22!

---

## 🚀 How to Deploy to GitHub Pages (Under 2 Minutes)

This website was built with zero build step dependencies so that deployment to GitHub Pages is completely painless!

### Option A: Via GitHub Web Interface (Drag & Drop)
1. Go to [github.com](https://github.com) and log into your account.
2. Click **New Repository** (e.g. name it `kirsty-22nd-birthday`).
3. Set the repository to **Public**.
4. In the repository page, click **uploading an existing file**.
5. Drag and drop all files and folders from this project folder (`index.html`, `css/`, `js/`, `images/`, `audio/`, etc.) into GitHub.
6. Click **Commit changes**.
7. Go to **Settings** > **Pages** (on the left menu).
8. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** (or **master**) / Folder: **/(root)**
   - Click **Save**.
9. In 1 minute, your website will be live at:
   `https://<your-github-username>.github.io/kirsty-22nd-birthday/`

### Option B: Via Git Command Line
```bash
git init
git add .
git commit -m "Happy 22nd Birthday Kirsty Wangu"
git branch -M main
git remote add origin https://github.com/<your-username>/kirsty-22nd-birthday.git
git push -u origin main
```
The included `.github/workflows/deploy.yml` will automatically deploy the site to GitHub Pages!

---

## 📸 How to Add More Photos
1. Put your photos into the `images/kirsty/` folder.
2. Name them `photo01.jpg`, `photo02.jpg`, `photo03.jpg`, etc.
3. Open `js/data.js` to change captions or dates if you wish!

---

## 🎵 How to Add Your Friendship Song
1. Get the MP3 of your chosen song (e.g., *Somewhere Only We Know* or another heartfelt ballad).
2. Place it in the `audio/` folder and name it:
   `impactful-friendship-song.mp3`
*(Note: If you don't add an MP3 right away, the website will automatically play a slow, poignant, tear-jerking acoustic piano theme generated in real time, so Kirsty will always hear emotional music immediately!)*

---

## 💻 How to Preview Locally
You can double-click `index.html` to open it in Chrome, Edge, Safari, or Firefox right on your computer.
