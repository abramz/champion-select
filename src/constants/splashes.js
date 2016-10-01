function format({ key, num }) {
  return `${key}_${num}.jpg`;
}

const splashes = [
  {
    id: 266,
    key: 'Aatrox',
    num: 2,
  },
  {
    id: 103,
    key: 'Ahri',
    num: 7,
  },
  {
    id: 84,
    key: 'Akali',
    num: 4,
  },
  {
    id: 12,
    key: 'Alistar',
    num: 4,
  },
  {
    id: 32,
    key: 'Amumu',
    num: 0,
  },
  {
    id: 34,
    key: 'Anivia',
    num: 0,
  },
  {
    id: 1,
    key: 'Annie',
    num: 2,
  },
  {
    id: 22,
    key: 'Ashe',
    num: 6,
  },
  {
    id: 136,
    key: 'AurelionSol',
    num: 0,
  },
  {
    id: 268,
    key: 'Azir',
    num: 0,
  },
  {
    id: 432,
    key: 'Bard',
    num: 0,
  },
  {
    id: 53,
    key: 'Blitzcrank',
    num: 0,
  },
  {
    id: 63,
    key: 'Brand',
    num: 0,
  },
  {
    id: 201,
    key: 'Braum',
    num: 0,
  },
  {
    id: 51,
    key: 'Caitlyn',
    num: 5,
  },
  {
    id: 69,
    key: 'Cassiopeia',
    num: 0,
  },
  {
    id: 31,
    key: 'Chogath',
    num: 3,
  },
  {
    id: 42,
    key: 'Corki',
    num: 5,
  },
  {
    id: 122,
    key: 'Darius',
    num: 4,
  },
  {
    id: 131,
    key: 'Diana',
    num: 0,
  },
  {
    id: 119,
    key: 'Draven',
    num: 2,
  },
  {
    id: 36,
    key: 'DrMundo',
    num: 3,
  },
  {
    id: 245,
    key: 'Ekko',
    num: 3,
  },
  {
    id: 60,
    key: 'Elise',
    num: 0,
    translate: { x: -45, y: 0 },
    scaleX: 1,
  },
  {
    id: 28,
    key: 'Evelynn',
    num: 0,
  },
  {
    id: 81,
    key: 'Ezreal',
    num: 5,
  },
  {
    id: 9,
    key: 'FiddleSticks',
    num: 6,
  },
  {
    id: 114,
    key: 'Fiora',
    num: 4,
  },
  {
    id: 105,
    key: 'Fizz',
    num: 8,
  },
  {
    id: 3,
    key: 'Galio',
    num: 5,
  },
  {
    id: 41,
    key: 'Gangplank',
    num: 6,
  },
  {
    id: 86,
    key: 'Garen',
    num: 6,
  },
  {
    id: 150,
    key: 'Gnar',
    num: 1,
  },
  {
    id: 79,
    key: 'Gragas',
    num: 5,
  },
  {
    id: 104,
    key: 'Graves',
    num: 5,
  },
  {
    id: 120,
    key: 'Hecarim',
    num: 4,
  },
  {
    id: 74,
    key: 'Heimerdinger',
    num: 5,
  },
  {
    id: 420,
    key: 'Illaoi',
    num: 0,
  },
  {
    id: 39,
    key: 'Irelia',
    num: 5,
  },
  {
    id: 40,
    key: 'Janna',
    num: 5,
  },
  {
    id: 59,
    key: 'JarvanIV',
    num: 0,
  },
  {
    id: 24,
    key: 'Jax',
    num: 6,
  },
  {
    id: 126,
    key: 'Jayce',
    num: 3,
  },
  {
    id: 202,
    key: 'Jhin',
    num: 0,
  },
  {
    id: 222,
    key: 'Jinx',
    num: 2,
  },
  {
    id: 429,
    key: 'Kalista',
    num: 2,
  },
  {
    id: 43,
    key: 'Karma',
    num: 0,
  },
  {
    id: 30,
    key: 'Karthus',
    num: 0,
  },
  {
    id: 38,
    key: 'Kassadin',
    num: 5,
  },
  {
    id: 55,
    key: 'Katarina',
    num: 9,
  },
  {
    id: 10,
    key: 'Kayle',
    num: 6,
  },
  {
    id: 85,
    key: 'Kennen',
    num: 2,
  },
  {
    id: 121,
    key: 'Khazix',
    num: 3,
  },
  {
    id: 203,
    key: 'Kindred',
    num: 0,
  },
  {
    id: 240,
    key: 'Kled',
    num: 0,
  },
  {
    id: 96,
    key: 'KogMaw',
    num: 3,
  },
  {
    id: 7,
    key: 'Leblanc',
    num: 0,
  },
  {
    id: 64,
    key: 'LeeSin',
    num: 3,
  },
  {
    id: 89,
    key: 'Leona',
    num: 8,
  },
  {
    id: 127,
    key: 'Lissandra',
    num: 0,
  },
  {
    id: 236,
    key: 'Lucian',
    num: 6,
  },
  {
    id: 117,
    key: 'Lulu',
    num: 0,
  },
  {
    id: 99,
    key: 'Lux',
    num: 6,
  },
  {
    id: 54,
    key: 'Malphite',
    num: 0,
  },
  {
    id: 90,
    key: 'Malzahar',
    num: 3,
  },
  {
    id: 57,
    key: 'Maokai',
    num: 0,
  },
  {
    id: 11,
    key: 'MasterYi',
    num: 9,
  },
  {
    id: 21,
    key: 'MissFortune',
    num: 7,
  },
  {
    id: 62,
    key: 'MonkeyKing',
    num: 5,
  },
  {
    id: 82,
    key: 'Mordekaiser',
    num: 0,
  },
  {
    id: 25,
    key: 'Morgana',
    num: 0,
  },
  {
    id: 267,
    key: 'Nami',
    num: 7,
  },
  {
    id: 75,
    key: 'Nasus',
    num: 0,
  },
  {
    id: 111,
    key: 'Nautilus',
    num: 3,
  },
  {
    id: 76,
    key: 'Nidalee',
    num: 0,
  },
  {
    id: 56,
    key: 'Nocturne',
    num: 0,
  },
  {
    id: 20,
    key: 'Nunu',
    num: 3,
  },
  {
    id: 2,
    key: 'Olaf',
    num: 0,
  },
  {
    id: 61,
    key: 'Orianna',
    num: 6,
  },
  {
    id: 80,
    key: 'Pantheon',
    num: 0,
  },
  {
    id: 78,
    key: 'Poppy',
    num: 6,
  },
  {
    id: 133,
    key: 'Quinn',
    num: 0,
  },
  {
    id: 33,
    key: 'Rammus',
    num: 0,
  },
  {
    id: 421,
    key: 'RekSai',
    num: 0,
  },
  {
    id: 58,
    key: 'Renekton',
    num: 0,
  },
  {
    id: 107,
    key: 'Rengar',
    num: 2,
  },
  {
    id: 92,
    key: 'Riven',
    num: 0,
  },
  {
    id: 68,
    key: 'Rumble',
    num: 3,
  },
  {
    id: 13,
    key: 'Ryze',
    num: 0,
  },
  {
    id: 113,
    key: 'Sejuani',
    num: 0,
  },
  {
    id: 35,
    key: 'Shaco',
    num: 5,
  },
  {
    id: 98,
    key: 'Shen',
    num: 3,
  },
  {
    id: 102,
    key: 'Shyvana',
    num: 0,
  },
  {
    id: 27,
    key: 'Singed',
    num: 0,
  },
  {
    id: 14,
    key: 'Sion',
    num: 0,
  },
  {
    id: 15,
    key: 'Sivir',
    num: 6,
  },
  {
    id: 72,
    key: 'Skarner',
    num: 0,
  },
  {
    id: 37,
    key: 'Sona',
    num: 6,
  },
  {
    id: 16,
    key: 'Soraka',
    num: 0,
  },
  {
    id: 50,
    key: 'Swain',
    num: 0,
  },
  {
    id: 134,
    key: 'Syndra',
    num: 2,
  },
  {
    id: 223,
    key: 'TahmKench',
    num: 0,
  },
  {
    id: 163,
    key: 'Taliyah',
    num: 0,
  },
  {
    id: 91,
    key: 'Talon',
    num: 3,
  },
  {
    id: 44,
    key: 'Taric',
    num: 2,
  },
  {
    id: 17,
    key: 'Teemo',
    num: 5,
  },
  {
    id: 412,
    key: 'Thresh',
    num: 2,
  },
  {
    id: 18,
    key: 'Tristana',
    num: 10,
  },
  {
    id: 48,
    key: 'Trundle',
    num: 3,
  },
  {
    id: 23,
    key: 'Tryndamere',
    num: 7,
  },
  {
    id: 4,
    key: 'TwistedFate',
    num: 5,
  },
  {
    id: 29,
    key: 'Twitch',
    num: 4,
  },
  {
    id: 77,
    key: 'Udyr',
    num: 3,
  },
  {
    id: 6,
    key: 'Urgot',
    num: 0,
  },
  {
    id: 110,
    key: 'Varus',
    num: 6,
  },
  {
    id: 67,
    key: 'Vayne',
    num: 4,
  },
  {
    id: 45,
    key: 'Veigar',
    num: 8,
  },
  {
    id: 161,
    key: 'Velkoz',
    num: 0,
  },
  {
    id: 254,
    key: 'Vi',
    num: 1,
  },
  {
    id: 112,
    key: 'Viktor',
    num: 0,
  },
  {
    id: 8,
    key: 'Vladimir',
    num: 0,
  },
  {
    id: 106,
    key: 'Volibear',
    num: 1,
  },
  {
    id: 19,
    key: 'Warwick',
    num: 2,
  },
  {
    id: 101,
    key: 'Xerath',
    num: 0,
  },
  {
    id: 5,
    key: 'XinZhao',
    num: 3,
  },
  {
    id: 157,
    key: 'Yasuo',
    num: 2,
  },
  {
    id: 83,
    key: 'Yorick',
    num: 0,
  },
  {
    id: 154,
    key: 'Zac',
    num: 0,
  },
  {
    id: 238,
    key: 'Zed',
    num: 10,
  },
  {
    id: 115,
    key: 'Ziggs',
    num: 0,
  },
  {
    id: 26,
    key: 'Zilean',
    num: 0,
  },
  {
    id: 143,
    key: 'Zyra',
    num: 0,
  },
];

export default splashes.map((splash) => {
  const newSplash = Object.assign({}, splash);
  newSplash.image = format(splash);

  return newSplash;
});
