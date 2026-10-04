// ==============================================================================
// KIRSTY WANGU'S 22ND BIRTHDAY EXPERIENCE - CONTENT & CONFIGURATION
// Everything in this file can be easily edited or expanded.
// ==============================================================================

window.KIRSTY_DATA = {
  // General Info
  person: {
    fullName: "Paidamoyo Kirsty Makoni",
    nickname: "Kirsty Wangu",
    petName: "Mother mhamha",
    shortPetName: "Mother",
    age: 22,
    birthMonth: "October",
    university: "University",
    heroImage: "hero - Copy - Copy.jpg",
    lakeHugImage: "lake-hug.jpg",
    heartRoadImage: "heart-road-Copy-Cop7.jpg",
    yogurtSnackImage: "./images/kirsty/yogurt-snack.jpg"
  },

  // Audio & Music Playlist
  // Put your MP3 files into the "audio/" folder or point to any online audio URL.
  // If the audio file is not found, our built-in emotional acoustic piano synthesizer plays automatically!
  playlist: [
    {
      id: "friendship-ballad",
      title: "heaven baby",
      artist: "Lily Allen",
      tag: "Sad & Deeply Impactful • Artist Vocals",
      src: "impactful-friendship-song.mp3",
      note: "A tender, emotional vocal song about quiet companionship, university memories, and having a safe place only the two of you know."
    },
    {
      id: "keane-vocal",
      title: "Heaven baby",
      artist: "Keane",
      tag: "Heartfelt Vocal Anthem • Original Vocals",
      src: "./audio/keane-somewhere-only-we-know.mp3",
      note: "The iconic vocal original about friendship, survival, and sisterhood."
    }
  ],

  // Landing Screen Letter Teaser
  landing: {
    header: "Kirsty Wangu",
    subHeader: "Happy 22nd Birthday, Mother mhamha 🤍",
    teaser: "Before you scroll...\nI need you to know something..Gangster havana marii",
    buttonText: "Open Your Birthday Letter 💌",
    subNotice: "✨ Best experienced with sound on"
  },

  // Hero Section
  hero: {
    dedicationTo: "To Paidamoyo Kirsty Makoni,",
    subtitle: "my safe place at university, my unexpected blessing...",
    birthdayTitle: "Happy 22nd Birthday, Kirsty.",
    scrollPrompt: "Scroll down to relive our story"
  },

  // "How Did You Become This Important?" Section
  howWeMet: {
    heading: "Some friendships happen. Ours became home.",
    subheading: "A letter from the middle of assignments, deadlines, and quiet blessing.",
    stanzas: [
      "University gave me lectures.",
      "University gave me assignments.",
      "University gave me deadlines.",
      "University gave me stress.",
      "But somehow, among all of that...",
      "It also gave me you."
    ],
    letterBody: `You became one of the few people who made university feel less overwhelming and more like home. In a place where everyone is constantly rushing, competing, or pretending to have it all together, having you in my corner was a breath of fresh air. 

I never had to put on a face for you. I never had to explain when I was exhausted, stressed, or just needing someone to sit with. You walked into my university journey and effortlessly became my sanctuary.`,
    stickyNotes: [
      { text: "Mother mhamha, look at us surviving semester after semester 😭", color: "rose" },
      { text: "Remember when we said we'd study at 7:00 PM and by 11:00 PM we were still talking about life?", color: "yellow" },
      { text: "My safest person on this entire campus 🤍", color: "blush" }
    ]
  },

  // "The Room Memories" Section (Interactive Scene)
  roomMemories: {
    heading: "Sometimes we weren't even doing anything...",
    subheading: "And somehow, those became some of my favourite memories.",
    quoteStanzas: [
      "You doing your thing.",
      "Me doing mine.",
      "Both of us in the same room.",
      "Sometimes talking.",
      "Sometimes laughing.",
      "Sometimes completely silent.",
      "",
      "And somehow... that was enough."
    ],
    reflection: "That quiet companionship means everything to me. You are the friend I can simply exist around. No expectations, no pressure, just two souls making each other's university life lighter.",
    interactiveItems: [
      {
        id: "laptop",
        name: "Laptops & Assignments",
        icon: "laptop",
        caption: "Submitting assignments at 23:59 while lying on the floor questioning all our life choices, but laughing through it."
      },
      {
        id: "phone",
        name: "Phones & Silent Memes",
        icon: "smartphone",
        caption: "Sitting across from each other in absolute silence for 40 minutes, then suddenly sending each other 5 TikToks and bursting into giggles."
      },
      {
        id: "lamp",
        name: "Desk Lamp Conversations",
        icon: "lamp",
        caption: "The 1:00 AM heart-to-hearts where we talked about our future, our fears, our families, and who we want to be."
      },
      {
        id: "books",
        name: "University Papers & Notes",
        icon: "book-open",
        caption: "Open notebooks that we swore we were studying from, but mostly used as armrests while catching up on campus gossip."
      },
      {
        id: "charger",
        name: "The Shared Charger",
        icon: "zap",
        caption: "'Mother, pass the charger... my phone is on 2%.' The unwritten rule of sharing everything."
      },
      {
        id: "bed",
        name: "The Cozy Corner",
        icon: "coffee",
        caption: "The spot where quiet companionship lived. Just resting, drinking tea or water, and being happy that the other was there."
      }
    ]
  },

  // Photo Memory Wall (Polaroid Scrapbook) - populated with all real photographs
  photos: [
    {
      id: "photo01",
      src: "./images/kirsty/photo01.jpg",
      caption: "Look at us 😭 (Mother mhamha in her element)",
      date: "Campus Steps",
      rotation: "-3deg",
      tapeColor: "gold",
      note: "That smile! Looking so gorgeous in the green #12 jersey. One of my favourite photos of you."
    },
    {
      id: "photo02",
      src: "./images/kirsty/photo02.jpg",
      caption: "Mother activities 🤍 (The yogurt snack run)",
      date: "Snack Runs & Sunshine",
      rotation: "2.5deg",
      tapeColor: "rose",
      note: "Stopping on the road, opening our yogurts, laughing over nothing. The true definition of our university days."
    },
    {
      id: "photo03",
      src: "./images/kirsty/photo03.jpg",
      caption: "My safe place on this entire campus 🤍",
      date: "By The Water",
      rotation: "-2deg",
      tapeColor: "kraft",
      note: "One of the most precious hugs ever. Eyes closed, hearts peaceful. Having you in my corner turned surviving university into living it."
    },
    {
      id: "photo04",
      src: "./images/kirsty/photo04.jpg",
      caption: "We really thought we were serious here 💀",
      date: "The Big Heart Road",
      rotation: "3.5deg",
      tapeColor: "blush",
      note: "Standing in the middle of the road forming a giant heart arch together. Pure sisterhood, pure drama, pure us."
    },
    {
      id: "photo05",
      src: "./images/kirsty/photo05.jpg",
      caption: "One of those random days that became a memory.",
      date: "Waterfront Embrace",
      rotation: "-1.5deg",
      tapeColor: "gold",
      note: "We didn't plan it, we just lived it. Thank you for always holding me down, Mother."
    },
    {
      id: "photo06",
      src: "./images/kirsty/photo06.jpg",
      caption: "Proof that we actually survived university.",
      date: "Campus Road Walks",
      rotation: "2deg",
      tapeColor: "rose",
      note: "Plaid shirts, caps, and big laughs. Surviving midterms and assignments one snack at a time."
    },
    {
      id: "photo07",
      src: "./images/kirsty/photo07.jpg",
      caption: "Here's to 22. Here's to us. 🤍",
      date: "The Road to 22",
      rotation: "-2.8deg",
      tapeColor: "kraft",
      note: "Joined hands above, joined hands below. In this together through university graduation and beyond."
    },
    {
      id: "photo08",
      src: "./images/kirsty/photo08.jpg",
      caption: "The Birthday Girl, Kirsty Wangu ✨",
      date: "22nd Milestone",
      rotation: "1.8deg",
      tapeColor: "blush",
      note: "Turning 22 looking radiant, grounded, and so deeply loved."
    }
  ],

  // "Things I Love About Us" Section
  thingsWeLove: {
    heading: "Things I hope we never forget",
    subheading: "The little pieces of sisterhood that mean the world to me.",
    items: [
      { id: 1, text: "The random conversations that started with five words and ended up lasting three hours." },
      { id: 2, text: "The uncontrollable laughter over absolutely nothing until our stomachs hurt and tears were falling." },
      { id: 3, text: "The times we were both overwhelmed with work but still wanted to be in the same room anyway." },
      { id: 4, text: "The comfortable silence — where neither of us had to say a word or pretend to be entertaining." },
      { id: 5, text: "The university stress we survived together that nobody outside our bubble will ever truly understand." },
      { id: 6, text: "The little inside jokes, the silent eye-contact across a room, and the 'Mother mhamha' moments." },
      { id: 7, text: "The memories that were never planned on any calendar, but became the highlights of my years." },
      { id: 8, text: "The fact that I can simply exist around you with zero filters and 100% peace." },
      { id: 9, text: "The way your presence could make an otherwise exhausting day feel soft, warm, and manageable." },
      { id: 10, text: "The unspoken truth: whenever anything happens, good or bad, my first thought is 'Wait till I tell Mother.'" }
    ]
  },

  // "22 Things For 22" (22 Interactive Cards)
  twentyTwoThings: [
    {
      number: "01",
      title: "Deeply Appreciated",
      message: "You are deeply, genuinely appreciated. More than you probably realize on ordinary days when we're just busy living."
    },
    {
      number: "02",
      title: "Your Presence Matters",
      message: "Your presence changes the room. You bring calm, warmth, and grounded kindness wherever you walk."
    },
    {
      number: "03",
      title: "University Made Better",
      message: "You have made university so much better for me in ways words will never be able to fully articulate."
    },
    {
      number: "04",
      title: "One of My Favourites",
      message: "You are truly one of my favourite people on this planet. No competition, no doubts."
    },
    {
      number: "05",
      title: "Never Underestimate Love",
      message: "I hope you never underestimate how fiercely and consistently you are loved by those who know you best."
    },
    {
      number: "06",
      title: "A Gentle Year",
      message: "I pray this 22nd year is gentle with your heart, kind to your thoughts, and peaceful in your spirit."
    },
    {
      number: "07",
      title: "Achieve The Impossible",
      message: "I hope you achieve things this year that you once quietly wondered if you could ever pull off. You can."
    },
    {
      number: "08",
      title: "Belly Laughs",
      message: "I hope you laugh so hard your cheeks ache and your stomach hurts at least once every single week."
    },
    {
      number: "09",
      title: "The Woman You're Becoming",
      message: "I hope you keep becoming the brilliant, graceful, resilient woman God is molding you into. I love watching your growth."
    },
    {
      number: "10",
      title: "Thank You For Being You",
      message: "Thank you for never pretending to be someone else. Your authenticity is rare and precious."
    },
    {
      number: "11",
      title: "God's Masterpiece",
      message: "God is not done writing your story. The chapters you haven't seen yet are going to be breathtaking."
    },
    {
      number: "12",
      title: "Strength in Uncertainty",
      message: "Even on days when you feel unsure or tired, remember how much you've already conquered. You are remarkably resilient."
    },
    {
      number: "13",
      title: "Your Biggest Cheerleader",
      message: "In every room you step into and every dream you pursue, you have a cheerleader in me for life."
    },
    {
      number: "14",
      title: "Sanctuary In My Room",
      message: "Thank you for making my university room feel like the safest place on earth just by sitting in it."
    },
    {
      number: "15",
      title: "That Radiant Smile",
      message: "Never stop smiling with your whole face — the way you hide your laugh with your hand is the sweetest thing ever."
    },
    {
      number: "16",
      title: "Doors Swinging Wide",
      message: "May opportunities you haven't even dreamed of yet present themselves to you this year with absolute ease."
    },
    {
      number: "17",
      title: "Genuine Company",
      message: "You deserve friends, mentors, and loved ones who treat your gentle heart with immense loyalty and reverence."
    },
    {
      number: "18",
      title: "Stuck With Me",
      message: "University might end one day, but our sisterhood is permanent. You're officially stuck with me forever, Mother."
    },
    {
      number: "19",
      title: "Worthy of Every Good Thing",
      message: "You are worthy of goodness, peace, beautiful surprises, and dreams coming true. Don't ever settle for less."
    },
    {
      number: "20",
      title: "My Safe Listening Ear",
      message: "Thank you for listening to my unfiltered rants, my worries, and my silly thoughts without an ounce of judgment."
    },
    {
      number: "21",
      title: "22 Looks Good On You",
      message: "22 is going to be your year of blossoming, joy, clarity, and soft divine alignment."
    },
    {
      number: "22",
      title: "University's Greatest Gift",
      message: "You are, without question, one of the greatest blessings university ever placed in my life. Happy Birthday, Mother!"
    }
  ],

  // Bible Verses Section: "A Blessing for Your 22nd Year"
  bibleVerses: [
    {
      ref: "Numbers 6:24–26",
      title: "The Aaronic Blessing",
      text: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.",
      theme: "Peace & Protection"
    },
    {
      ref: "Jeremiah 29:11",
      title: "A Future & A Hope",
      text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
      theme: "Divine Purpose"
    },
    {
      ref: "Proverbs 3:5–6",
      title: "Trust & Direction",
      text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      theme: "Guidance"
    },
    {
      ref: "Psalm 121:1–2, 7–8",
      title: "The Keeper of Your Soul",
      text: "My help comes from the Lord, the Maker of heaven and earth. The Lord will keep you from all harm — he will watch over your life; the Lord will watch over your coming and going both now and forevermore.",
      theme: "Safety & Grace"
    },
    {
      ref: "Ecclesiastes 4:9–10",
      title: "Two Are Better Than One",
      text: "Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up.",
      theme: "Companionship"
    },
    {
      ref: "1 Corinthians 13:4, 7",
      title: "Enduring Love",
      text: "Love is patient, love is kind... It always protects, always trusts, always hopes, always perseveres.",
      theme: "Sisterhood"
    }
  ],

  // Personal Prayer Section
  prayer: {
    heading: "A Personal Prayer for Kirsty at 22",
    subheading: "Prayed with all my heart for my best friend.",
    paragraphs: [
      "Heavenly Father, thank You for the precious gift of Paidamoyo Kirsty Makoni. Thank You for crafting her with such elegance, humor, kindness, and strength. Thank You for orchestrating our steps so that our paths crossed in university, turning a stranger into my closest confidante and sister.",
      "As Kirsty steps into 22 today, I ask that Your hand of divine favor rests heavily upon her life. Guide her footsteps in every lecture, every decision, every career opportunity, and every relationship. When she feels tired, pour fresh energy into her spirit. When she feels uncertain about tomorrow, remind her of the magnificent plans You have already established for her.",
      "Surround her with genuine, loyal people who will uplift her and protect her peace. Open doors that no obstacle can shut, and give her the wisdom to walk boldly through them. Shield her from anxiety, grant her good health, and grant her laughter that echoes through her days.",
      "Bless her family, her studies, her dreams, and her future. May this 22nd year be marked by deep serenity, overflowing breakthroughs, and the constant reminder that she is never walking alone.",
      "In Jesus' name, Amen. 🤍"
    ]
  },

  // Memory Timeline: "Us, so far..."
  timeline: [
    {
      year: "Year 1",
      title: "The Unlikely University Beginning",
      desc: "Meeting on campus when everything was new, strange, and intimidating. We had no idea back then that we'd become each other's entire university survival guide.",
      tag: "The Spark"
    },
    {
      year: "The Milestone",
      title: "The Birth of 'Mother & Mother'",
      desc: "The day we started calling each other 'Mother' and 'Mother mhamha.' It wasn't just a nickname; it became our identity, our inside language, and our seal of sisterhood.",
      tag: "Inside Joke"
    },
    {
      year: "The Routine",
      title: "The Room Days Era",
      desc: "Endless afternoons and evenings spent in my room. Studying on opposite sides of the room, typing on our laptops, scrolling our phones, eating snacks, completely content in silence.",
      tag: "Pure Comfort"
    },
    {
      year: "The Battles",
      title: "Surviving Assignment & Exam Hell",
      desc: "Those weeks when everything was due at once. The late-night library sprints, the frantic proofreading, the shared despair that somehow turned into uncontrollable laughter.",
      tag: "We Survived"
    },
    {
      year: "Chapter 22",
      title: "October • Kirsty Turns 22",
      desc: "Standing here today celebrating you. Seeing how much you've grown, how gracefully you carry yourself, and knowing that having you in my life is one of my greatest blessings.",
      tag: "Today's Celebration"
    },
    {
      year: "Beyond",
      title: "Post-Graduation & The Forever Future",
      desc: "Degrees in hand, big adult dreams, weddings, travels, and grey hair one day — still calling each other 'Mother' and laughing about our university room days.",
      tag: "Forever"
    }
  ],

  // "If University Had a Thank-You Note"
  thankYouNote: {
    leadIn: "If university asked me what the best thing it gave me was...",
    pauseText: "(Take a breath, Mother 🤍)",
    punchline: "Honestly? You.",
    explanation: "Degrees will gather dust, campus buildings will fade into memory, but having a friend who made the hard days feel manageable is something I will carry in my heart for the rest of my life.",
    featuredImage: "./images/kirsty/lake-hug.jpg",
    featuredCaption: "My safest place at university. My unexpected blessing. 🤍"
  },

  // Final Letter
  finalLetter: {
    heading: "One last thing, Mother mhamha...",
    body: [
      "Dear Kirsty,",
      "If someone had told me before I started university that my safest place would end up being a friend I could sit in complete silence with, I wouldn't have understood what they meant. But now, with every semester behind us, I understand completely.",
      "University has a way of being noisy, chaotic, and exhausting. You are constantly surrounded by people, yet it can be the loneliest place on earth. But having you changed that entire narrative for me. You turned an intimidating university environment into somewhere that felt warm, familiar, and safe.",
      "The big memories are wonderful — the celebrations, the walks, the photos, the funny milestones. But what I hold closest to my heart are the ordinary, quiet ones. The moments where we were just existing in the room together. You working on your things, me working on mine. Glancing across the room and bursting out laughing without saying a word. That level of effortless comfort is something people search their entire lives to find in a friendship.",
      "I am so deeply proud of the woman you are. You carry a quiet strength, a gentle heart, and a brilliance that shines even when you're just being yourself. As you step into 22, my deepest prayer is that this year treats you with the gentleness, honor, and joy you so abundantly deserve.",
      "Thank you for being one of the best things university ever gave me. Thank you for being my anchor, my sister, and my favorite person to simply exist around.",
      "Happy 22nd Birthday, Mother. 🤍",
      "I love you down, always."
    ],
    signOff: "— Your forever university partner in crime 🤍"
  },

  // Surprise Ending Modal
  surprise: {
    teaserButton: "Wait... there's one more thing 💌",
    headline: "Here's to 22. Here's to us.",
    subheadline: "Here's to everything we've survived. And here's to everything still waiting for us.",
    birthdayWish: "Happy Birthday, Kirsty Wangu. 🤍✨",
    toast: "May your 22nd year be as radiant, unforgettable, and deeply beautiful as the friendship you've given me.",
    collage: [
      { src: "./images/kirsty/hero.jpg", label: "Mother mhamha ✨" },
      { src: "./images/kirsty/lake-hug.jpg", label: "My Safe Place 🤍" },
      { src: "./images/kirsty/heart-road.jpg", label: "Here's to Us 🫶" }
    ]
  }
};
