var retrofitVersion = "Retrofit - v14122021";
var userKai = [
   5, // Cassin
   6, // Downes
   19, // Laffey
   //26, // Sims
   //27, // Hammann
   33, // Helena
   36, // San Diego
   44, // Portland
   //52, // Nevada
   //53, // Oklahoma
   70, // Long Island
   //71, // Bogue
   //72, // Langley
   74, // Saratoga
   //75, // Ranger
   //81, // Amazon
   //82, // Acasta
   //83, // Ardent
   //88, // Comet
   //89, // Crescent
   //90, // Cygnet
   //91, // Foxhound
   //92, // Fortune
   //101, // Javelin
   //104, // Leander
   105, // Achilles
   //106, // Ajax
   //119, // London
   //122, // Suffolk
   //125, // York
   126, // Exeter
   131, // Warspite
   //140, // Hermes
   155, // Ayanami
   144, // Ark Royal
   164, // Yuudachi
   //165, // Shigure
   //167, // Kagerou
   //168, // Shiranui
   171, // Hatsuharu
   //174, // Hatsushimo
   //175, // Ariake
   //176, // Yuugure
   //179, // Yuubari
   183, // Isuzu
   //186, // Kinu
   //187, // Abukuma
   //188, // Mogami
   //190, // Furutaka
   //191, // Kako
   //208, // Fusou
   209, // Yamashiro
   210, // Ise
   211, // Hyuuga
   222, // Shouhou
   //226, // Souryuu
   227, // Hiryuu
   //233, // Z1
   236, // Z23
   //239, // Karlsruhe
   //240, // Köln
   //241, // Leipzig
   //258, // Ning Hai
   //259, // Ping Hai
   //263, // Bailey
   //269, // Kamikaze
   //270, // Matsukaze
   //271, // Mutsuki
   //272, // Kisaragi
   //301, // Nicholas
   //308, // Sendai
   //309, // Jintsuu
   //318, // Hamakaze
   //319, // Tanikaze
   //348, // Forbin
   //349, // Emile Bertin
   //351, // Le Mars
   //361, // Newcastle
   //372, // Curacoa
   //373, // Curlew
   //377, // Independence
   //424, // Kasumi
   434, // Pamiat Merkuria
]
var retrofit = [
   {
      "id":5,
      "name":"Cassin",
      "rarity":"Normal",
      "type":"Destroyer",
      "release":"Nov. 23, 2017",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":12600,
      "notes":""
   },
   {
      "id":6,
      "name":"Downes",
      "rarity":"Normal",
      "type":"Destroyer",
      "release":"Nov. 23, 2017",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":12600,
      "notes":""
   },
   {
      "id":19,
      "name":"Laffey",
      "rarity":"Elite",
      "type":"Destroyer",
      "release":"Mar. 27, 2018",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":36800,
      "notes":"Also requires 30 T3 Torpedo parts, 20 T3 Gun parts"
   },
   {
      "id":26,
      "name":"Sims",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Feb. 21, 2019",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":20300,
      "notes":""
   },
   {
      "id":27,
      "name":"Hammann",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Oct. 10, 2017",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":20300,
      "notes":""
   },
   {
      "id":33,
      "name":"Helena",
      "rarity":"Elite",
      "type":"Light cruiser",
      "release":"Jun. 3, 2020",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":29100,
      "notes":"Also requires 20 T3 Anti-Air Gun parts"
   },
   {
      "id":36,
      "name":"San Diego",
      "rarity":"Super Rare",
      "type":"Light cruiser",
      "release":"Sep. 28, 2018",
      "blue":0,
      "purple":18,
      "gold":20,
      "coins":59500,
      "notes":"Also requires 50 T3 Auxiliary parts, 60 T3 Gun parts, 3 copies of San Diego or Bulins, 1 Sparkling Microphone"
   },
   {
      "id":44,
      "name":"Portland",
      "rarity":"Rare",
      "type":"Heavy cruiser",
      "release":"Feb. 12, 2018",
      "blue":18,
      "purple":15,
      "gold":1,
      "coins":22600,
      "notes":""
   },
   {
      "id":52,
      "name":"Nevada",
      "rarity":"Normal",
      "type":"Battleship",
      "release":"Jun. 21, 2018",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":14000,
      "notes":""
   },
   {
      "id":53,
      "name":"Oklahoma",
      "rarity":"Normal",
      "type":"Battleship",
      "release":"Apr. 26, 2018",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":14000,
      "notes":""
   },
   {
      "id":70,
      "name":"Long Island",
      "rarity":"Rare",
      "type":"Light aircraft carrier",
      "release":"Oct. 16, 2017",
      "blue":18,
      "purple":12,
      "gold":1,
      "coins":21100,
      "notes":""
   },
   {
      "id":71,
      "name":"Bogue",
      "rarity":"Normal",
      "type":"Light aircraft carrier",
      "release":"Aug. 22, 2017",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":14000,
      "notes":""
   },
   {
      "id":72,
      "name":"Langley",
      "rarity":"Normal",
      "type":"Light aircraft carrier",
      "release":"Oct. 10, 2017",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":14000,
      "notes":""
   },
   {
      "id":74,
      "name":"Saratoga",
      "rarity":"Elite",
      "type":"Aircraft carrier",
      "release":"May. 24, 2018",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":31100,
      "notes":"Also requires 50 T3 Aircraft parts, 50 T3 Auxiliary parts"
   },
   {
      "id":75,
      "name":"Ranger",
      "rarity":"Normal",
      "type":"Light aircraft carrier",
      "release":"Sep. 9, 2017",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":14000,
      "notes":""
   },
   {
      "id":81,
      "name":"Amazon",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Mar. 26, 2020",
      "blue":17,
      "purple":10,
      "gold":2,
      "coins":18600,
      "notes":""
   },
   {
      "id":82,
      "name":"Acasta",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"May. 18, 2018",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":18800,
      "notes":""
   },
   {
      "id":83,
      "name":"Ardent",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"May. 18, 2018",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":18800,
      "notes":""
   },
   {
      "id":88,
      "name":"Comet",
      "rarity":"Normal",
      "type":"Destroyer",
      "release":"Dec. 15, 2017",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":12600,
      "notes":""
   },
   {
      "id":89,
      "name":"Crescent",
      "rarity":"Normal",
      "type":"Destroyer",
      "release":"Dec. 15, 2017",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":12600,
      "notes":""
   },
   {
      "id":90,
      "name":"Cygnet",
      "rarity":"Normal",
      "type":"Destroyer",
      "release":"Oct. 10, 2017",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":12600,
      "notes":""
   },
   {
      "id":91,
      "name":"Foxhound",
      "rarity":"Normal",
      "type":"Destroyer",
      "release":"Feb. 26, 2018",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":12600,
      "notes":""
   },
   {
      "id":92,
      "name":"Fortune",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Oct. 10, 2017",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":19100,
      "notes":""
   },
   {
      "id":101,
      "name":"Javelin",
      "rarity":"Elite",
      "type":"Destroyer",
      "release":"Oct. 26, 2017",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":29300,
      "notes":"Also requires 40 T3 Torpedo parts"
   },
   {
      "id":104,
      "name":"Leander",
      "rarity":"Normal",
      "type":"Light cruiser",
      "release":"Oct. 16, 2017",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":14000,
      "notes":""
   },
   {
      "id":105,
      "name":"Achilles",
      "rarity":"Rare",
      "type":"Light cruiser",
      "release":"Jan. 19, 2018",
      "blue":17,
      "purple":14,
      "gold":1,
      "coins":21100,
      "notes":""
   },
   {
      "id":106,
      "name":"Ajax",
      "rarity":"Rare",
      "type":"Light cruiser",
      "release":"Oct. 10, 2017",
      "blue":17,
      "purple":14,
      "gold":1,
      "coins":21100,
      "notes":""
   },
   {
      "id":119,
      "name":"London",
      "rarity":"Elite",
      "type":"Heavy cruiser",
      "release":"Jul. 18, 2019",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":25900,
      "notes":"Also requires 20 T3 Anti-air parts, 50 T3 Gun parts"
   },
   {
      "id":122,
      "name":"Suffolk",
      "rarity":"Rare",
      "type":"Heavy cruiser",
      "release":"Oct. 17, 2017",
      "blue":17,
      "purple":14,
      "gold":1,
      "coins":21100,
      "notes":""
   },
   {
      "id":125,
      "name":"York",
      "rarity":"Elite",
      "type":"Heavy cruiser",
      "release":"Dec. 20, 2018",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":25900,
      "notes":"Also requires 20 T3 Gun parts, 50 T3 Auxiliary parts"
   },
   {
      "id":126,
      "name":"Exeter",
      "rarity":"Elite",
      "type":"Heavy cruiser",
      "release":"Jan. 19, 2018",
      "blue":13,
      "purple":14,
      "gold":10,
      "coins":25900,
      "notes":"Also requires 50 T3 Auxiliary parts"
   },
   {
      "id":131,
      "name":"Warspite",
      "rarity":"Super Rare",
      "type":"Battleship",
      "release":"Jan. 31, 2019",
      "blue":0,
      "purple":18,
      "gold":20,
      "coins":53000,
      "notes":"Also requires 50 T3 Auxiliary parts, 40 T3 Gun parts, 3 copies of Warspite or Bulins, 1 Warrior Mastery"
   },
   {
      "id":140,
      "name":"Hermes",
      "rarity":"Normal",
      "type":"Light aircraft carrier",
      "release":"May. 9, 2019",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":14000,
      "notes":""
   },
   {
      "id":155,
      "name":"Ayanami",
      "rarity":"Elite",
      "type":"Destroyer",
      "release":"Dec. 7, 2017",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":29300,
      "notes":"Also requires 40 T3 Torpedo parts"
   },
   {
      "id":144,
      "name":"Ark Royal",
      "rarity":"Elite",
      "type":"Aircraft carrier",
      "release":"Aug. 12, 2021",
      "blue":13,
      "purple":12,
      "gold":10,
      "coins":29100,
      "notes":"Also requires 50 T3 Aircraft parts, 50 T3 Auxiliary parts"
   },
   {
      "id":164,
      "name":"Yuudachi",
      "rarity":"Super Rare",
      "type":"Destroyer",
      "release":"Sep. 30, 2021",
      "blue":11,
      "purple":13,
      "gold":7,
      "coins":36800,
      "notes":"Also requires 50 T3 Gun parts, 1 copy of Yuudachi or Bulin, 1 Eau de Barbeque"
   },
   {
      "id":165,
      "name":"Shigure",
      "rarity":"Elite",
      "type":"Destroyer",
      "release":"Sep. 26, 2019",
      "blue":11,
      "purple":13,
      "gold":10,
      "coins":36800,
      "notes":"Also requires 30 T3 Torpedo parts, 20 T3 Gun parts"
   },
   {
      "id":167,
      "name":"Kagerou",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Aug. 15, 2018",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":19300,
      "notes":""
   },
   {
      "id":168,
      "name":"Shiranui",
      "rarity":"Normal",
      "type":"Destroyer",
      "release":"Apr. 26, 2018",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":13000,
      "notes":""
   },
   {
      "id":171,
      "name":"Hatsuharu",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Mar. 26, 2020",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":19100,
      "notes":""
   },
   {
      "id":174,
      "name":"Hatsushimo",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Jun. 3, 2020",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":19100,
      "notes":""
   },
   {
      "id":175,
      "name":"Ariake",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Sep. 30, 2020",
      "blue":17,
      "purple":14,
      "gold":1,
      "coins":19100,
      "notes":""
   },
   {
      "id":176,
      "name":"Yuugure",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Sep. 26, 2019",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":19100,
      "notes":""
   },
   {
      "id":179,
      "name":"Yuubari",
      "rarity":"Elite",
      "type":"Light cruiser",
      "release":"Apr. 4, 2019",
      "blue":17,
      "purple":14,
      "gold":3,
      "coins":26900,
      "notes":""
   },
   {
      "id":183,
      "name":"Isuzu",
      "rarity":"Rare",
      "type":"Light cruiser",
      "release":"Apr. 23, 2020",
      "blue":16,
      "purple":14,
      "gold":1,
      "coins":21100,
      "notes":""
   },
   {
      "id":186,
      "name":"Kinu",
      "rarity":"Elite",
      "type":"Light cruiser",
      "release":"Dec. 26, 2019",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":29100,
      "notes":"Also requires 20 T3 Torpedo parts, 50 T3 Auxiliary parts"
   },
   {
      "id":187,
      "name":"Abukuma",
      "rarity":"Normal",
      "type":"Light cruiser",
      "release":"Oct. 10, 2017",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":14000,
      "notes":""
   },
   {
      "id":188,
      "name":"Mogami",
      "rarity":"Elite",
      "type":"Light cruiser",
      "release":"Mar. 27, 2018",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":29100,
      "notes":"Also requires 50 T3 Gun parts, 50 T3 Auxiliary parts & Changes to CA after retrofit"
   },
   {
      "id":190,
      "name":"Furutaka",
      "rarity":"Normal",
      "type":"Heavy cruiser",
      "release":"Nov. 2, 2017",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":14000,
      "notes":""
   },
   {
      "id":191,
      "name":"Kako",
      "rarity":"Normal",
      "type":"Heavy cruiser",
      "release":"Nov. 2, 2017",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":14000,
      "notes":""
   },
   {
      "id":208,
      "name":"Fusou",
      "rarity":"Rare",
      "type":"Battleship",
      "release":"May. 10, 2018",
      "blue":17,
      "purple":11,
      "gold":5,
      "coins":16600,
      "notes":"Also requires 60 T3 Aircraft parts. 2 of the T3 BPs are CV type & Changes to BBV after retrofit"
   },
   {
      "id":209,
      "name":"Yamashiro",
      "rarity":"Rare",
      "type":"Battleship",
      "release":"Sep. 28, 2017",
      "blue":17,
      "purple":11,
      "gold":5,
      "coins":16600,
      "notes":"Also requires 60 T3 Aircraft parts. 2 of the T3 BPs are CV type & Changes to BBV after retrofit"
   },
   {
      "id":210,
      "name":"Ise",
      "rarity":"Rare",
      "type":"Battleship",
      "release":"Aug. 30, 2018",
      "blue":18,
      "purple":12,
      "gold":7,
      "coins":23100,
      "notes":"Also requires 80 T3 Aircraft parts. 2 of the T3 BPs are CV type & Changes to BBV after retrofit"
   },
   {
      "id":211,
      "name":"Hyuuga",
      "rarity":"Rare",
      "type":"Battleship",
      "release":"Aug. 30, 2018",
      "blue":18,
      "purple":12,
      "gold":7,
      "coins":23100,
      "notes":"Also requires 80 T3 Aircraft parts. 2 of the T3 BPs are CV type & Changes to BBV after retrofit"
   },
   {
      "id":222,
      "name":"Shouhou",
      "rarity":"Rare",
      "type":"Light aircraft carrier",
      "release":"Sep. 28, 2017",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":14000,
      "notes":""
   },
   {
      "id":226,
      "name":"Souryuu",
      "rarity":"Elite",
      "type":"Aircraft carrier",
      "release":"Dec. 27, 2018",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":31100,
      "notes":"Also requires 50 T3 Aircraft parts, 50 T3 Auxiliary parts"
   },
   {
      "id":227,
      "name":"Hiryuu",
      "rarity":"Elite",
      "type":"Aircraft carrier",
      "release":"Dec. 27, 2018",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":31100,
      "notes":"Also requires 50 T3 Aircraft parts, 50 T3 Auxiliary parts"
   },
   {
      "id":233,
      "name":"Z1",
      "rarity":"Elite",
      "type":"Destroyer",
      "release":"Jun. 6, 2019",
      "blue":11,
      "purple":13,
      "gold":10,
      "coins":36800,
      "notes":"Also requires 30 T3 Torpedo parts, 20 T3 Gun parts"
   },
   {
      "id":236,
      "name":"Z23",
      "rarity":"Elite",
      "type":"Destroyer",
      "release":"Jun. 7, 2018",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":37800,
      "notes":"Also requires 50 T3 Gun parts"
   },
   {
      "id":239,
      "name":"Karlsruhe",
      "rarity":"Normal",
      "type":"Light cruiser",
      "release":"Dec. 28, 2017",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":14000,
      "notes":""
   },
   {
      "id":240,
      "name":"Köln",
      "rarity":"Normal",
      "type":"Light cruiser",
      "release":"May. 23, 2019",
      "blue":13,
      "purple":14,
      "gold":null,
      "coins":13600,
      "notes":""
   },
   {
      "id":241,
      "name":"Leipzig",
      "rarity":"Rare",
      "type":"Light cruiser",
      "release":"Jun. 6, 2019",
      "blue":17,
      "purple":14,
      "gold":1,
      "coins":22300,
      "notes":""
   },
   {
      "id":258,
      "name":"Ning Hai",
      "rarity":"Elite",
      "type":"Light cruiser",
      "release":"Dec. 13 2017",
      "blue":13,
      "purple":14,
      "gold":11,
      "coins":31100,
      "notes":"Also requires 50 T3 Gun parts, 50 T3 Auxiliary parts"
   },
   {
      "id":259,
      "name":"Ping Hai",
      "rarity":"Elite",
      "type":"Light cruiser",
      "release":"Dec. 13, 2017",
      "blue":13,
      "purple":14,
      "gold":11,
      "coins":31100,
      "notes":"Also requires 50 T3 Gun parts, 50 T3 Auxiliary parts"
   },
   {
      "id":263,
      "name":"Bailey",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Jan. 19, 2018",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":20300,
      "notes":""
   },
   {
      "id":269,
      "name":"Kamikaze",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Mar. 15, 2018",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":19600,
      "notes":""
   },
   {
      "id":270,
      "name":"Matsukaze",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Mar. 15, 2018",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":19600,
      "notes":""
   },
   {
      "id":271,
      "name":"Mutsuki",
      "rarity":"Normal",
      "type":"Destroyer",
      "release":"Apr. 19, 2018",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":13000,
      "notes":""
   },
   {
      "id":272,
      "name":"Kisaragi",
      "rarity":"Normal",
      "type":"Destroyer",
      "release":"Apr. 26, 2019",
      "blue":13,
      "purple":18,
      "gold":null,
      "coins":13000,
      "notes":""
   },
   {
      "id":301,
      "name":"Nicholas",
      "rarity":"Elite",
      "type":"Destroyer",
      "release":"Jul. 17, 2018",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":36800,
      "notes":"Also requires 30 T3 Torpedo parts, 50 T3 Auxiliary parts"
   },
   {
      "id":308,
      "name":"Sendai",
      "rarity":"Rare",
      "type":"Light cruiser",
      "release":"Apr. 19, 2018",
      "blue":17,
      "purple":14,
      "gold":1,
      "coins":21100,
      "notes":""
   },
   {
      "id":309,
      "name":"Jintsuu",
      "rarity":"Elite",
      "type":"Light cruiser",
      "release":"Nov. 16, 2017",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":29300,
      "notes":"Also requires 20 T3 Torpedo parts, 50 T3 Auxiliary parts"
   },
   {
      "id":318,
      "name":"Hamakaze",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Nov. 23, 2017",
      "blue":19,
      "purple":12,
      "gold":1,
      "coins":13000,
      "notes":""
   },
   {
      "id":319,
      "name":"Tanikaze",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Jan. 19, 2018",
      "blue":19,
      "purple":12,
      "gold":1,
      "coins":13000,
      "notes":""
   },
   {
      "id":348,
      "name":"Forbin",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Jul. 26, 2018",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":18100,
      "notes":""
   },
   {
      "id":349,
      "name":"Emile Bertin",
      "rarity":"Elite",
      "type":"Light cruiser",
      "release":"Jun. 27, 2019",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":28800,
      "notes":"Also requires 20 T3 Gun parts, 50 T3 Auxiliary parts"
   },
   {
      "id":351,
      "name":"Le Mars",
      "rarity":"Rare",
      "type":"Destroyer",
      "release":"Jul. 26, 2018",
      "blue":17,
      "purple":13,
      "gold":1,
      "coins":18100,
      "notes":""
   },
   {
      "id":361,
      "name":"Newcastle",
      "rarity":"Rare",
      "type":"Light cruiser",
      "release":"Sep. 28, 2018",
      "blue":17,
      "purple":14,
      "gold":1,
      "coins":21100,
      "notes":""
   },
   {
      "id":372,
      "name":"Curacoa",
      "rarity":"Rare",
      "type":"Light cruiser",
      "release":"Jun. 13, 2019",
      "blue":17,
      "purple":14,
      "gold":1,
      "coins":21100,
      "notes":""
   },
   {
      "id":373,
      "name":"Curlew",
      "rarity":"Rare",
      "type":"Light cruiser",
      "release":"Jun. 13, 2019",
      "blue":17,
      "purple":14,
      "gold":1,
      "coins":21100,
      "notes":""
   },
   {
      "id":377,
      "name":"Independence",
      "rarity":"Elite",
      "type":"Light aircraft carrier",
      "release":"May. 27, 2021",
      "blue":13,
      "purple":13,
      "gold":10,
      "coins":31100,
      "notes":"Also requires 50 T3 Anti-air parts, 50 T3 Auxiliary parts"
   },
   {
      "id":424,
      "name":"Kasumi",
      "rarity":"Elite",
      "type":"Destroyer",
      "release":"Jun. 24, 2021",
      "blue":13,
      "purple":13,
      "gold":12,
      "coins":32300,
      "notes":"Also requires 20 T3 Torpedo parts"
   },
   {
      "id":434,
      "name":"Pamiat Merkuria",
      "rarity":"Elite",
      "type":"Light cruiser",
      "release":"Feb. 25, 2021",
      "blue":13,
      "purple":15,
      "gold":11,
      "coins":30600,
      "notes":"Also requires 20 T3 Anti-air parts, 50 T3 Auxiliary parts"
   }
]
