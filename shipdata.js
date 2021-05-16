// var ships = ["shiprarity", "shiptype", shiplink", "shipimage", "shipname", "shipid"]; 
/*
var template = ["", "", "", "", "", "",];
var template = [
 "",
 "",
 "",
 "",
 "",
 ""
];
*/ 

// BB/BC/BV/BM
var n52 = ["Normal", "BB", "link", "Nevada.png", "Nevada", "#52"];
var n53 = ["Normal", "BB", "link", "Oklahoma.png", "Oklahoma", "#53"];
var n54 = ["Rare", "BB", "link", "Pennsylvania.png", "Pennsylvania", "#54"];
var n55 = ["Elite", "BB", "link", "Arizona.png", "Arizona", "#55"];
var n58 = ["Rare", "BB", "link", "Tennessee.png", "Tennessee", "#58"];
var n59 = ["Rare", "BB", "link", "California.png", "California", "#59"];
var n60 = ["Elite", "BB", "link", "Colorado.png", "Colorado", "#60"];
var n61 = ["Elite", "BB", "link", "Maryland.png", "Maryland", "#61"];
var n62 = ["Elite", "BB", "link", "West-Virginia.png", "West Virginia", "#62"];
var n63 = ["Super-Rare", "BB", "link", "North-Carolina.png", "North Carolina", "#63"];
var n64 = ["Super-Rare", "BB", "link", "Washington.png", "Washington", "#64"];
var n65 = ["Super-Rare", "BB", "link", "South-Dakota.png", "South Dakota", "#65"];
var n127 = ["Elite", "BC", "link", "Renown.png", "Renown", "#127"];
var n128 = ["Rare", "BC", "link", "Repulse.png", "Repulse", "#128"];
var n129 = ["Super-Rare", "BC", "link", "Hood.png", "Hood", "#129"];
var n130 = ["Elite", "BB", "link", "Queen-Elizabeth.png", "Queen Elizabeth", "#130"];
var n131 = ["Super-Rare", "BB", "link", "Warspite.png", "Warspite", "#131"];
var n132 = ["Elite", "BB", "link", "Nelson.png", "Nelson", "#132"];
var n133 = ["Elite", "BB", "link", "Rodney.png", "Rodney", "#133"];
var n134 = ["Super-Rare", "BB", "link", "King-George-V.png", "King George V", "#134"];
var n135 = ["Super-Rare", "BB", "link", "Prince-of-Wales.png", "Prince of Wales", "#135"];
var n136 = ["Super-Rare", "BB", "link", "Duke-of-York.png", "Duke of York", "#136"];
var n149 = ["Elite", "BM", "link", "Erebus.png", "Erebus", "#149"];
var n150 = ["Elite", "BM", "link", "Terror.png", "Terror", "#150"];
var n204 = ["Elite", "BC", "link", "Kongou.png", "Kongou", "#204"];
var n205 = ["Elite", "BC", "link", "Hiei.png", "Hiei", "#205"];
var n206 = ["Elite", "BC", "link", "Haruna.png", "Haruna", "#206"];
var n207 = ["Elite", "BC", "link", "Kirishima.png", "Kirishima", "#207"];
var n208 = ["Rare", "BB", "link", "Fusou.png", "Fusou", "#208"];
var n209 = ["Rare", "BB", "link", "Yamashiro.png", "Yamashiro", "#209"];
var n210 = ["Rare", "BB", "link", "Ise.png", "Ise", "#210"];
var n211 = ["Rare", "BB", "link", "Hyuuga.png", "Hyuuga", "#211"];
var n212 = ["Super-Rare", "BB", "link", "Nagato.png", "Nagato", "#212"];
var n213 = ["Elite", "BB", "link", "Mutsu.png", "Mutsu", "#213"];
var n214 = ["Super-Rare", "BB", "link", "Kii.png", "Kii", "#214"];
var n215 = ["Super-Rare", "BB", "link", "Tosa.png", "Tosa", "#215"];
var n248 = ["Elite", "BC", "link", "Scharnhorst.png", "Scharnhorst", "#248"];
var n249 = ["Elite", "BC", "link", "Gneisenau.png", "Gneisenau", "#249"];
var n250 = ["Super-Rare", "BB", "link", "Bismarck.png", "Bismarck", "#250"];
var n251 = ["Super-Rare", "BB", "link", "Tirpitz.png", "Tirpitz", "#251"];
var n320 = ["Super-Rare", "BB", "link", "Mikasa.png", "Mikasa", "#320"];
var n336 = ["Elite", "BM", "link", "Abercrombie.png", "Abercrombie", "#336"];
var n352 = ["Elite", "BC", "link", "Dunkerque.png", "Dunkerque", "#352"];
var n353 = ["Super-Rare", "BB", "link", "Jean-Bart.png", "Jean Bart", "#353"];
var n354 = ["Super-Rare", "BB", "link", "Massachusetts.png", "Massachusetts", "#354"];
var n367 = ["Super-Rare", "BC", "link", "Amagi.png", "Amagi", "#367"];
var n368 = ["Super-Rare", "BB", "link", "Kaga-(Battleship).png", "Kaga (Battleship)", "#368"];
var n383 = ["Elite", "BC", "link", "Hiei-chan.png", "Hiei-chan", "#383"];
var n401 = ["Super-Rare", "BB", "link", "Alabama.png", "Alabama", "#401"];
var n410 = ["Super-Rare", "BB", "link", "Littorio.png", "Littorio", "#410"];
var n411 = ["Rare", "BB", "link", "Conte-di-Cavour.png", "Conte di Cavour", "#411"];
var n412 = ["Elite", "BB", "link", "Giulio-Cesare.png", "Giulio Cesare", "#412"];
var n418 = ["Super-Rare", "BB", "link", "Gascogne-muse.png", "Gascogne µ", "#418"];
var n425 = ["Super-Rare", "BB", "link", "Suruga.png", "Suruga", "#425"];
var n437 = ["Elite", "BB", "link", "Gangut.png", "Gangut", "#437"];
var n440 = ["Super-Rare", "BB", "link", "Sovetskaya-Belorussiya.png", "Sovetskaya Belorussiya", "#440"];
var n441 = ["Super-Rare", "BB", "link", "Sovetskaya-Rossiya.png", "Sovetskaya Rossiya", "#441"];
var n451 = ["Elite", "BC", "link", "Little-Renown.png", "Little Renown", "#451"];
var n453 = ["Super-Rare", "BB", "link", "Richelieu.png", "Richelieu", "#453"];
var n461 = ["Super-Rare", "BB", "link", "Howe.png", "Howe", "#461"];
var n464 = ["Elite", "BB", "link", "Valiant.png", "Valiant", "#464"];
var n500 = ["Super-Rare", "BB", "link", "Vittorio-Veneto.png", "Vittorio Veneto", "#500"];
var n510 = ["Elite", "BC", "link", "Amagi-chan.png", "Amagi-chan", "#510"];
var n3052 = ["Rare", "BB", "link", "Nevada-kai.png", "Nevada (Retrofit)", "#3052"];
var n3053 = ["Rare", "BB", "link", "Oklahoma-kai.png", "Oklahoma (Retrofit)", "#3053"];
var n3131 = ["Ultra-Rare", "BB", "link", "Warspite-kai.png", "Warspite (Retrofit)", "#3131"];
var n3208 = ["Elite", "BBV", "link", "Fusou-kai.png", "Fusou (Retrofit)", "#3208"];
var n3209 = ["Elite", "BBV", "link", "Yamashiro-kai.png", "Yamashiro (Retrofit)", "#3209"];
var n3210 = ["Elite", "BBV", "link", "Ise-kai.png", "Ise (Retrofit)", "#210"];
var n3211 = ["Elite", "BBV", "link", "Hyuuga-kai.png", "Hyuuga (Retrofit)", "#3211"];
var n10062 = ["Super-Rare", "BB", "link", "Honoka.png", "Honoka", "#10062"];
var n10065 = ["Elite", "BB", "link", "Nagisa.png", "Nagisa", "#10065"];
var nCollab044 = ["Super-Rare", "BB", "link", "Super-Gamer-Kizuna-AI.png", "Super Gamer Kizuna AI", "#Collab044"];
var nPlan002 = ["Priority", "BB", "link", "Monarch.png", "Monarch", "#Plan002"];
var nPlan004 = ["Priority", "BB", "link", "Izumo.png", "Izumo", "#Plan004"];
var nPlan008 = ["Priority", "BB", "link", "Georgia.png", "Georgia", "#Plan008"];
var nPlan011 = ["Decisive", "BB", "link", "Friedrich-der-Große.png", "Friedrich der Große", "#Plan011"];
var nPlan012 = ["Priority", "BB", "link", "Gascogne.png", "Gascogne", "#Plan012"];
var nPlan016 = ["Priority", "BC", "link", "Odin.png", "Odin", "#Plan016"];
var nPlan017 = ["Priority", "BB", "link", "Champagne.png", "Champagne", "#Plan017"];