const conversations = [
  {
    id: 1,
    convUser: "marcolombardi",
    convUserImg: "https://randomuser.me/api/portraits/men/44.jpg",
    convPreview: "È da un po' che non ci sentiamo!",
    messages: [
      {
        idMessage: 1,
        sender: "partner",
        text: "È da un po' che non ci sentiamo!",
        time: "8:50"
      },
      {
        idMessage: 2,
        sender: "me",
        text: "Infatti! Come stai?",
        time: "8:54"
      },
      {
        idMessage: 3,
        sender: "partner",
        text: "Tutto bene, grazie! E tu?",
        time: "8:56"
      },
      {
        idMessage: 4,
        sender: "me",
        text: "Anch'io, molto occupato con il lavoro ultimamente",
        time: "9:02"
      },
      {
        idMessage: 5,
        sender: "partner",
        text: "Capisco, che tipo di progetti stai seguendo?",
        time: "9:05"
      },
      {
        idMessage: 6,
        sender: "me",
        text: "Principalmente sviluppo web, sto lavorando a un'app di e-learning",
        time: "9:12"
      },
      {
        idMessage: 7,
        sender: "partner",
        text: "Interessante! È un progetto grande?",
        time: "9:15"
      },
      {
        idMessage: 8,
        sender: "me",
        text: "Piuttosto sì, abbiamo una squadra di 8 persone",
        time: "9:22"
      },
      {
        idMessage: 9,
        sender: "partner",
        text: "Wow, mi piacerebbe saperne di più!",
        time: "9:25"
      },
      {
        idMessage: 10,
        sender: "me",
        text: "Certo! Ti mando un link con i dettagli",
        time: "9:32"
      },
      {
        idMessage: 11,
        sender: "partner",
        text: "Perfetto, grazie! A proposito, hai programmi per il weekend?",
        time: "9:35"
      },
      {
        idMessage: 12,
        sender: "me",
        text: "Niente di speciale, forse una grigliata con amici",
        time: "9:42"
      },
      {
        idMessage: 13,
        sender: "partner",
        text: "Che bello! Se avete bisogno di altri, sono disponibile",
        time: "9:45"
      },
      {
        idMessage: 14,
        sender: "me",
        text: "Certo! Ti faccio sapere, sarebbe bello rivederti",
        time: "9:52"
      },
      {
        idMessage: 15,
        sender: "partner",
        text: "Fantastico! Mi fa piacere, a presto allora",
        time: "9:55"
      }
    ],
    convLastMessageTime: "1m",
    unread: true,
    hasStoryActive: false,
  },
  {
    id: 2,
    convUser: "giulia_rossi",
    convUserImg: "https://randomuser.me/api/portraits/women/21.jpg",
    convPreview: "Ha inviato un reel.",
    messages: [
      { idMessage: 1, sender: "partner", text: "Guarda questo reel, mi ha fatto morire! 😂", time: "10:15" },
      { idMessage: 2, sender: "partner", text: "Non riesco a smettere di ridere", time: "10:16" },
      { idMessage: 3, sender: "me", text: "Ahaha, ma dove li trovi?", time: "10:20" },
      { idMessage: 4, sender: "partner", text: "Me li manda mia sorella, è fissata", time: "10:22" },
      { idMessage: 5, sender: "me", text: "Comunque, hai novità per quel lavoro?", time: "10:30" },
      { idMessage: 6, sender: "partner", text: "Forse mi chiamano per un secondo colloquio!", time: "10:35" },
      { idMessage: 7, sender: "me", text: "Grande! Incrociamo le dita 🤞", time: "10:38" },
      { idMessage: 8, sender: "me", text: "Fammi sapere appena sai qualcosa", time: "10:38" }
    ],
    convLastMessageTime: "16m",
    unread: false,
    hasStoryActive: false,
  },
  {
    id: 3,
    convUser: "andrea.bianchi",
    convUserImg: "https://randomuser.me/api/portraits/men/32.jpg",
    convPreview: "Hai inviato un post di fifaworldcupamerica",
    messages: [
      { idMessage: 1, sender: "me", text: "Hai visto la partita ieri?", time: "20:30" },
      { idMessage: 2, sender: "partner", text: "Mamma mia, che sofferenza...", time: "20:32" },
      { idMessage: 3, sender: "me", text: "Però quel gol al 90' è stato pazzesco", time: "20:35" },
      { idMessage: 4, sender: "partner", text: "Vero, ha salvato la serata", time: "20:38" },
      { idMessage: 5, sender: "partner", text: "Non ci credevo più onestamente", time: "20:38" },
      { idMessage: 6, sender: "me", text: "Sabato andiamo allo stadio?", time: "20:45" },
      { idMessage: 7, sender: "partner", text: "Non riesco, ho un matrimonio :(", time: "20:50" }
    ],
    convLastMessageTime: "2o",
    unread: false,
    hasStoryActive: true,
  },
  {
    id: 4,
    convUser: "federica_m",
    convUserImg: "https://randomuser.me/api/portraits/women/45.jpg",
    convPreview: "Ti ricordi quel film ti cui ti avevo parlato l'altro giorno",
    messages: [
      { idMessage: 1, sender: "partner", text: "Ehi! Ti ricordi quel film di cui ti parlavo?", time: "14:00" },
      { idMessage: 2, sender: "me", text: "Quello horror?", time: "14:05" },
      { idMessage: 3, sender: "partner", text: "No, quello fantascientifico, 'Dune'!", time: "14:07" },
      { idMessage: 4, sender: "partner", text: "Devi vederlo assolutamente al cinema", time: "14:07" },
      { idMessage: 5, sender: "me", text: "Ah sì! L'hai visto?", time: "14:10" },
      { idMessage: 6, sender: "partner", text: "Ieri sera, visivamente è incredibile", time: "14:15" },
      { idMessage: 7, sender: "me", text: "Devo recuperarlo assolutamente", time: "14:20" }
    ],
    convLastMessageTime: "4o",
    unread: false,
    hasStoryActive: true,
  },
  {
    id: 5,
    convUser: "lucasartori",
    convUserImg: "https://randomuser.me/api/portraits/men/54.jpg",
    convPreview: "Ti ha taggato nella sua storia",
    messages: [
      { idMessage: 1, sender: "partner", text: "Oh, ma che serata ieri!", time: "11:00" },
      { idMessage: 2, sender: "me", text: "Non me lo dire, ho ancora mal di testa", time: "11:15" },
      { idMessage: 3, sender: "partner", text: "Ti ho taggato in una storia imbarazzante", time: "11:20" },
      { idMessage: 4, sender: "me", text: "Nooo, ti prego cancellala!", time: "11:22" },
      { idMessage: 5, sender: "partner", text: "Troppo tardi, l'hanno già vista tutti 😂", time: "11:25" }
    ],
    convLastMessageTime: "1g",
    unread: true,
    hasStoryActive: true,
  },
  {
    id: 6,
    convUser: "chiara_venturi",
    convUserImg: "https://randomuser.me/api/portraits/women/63.jpg",
    convPreview: "Ha inviato un reel di tmplanet",
    messages: [
      { idMessage: 1, sender: "partner", text: "Ciao! Come va l'università?", time: "09:00" },
      { idMessage: 2, sender: "me", text: "Insomma, sessione esami pesante", time: "09:10" },
      { idMessage: 3, sender: "me", text: "Sto studiando diritto privato da tre settimane 😭", time: "09:10" },
      { idMessage: 4, sender: "partner", text: "Ti capisco, io sono sommersa dai libri", time: "09:15" },
      { idMessage: 5, sender: "me", text: "Quando finisci?", time: "09:20" },
      { idMessage: 6, sender: "partner", text: "Spero per metà luglio", time: "09:25" }
    ],
    convLastMessageTime: "2g",
    unread: true,
    hasStoryActive: false,
  },
  {
    id: 7,
    convUser: "paolo_rinaldi",
    convUserImg: "https://randomuser.me/api/portraits/men/67.jpg",
    convPreview: "Ci sentiamo nei prossimi giorni allora",
    messages: [
      { idMessage: 1, sender: "me", text: "Ciao Paolo, hai novità per quel preventivo?", time: "16:00" },
      { idMessage: 2, sender: "partner", text: "Ciao! Sì, te lo giro in serata", time: "16:30" },
      { idMessage: 3, sender: "me", text: "Ottimo, grazie mille", time: "16:35" },
      { idMessage: 4, sender: "partner", text: "Figurati. Ci sentiamo nei prossimi giorni allora", time: "16:40" }
    ],
    convLastMessageTime: "1s",
    unread: false,
    hasStoryActive: true,
  },
  {
    id: 8,
    convUser: "elena.costa",
    convUserImg: "https://randomuser.me/api/portraits/women/71.jpg",
    convPreview: "Hai inviato un reel di lozoodi105.",
    messages: [
      { idMessage: 1, sender: "partner", text: "Hai sentito cosa è successo a Marco?", time: "18:00" },
      { idMessage: 2, sender: "me", text: "No, dimmi tutto!", time: "18:05" },
      { idMessage: 3, sender: "partner", text: "Si trasferisce a Londra!", time: "18:10" },
      { idMessage: 4, sender: "me", text: "Davvero? Wow, che coraggio", time: "18:15" },
      { idMessage: 5, sender: "partner", text: "Sì, parte il mese prossimo", time: "18:20" }
    ],
    convLastMessageTime: "1s",
    unread: false,
    hasStoryActive: false,
  },
  {
    id: 9,
    convUser: "davide_moretti",
    convUserImg: "https://randomuser.me/api/portraits/men/82.jpg",
    convPreview: "Hai per caso controllato nello spam? sono sicuro di avertela inviata",
    messages: [
      { idMessage: 1, sender: "me", text: "Davide, non mi è arrivata la mail", time: "10:00" },
      { idMessage: 2, sender: "partner", text: "Strano, l'ho mandata ieri sera", time: "10:05" },
      { idMessage: 3, sender: "me", text: "Ho controllato ovunque, nulla", time: "10:10" },
      { idMessage: 4, sender: "me", text: "Nemmeno nello spam", time: "10:10" },
      { idMessage: 5, sender: "partner", text: "Hai per caso controllato nello spam? sono sicuro di avertela inviata", time: "10:15" },
      { idMessage: 6, sender: "partner", text: "Ah scusa ho letto ora il tuo messaggio sopra 😅", time: "10:16" }
    ],
    convLastMessageTime: "2s",
    unread: false,
    hasStoryActive: false,
  },
  {
    id: 10,
    convUser: "silvia_gallo",
    convUserImg: "https://randomuser.me/api/portraits/women/90.jpg",
    convPreview: "Grazie mille, auguri anche a te! Ci sentiamo presto.",
    messages: [
      { idMessage: 1, sender: "me", text: "Buon Natale Silvia!", time: "00:01" },
      { idMessage: 2, sender: "partner", text: "Grazie mille, auguri anche a te! Ci sentiamo presto.", time: "09:30" }
    ],
    convLastMessageTime: "4s",
    unread: false,
    hasStoryActive: false,
  },
  {
    id: 11,
    convUser: "matteo_ferri",
    convUserImg: "https://randomuser.me/api/portraits/men/91.jpg",
    convPreview: "Appena finito di leggere quel libro, che figata!",
    messages: [
      { idMessage: 1, sender: "partner", text: "Appena finito di leggere quel libro, che figata!", time: "22:00" },
      { idMessage: 2, sender: "me", text: "Vero? Il finale è pazzesco", time: "22:05" },
      { idMessage: 3, sender: "partner", text: "Non me l'aspettavo proprio", time: "22:10" }
    ],
    convLastMessageTime: "5s",
    unread: false,
    hasStoryActive: false,
  },
  {
    id: 12,
    convUser: "valentina_romeo",
    convUserImg: "https://randomuser.me/api/portraits/women/92.jpg",
    convPreview: "Hai visto le foto del concerto?",
    messages: [
      { idMessage: 1, sender: "partner", text: "Hai visto le foto del concerto?", time: "13:00" },
      { idMessage: 2, sender: "me", text: "Sì, sembravate divertirvi un sacco!", time: "13:05" },
      { idMessage: 3, sender: "partner", text: "È stato epico, la prossima volta devi venire", time: "13:10" }
    ],
    convLastMessageTime: "12m",
    unread: false,
    hasStoryActive: true,
  },
  {
    id: 13,
    convUser: "alessio_conti",
    convUserImg: "https://randomuser.me/api/portraits/men/93.jpg",
    convPreview: "Ti va di venire a cena domani?",
    messages: [
      { idMessage: 1, sender: "partner", text: "Ehi, sei libero venerdì?", time: "19:00" },
      { idMessage: 2, sender: "me", text: "Penso di sì, perché?", time: "19:05" },
      { idMessage: 3, sender: "partner", text: "Ti va di venire a cena domani?", time: "19:10" }
    ],
    convLastMessageTime: "1o",
    unread: false,
    hasStoryActive: false,
  },
  {
    id: 14,
    convUser: "giorgia_mazza",
    convUserImg: "https://randomuser.me/api/portraits/women/94.jpg",
    convPreview: "Hai inviato un post di viaggieventura",
    messages: [
      { idMessage: 1, sender: "me", text: "Guarda che posto incredibile!", time: "08:00" },
      { idMessage: 2, sender: "partner", text: "Wow, Maldive?", time: "08:10" },
      { idMessage: 3, sender: "me", text: "Sì, magari andarci...", time: "08:15" }
    ],
    convLastMessageTime: "3g",
    unread: false,
    hasStoryActive: true,
  },
  {
    id: 15,
    convUser: "luca_grassi",
    convUserImg: "https://randomuser.me/api/portraits/men/95.jpg",
    convPreview: "Buon compleanno! 🎉",
    messages: [
      { idMessage: 1, sender: "partner", text: "Buon compleanno! 🎉", time: "00:00" },
      { idMessage: 2, sender: "me", text: "Grazie mille Luca!", time: "09:00" }
    ],
    convLastMessageTime: "1s",
    unread: false,
    hasStoryActive: false,
  },
];

export default conversations;
