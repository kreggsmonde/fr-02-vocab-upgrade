// Daily Video History Log & Topic Registry
const PODCAST_HISTORY = [
  {
    "episode": 1,
    "topic": "Beyond 'Nice to Meet You': Mastering First Impressions in English",
    "date": "2026-10-16T03:49:03.752971",
    "duration_sec": 1382.64,
    "duration_min": 23.04,
    "video_file": "podcast_ep1_20261016_032719.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 2,
    "topic": "L'Art de Dire 'Merci' Sans Répéter : Vocabulaire Sophistiqué pour une Gratitude Authentique",
    "date": "2026-10-17T11:59:50.212847",
    "duration_sec": 1320.31,
    "duration_min": 22.01,
    "video_file": "podcast_ep2_20261017_113750.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 3,
    "topic": "Dire 'Je m'ennuie' comme un(e) vrai(e) Parisien(ne) : Évitez la Faitise !",
    "date": "2026-10-18T05:58:31.538568",
    "duration_sec": 1293.17,
    "duration_min": 21.55,
    "video_file": "podcast_ep3_20261018_054227.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 4,
    "topic": "Oubliez 'C'est cool' : Exprimer l'Appréciation avec Style en Français Moderne",
    "date": "2026-10-19T06:16:37.488595",
    "duration_sec": 1292.35,
    "duration_min": 21.54,
    "video_file": "podcast_ep4_20261019_055907.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 5,
    "topic": "Dire 'Je suis fatigué(e)' sans perdre sa prestance : Le vocabulaire secret des noctambules et des lève-tôt",
    "date": "2026-10-20T06:06:44.473714",
    "duration_sec": 1270.34,
    "duration_min": 21.17,
    "video_file": "podcast_ep5_20261020_055309.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 6,
    "topic": "Dire 'J'aime bien' : Naviguer les Nuances de l'Appréciation en Français",
    "date": "2026-10-21T06:16:53.567603",
    "duration_sec": 1257.65,
    "duration_min": 20.96,
    "video_file": "podcast_ep6_20261021_055413.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 7,
    "topic": "Dire 'Je suis occupé(e)' sans passer pour un(e) surmené(e) : Le vocabulaire des gens qui ont du répondant",
    "date": "2026-10-22T06:20:29.251401",
    "duration_sec": 1387.17,
    "duration_min": 23.12,
    "video_file": "podcast_ep7_20261022_055756.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 8,
    "topic": "Exit les banalités : Dire 'Au revoir' avec panache et laisser une trace mémorable",
    "date": "2026-10-23T06:10:07.520207",
    "duration_sec": 1415.71,
    "duration_min": 23.6,
    "video_file": "podcast_ep8_20261023_055518.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 9,
    "topic": "Dire 'Pas de problème' avec panache : L'art de minimiser et de rassurer en français",
    "date": "2026-10-24T05:59:53.809770",
    "duration_sec": 1275.48,
    "duration_min": 21.26,
    "video_file": "podcast_ep9_20261024_053857.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 10,
    "topic": "Dire 'J'ai faim' sans grogner : Le vocabulaire gourmet des gourmands",
    "date": "2026-10-25T06:11:19.689460",
    "duration_sec": 1329.05,
    "duration_min": 22.15,
    "video_file": "podcast_ep10_20261025_055356.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 11,
    "topic": "Dire 'Je suis d'accord' sans se répéter : L'art de l'assentiment nuancé",
    "date": "2026-10-26T06:17:02.139630",
    "duration_sec": 1313.54,
    "duration_min": 21.89,
    "video_file": "podcast_ep11_20261026_055838.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 12,
    "topic": "De 'J'ai mal' à 'Ça va aller' : Gérer les Petits Bobos et les Grosses Chagrins",
    "date": "2026-10-27T06:33:11.731923",
    "duration_sec": 1354.03,
    "duration_min": 22.57,
    "video_file": "podcast_ep12_20261027_061003.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 13,
    "topic": "Dire 'J'ai froid' comme un vrai Français : Au-delà du frisson !",
    "date": "2026-10-29T07:15:15.609930",
    "duration_sec": 1234.63,
    "duration_min": 20.58,
    "video_file": "podcast_ep13_20261029_065636.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 14,
    "topic": "Oubliez 'Je suis désolé(e)' : Exprimer des Excuses avec Sincérité et Élégance",
    "date": "2026-10-30T07:20:31.027816",
    "duration_sec": 1325.73,
    "duration_min": 22.1,
    "video_file": "podcast_ep14_20261030_065908.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 15,
    "topic": "Dire 'Je suis content(e)' sans jamais paraître naïf : Le lexique des joies subtiles et des bonheurs discrets",
    "date": "2026-10-31T07:11:53.448999",
    "duration_sec": 1205.57,
    "duration_min": 20.09,
    "video_file": "podcast_ep15_20261031_065324.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 16,
    "topic": "Au-delà de 'C'est bizarre' : Décrire l'Inattendu avec Style en Français",
    "date": "2026-11-01T07:39:42.380827",
    "duration_sec": 1218.43,
    "duration_min": 20.31,
    "video_file": "podcast_ep16_20261101_072055.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 17,
    "topic": "Ditching Boring English Words",
    "date": "2026-11-02T07:46:46.010533",
    "duration_sec": 1224.53,
    "duration_min": 20.41,
    "video_file": "podcast_ep17_20261102_073416.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 18,
    "topic": "Dire 'Je suis perdu(e)' sans perdre la tête : Naviguer dans la Confusion avec Chic",
    "date": "2026-11-03T08:06:36.109457",
    "duration_sec": 1246.92,
    "duration_min": 20.78,
    "video_file": "podcast_ep18_20261103_074719.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 19,
    "topic": "Oubliez 'C'est compliqué' : Simplifier le Langage des Situations Épineuses",
    "date": "2026-11-04T07:47:52.398645",
    "duration_sec": 1311.5,
    "duration_min": 21.86,
    "video_file": "podcast_ep19_20261104_072741.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 20,
    "topic": "Dire 'Je ne sais pas' avec panache : Évitez le syndrome du mur blanc !",
    "date": "2026-11-05T08:07:18.056138",
    "duration_sec": 1215.98,
    "duration_min": 20.27,
    "video_file": "podcast_ep20_20261105_075128.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 21,
    "topic": "Weekend Adventures and Epic Fails",
    "date": "2026-11-06T08:04:03.466752",
    "duration_sec": 1263.36,
    "duration_min": 21.06,
    "video_file": "podcast_ep21_20261106_075143.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 22,
    "topic": "Au-delà de 'J'ai faim' : Le festin du vocabulaire gourmand",
    "date": "2026-11-07T07:15:52.930096",
    "duration_sec": 1206.86,
    "duration_min": 20.11,
    "video_file": "podcast_ep22_20261107_065956.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 23,
    "topic": "Dire 'J'ai sommeil' sans faire le lit : Le vocabulaire des grands dormeurs et des insomniaques",
    "date": "2026-11-08T07:27:57.790998",
    "duration_sec": 1245.48,
    "duration_min": 20.76,
    "video_file": "podcast_ep23_20261108_070936.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 24,
    "topic": "Exit 'Je suis fatigué' : Énergisez Votre Discours avec le Lexique du Dynamisme",
    "date": "2026-11-09T08:09:57.497212",
    "duration_sec": 1243.41,
    "duration_min": 20.72,
    "video_file": "podcast_ep24_20261109_075048.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 25,
    "topic": "Au-delà de 'C'est génial' : S'enthousiasmer comme un vrai Français",
    "date": "2026-11-10T08:38:23.836873",
    "duration_sec": 1264.1,
    "duration_min": 21.07,
    "video_file": "podcast_ep25_20261110_081921.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 26,
    "topic": "Dire 'Je suis nulle' avec humour : Transformer la maladresse en charme à la française",
    "date": "2026-11-11T07:57:26.778454",
    "duration_sec": 1309.56,
    "duration_min": 21.83,
    "video_file": "podcast_ep26_20261111_074123.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 27,
    "topic": "Exit 'Je suis là' : S'annoncer avec assurance et style à la française",
    "date": "2026-11-12T08:26:31.216697",
    "duration_sec": 1271.54,
    "duration_min": 21.19,
    "video_file": "podcast_ep27_20261112_081011.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 28,
    "topic": "Dire 'J'adore' sans jamais faire 'bouh' : L'éloge subtil et passionné à la française",
    "date": "2026-11-13T08:03:57.560601",
    "duration_sec": 1288.7,
    "duration_min": 21.48,
    "video_file": "podcast_ep28_20261113_074649.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 29,
    "topic": "Oubliez 'Je suis perdu(e)' : Demander son chemin avec le chic parisien",
    "date": "2026-11-14T07:47:48.902401",
    "duration_sec": 1267.03,
    "duration_min": 21.12,
    "video_file": "podcast_ep29_20261114_073112.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 30,
    "topic": "Dire 'Je suis d'accord' : L'Art d'Acquiescer avec Nuance et Style",
    "date": "2026-11-15T07:59:37.375087",
    "duration_sec": 1200.14,
    "duration_min": 20.0,
    "video_file": "podcast_ep30_20261115_074427.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 31,
    "topic": "Exit le 'Salut' : Accueillir et Saluer avec le Charme Français",
    "date": "2026-11-16T08:03:09.281660",
    "duration_sec": 1281.26,
    "duration_min": 21.35,
    "video_file": "podcast_ep31_20261116_075115.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 32,
    "topic": "Au-delà de 'Je suis occupé(e)' : Gérer les Impératifs avec Fluidité et Charme",
    "date": "2026-11-17T09:19:48.000936",
    "duration_sec": 1278.77,
    "duration_min": 21.31,
    "video_file": "podcast_ep32_20261117_085946.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 33,
    "topic": "Fini le 'C'est gentil' : Dire Merci avec l'Élégance et la Subtilité Française",
    "date": "2026-11-18T08:42:01.249665",
    "duration_sec": 1325.16,
    "duration_min": 22.09,
    "video_file": "podcast_ep33_20261118_082611.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 34,
    "topic": "Dites 'Non' avec Style : L'Art de Refuser sans Casser les Codes en Français",
    "date": "2026-11-19T09:04:17.439798",
    "duration_sec": 1354.8,
    "duration_min": 22.58,
    "video_file": "podcast_ep34_20261119_084334.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 35,
    "topic": "Dire 'Je m'ennuie' avec panache : Évitez le blues de la routine avec le vocabulaire des esprits vifs",
    "date": "2026-11-20T08:40:28.135205",
    "duration_sec": 1216.1,
    "duration_min": 20.27,
    "video_file": "podcast_ep35_20261120_082114.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 36,
    "topic": "Au-delà du 'C'est cool' : Décrire l'Extraordinaire avec Éclat en Français",
    "date": "2026-11-21T08:35:44.133261",
    "duration_sec": 1326.24,
    "duration_min": 22.1,
    "video_file": "podcast_ep36_20261121_081153.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 37,
    "topic": "Dire 'C'est nul' sans plomber l'ambiance : L'art de critiquer avec humour et finesse",
    "date": "2026-11-22T08:11:16.412233",
    "duration_sec": 1244.13,
    "duration_min": 20.74,
    "video_file": "podcast_ep37_20261122_075531.mp4",
    "platform": "Facebook, YouTube"
  },
  {
    "episode": 38,
    "topic": "Exit les 'C'est vrai' ! Affirmer avec assurance et panache en français",
    "date": "2026-11-23T09:11:35.452509",
    "duration_sec": 1230.26,
    "duration_min": 20.5,
    "video_file": "podcast_ep38_20261123_085209.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 39,
    "topic": "L'Art de Dire 'Je t'aime' : Au-delà des Trois Petits Mots Mous",
    "date": "2026-11-24T11:05:18.734798",
    "duration_sec": 1273.44,
    "duration_min": 21.22,
    "video_file": "podcast_ep39_20261124_104859.mp4",
    "platform": "Facebook, YouTube"
  }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = PODCAST_HISTORY; }
if (typeof window !== 'undefined') { window.PODCAST_HISTORY = PODCAST_HISTORY; }
