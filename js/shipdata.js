// var ships = ["shiprarity", "shiptype", shiplink", "shipimage", "shipname", "shipid"]; 
/*
var template = ["", "", "", "", "", "",];
*/
// MAIN SCRIPT
	function ALscript () {
	/* BB/BC/BBV/BM */
		$(document).ready(loadBB())
	/* CL/CVL */
		$(document).ready(loadCV())
	/* CA/CB */
		$(document).ready(loadCA())
	/* CL */
		$(document).ready(loadCL())
	/* DD */
		$(document).ready(loadDD())
	/* SS/SSV */
		$(document).ready(loadSS())
	/* Auxiliaries */ 
		$(document).ready(loadAUX())
	// SHOW ALL TAB 
		$(document).ready(allshow())
	}


// BB/BC/BV/BM
	var n052 = ["Normal", "BB", "Nevada", "Nevada.png", "Nevada", "052"];
	var n053 = ["Normal", "BB", "Oklahoma", "Oklahoma.png", "Oklahoma", "053"];
	var n054 = ["Rare", "BB", "Pennsylvania", "Pennsylvania.png", "Pennsylvania", "054"];
	var n055 = ["Elite", "BB", "Arizona", "Arizona.png", "Arizona", "055"];
	var n058 = ["Rare", "BB", "Tennessee", "Tennessee.png", "Tennessee", "058"];
	var n059 = ["Rare", "BB", "California", "California.png", "California", "059"];
	var n060 = ["Elite", "BB", "Colorado", "Colorado.png", "Colorado", "060"];
	var n061 = ["Elite", "BB", "Maryland", "Maryland.png", "Maryland", "061"];
	var n062 = ["Elite", "BB", "West_Virginia", "West-Virginia.png", "West Virginia", "062"];
	var n063 = ["Super-Rare", "BB", "North_Carolina", "North-Carolina.png", "North Carolina", "063"];
	var n064 = ["Super-Rare", "BB", "Washington", "Washington.png", "Washington", "064"];
	var n065 = ["Super-Rare", "BB", "South_Dakota", "South-Dakota.png", "South Dakota", "065"];
	var n068 = ["Ultra-Rare", "BB", "New_Jersey", "New-Jersey.png", "New Jersey", "068"];
	var n127 = ["Elite", "BC", "Renown", "Renown.png", "Renown", "127"];
	var n128 = ["Rare", "BC", "Repulse", "Repulse.png", "Repulse", "128"];
	var n129 = ["Super-Rare", "BC", "Hood", "Hood.png", "Hood", "129"];
	var n130 = ["Elite", "BB", "Queen_Elizabeth", "Queen-Elizabeth.png", "Queen Elizabeth", "130"];
	var n131 = ["Super-Rare", "BB", "Warspite", "Warspite.png", "Warspite", "131"];
	var n132 = ["Elite", "BB", "Nelson", "Nelson.png", "Nelson", "132"];
	var n133 = ["Elite", "BB", "Rodney", "Rodney.png", "Rodney", "133"];
	var n134 = ["Super-Rare", "BB", "King_George_V", "King-George-V.png", "King George V", "134"];
	var n135 = ["Super-Rare", "BB", "Prince_of_Wales", "Prince-of-Wales.png", "Prince of Wales", "135"];
	var n136 = ["Super-Rare", "BB", "Duke_of_York", "Duke-of-York.png", "Duke of York", "136"];
	var n149 = ["Elite", "BM", "Erebus", "Erebus.png", "Erebus", "149"];
	var n150 = ["Elite", "BM", "Terror", "Terror.png", "Terror", "150"];
	var n204 = ["Elite", "BC", "Kongou", "Kongou.png", "Kongou", "204"];
	var n205 = ["Elite", "BC", "Hiei", "Hiei.png", "Hiei", "205"];
	var n206 = ["Elite", "BC", "Haruna", "Haruna.png", "Haruna", "206"];
	var n207 = ["Elite", "BC", "Kirishima", "Kirishima.png", "Kirishima", "207"];
	var n208 = ["Rare", "BB", "Fusou", "Fusou.png", "Fusou", "208"];
	var n209 = ["Rare", "BB", "Yamashiro", "Yamashiro.png", "Yamashiro", "209"];
	var n210 = ["Rare", "BB", "Ise", "Ise.png", "Ise", "210"];
	var n211 = ["Rare", "BB", "Hyuuga", "Hyuuga.png", "Hyuuga", "211"];
	var n212 = ["Super-Rare", "BB", "Nagato", "Nagato.png", "Nagato", "212"];
	var n213 = ["Elite", "BB", "Mutsu", "Mutsu.png", "Mutsu", "213"];
	var n214 = ["Super-Rare", "BB", "Kii", "Kii.png", "Kii", "214"];
	var n215 = ["Super-Rare", "BB", "Tosa", "Tosa.png", "Tosa", "215"];
	var n248 = ["Elite", "BC", "Scharnhorst", "Scharnhorst.png", "Scharnhorst", "248"];
	var n249 = ["Elite", "BC", "Gneisenau", "Gneisenau.png", "Gneisenau", "249"];
	var n250 = ["Super-Rare", "BB", "Bismarck", "Bismarck.png", "Bismarck", "250"];
	var n251 = ["Super-Rare", "BB", "Tirpitz", "Tirpitz.png", "Tirpitz", "251"];
	var n320 = ["Super-Rare", "BB", "Mikasa", "Mikasa.png", "Mikasa", "320"];
	var n336 = ["Elite", "BM", "Abercrombie", "Abercrombie.png", "Abercrombie", "336"];
	var n352 = ["Elite", "BC", "Dunkerque", "Dunkerque.png", "Dunkerque", "352"];
	var n353 = ["Super-Rare", "BB", "Jean_Bart", "Jean-Bart.png", "Jean Bart", "353"];
	var n354 = ["Super-Rare", "BB", "Massachusetts", "Massachusetts.png", "Massachusetts", "354"];
	var n367 = ["Super-Rare", "BC", "Amagi", "Amagi.png", "Amagi", "367"];
	var n368 = ["Super-Rare", "BB", "Kaga_(BB)", "Kaga-(Battleship).png", "Kaga (Battleship)", "368"];
	var n383 = ["Elite", "BC", "Hiei-chan", "Hiei-chan.png", "Hiei-chan", "383"];
	var n401 = ["Super-Rare", "BB", "Alabama", "Alabama.png", "Alabama", "401"];
	var n410 = ["Super-Rare", "BB", "Littorio", "Littorio.png", "Littorio", "410"];
	var n411 = ["Rare", "BB", "Conte_di_Cavour", "Conte-di-Cavour.png", "Conte di Cavour", "411"];
	var n412 = ["Elite", "BB", "Giulio_Cesare", "Giulio-Cesare.png", "Giulio Cesare", "412"];
	var n418 = ["Super-Rare", "BB", "Gascogne_muse", "Gascogne-muse.png", "Gascogne ??", "418"];
	var n425 = ["Super-Rare", "BB", "Suruga", "Suruga.png", "Suruga", "425"];
	var n437 = ["Elite", "BB", "Gangut", "Gangut.png", "Gangut", "437"];
	var n440 = ["Super-Rare", "BB", "Sovetskaya_Belorussiya", "Sovetskaya-Belorussiya.png", "Sovetskaya Belorussiya", "440"];
	var n441 = ["Super-Rare", "BB", "Sovetskaya_Rossiya", "Sovetskaya-Rossiya.png", "Sovetskaya Rossiya", "441"];
	var n451 = ["Elite", "BC", "Little_Renown", "Little-Renown.png", "Little Renown", "451"];
	var n453 = ["Super-Rare", "BB", "Richelieu", "Richelieu.png", "Richelieu", "453"];
	var n461 = ["Super-Rare", "BB", "Howe", "Howe.png", "Howe", "461"];
	var n464 = ["Elite", "BB", "Valiant", "Valiant.png", "Valiant", "464"];
	var n500 = ["Super-Rare", "BB", "Vittorio_Veneto", "Vittorio-Veneto.png", "Vittorio Veneto", "500"];
	var n510 = ["Elite", "BC", "Amagi-chan", "Amagi-chan.png", "Amagi-chan", "510"];
	var n3052 = ["Rare", "BB", "link", "Nevada-kai.png", "Nevada (Retrofit)", "3052"];
	var n3053 = ["Rare", "BB", "link", "Oklahoma-kai.png", "Oklahoma (Retrofit)", "3053"];
	var n3131 = ["Ultra-Rare", "BB", "link", "Warspite-kai.png", "Warspite (Retrofit)", "3131"];
	var n3208 = ["Elite", "BBV", "link", "Fusou-kai.png", "Fusou (Retrofit)", "3208"];
	var n3209 = ["Elite", "BBV", "link", "Yamashiro-kai.png", "Yamashiro (Retrofit)", "3209"];
	var n3210 = ["Elite", "BBV", "link", "Ise-kai.png", "Ise (Retrofit)", "210"];
	var n3211 = ["Elite", "BBV", "link", "Hyuuga-kai.png", "Hyuuga (Retrofit)", "3211"];
	var n10062 = ["Super-Rare", "BB", "link", "Honoka.png", "Honoka", "10062"];
	var n10065 = ["Elite", "BB", "link", "Nagisa.png", "Nagisa", "10065"];
	var nCollab044 = ["Super-Rare", "BB", "link", "Super-Gamer-Kizuna-AI.png", "Super Gamer Kizuna AI", "Collab044"];
	var nPlan002 = ["Priority", "BB", "link", "Monarch.png", "Monarch", "Plan002"];
	var nPlan004 = ["Priority", "BB", "link", "Izumo.png", "Izumo", "Plan004"];
	var nPlan008 = ["Priority", "BB", "link", "Georgia.png", "Georgia", "Plan008"];
	var nPlan011 = ["Decisive", "BB", "link", "Friedrich-der-Gro??e.png", "Friedrich der Gro??e", "Plan011"];
	var nPlan012 = ["Priority", "BB", "link", "Gascogne.png", "Gascogne", "Plan012"];
	var nPlan016 = ["Priority", "BC", "link", "Odin.png", "Odin", "Plan016"];
	var nPlan017 = ["Priority", "BB", "link", "Champagne.png", "Champagne", "Plan017"];

// CV/CVL
	var n070 = ["Rare", "CVL", "Long_Island", "Long-Island.png", "Long Island", "070"];
	var n071 = ["Normal", "CVL", "Bogue", "Bogue.png", "Bogue", "071"];
	var n072 = ["Normal", "CVL", "Langley", "Langley.png", "Langley", "072"];
	var n073 = ["Elite", "CV", "Lexington", "Lexington.png", "Lexington", "073"];
	var n074 = ["Elite", "CV", "Saratoga", "Saratoga.png", "Saratoga", "074"];
	var n075 = ["Normal", "CVL", "Ranger", "Ranger.png", "Ranger", "075"];
	var n076 = ["Elite", "CV", "Yorktown", "Yorktown.png", "Yorktown", "076"];
	var n077 = ["Super-Rare", "CV", "Enterprise", "Enterprise.png", "Enterprise", "077"];
	var n078 = ["Elite", "CV", "Hornet", "Hornet.png", "Hornet", "078"];
	var n079 = ["Rare", "CV", "Wasp", "Wasp.png", "Wasp", "079"];
	var n140 = ["Normal", "CVL", "Hermes", "Hermes.png", "Hermes", "140"];
	var n142 = ["Elite", "CVL", "Unicorn", "Unicorn.png", "Unicorn", "142"];
	var n143 = ["Elite", "CV", "Eagle", "Eagle.png", "Eagle", "143"];
	var n144 = ["Elite", "CV", "Ark_Royal", "Ark-Royal.png", "Ark Royal", "144"];
	var n145 = ["Super-Rare", "CV", "Illustrious", "Illustrious.png", "Illustrious", "145"];
	var n146 = ["Super-Rare", "CV", "Victorious", "Victorious.png", "Victorious", "146"];
	var n147 = ["Super-Rare", "CV", "Formidable", "Formidable.png", "Formidable", "147"];
	var n148 = ["Elite", "CV", "Glorious", "Glorious.png", "Glorious", "148"];
	var n218 = ["Rare", "CVL", "Hiyou", "Hiyou.png", "Hiyou", "218"];
	var n219 = ["Rare", "CVL", "Junyou", "Junyou.png", "Junyou", "219"];
	var n220 = ["Elite", "CVL", "Houshou", "Houshou.png", "Houshou", "220"];
	var n222 = ["Rare", "CVL", "Shouhou", "Shouhou.png", "Shouhou", "222"];
	var n223 = ["Elite", "CVL", "Ryuuhou", "Ryuuhou.png", "Ryuujou", "223"];
	var n224 = ["Super-Rare", "CV", "Akagi", "Akagi.png", "Akagi", "224"];
	var n225 = ["Super-Rare", "CV", "Kaga", "Kaga.png", "Kaga", "225"];
	var n226 = ["Elite", "CV", "Souryuu", "Souryuu.png", "Souryuu", "226"];
	var n227 = ["Elite", "CV", "Hiryuu", "Hiryuu.png", "Hiryuu", "227"];
	var n228 = ["Super-Rare", "CV", "Shoukaku", "Shoukaku.png", "Shoukaku", "228"];
	var n229 = ["Super-Rare", "CV", "Zuikaku", "Zuikaku.png", "Zuikaku", "229"];
	var n230 = ["Super-Rare", "CV", "Taihou", "Taihou.png", "Taihou", "230"];
	var n231 = ["Ultra-Rare", "CV", "Shinano", "Shinano.png", "Shinano", "231"];
	var n252 = ["Super-Rare", "CV", "Graf_Zeppelin", "Graf-Zeppelin.png", "Graf Zeppelin", "252"];
	var n356 = ["Super-Rare", "CVL", "Centaur", "Centaur.png", "Centaur", "356"];
	var n357 = ["Super-Rare", "CV", "Essex", "Essex.png", "Essex", "357"];
	var n376 = ["Elite", "CVL", "Chaser", "Chaser.png", "Chaser", "376"];
	var n377 = ["Elite", "CVL", "Independence", "Independence.png", "Independence", "377"];
	var n378 = ["Super-Rare", "CV", "Shangri-La", "Shangri-La.png", "Shangri-La", "378"];
	var n380 = ["Super-Rare", "CV", "Bunker_Hill", "Bunker-Hill.png", "Bunker Hill", "380"];
	var n384 = ["Elite", "CV", "Akagi-chan", "Akagi-chan.png", "Akagi-chan", "384"];
	var n385 = ["Elite", "CV", "Zeppy", "Zeppy.png", "Zeppy", "385"];
	var n403 = ["Elite", "CVL", "Bataan", "Bataan.png", "Bataan", "403"];
	var n419 = ["Super-Rare", "CV", "Akagi_muse", "Akagi-muse.png", "Akagi ??", "419"];
	var n426 = ["Super-Rare", "CVL", "Ryuuhou", "Ryuuhou.png", "Ryuuhou", "426"];
	var n442 = ["Super-Rare", "CV", "Intrepid", "Intrepid.png", "Intrepid", "442"];
	var n447 = ["Rare", "CVL", "Casablanca", "Casablanca.png", "Casablanca", "447"];
	var n458 = ["Elite", "CV", "B??arn", "B??arn.png", "B??arn", "458"];
	var n459 = ["Elite", "CV", "Little_Illustrious", "Little-Illustrious.png", "Little Illustrious", "459"];
	var n462 = ["Super-Rare", "CVL", "Perseus", "Perseus.png", "Perseus", "462"];
	var n470 = ["Elite", "CVL", "Chitose", "Chitose.png", "Chitose", "470"];
	var n471 = ["Elite", "CVL", "Chiyoda", "Chiyoda.png", "Chiyoda", "471"];
	var n473 = ["Elite", "CVL", "Princeton", "Princeton.png", "Princeton", "473"];
	var n474 = ["Super-Rare", "CV", "Taihou_muse", "Taihou-muse.png", "Taihou ??", "474"];
	var n480 = ["Super-Rare", "CV", "Illustrious_muse", "Illustrious-muse.png", "Illustrious ??", "480"];
	var n482 = ["Super-Rare", "CV", "Peter_Strasser", "Peter-Strasser.png", "Peter Strasser", "482"];
	var n485 = ["Elite", "CVL", "Weser", "Weser.png", "Weser", "485"];
	var n502 = ["Super-Rare", "CV", "Aquila", "Aquila.png", "Aquila", "502"];
	var n511 = ["Super-Rare", "CV", "Ticonderoga", "Ticonderoga.png", "Ticonderoga", "511"];
	var n3070 = ["Elite", "CVL", "link", "Long-Island-kai.png", "Long Island (Retrofit)", "3070"];
	var n3071 = ["Rare", "CVL", "link", "Bogue-kai.png", "Bogue (Retrofit)", "3071"];
	var n3072 = ["Rare", "CVL", "link", "Langley-kai.png", "Langley (Retrofit)", "3072"];
	var n3074 = ["Super-Rare", "CV", "link", "Saratoga-kai.png", "Saratoga (Retrofit)", "3074"];
	var n3075 = ["Rare", "CVL", "link", "Ranger-kai.png", "Ranger (Retrofit)", "3075"];
	var n3140 = ["Rare", "CVL", "link", "Hermes-kai.png", "Hermes (Retrofit)", "3140"];
	var n3222 = ["Elite", "CVL", "link", "Shouhou-kai.png", "Shouhou (Retrofit)", "3222"];
	var n3226 = ["Super-Rare", "CV", "link", "Souryuu-kai.png", "Souryuu (Retrofit)", "3226"];
	var n3227 = ["Super-Rare", "CV", "link", "Hiryuu-kai.png", "Hiryuu (Retrofit)", "3227"];
	var n10066 = ["Elite", "CV", "link", "Nyotengu.png", "Nyotengu", "10066"];
	var n30001 = ["Super-Rare", "CV META", "link", "Hiryuu-META.png", "Hiryuu META", "30001"];
	var n30002 = ["Super-Rare", "CV META", "link", "Ark-Royal-META.png", "Ark Royal META", "30002"];
	var nCollab004 = ["Elite", "CV", "link", "Vert.png", "Vert", "Collab004"];
	var nCollab008 = ["Super-Rare", "CV", "link", "Green-Heart.png", "Green Heart", "Collab008"];
	var nCollab034 = ["Elite", "CVL", "link", "Uruuru.png", "Uruuru", "Collab034"];
	var nCollab035 = ["Elite", "CVL", "link", "Saraana.png", "Saraana", "Collab035"];
	var nCollab036 = ["Elite", "CV", "link", "Fumiruiru.png", "Fumiruiru", "Collab036"];
	var nCollab043 = ["Super-Rare", "CV", "link", "Anniversary-Kizuna-AI.png", "Anniversary Kizuna AI", "Collab043"];
	var nCollab052 = ["Super-Rare", "CV", "link", "Tokino-Sora.png", "Tokino Sora", "Collab052"];
	var nCollab056 = ["Elite", "CVL", "link", "Murasaki-Shion.png", "Murasaki Shion", "Collab056"];
	var nCollab057 = ["Elite", "CV", "link", "Ookami-Mio.png", "Ookami Mio", "Collab057"];
	/**/

// CA/CB
	var n039 = ["Normal", "CA", "Pensacola", "Pensacola.png", "Pensacola", "039"];
	var n040 = ["Normal", "CA", "Salt_Lake_City", "Salt-Lake-City.png", "Salt Lake City", "040"];
	var n041 = ["Rare", "CA", "Northampton", "Northampton.png", "Northampton", "041"];
	var n042 = ["Rare", "CA", "Chicago", "Chicago.png", "Chicago", "042"];
	var n043 = ["Elite", "CA", "Houston", "Houston.png", "Houston", "043"];
	var n044 = ["Rare", "CA", "Portland", "Portland.png", "Portland", "044"];
	var n045 = ["Elite", "CA", "Indianapolis", "Indianapolis.png", "Indianapolis", "045"];
	var n046 = ["Elite", "CA", "Astoria", "Astoria.png", "Astoria", "046"];
	var n047 = ["Elite", "CA", "Quincy", "Quincy.png", "Quincy", "047"];
	var n048 = ["Elite", "CA", "Vincennes", "Vincennes.png", "Vincennes", "048"];
	var n049 = ["Elite", "CA", "Wichita", "Wichita.png", "Wichita", "049"];
	var n050 = ["Super-Rare", "CA", "Baltimore", "Baltimore.png", "Baltimore", "050"];
	var n119 = ["Elite", "CA", "London", "London.png", "London", "119"];
	var n120 = ["Rare", "CA", "Shropshire", "Shropshire.png", "Shropshire", "120"];
	var n121 = ["Rare", "CA", "Kent", "Kent.png", "Kent", "121"];
	var n122 = ["Rare", "CA", "Suffolk", "Suffolk.png", "Suffolk", "122"];
	var n123 = ["Rare", "CA", "Norfolk", "Norfolk.png", "Norfolk", "123"];
	var n124 = ["Elite", "CA", "Dorsetshire", "Dorsetshire.png", "Dorsetshire", "124"];
	var n125 = ["Elite", "CA", "York", "York.png", "York", "125"];
	var n126 = ["Elite", "CA", "Exeter", "Exeter.png", "Exeter", "126"];
	var n190 = ["Normal", "CA", "Furutaka", "Furutaka.png", "Furutaka", "190"];
	var n191 = ["Normal", "CA", "Kako", "Kako.png", "Kako", "191"];
	var n192 = ["Normal", "CA", "Aoba", "Aoba.png", "Aoba", "192"];
	var n193 = ["Normal", "CA", "Kinugasa", "Kinugasa.png", "Kinugasa", "193"];
	var n196 = ["Rare", "CA", "Myoukou", "Myoukou.png", "Myoukou", "196"];
	var n197 = ["Rare", "CA", "Nachi", "Nachi.png", "Nachi", "197"];
	var n198 = ["Elite", "CA", "Ashigara", "Ashigara.png", "Ashigara", "198"];
	var n200 = ["Super-Rare", "CA", "Takao", "Takao.png", "Takao", "200"];
	var n201 = ["Super-Rare", "CA", "Atago", "Atago.png", "Atago", "201"];
	var n202 = ["Super-Rare", "CA", "Maya", "Maya.png", "Maya", "202"];
	var n203 = ["Super-Rare", "CA", "Choukai", "Choukai.png", "Choukai", "203"];
	var n242 = ["Elite", "CA", "Admiral_Hipper", "Admiral-Hipper.png", "Admiral Hipper", "242"];
	var n244 = ["Super-Rare", "CA", "Prinz_Eugen", "Prinz-Eugen.png", "Prinz Eugen", "244"];
	var n245 = ["Elite", "CA", "Deutschland", "Deutschland.png", "Deutschland", "245"];
	var n246 = ["Elite", "CA", "Admiral_Graf_Spee", "Admiral-Graf-Spee.png", "Admiral Graf Spee", "246"];
	var n337 = ["Rare", "CA", "Sussex", "Sussex.png", "Sussex", "337"];
	var n364 = ["Super-Rare", "CA", "Minneapolis", "Minneapolis.png", "Minneapolis", "364"];
	var n382 = ["Elite", "CA", "Suzuya", "Suzuya.png", "Suzuya", "382"];
	var n413 = ["Super-Rare", "CA", "Zara", "Zara.png", "Zara", "413"];
	var n414 = ["Rare", "CA", "Trento", "Trento.png", "Trento", "414"];
	var n422 = ["Elite", "CA", "Admiral_Hipper_muse", "Admiral-Hipper-muse.png", "Admiral Hipper ??", "422"];
	var n443 = ["Super-Rare", "CA", "Bremerton", "Bremerton.png", "Bremerton", "443"];
	var n455 = ["Super-Rare", "CA", "Alg??rie", "Alg??rie.png", "Alg??rie", "455"];
	var n469 = ["Elite", "CA", "Kumano", "Kumano.png", "Kumano", "469"];
	var n478 = ["Elite", "CA", "Baltimore_muse", "Baltimore-muse.png", "Baltimore ??", "478"];
	var n479 = ["Super-Rare", "CA", "Roon_muse", "Roon-muse.png", "Roon ??", "479"];
	var n483 = ["Super-Rare", "CA", "Prinz_Heinrich", "Prinz-Heinrich.png", "Prinz Heinrich", "483"];
	var n489 = ["Super-Rare", "CA", "Pola", "Pola.png", "Pola", "489"];
	var n496 = ["Super-Rare", "CA", "Tallinn", "Tallinn.png", "Tallinn", "496"];
	var n512 = ["Super-Rare", "CA", "link", "San-Francisco.png", "San Francisco", "512"];
	var n3044 = ["Elite", "CA", "link", "Portland-kai.png", "Portland (Retrofit)", "3044"];
	var n3119 = ["Super-Rare", "CA", "link", "London-kai.png", "London (Retrofit)", "3119"];
	var n3122 = ["Elite", "CA", "link", "Suffolk-kai.png", "Suffolk (Retrofit)", "3122"];
	var n3125 = ["Super-Rare", "CA", "link", "York-kai.png", "York (Retrofit)", "3125"];
	var n3126 = ["Super-Rare", "CA", "link", "Exeter-kai.png", "Exeter (Retrofit)", "3126"];
	var n3188 = ["Super-Rare", "CA", "link", "Mogami-kai.png", "Mogami (Retrofit)", "3188"];
	var n3190 = ["Rare", "CA", "link", "Furutaka-kai.png", "Furutaka (Retrofit)", "3190"];
	var n3191 = ["Rare", "CA", "link", "Kako-kai.png", "Kako (Retrofit)", "3191"];
	var n10063 = ["Super-Rare", "CA", "link", "Kasumi.png", "Kasumi (DOA)", "10063"];
	var nCollab002 = ["Elite", "CA", "link", "Noire.png", "Noire", "Collab002"];
	var nCollab006 = ["Super-Rare", "CA", "link", "Black-Heart.png", "Black Heart", "Collab006"];
	var nCollab031 = ["Super-Rare", "CA", "link", "Kuon.png", "Kuon", "Collab031"];
	var nCollab042 = ["Super-Rare", "CA", "link", "Elegant-Kizuna-AI.png", "Elegant Kizuna AI", "Collab042"];
	var nCollab055 = ["Elite", "CA", "link", "Nakiri-Ayame.png", "Nakiri Ayame", "Collab055"];
	var nPlan003 = ["Priority", "CA", "link", "Ibuki.png", "Ibuki", "Plan003"];
	var nPlan005 = ["Priority", "CA", "link", "Roon.png", "Roon", "Plan005"];
	var nPlan006 = ["Priority", "CA", "link", "Saint-Louis.png", "Saint Louis", "Plan006"];
	var nPlan010 = ["Decisive", "CB", "link", "Azuma.png", "Azuma", "Plan010"];
	var nPlan013 = ["Priority", "CA", "link", "Cheshire.png", "Cheshire", "Plan013"];
	var nPlan014 = ["Decisive", "CA", "link", "Drake.png", "Drake", "Plan014"];

// CL
	var n029 = ["Normal", "CL", "Omaha", "Omaha.png", "Omaha", "029"];
	var n030 = ["Normal", "CL", "Raleigh", "Raleigh.png", "Raleigh", "030"];
	var n031 = ["Rare", "CL", "Brooklyn", "Brooklyn.png", "Brooklyn", "031"];
	var n032 = ["Rare", "CL", "Phoenix", "Phoenix.png", "Phoenix", "032"];
	var n033 = ["Elite", "CL", "Helena", "Helena.png", "Helena", "033"];
	var n034 = ["Rare", "CL", "Atlanta", "Atlanta.png", "Atlanta", "034"];
	var n035 = ["Rare", "CL", "Juneau", "Juneau.png", "Juneau", "035"];
	var n036 = ["Super-Rare", "CL", "San_Diego", "San-Diego.png", "San Diego", "036"];
	var n037 = ["Elite", "CL", "Cleveland", "Cleveland.png", "Cleveland", "037"];
	var n038 = ["Elite", "CL", "Columbia", "Columbia.png", "Columbia", "038"];
	var n104 = ["Normal", "CL", "Leander", "Leander.png", "Leander", "104"];
	var n105 = ["Rare", "CL", "Achilles", "Achilles.png", "Achilles", "105"];
	var n106 = ["Rare", "CL", "Ajax", "Ajax.png", "Ajax", "106"];
	var n107 = ["Super-Rare", "CL", "Dido", "Dido.png", "Dido", "107"];
	var n110 = ["Rare", "CL", "Southampton", "Southampton.png", "Southampton", "110"];
	var n111 = ["Elite", "CL", "Sheffield", "Sheffield.png", "Sheffield", "111"];
	var n113 = ["Elite", "CL", "Gloucester", "Gloucester.png", "Gloucester", "113"];
	var n114 = ["Elite", "CL", "Edinburgh", "Edinburgh.png", "Edinburgh", "114"];
	var n115 = ["Super-Rare", "CL", "Belfast", "Belfast.png", "Belfast", "115"];
	var n116 = ["Rare", "CL", "Arethusa", "Arethusa.png", "Arethusa", "116"];
	var n117 = ["Rare", "CL", "Galatea", "Galatea.png", "Galatea", "117"];
	var n118 = ["Elite", "CL", "Aurora", "Aurora.png", "Aurora", "118"];
	var n179 = ["Elite", "CL", "Yuubari", "Yuubari.png", "Yuubari", "179"];
	var n182 = ["Normal", "CL", "Nagara", "Nagara.png", "Nagara", "182"];
	var n183 = ["Rare", "CL", "Isuzu", "Isuzu.png", "Isuzu", "183"];
	var n186 = ["Elite", "CL", "Kinu", "Kinu.png", "Kinu", "186"];
	var n187 = ["Normal", "CL", "Abukuma", "Abukuma.png", "Abukuma", "187"];
	var n188 = ["Elite", "CL", "Mogami", "Mogami.png", "Mogami", "188"];
	var n189 = ["Elite", "CL", "Mikuma", "Mikuma.png", "Mikuma", "189"];
	var n238 = ["Normal", "CL", "K??nigsberg", "K??nigsberg.png", "K??nigsberg", "238"];
	var n239 = ["Normal", "CL", "Karlsruhe", "Karlsruhe.png", "Karlsruhe", "239"];
	var n240 = ["Normal", "CL", "K??ln", "K??ln.png", "K??ln", "240"];
	var n241 = ["Rare", "CL", "Leipzig", "Leipzig.png", "Leipzig", "241"];
	var n257 = ["Elite", "CL", "Yat_Sen", "Yat-Sen.png", "Yat Sen", "257"];
	var n258 = ["Elite", "CL", "Ning_Hai", "Ning-Hai.png", "Ning Hai", "258"];
	var n259 = ["Elite", "CL", "Ping_Hai", "Ping-Hai.png", "Ping Hai", "259"];
	var n262 = ["Super-Rare", "CL", "Avrora", "Avrora.png", "Avrora", "262"];
	var n303 = ["Normal", "CL", "Richmond", "Richmond.png", "Richmond", "303"];
	var n304 = ["Rare", "CL", "Honolulu", "Honolulu.png", "Honolulu", "304"];
	var n305 = ["Elite", "CL", "St._Louis", "St.-Louis.png", "St. Louis", "305"];
	var n308 = ["Rare", "CL", "Sendai", "Sendai.png", "Sendai", "308"];
	var n309 = ["Elite", "CL", "Jintsuu", "Jintsuu.png", "Jintsuu", "309"];
	var n310 = ["Rare", "CL", "Naka", "Naka.png", "Naka", "310"];
	var n321 = ["Elite", "CL", "Agano", "Agano.png", "Agano", "321"];
	var n322 = ["Super-Rare", "CL", "Noshiro", "Noshiro.png", "Noshiro", "322"];
	var n327 = ["Rare", "CL", "Fiji", "Fiji.png", "Fiji", "327"];
	var n328 = ["Rare", "CL", "Jamaica", "Jamaica.png", "Jamaica", "328"];
	var n329 = ["Super-Rare", "CL", "Montpelier", "Montpelier.png", "Montpelier", "329"];
	var n330 = ["Elite", "CL", "Denver", "Denver.png", "Denver", "330"];
	var n335 = ["Elite", "CL", "Little_Bel", "Little-Bel.png", "Little Bel", "335"];
	var n349 = ["Elite", "CL", "??mile_Bertin", "??mile-Bertin.png", "??mile Bertin", "349"];
	var n360 = ["Rare", "CL", "Memphis", "Memphis.png", "Memphis", "360"];
	var n361 = ["Rare", "CL", "Newcastle", "Newcastle.png", "Newcastle", "361"];
	var n366 = ["Rare", "CL", "Concord", "Concord.png", "Concord", "366"];
	var n371 = ["Super-Rare", "CL", "Sirius", "Sirius.png", "Sirius", "371"];
	var n372 = ["Rare", "CL", "Curacoa", "Curacoa.png", "Curacoa", "372"];
	var n373 = ["Rare", "CL", "Curlew", "Curlew.png", "Curlew", "373"];
	var n390 = ["Elite", "CL", "Lena", "Lena.png", "Lena", "390"];
	var n391 = ["Elite", "CL", "Clevelad", "Clevelad.png", "Clevelad", "391"];
	var n392 = ["Elite", "CL", "Lil_Sandy", "Lil-Sandy.png", "Li'l Sandy", "392"];
	var n393 = ["Super-Rare", "CL", "Swiftsure", "Swiftsure.png", "Swiftsure", "393"];
	var n404 = ["Rare", "CL", "San_Juan", "San-Juan.png", "San Juan", "404"];
	var n405 = ["Elite", "CL", "Birmingham", "Birmingham.png", "Birmingham", "405"];
	var n408 = ["Elite", "CL", "Black_Prince", "Black-Prince.png", "Black Prince", "408"];
	var n420 = ["Elite", "CL", "Cleveland_muse", "Cleveland-muse.png", "Cleveland ??", "420"];
	var n421 = ["Elite", "CL", "Sheffield_muse", "Sheffield-muse.png", "Sheffield ??", "421"];
	var n423 = ["Rare", "CL", "Glasgow", "Glasgow.png", "Glasgow", "423"];
	var n428 = ["Elite", "CL", "Biloxi", "Biloxi.png", "Biloxi", "428"];
	var n434 = ["Elite", "CL", "Pamiat", "Pamiat-Merkuria.png", "Pamiat Merkuria", "434"];
	var n435 = ["Super-Rare", "CL", "Kirov", "Kirov.png", "Kirov", "435"];
	var n436 = ["Super-Rare", "CL", "Chapayev", "Chapayev.png", "Chapayev", "436"];
	var n445 = ["Super-Rare", "CL", "Reno", "Reno.png", "Reno", "445"];
	var n448 = ["Rare", "CL", "Marblehead", "Marblehead.png", "Marblehead", "448"];
	var n454 = ["Super-Rare", "CL", "Jeanne_dArc", "Jeanne-dArc.png", "Jeanne d'Arc", "454"];
	var n456 = ["Elite", "CL", "La_Galissonni??re", "La-Galissonni??re.png", "La Galissonni??re", "456"];
	var n463 = ["Super-Rare", "CL", "Hermione", "Hermione.png", "Hermione", "463"];
	var n476 = ["Super-Rare", "CL", "Dido_muse", "Dido-muse.png", "Dido ??", "476"];
	var n486 = ["Elite", "CL", "N??rnberg", "N??rnberg.png", "N??rnberg", "486"];
	var n493 = ["Elite", "CL", "Ying_Swei", "Ying-Swei.png", "Ying Swei", "493"];
	var n494 = ["Elite", "CL", "Chao_Ho", "Chao-Ho.png", "Chao Ho", "494"];
	var n495 = ["Elite", "CL", "Penelope", "Penelope.png", "Penelope", "495"];
	var n498 = ["Elite", "CL", "Murmansk", "Murmansk.png", "Murmansk", "498"];
	var n501 = ["Super-Rare", "CL", "Duca_degli_Abruzzi", "Duca-degli-Abruzzi.png", "Duca degli Abruzzi", "501"];
	var n514 = ["Elite", "CL", "link", "Boise.png", "Boise", "514"];
	var n3033 = ["Super-Rare", "CL", "link", "Helena-kai.png", "Helena (Retrofit)", "3033"];
	var n3036 = ["Ultra-Rare", "CL", "link", "San-Diego-kai.png", "San Diego (Retrofit)", "3036"];
	var n3104 = ["Rare", "CL", "link", "Leander-kai.png", "Leander (Retrofit)", "3104"];
	var n3105 = ["Elite", "CL", "link", "Achilles-kai.png", "Achilles (Retrofit)", "3105"];
	var n3106 = ["Elite", "CL", "link", "Ajax-kai.png", "Ajax (Retrofit)", "3106"];
	var n3179 = ["Super-Rare", "CL", "link", "Yuubari-kai.png", "Yuubari (Retrofit)", "3179"];
	var n3183 = ["Elite", "CL", "link", "Isuzu-kai.png", "Isuzu (Retrofit)", "3183"];
	var n3186 = ["Super-Rare", "CL", "link", "Kinu-kai.png", "Kinu (Retrofit)", "3186"];
	var n3187 = ["Rare", "CL", "link", "Abukuma-kai.png", "Abukuma (Retrofit)", "3187"];
	var n3239 = ["Rare", "CL", "link", "Karlsruhe-kai.png", "Karlsruhe (Retrofit)", "3239"];
	var n3240 = ["Rare", "CL", "link", "K??ln-kai.png", "K??ln (Retrofit)", "3240"];
	var n3241 = ["Elite", "CL", "link", "Leipzig-kai.png", "Leipzig (Retrofit)", "3241"];
	var n3258 = ["Super-Rare", "CL", "link", "Ning-Hai-kai.png", "Ning Hai (Retrofit)", "3258"];
	var n3259 = ["Super-Rare", "CL", "link", "Ping-Hai-kai.png", "Ping Hai (Retrofit)", "3259"];
	var n3308 = ["Elite", "CL", "link", "Sendai-kai.png", "Sendai (Retrofit)", "3308"];
	var n3309 = ["Super-Rare", "CL", "link", "Jintsuu-kai.png", "Jintsuu (Retrofit)", "3309"];
	var n3349 = ["Super-Rare", "CL", "link", "Emile-Bertin-kai.png", "??mile Bertin (Retrofit)", "3349"];
	var n3361 = ["Elite", "CL", "link", "Newcastle-kai.png", "Newcastle (Retrofit)", "3361"];
	var n3372 = ["Elite", "CL", "link", "Curacoa-kai.png", "Curacoa (Retrofit)", "3372"];
	var n3373 = ["Elite", "CL", "link", "Curlew-kai.png", "Curlew (Retrofit)", "3373"];
	var n3434 = ["Super-Rare", "CL", "link", "Pamiat-Merkuria-kai.png", "Pamiat Merkuria (Retrofit)", "3434"];
	var n10064 = ["Super-Rare", "CL", "link", "Misaki.png", "Misaki", "10064"];
	var n10067 = ["Elite", "CL", "link", "Monica.png", "Monica", "10067"];
	var nCollab001 = ["Elite", "CL", "link", "HDN-Neptune.png", "HDN Neptune", "Collab001"];
	var nCollab005 = ["Super-Rare", "CL", "link", "Purple-Heart.png", "Purple Heart", "Collab005"];
	var nCollab033 = ["Super-Rare", "CL", "link", "Rurutie.png", "Rurutie", "Collab033"];
	var nPlan001 = ["Priority", "CL", "link", "HMS-Neptune.png", "Neptune", "Plan001"];
	var nPlan007 = ["Priority", "CL", "link", "Seattle.png", "Seattle", "Plan007"];
	var nPlan015 = ["Priority", "CL", "link", "Mainz.png", "Mainz", "Plan015"];

// DD
	var n001 = ["Elite", "DD", "Universal_Bulin", "Universal-Bulin.png", "Universal Bulin", "001"];
	var n002 = ["Super-Rare", "DD", "Prototype_Bulin_MKII", "Prototype-Bulin-MKII.png", "Prototype Bulin MKII", "002"];
	var n003 = ["Ultra-Rare", "DD", "Specialized_Bulin_Custom_MKIII", "Specialized-Bulin-Custom-MKIII.png", "Specialized Bulin Custom MKIII", "003"];
	var n004 = ["Rare", "DD", "Dewey", "Dewey.png", "Dewey", "004"];
	var n005 = ["Normal", "DD", "Cassin", "Cassin.png", "Cassin", "005"];
	var n006 = ["Normal", "DD", "Downes", "Downes.png", "Downes", "006"];
	var n007 = ["Rare", "DD", "Gridley", "Gridley.png", "Gridley", "007"];
	var n008 = ["Normal", "DD", "Craven", "Craven.png", "Craven", "008"];
	var n009 = ["Normal", "DD", "McCall", "McCall.png", "McCall", "009"];
	var n010 = ["Elite", "DD", "Maury", "Maury.png", "Maury", "010"];
	var n011 = ["Rare", "DD", "Fletcher", "Fletcher.png", "Fletcher", "011"];
	var n013 = ["Elite", "DD", "Charles_Ausburne", "Charles-Ausburne.png", "Charles Ausburne", "013"];
	var n014 = ["Rare", "DD", "Thatcher", "Thatcher.png", "Thatcher", "014"];
	var n015 = ["Normal", "DD", "Aulick", "Aulick.png", "Aulick", "015"];
	var n016 = ["Normal", "DD", "Foote", "Foote.png", "Foote", "016"];
	var n017 = ["Normal", "DD", "Spence", "Spence.png", "Spence", "017"];
	var n018 = ["Rare", "DD", "Benson", "Benson.png", "Benson", "018"];
	var n019 = ["Elite", "DD", "Laffey", "Laffey.png", "Laffey", "019"];
	var n026 = ["Rare", "DD", "Sims", "Sims.png", "Sims", "026"];
	var n027 = ["Rare", "DD", "Hammann", "Hammann.png", "Hammann", "027"];
	var n028 = ["Super-Rare", "DD", "Eldridge", "Eldridge.png", "Eldridge", "028"];
	var n081 = ["Rare", "DD", "Amazon", "Amazon.png", "Amazon", "081"];
	var n082 = ["Rare", "DD", "Acasta", "Acasta.png", "Acasta", "082"];
	var n083 = ["Rare", "DD", "Ardent", "Ardent.png", "Ardent", "083"];
	var n086 = ["Normal", "DD", "Beagle", "Beagle.png", "Beagle", "086"];
	var n087 = ["Normal", "DD", "Bulldog", "Bulldog.png", "Bulldog", "087"];
	var n088 = ["Normal", "DD", "Comet", "Comet.png", "Comet", "088"];
	var n089 = ["Normal", "DD", "Crescent", "Crescent.png", "Crescent", "089"];
	var n090 = ["Normal", "DD", "Cygnet", "Cygnet.png", "Cygnet", "090"];
	var n091 = ["Normal", "DD", "Foxhound", "Foxhound.png", "Foxhound", "091"];
	var n092 = ["Rare", "DD", "Fortune", "Fortune.png", "Fortune", "092"];
	var n093 = ["Elite", "DD", "Grenville", "Grenville.png", "Grenville", "093"];
	var n094 = ["Elite", "DD", "Glowworm", "Glowworm.png", "Glowworm", "094"];
	var n096 = ["Elite", "DD", "Hardy", "Hardy.png", "Hardy", "096"];
	var n100 = ["Rare", "DD", "Hunter", "Hunter.png", "Hunter", "100"];
	var n101 = ["Elite", "DD", "Javelin", "Javelin.png", "Javelin", "101"];
	var n102 = ["Rare", "DD", "Juno", "Juno.png", "Juno", "102"];
	var n103 = ["Elite", "DD", "Vampire", "Vampire.png", "Vampire", "103"];
	var n151 = ["Elite", "DD", "Fubuki", "Fubuki.png", "Fubuki", "151"];
	var n155 = ["Elite", "DD", "Ayanami", "Ayanami.png", "Ayanami", "155"];
	var n159 = ["Rare", "DD", "Akatsuki", "Akatsuki.png", "Akatsuki", "159"];
	var n160 = ["Elite", "DD", "Hibiki", "Hibiki.png", "Hibiki", "160"];
	var n161 = ["Rare", "DD", "Ikazuchi", "Ikazuchi.png", "Ikazuchi", "161"];
	var n162 = ["Rare", "DD", "Inazuma", "Inazuma.png", "Inazuma", "162"];
	var n163 = ["Rare", "DD", "Shiratsuyu", "Shiratsuyu.png", "Shiratsuyu", "163"];
	var n164 = ["Super-Rare", "DD", "Yuudachi", "Yuudachi.png", "Yuudachi", "164"];
	var n165 = ["Elite", "DD", "Shigure", "Shigure.png", "Shigure", "165"];
	var n166 = ["Super-Rare", "DD", "Yukikaze", "Yukikaze.png", "Yukikaze", "166"];
	var n167 = ["Rare", "DD", "Kagerou", "Kagerou.png", "Kagerou", "167"];
	var n168 = ["Normal", "DD", "Shiranui", "Shiranui.png", "Shiranui", "168"];
	var n170 = ["Elite", "DD", "Nowaki", "Nowaki.png", "Nowaki", "170"];
	var n171 = ["Rare", "DD", "Hatsuharu", "Hatsuharu.png", "Hatsuharu", "171"];
	var n173 = ["Rare", "DD", "Wakaba", "Wakaba.png", "Wakaba", "173"];
	var n174 = ["Rare", "DD", "Hatsushimo", "Hatsushimo.png", "Hatsushimo", "174"];
	var n175 = ["Rare", "DD", "Ariake", "Ariake.png", "Ariake", "175"];
	var n176 = ["Rare", "DD", "Yuugure", "Yuugure.png", "Yuugure", "176"];
	var n177 = ["Rare", "DD", "Kuroshio", "Kuroshio.png", "Kuroshio", "177"];
	var n178 = ["Rare", "DD", "Oyashio", "Oyashio.png", "Oyashio", "178"];
	var n233 = ["Elite", "DD", "Z1", "Z1.png", "Z1", "233"];
	var n236 = ["Elite", "DD", "Z23", "Z23.png", "Z23", "236"];
	var n237 = ["Elite", "DD", "Z25", "Z25.png", "Z25", "237"];
	var n253 = ["Elite", "DD", "An_Sha", "An-Shan.png", "An Shan", "253"];
	var n254 = ["Elite", "DD", "Fu_Shu", "Fu-Shun.png", "Fu Shun", "254"];
	var n255 = ["Elite", "DD", "Chang_Chun", "Chang-Chun.png", "Chang Chun", "255"];
	var n256 = ["Elite", "DD", "Tai_Yuan", "Tai-Yuan.png", "Tai Yuan", "256"];
	var n263 = ["Rare", "DD", "Bailey", "Bailey.png", "Bailey", "263"];
	var n264 = ["Rare", "DD", "Z19", "Z19.png", "Z19", "264"];
	var n265 = ["Normal", "DD", "Z20", "Z20.png", "Z20", "265"];
	var n266 = ["Normal", "DD", "Z21", "Z21.png", "Z21", "266"];
	var n267 = ["Super-Rare", "DD", "Z46", "Z46.png", "Z46", "267"];
	var n269 = ["Rare", "DD", "Kamikaze", "Kamikaze.png", "Kamikaze", "269"];
	var n270 = ["Rare", "DD", "Matsukaze", "Matsukaze.png", "Matsukaze", "270"];
	var n271 = ["Normal", "DD", "Mutsuki", "Mutsuki.png", "Mutsuki", "271"];
	var n272 = ["Normal", "DD", "Kisaragi", "Kisaragi.png", "Kisaragi", "272"];
	var n274 = ["Normal", "DD", "Uzuki", "Uzuki.png", "Uzuki", "274"];
	var n276 = ["Normal", "DD", "Minazuki", "Minazuki.png", "Minazuki", "276"];
	var n277 = ["Rare", "DD", "Fumizuki", "Fumizuki.png", "Fumizuki", "277"];
	var n278 = ["Rare", "DD", "Nagatsuki", "Nagatsuki.png", "Nagatsuki", "278"];
	var n280 = ["Normal", "DD", "Mikazuki", "Mikazuki.png", "Mikazuki", "280"];
	var n288 = ["Super-Rare", "DD", "Kawakaze", "Kawakaze.png", "Kawakaze", "288"];
	var n293 = ["Rare", "DD", "Kiyonami", "Kiyonami.png", "Kiyonami", "293"];
	var n295 = ["Elite", "DD", "Niizuki", "Niizuki.png", "Niizuki", "295"];
	var n296 = ["Elite", "DD", "Harutsuki", "Harutsuki.png", "Harutsuki", "296"];
	var n297 = ["Elite", "DD", "Yoizuki", "Yoizuki.png", "Yoizuki", "297"];
	var n299 = ["Rare", "DD", "Radford", "Radford.png", "Radford", "299"];
	var n300 = ["Rare", "DD", "Jenkins", "Jenkins.png", "Jenkins", "300"];
	var n301 = ["Elite", "DD", "Nicholas", "Nicholas.png", "Nicholas", "301"];
	var n306 = ["Rare", "DD", "Jupiter", "Jupiter.png", "Jupiter", "306"];
	var n307 = ["Rare", "DD", "Jersey", "Jersey.png", "Jersey", "307"];
	var n316 = ["Rare", "DD", "Urakaze", "Urakaze.png", "Urakaze", "316"];
	var n317 = ["Rare", "DD", "Isokaze", "Isokaze.png", "Isokaze", "317"];
	var n318 = ["Rare", "DD", "Hamakaze", "Hamakaze.png", "Hamakaze", "318"];
	var n319 = ["Rare", "DD", "Tanikaze", "Tanikaze.png", "Tanikaze", "319"];
	var n325 = ["Elite", "DD", "Matchless", "Matchless.png", "Matchless", "325"];
	var n326 = ["Elite", "DD", "Musketeer", "Musketeer.png", "Musketeer", "326"];
	var n331 = ["Rare", "DD", "Asashio", "Asashio.png", "Asashio", "331"];
	var n332 = ["Rare", "DD", "Ooshio", "Ooshio.png", "Ooshio", "332"];
	var n333 = ["Rare", "DD", "Michishio", "Michishio.png", "Michishio", "333"];
	var n334 = ["Rare", "DD", "Arashio", "Arashio.png", "Arashio", "334"];
	var n345 = ["Elite", "DD", "Z35", "Z35.png", "Z35", "345"];
	var n346 = ["Rare", "DD", "Z18", "Z18.png", "Z18", "346"];
	var n347 = ["Super-Rare", "DD", "Le_Triomphant", "Le-Triomphant.png", "Le Triomphant", "347"];
	var n348 = ["Rare", "DD", "Forbin", "Forbin.png", "Forbin", "348"];
	var n351 = ["Rare", "DD", "Le_Mars", "Le-Mars.png", "Le Mars", "351"];
	var n355 = ["Rare", "DD", "Bush", "Bush.png", "Bush", "355"];
	var n359 = ["Elite", "DD", "Le_T??m??raire", "Le-T??m??raire.png", "Le T??m??raire", "359"];
	var n362 = ["Rare", "DD", "Hobby", "Hobby.png", "Hobby", "362"];
	var n363 = ["Rare", "DD", "Kalk", "Kalk.png", "Kalk", "363"];
	var n365 = ["Rare", "DD", "Hazelwood", "Hazelwood.png", "Hazelwood", "365"];
	var n369 = ["Rare", "DD", "Hatakaze", "Hatakaze.png", "Hatakaze", "369"];
	var n370 = ["Elite", "DD", "Makinami", "Makinami.png", "Makinami", "370"];
	var n374 = ["Rare", "DD", "Kimberly", "Kimberly.png", "Kimberly", "374"];
	var n375 = ["Elite", "DD", "Mullany", "Mullany.png", "Mullany", "375"];
	var n379 = ["Elite", "DD", "Z2", "Z2.png", "Z2", "379"];
	var n388 = ["Elite", "DD", "Z36", "Z36.png", "Z36", "388"];
	var n389 = ["Rare", "DD", "Echo", "Echo.png", "Echo", "389"];
	var n394 = ["Super-Rare", "DD", "Le_Malin", "Le-Malin.png", "Le Malin", "394"];
	var n395 = ["Elite", "DD", "LOpini??tre", "LOpini??tre.png", "L'Opini??tre", "395"];
	var n406 = ["Rare", "DD", "Aylwin", "Aylwin.png", "Aylwin", "406"];
	var n407 = ["Rare", "DD", "Bache", "Bache.png", "Bache", "407"];
	var n409 = ["Rare", "DD", "Stanly", "Stanly.png", "Stanly", "409"];
	var n415 = ["Elite", "DD", "Carabiniere", "Carabiniere.png", "Carabiniere", "415"];
	var n417 = ["Rare", "DD", "Smalley", "Smalley.png", "Smalley", "417"];
	var n424 = ["Elite", "DD", "Kasumi", "Kasumi.png", "Kasumi", "424"];
	var n427 = ["Rare", "DD", "Halsey_Powell", "Halsey-Powell.png", "Halsey Powell", "427"];
	var n429 = ["Elite", "DD", "Uranami", "Uranami.png", "Uranami", "429"];
	var n431 = ["Elite", "DD", "Grozny", "Grozny.png", "Grozny", "431"];
	var n432 = ["Elite", "DD", "Minsk", "Minsk.png", "Minsk", "432"];
	var n433 = ["Super-Rare", "DD", "Tashkent", "Tashkent.png", "Tashkent", "433"];
	var n444 = ["Elite", "DD", "Cooper", "Cooper.png", "Cooper", "444"];
	var n449 = ["Elite", "DD", "Hanazuki", "Hanazuki.png", "Hanazuki", "449"];
	var n450 = ["Elite", "DD", "Naganami", "Naganami.png", "Naganami", "450"];
	var n452 = ["Elite", "DD", "Tartu", "Tartu.png", "Tartu", "452"];
	var n457 = ["Elite", "DD", "Vauquelin", "Vauquelin.png", "Vauquelin", "457"];
	var n460 = ["Elite", "DD", "Eskimo", "Eskimo.png", "Eskimo", "460"];
	var n465 = ["Elite", "DD", "Icarus", "Icarus.png", "Icarus", "465"];
	var n466 = ["Elite", "DD", "Z26", "Z26.png", "Z26", "466"];
	var n468 = ["Super-Rare", "DD", "Suzutsuki", "Suzutsuki.png", "Suzutsuki", "468"];
	var n475 = ["Super-Rare", "DD", "Tashkent_muse", "Tashkent-muse.png", "Tashkent ??", "475"];
	var n481 = ["Super-Rare", "DD", "Le_Malin_muse", "Le-Malin-muse.png", "Le Malin ??", "481"];
	var n487 = ["Elite", "DD", "Z24", "Z24.png", "Z24", "487"];
	var n488 = ["Elite", "DD", "Z28", "Z28.png", "Z28", "488"];
	var n490 = ["Elite", "DD", "Vincenzo_Gioberti", "Vincenzo-Gioberti.png", "Vincenzo Gioberti", "490"];
	var n491 = ["Elite", "DD", "Stremitelny", "Stremitelny.png", "Stremitelny", "491"];
	var n497 = ["Elite", "DD", "Gremyashchy", "Gremyashchy.png", "Gremyashchy", "497"];
	var n499 = ["Elite", "DD", "Gromky", "Gromky.png", "Gromky", "499"];
	var n504 = ["Elite", "DD", "Maestrale", "Maestrale.png", "Maestrale", "504"];
	var n505 = ["Elite", "DD", "Libeccio", "Libeccio.png", "Libeccio", "505"];
	var n506 = ["Elite", "DD", "Nicoloso_da_Recco", "Nicoloso-da-Recco.png", "Nicoloso da Recco", "506"];
	var n507 = ["Rare", "DD", "Oite", "Oite.png", "Oite", "507"];
	var n508 = ["Super-Rare", "DD", "Allen_M._Sumner", "Allen-M.-Sumner.png", "Allen M. Sumner", "508"];
	var n515 = ["Elite", "DD", "link", "Morrison.png", "Morrison", "515"]
	var n509 = ["Elite", "DD", "Stephen_Potter", "Stephen-Potter.png", "Stephen Potter", "509"];
	var n3005 = ["Rare", "DD", "link", "Cassin-kai.png", "Cassin (Retrofit)", "3005"];
	var n3006 = ["Rare", "DD", "link", "Downes-kai.png", "Downes (Retrofit)", "3006"];
	var n3019 = ["Super-Rare", "DD", "link", "Laffey-kai.png", "Laffey (Retrofit)", "3019"];
	var n3026 = ["Elite", "DD", "link", "Sims-kai.png", "Sims (Retrofit)", "3026"];
	var n3027 = ["Elite", "DD", "link", "Hammann-kai.png", "Hammann (Retrofit)", "3027"];
	var n3081 = ["Elite", "DD", "link", "Amazon-kai.png", "Amazon (Retrofit)", "3081"];
	var n3082 = ["Elite", "DD", "link", "Acasta-kai.png", "Acasta (Retrofit)", "3082"];
	var n3083 = ["Elite", "DD", "link", "Ardent-kai.png", "Ardent (Retrofit)", "3083"];
	var n3088 = ["Rare", "DD", "link", "Comet-kai.png", "Comet (Retrofit)", "3088"];
	var n3089 = ["Rare", "DD", "link", "Crescent-kai.png", "Crescent (Retrofit)", "3089"];
	var n3090 = ["Rare", "DD", "link", "Cygnet-kai.png", "Cygnet (Retrofit)", "3090"];
	var n3091 = ["Rare", "DD", "link", "Foxhound-kai.png", "Foxhound (Retrofit)", "3091"];
	var n3092 = ["Elite", "DD", "link", "Fortune-kai.png", "Fortune (Retrofit)", "3092"];
	var n3101 = ["Super-Rare", "DD", "link", "Javelin-kai.png", "Javelin (Retrofit)", "3101"];
	var n3155 = ["Super-Rare", "DD", "link", "Ayanami-kai.png", "Ayanami (Retrofit)", "3155"];
	var n3165 = ["Super-Rare", "DD", "link", "Shigure-kai.png", "Shigure (Retrofit)", "3165"];
	var n3167 = ["Elite", "DD", "link", "Kagerou.png", "Kagerou (Retrofit)", "3167"];
	var n3168 = ["Rare", "DD", "link", "Shiranui.png", "Shiranui (Retrofit)", "3168"];
	var n3171 = ["Elite", "DD", "link", "Hatsuharu-kai.png", "Hatsuharu (Retrofit)", "3171"];
	var n3174 = ["Elite", "DD", "link", "Hatsushimo-kai.png", "Hatsushimo (Retrofit)", "3174"];
	var n3175 = ["Elite", "DD", "link", "Ariake-kai.png", "Ariake (Retrofit)", "3175"];
	var n3176 = ["Elite", "DD", "link", "Yuugure-kai.png", "Yuugure (Retrofit)", "3176"];
	var n3233 = ["Super-Rare", "DD", "link", "Z1-kai.png", "Z1 (Retrofit)", "3233"];
	var n3236 = ["Super-Rare", "DD", "link", "Z23-kai.png", "Z23 (Retrofit)", "3236"];
	var n3263 = ["Elite", "DD", "link", "Bailey-kai.png", "Bailey (Retrofit)", "3263"];
	var n3269 = ["Elite", "DD", "link", "Kamikaze-kai.png", "Kamikaze (Retrofit)", "3269"];
	var n3270 = ["Elite", "DD", "link", "Matsukaze-kai.png", "Matsukaze (Retrofit)", "3270"];
	var n3271 = ["Rare", "DD", "link", "Mutsuki-kai.png", "Mutsuki (Retrofit)", "3271"];
	var n3272 = ["Rare", "DD", "link", "Kisaragi-kai.png", "Kisaragi (Retrofit)", "3272"];
	var n3301 = ["Super-Rare", "DD", "link", "Nicholas-kai.png", "Nicholas (Retrofit)", "3301"];
	var n3318 = ["Elite", "DD", "link", "Hamakaze-kai.png", "Hamakaze (Retrofit)", "3318"];
	var n3319 = ["Elite", "DD", "link", "Tanikaze-kai.png", "Tanikaze (Retrofit)", "3319"];
	var n3348 = ["Elite", "DD", "link", "Forbin-kai.png", "Forbin (Retrofit)", "3348"];
	var n3351 = ["Elite", "DD", "link", "Le-Mars-kai.png", "Le Mars (Retrofit)", "3351"];
	var n10061 = ["Super-Rare", "DD", "link", "Marie-Rose.png", "Marie Rose", "10061"];
	var nCollab003 = ["Elite", "DD", "link", "Blanc.png", "Blanc", "Collab003"];
	var nCollab007 = ["Super-Rare", "DD", "link", "White-Heart.png", "White Heart", "Collab007"];
	var nCollab021 = ["Elite", "DD", "link", "22.png", "22", "Collab021"];
	var nCollab022 = ["Elite", "DD", "link", "33.png", "33", "Collab022"];
	var nCollab032 = ["Super-Rare", "DD", "link", "Nekone.png", "Nekone", "Collab032"];
	var nCollab041 = ["Elite", "DD", "link", "Kizuna-AI.png", "Kizuna AI", "Collab041"];
	var nCollab051 = ["Super-Rare", "DD", "link", "Shirakami-Fubuki.png", "Shirakami Fubuki", "Collab051"];
	var nCollab054 = ["Elite", "DD", "link", "Natsuiro-Matsuri.png", "Natsuiro Matsuri", "Collab054"];
	var nPlan009 = ["Priority", "DD", "link", "Kitakaze.png", "Kitakaze", "Plan009"];

// SS/SSV
	var n338 = ["Super-Rare", "SS", "I-19", "I-19.png", "I-19", "338"];
	var n339 = ["Elite", "SS", "I-26", "I-26.png", "I-26", "339"];
	var n340 = ["Elite", "SS", "I-58", "I-58.png", "I-58", "340"];
	var n341 = ["Super-Rare", "SS", "U-81", "U-81.png", "U-81", "341"];
	var n342 = ["Elite", "SS", "Dace", "Dace.png", "Dace", "342"];
	var n343 = ["Super-Rare", "SS", "U-47", "U-47.png", "U-47", "343"];
	var n344 = ["Elite", "SS", "U-557", "U-557.png", "U-557", "344"];
	var n350 = ["Elite", "SS", "Surcouf", "Surcouf.png", "Surcouf", "350"];
	var n358 = ["Super-Rare", "SS", "Albacore", "Albacore.png", "Albacore", "358"];
	var n381 = ["Super-Rare", "SSV", "I-13", "I-13.png", "I-13", "381"];
	var n386 = ["Elite", "SS", "U-556", "U-556.png", "U-556", "386"];
	var n387 = ["Elite", "SS", "U-73", "U-73.png", "U-73", "387"];
	var n396 = ["Elite", "SS", "I-25", "I-25.png", "I-25", "396"];
	var n397 = ["Elite", "SS", "I-56", "I-56.png", "I-56", "397"];
	var n398 = ["Super-Rare", "SS", "I-168", "I-168.png", "I-168", "398"];
	var n399 = ["Super-Rare", "SS", "U-101", "U-101.png", "U-101", "399"];
	var n400 = ["Elite", "SS", "U-522", "U-522.png", "U-522 ", "400"];
	var n402 = ["Super-Rare", "SS", "Cavalla", "Cavalla.png", "Cavalla", "402"];
	var n416 = ["Elite", "SS", "U-110", "U-110.png", "U-110", "416"];
	var n446 = ["Elite", "SS", "Bluegill", "Bluegill.png", "Bluegill", "446"];
	var n467 = ["Super-Rare", "SS", "U-96", "U-96.png", "U-96", "467"];
	var n477 = ["Elite", "SS", "Albacore_muse", "Albacore-muse.png", "Albacore ??", "477"];
	var n484 = ["Super-Rare", "SS", "U-37", "U-37.png", "U-37", "484"];
	var n492 = ["Elite", "SS", "U-410", "U-410.png", "U-410", "492"];
	var n503 = ["Elite", "SS", "Torricelli", "Torricelli.png", "Torricelli", "503"];
	var n513 = ["Super-Rare", "SS", "link", "Archerfish.png", "Archerfish", "513"];
	var nCollab053 = ["Super-Rare", "SS", "link", "Minato-Aqua.png", "Minato Aqua", "Collab053"];

// Auxiliaries
	var n080 = ["Elite", "AR", "Vestal", "Vestal.png", "Vestal", "080"];
	var n232 = ["Super-Rare", "AR", "Akashi", "Akashi.png", "Akashi", "232"];
	var n472 = ["Super-Rare", "AE", "Kashino", "Kashino.png", "Kashino", "472"];

// Triggers
	/* BB/BC/BBV/BM */
		function loadBB () {
		    $("#container-BB-BC-BBV-BM").append(scard(n052[0], n052[1], n052[2], n052[3], n052[4], n052[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n053[0], n053[1], n053[2], n053[3], n053[4], n053[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n054[0], n054[1], n054[2], n054[3], n054[4], n054[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n055[0], n055[1], n055[2], n055[3], n055[4], n055[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n058[0], n058[1], n058[2], n058[3], n058[4], n058[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n059[0], n059[1], n059[2], n059[3], n059[4], n059[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n060[0], n060[1], n060[2], n060[3], n060[4], n060[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n061[0], n061[1], n061[2], n061[3], n061[4], n061[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n062[0], n062[1], n062[2], n062[3], n062[4], n062[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n063[0], n063[1], n063[2], n063[3], n063[4], n063[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n064[0], n064[1], n064[2], n064[3], n064[4], n064[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n065[0], n065[1], n065[2], n065[3], n065[4], n065[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n068[0], n068[1], n068[2], n068[3], n068[4], n068[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n127[0], n127[1], n127[2], n127[3], n127[4], n127[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n128[0], n128[1], n128[2], n128[3], n128[4], n128[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n129[0], n129[1], n129[2], n129[3], n129[4], n129[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n130[0], n130[1], n130[2], n130[3], n130[4], n130[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n131[0], n131[1], n131[2], n131[3], n131[4], n131[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n132[0], n132[1], n132[2], n132[3], n132[4], n132[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n133[0], n133[1], n133[2], n133[3], n133[4], n133[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n134[0], n134[1], n134[2], n134[3], n134[4], n134[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n135[0], n135[1], n135[2], n135[3], n135[4], n135[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n136[0], n136[1], n136[2], n136[3], n136[4], n136[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n149[0], n149[1], n149[2], n149[3], n149[4], n149[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n150[0], n150[1], n150[2], n150[3], n150[4], n150[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n204[0], n204[1], n204[2], n204[3], n204[4], n204[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n205[0], n205[1], n205[2], n205[3], n205[4], n205[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n206[0], n206[1], n206[2], n206[3], n206[4], n206[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n207[0], n207[1], n207[2], n207[3], n207[4], n207[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n208[0], n208[1], n208[2], n208[3], n208[4], n208[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n209[0], n209[1], n209[2], n209[3], n209[4], n209[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n210[0], n210[1], n210[2], n210[3], n210[4], n210[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n211[0], n211[1], n211[2], n211[3], n211[4], n211[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n212[0], n212[1], n212[2], n212[3], n212[4], n212[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n213[0], n213[1], n213[2], n213[3], n213[4], n213[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n214[0], n214[1], n214[2], n214[3], n214[4], n214[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n215[0], n215[1], n215[2], n215[3], n215[4], n215[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n248[0], n248[1], n248[2], n248[3], n248[4], n248[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n249[0], n249[1], n249[2], n249[3], n249[4], n249[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n250[0], n250[1], n250[2], n250[3], n250[4], n250[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n251[0], n251[1], n251[2], n251[3], n251[4], n251[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n320[0], n320[1], n320[2], n320[3], n320[4], n320[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n336[0], n336[1], n336[2], n336[3], n336[4], n336[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n352[0], n352[1], n352[2], n352[3], n352[4], n352[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n353[0], n353[1], n353[2], n353[3], n353[4], n353[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n354[0], n354[1], n354[2], n354[3], n354[4], n354[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n367[0], n367[1], n367[2], n367[3], n367[4], n367[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n368[0], n368[1], n368[2], n368[3], n368[4], n368[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n383[0], n383[1], n383[2], n383[3], n383[4], n383[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n401[0], n401[1], n401[2], n401[3], n401[4], n401[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n410[0], n410[1], n410[2], n410[3], n410[4], n410[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n411[0], n411[1], n411[2], n411[3], n411[4], n411[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n412[0], n412[1], n412[2], n412[3], n412[4], n412[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n418[0], n418[1], n418[2], n418[3], n418[4], n418[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n425[0], n425[1], n425[2], n425[3], n425[4], n425[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n437[0], n437[1], n437[2], n437[3], n437[4], n437[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n440[0], n440[1], n440[2], n440[3], n440[4], n440[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n441[0], n441[1], n441[2], n441[3], n441[4], n441[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n451[0], n451[1], n451[2], n451[3], n451[4], n451[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n453[0], n453[1], n453[2], n453[3], n453[4], n453[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n461[0], n461[1], n461[2], n461[3], n461[4], n461[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n464[0], n464[1], n464[2], n464[3], n464[4], n464[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n500[0], n500[1], n500[2], n500[3], n500[4], n500[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n510[0], n510[1], n510[2], n510[3], n510[4], n510[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n3052[0], n3052[1], n3052[2], n3052[3], n3052[4], n3052[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n3053[0], n3053[1], n3053[2], n3053[3], n3053[4], n3053[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n3131[0], n3131[1], n3131[2], n3131[3], n3131[4], n3131[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n3208[0], n3208[1], n3208[2], n3208[3], n3208[4], n3208[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n3209[0], n3209[1], n3209[2], n3209[3], n3209[4], n3209[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n3210[0], n3210[1], n3210[2], n3210[3], n3210[4], n3210[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n3211[0], n3211[1], n3211[2], n3211[3], n3211[4], n3211[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n10062[0], n10062[1], n10062[2], n10062[3], n10062[4], n10062[5]))
			$("#container-BB-BC-BBV-BM").append(scard(n10065[0], n10065[1], n10065[2], n10065[3], n10065[4], n10065[5]))
			$("#container-BB-BC-BBV-BM").append(scard(nCollab044[0], nCollab044[1], nCollab044[2], nCollab044[3], nCollab044[4], nCollab044[5]))
			$("#container-BB-BC-BBV-BM").append(scard(nPlan002[0], nPlan002[1], nPlan002[2], nPlan002[3], nPlan002[4], nPlan002[5]))
			$("#container-BB-BC-BBV-BM").append(scard(nPlan004[0], nPlan004[1], nPlan004[2], nPlan004[3], nPlan004[4], nPlan004[5]))
			$("#container-BB-BC-BBV-BM").append(scard(nPlan008[0], nPlan008[1], nPlan008[2], nPlan008[3], nPlan008[4], nPlan008[5]))
			$("#container-BB-BC-BBV-BM").append(scard(nPlan011[0], nPlan011[1], nPlan011[2], nPlan011[3], nPlan011[4], nPlan011[5]))
			$("#container-BB-BC-BBV-BM").append(scard(nPlan012[0], nPlan012[1], nPlan012[2], nPlan012[3], nPlan012[4], nPlan012[5]))
			$("#container-BB-BC-BBV-BM").append(scard(nPlan016[0], nPlan016[1], nPlan016[2], nPlan016[3], nPlan016[4], nPlan016[5]))
			$("#container-BB-BC-BBV-BM").append(scard(nPlan017[0], nPlan017[1], nPlan017[2], nPlan017[3], nPlan017[4], nPlan017[5]))
		}

	/* CL/CVL */
		function loadCV () {
		    $("#container-CV-CVL").append(scard(n070[0], n070[1], n070[2], n070[3], n070[4], n070[5]))
			$("#container-CV-CVL").append(scard(n071[0], n071[1], n071[2], n071[3], n071[4], n071[5]))
			$("#container-CV-CVL").append(scard(n072[0], n072[1], n072[2], n072[3], n072[4], n072[5]))
			$("#container-CV-CVL").append(scard(n073[0], n073[1], n073[2], n073[3], n073[4], n073[5]))
			$("#container-CV-CVL").append(scard(n074[0], n074[1], n074[2], n074[3], n074[4], n074[5]))
			$("#container-CV-CVL").append(scard(n075[0], n075[1], n075[2], n075[3], n075[4], n075[5]))
			$("#container-CV-CVL").append(scard(n076[0], n076[1], n076[2], n076[3], n076[4], n076[5]))
			$("#container-CV-CVL").append(scard(n077[0], n077[1], n077[2], n077[3], n077[4], n077[5]))
			$("#container-CV-CVL").append(scard(n078[0], n078[1], n078[2], n078[3], n078[4], n078[5]))
			$("#container-CV-CVL").append(scard(n079[0], n079[1], n079[2], n079[3], n079[4], n079[5]))
			$("#container-CV-CVL").append(scard(n140[0], n140[1], n140[2], n140[3], n140[4], n140[5]))
			$("#container-CV-CVL").append(scard(n142[0], n142[1], n142[2], n142[3], n142[4], n142[5]))
			$("#container-CV-CVL").append(scard(n143[0], n143[1], n143[2], n143[3], n143[4], n143[5]))
			$("#container-CV-CVL").append(scard(n144[0], n144[1], n144[2], n144[3], n144[4], n144[5]))
			$("#container-CV-CVL").append(scard(n145[0], n145[1], n145[2], n145[3], n145[4], n145[5]))
			$("#container-CV-CVL").append(scard(n146[0], n146[1], n146[2], n146[3], n146[4], n146[5]))
			$("#container-CV-CVL").append(scard(n147[0], n147[1], n147[2], n147[3], n147[4], n147[5]))
			$("#container-CV-CVL").append(scard(n148[0], n148[1], n148[2], n148[3], n148[4], n148[5]))
			$("#container-CV-CVL").append(scard(n218[0], n218[1], n218[2], n218[3], n218[4], n218[5]))
			$("#container-CV-CVL").append(scard(n219[0], n219[1], n219[2], n219[3], n219[4], n219[5]))
			$("#container-CV-CVL").append(scard(n220[0], n220[1], n220[2], n220[3], n220[4], n220[5]))
			$("#container-CV-CVL").append(scard(n222[0], n222[1], n222[2], n222[3], n222[4], n222[5]))
			$("#container-CV-CVL").append(scard(n223[0], n223[1], n223[2], n223[3], n223[4], n223[5]))
			$("#container-CV-CVL").append(scard(n224[0], n224[1], n224[2], n224[3], n224[4], n224[5]))
			$("#container-CV-CVL").append(scard(n225[0], n225[1], n225[2], n225[3], n225[4], n225[5]))
			$("#container-CV-CVL").append(scard(n226[0], n226[1], n226[2], n226[3], n226[4], n226[5]))
			$("#container-CV-CVL").append(scard(n227[0], n227[1], n227[2], n227[3], n227[4], n227[5]))
			$("#container-CV-CVL").append(scard(n228[0], n228[1], n228[2], n228[3], n228[4], n228[5]))
			$("#container-CV-CVL").append(scard(n229[0], n229[1], n229[2], n229[3], n229[4], n229[5]))
			$("#container-CV-CVL").append(scard(n230[0], n230[1], n230[2], n230[3], n230[4], n230[5]))
			$("#container-CV-CVL").append(scard(n231[0], n231[1], n231[2], n231[3], n231[4], n231[5]))
			$("#container-CV-CVL").append(scard(n252[0], n252[1], n252[2], n252[3], n252[4], n252[5]))
			$("#container-CV-CVL").append(scard(n356[0], n356[1], n356[2], n356[3], n356[4], n356[5]))
			$("#container-CV-CVL").append(scard(n357[0], n357[1], n357[2], n357[3], n357[4], n357[5]))
			$("#container-CV-CVL").append(scard(n376[0], n376[1], n376[2], n376[3], n376[4], n376[5]))
			$("#container-CV-CVL").append(scard(n377[0], n377[1], n377[2], n377[3], n377[4], n377[5]))
			$("#container-CV-CVL").append(scard(n378[0], n378[1], n378[2], n378[3], n378[4], n378[5]))
			$("#container-CV-CVL").append(scard(n380[0], n380[1], n380[2], n380[3], n380[4], n380[5]))
			$("#container-CV-CVL").append(scard(n384[0], n384[1], n384[2], n384[3], n384[4], n384[5]))
			$("#container-CV-CVL").append(scard(n385[0], n385[1], n385[2], n385[3], n385[4], n385[5]))
			$("#container-CV-CVL").append(scard(n403[0], n403[1], n403[2], n403[3], n403[4], n403[5]))
			$("#container-CV-CVL").append(scard(n419[0], n419[1], n419[2], n419[3], n419[4], n419[5]))
			$("#container-CV-CVL").append(scard(n426[0], n426[1], n426[2], n426[3], n426[4], n426[5]))
			$("#container-CV-CVL").append(scard(n442[0], n442[1], n442[2], n442[3], n442[4], n442[5]))
			$("#container-CV-CVL").append(scard(n447[0], n447[1], n447[2], n447[3], n447[4], n447[5]))
			$("#container-CV-CVL").append(scard(n458[0], n458[1], n458[2], n458[3], n458[4], n458[5]))
			$("#container-CV-CVL").append(scard(n459[0], n459[1], n459[2], n459[3], n459[4], n459[5]))
			$("#container-CV-CVL").append(scard(n462[0], n462[1], n462[2], n462[3], n462[4], n462[5]))
			$("#container-CV-CVL").append(scard(n470[0], n470[1], n470[2], n470[3], n470[4], n470[5]))
			$("#container-CV-CVL").append(scard(n471[0], n471[1], n471[2], n471[3], n471[4], n471[5]))
			$("#container-CV-CVL").append(scard(n473[0], n473[1], n473[2], n473[3], n473[4], n473[5]))
			$("#container-CV-CVL").append(scard(n474[0], n474[1], n474[2], n474[3], n474[4], n474[5]))
			$("#container-CV-CVL").append(scard(n480[0], n480[1], n480[2], n480[3], n480[4], n480[5]))
			$("#container-CV-CVL").append(scard(n482[0], n482[1], n482[2], n482[3], n482[4], n482[5]))
			$("#container-CV-CVL").append(scard(n485[0], n485[1], n485[2], n485[3], n485[4], n485[5]))
			$("#container-CV-CVL").append(scard(n502[0], n502[1], n502[2], n502[3], n502[4], n502[5]))
			$("#container-CV-CVL").append(scard(n511[0], n511[1], n511[2], n511[3], n511[4], n511[5]))
			$("#container-CV-CVL").append(scard(n3070[0], n3070[1], n3070[2], n3070[3], n3070[4], n3070[5]))
			$("#container-CV-CVL").append(scard(n3071[0], n3071[1], n3071[2], n3071[3], n3071[4], n3071[5]))
			$("#container-CV-CVL").append(scard(n3072[0], n3072[1], n3072[2], n3072[3], n3072[4], n3072[5]))
			$("#container-CV-CVL").append(scard(n3074[0], n3074[1], n3074[2], n3074[3], n3074[4], n3074[5]))
			$("#container-CV-CVL").append(scard(n3075[0], n3075[1], n3075[2], n3075[3], n3075[4], n3075[5]))
			$("#container-CV-CVL").append(scard(n3140[0], n3140[1], n3140[2], n3140[3], n3140[4], n3140[5]))
			$("#container-CV-CVL").append(scard(n3222[0], n3222[1], n3222[2], n3222[3], n3222[4], n3222[5]))
			$("#container-CV-CVL").append(scard(n3226[0], n3226[1], n3226[2], n3226[3], n3226[4], n3226[5]))
			$("#container-CV-CVL").append(scard(n3227[0], n3227[1], n3227[2], n3227[3], n3227[4], n3227[5]))
			$("#container-CV-CVL").append(scard(n10066[0], n10066[1], n10066[2], n10066[3], n10066[4], n10066[5]))
			$("#container-CV-CVL").append(scard(n30001[0], n30001[1], n30001[2], n30001[3], n30001[4], n30001[5]))
			$("#container-CV-CVL").append(scard(n30002[0], n30002[1], n30002[2], n30002[3], n30002[4], n30002[5]))
			$("#container-CV-CVL").append(scard(nCollab004[0], nCollab004[1], nCollab004[2], nCollab004[3], nCollab004[4], nCollab004[5]))
			$("#container-CV-CVL").append(scard(nCollab008[0], nCollab008[1], nCollab008[2], nCollab008[3], nCollab008[4], nCollab008[5]))
			$("#container-CV-CVL").append(scard(nCollab034[0], nCollab034[1], nCollab034[2], nCollab034[3], nCollab034[4], nCollab034[5]))
			$("#container-CV-CVL").append(scard(nCollab035[0], nCollab035[1], nCollab035[2], nCollab035[3], nCollab035[4], nCollab035[5]))
			$("#container-CV-CVL").append(scard(nCollab036[0], nCollab036[1], nCollab036[2], nCollab036[3], nCollab036[4], nCollab036[5]))
			$("#container-CV-CVL").append(scard(nCollab043[0], nCollab043[1], nCollab043[2], nCollab043[3], nCollab043[4], nCollab043[5]))
			$("#container-CV-CVL").append(scard(nCollab052[0], nCollab052[1], nCollab052[2], nCollab052[3], nCollab052[4], nCollab052[5]))
			$("#container-CV-CVL").append(scard(nCollab056[0], nCollab056[1], nCollab056[2], nCollab056[3], nCollab056[4], nCollab056[5]))
			$("#container-CV-CVL").append(scard(nCollab057[0], nCollab057[1], nCollab057[2], nCollab057[3], nCollab057[4], nCollab057[5]))
		}

	/* CA/CB */
		function loadCA () {
			$("#container-CA-CB").append(scard(n039[0], n039[1], n039[2], n039[3], n039[4], n039[5]))
			$("#container-CA-CB").append(scard(n040[0], n040[1], n040[2], n040[3], n040[4], n040[5]))
			$("#container-CA-CB").append(scard(n041[0], n041[1], n041[2], n041[3], n041[4], n041[5]))
			$("#container-CA-CB").append(scard(n042[0], n042[1], n042[2], n042[3], n042[4], n042[5]))
			$("#container-CA-CB").append(scard(n043[0], n043[1], n043[2], n043[3], n043[4], n043[5]))
			$("#container-CA-CB").append(scard(n044[0], n044[1], n044[2], n044[3], n044[4], n044[5]))
			$("#container-CA-CB").append(scard(n045[0], n045[1], n045[2], n045[3], n045[4], n045[5]))
			$("#container-CA-CB").append(scard(n046[0], n046[1], n046[2], n046[3], n046[4], n046[5]))
			$("#container-CA-CB").append(scard(n047[0], n047[1], n047[2], n047[3], n047[4], n047[5]))
			$("#container-CA-CB").append(scard(n048[0], n048[1], n048[2], n048[3], n048[4], n048[5]))
			$("#container-CA-CB").append(scard(n049[0], n049[1], n049[2], n049[3], n049[4], n049[5]))
			$("#container-CA-CB").append(scard(n050[0], n050[1], n050[2], n050[3], n050[4], n050[5]))
			$("#container-CA-CB").append(scard(n119[0], n119[1], n119[2], n119[3], n119[4], n119[5]))
			$("#container-CA-CB").append(scard(n120[0], n120[1], n120[2], n120[3], n120[4], n120[5]))
			$("#container-CA-CB").append(scard(n121[0], n121[1], n121[2], n121[3], n121[4], n121[5]))
			$("#container-CA-CB").append(scard(n122[0], n122[1], n122[2], n122[3], n122[4], n122[5]))
			$("#container-CA-CB").append(scard(n123[0], n123[1], n123[2], n123[3], n123[4], n123[5]))
			$("#container-CA-CB").append(scard(n124[0], n124[1], n124[2], n124[3], n124[4], n124[5]))
			$("#container-CA-CB").append(scard(n125[0], n125[1], n125[2], n125[3], n125[4], n125[5]))
			$("#container-CA-CB").append(scard(n126[0], n126[1], n126[2], n126[3], n126[4], n126[5]))
			$("#container-CA-CB").append(scard(n190[0], n190[1], n190[2], n190[3], n190[4], n190[5]))
			$("#container-CA-CB").append(scard(n191[0], n191[1], n191[2], n191[3], n191[4], n191[5]))
			$("#container-CA-CB").append(scard(n192[0], n192[1], n192[2], n192[3], n192[4], n192[5]))
			$("#container-CA-CB").append(scard(n193[0], n193[1], n193[2], n193[3], n193[4], n193[5]))
			$("#container-CA-CB").append(scard(n196[0], n196[1], n196[2], n196[3], n196[4], n196[5]))
			$("#container-CA-CB").append(scard(n197[0], n197[1], n197[2], n197[3], n197[4], n197[5]))
			$("#container-CA-CB").append(scard(n198[0], n198[1], n198[2], n198[3], n198[4], n198[5]))
			$("#container-CA-CB").append(scard(n200[0], n200[1], n200[2], n200[3], n200[4], n200[5]))
			$("#container-CA-CB").append(scard(n201[0], n201[1], n201[2], n201[3], n201[4], n201[5]))
			$("#container-CA-CB").append(scard(n202[0], n202[1], n202[2], n202[3], n202[4], n202[5]))
			$("#container-CA-CB").append(scard(n203[0], n203[1], n203[2], n203[3], n203[4], n203[5]))
			$("#container-CA-CB").append(scard(n242[0], n242[1], n242[2], n242[3], n242[4], n242[5]))
			$("#container-CA-CB").append(scard(n244[0], n244[1], n244[2], n244[3], n244[4], n244[5]))
			$("#container-CA-CB").append(scard(n245[0], n245[1], n245[2], n245[3], n245[4], n245[5]))
			$("#container-CA-CB").append(scard(n246[0], n246[1], n246[2], n246[3], n246[4], n246[5]))
			$("#container-CA-CB").append(scard(n337[0], n337[1], n337[2], n337[3], n337[4], n337[5]))
			$("#container-CA-CB").append(scard(n364[0], n364[1], n364[2], n364[3], n364[4], n364[5]))
			$("#container-CA-CB").append(scard(n382[0], n382[1], n382[2], n382[3], n382[4], n382[5]))
			$("#container-CA-CB").append(scard(n413[0], n413[1], n413[2], n413[3], n413[4], n413[5]))
			$("#container-CA-CB").append(scard(n414[0], n414[1], n414[2], n414[3], n414[4], n414[5]))
			$("#container-CA-CB").append(scard(n422[0], n422[1], n422[2], n422[3], n422[4], n422[5]))
			$("#container-CA-CB").append(scard(n443[0], n443[1], n443[2], n443[3], n443[4], n443[5]))
			$("#container-CA-CB").append(scard(n455[0], n455[1], n455[2], n455[3], n455[4], n455[5]))
			$("#container-CA-CB").append(scard(n469[0], n469[1], n469[2], n469[3], n469[4], n469[5]))
			$("#container-CA-CB").append(scard(n478[0], n478[1], n478[2], n478[3], n478[4], n478[5]))
			$("#container-CA-CB").append(scard(n479[0], n479[1], n479[2], n479[3], n479[4], n479[5]))
			$("#container-CA-CB").append(scard(n483[0], n483[1], n483[2], n483[3], n483[4], n483[5]))
			$("#container-CA-CB").append(scard(n489[0], n489[1], n489[2], n489[3], n489[4], n489[5]))
			$("#container-CA-CB").append(scard(n496[0], n496[1], n496[2], n496[3], n496[4], n496[5]))
			$("#container-CA-CB").append(scard(n512[0], n512[1], n512[2], n512[3], n512[4], n512[5]))
			$("#container-CA-CB").append(scard(n3044[0], n3044[1], n3044[2], n3044[3], n3044[4], n3044[5]))
			$("#container-CA-CB").append(scard(n3119[0], n3119[1], n3119[2], n3119[3], n3119[4], n3119[5]))
			$("#container-CA-CB").append(scard(n3122[0], n3122[1], n3122[2], n3122[3], n3122[4], n3122[5]))
			$("#container-CA-CB").append(scard(n3125[0], n3125[1], n3125[2], n3125[3], n3125[4], n3125[5]))
			$("#container-CA-CB").append(scard(n3126[0], n3126[1], n3126[2], n3126[3], n3126[4], n3126[5]))
			$("#container-CA-CB").append(scard(n3188[0], n3188[1], n3188[2], n3188[3], n3188[4], n3188[5]))
			$("#container-CA-CB").append(scard(n3190[0], n3190[1], n3190[2], n3190[3], n3190[4], n3190[5]))
			$("#container-CA-CB").append(scard(n3191[0], n3191[1], n3191[2], n3191[3], n3191[4], n3191[5]))
			$("#container-CA-CB").append(scard(n10063[0], n10063[1], n10063[2], n10063[3], n10063[4], n10063[5]))
			$("#container-CA-CB").append(scard(nCollab002[0], nCollab002[1], nCollab002[2], nCollab002[3], nCollab002[4], nCollab002[5]))
			$("#container-CA-CB").append(scard(nCollab006[0], nCollab006[1], nCollab006[2], nCollab006[3], nCollab006[4], nCollab006[5]))
			$("#container-CA-CB").append(scard(nCollab031[0], nCollab031[1], nCollab031[2], nCollab031[3], nCollab031[4], nCollab031[5]))
			$("#container-CA-CB").append(scard(nCollab042[0], nCollab042[1], nCollab042[2], nCollab042[3], nCollab042[4], nCollab042[5]))
			$("#container-CA-CB").append(scard(nCollab055[0], nCollab055[1], nCollab055[2], nCollab055[3], nCollab055[4], nCollab055[5]))
			$("#container-CA-CB").append(scard(nPlan003[0], nPlan003[1], nPlan003[2], nPlan003[3], nPlan003[4], nPlan003[5]))
			$("#container-CA-CB").append(scard(nPlan005[0], nPlan005[1], nPlan005[2], nPlan005[3], nPlan005[4], nPlan005[5]))
			$("#container-CA-CB").append(scard(nPlan006[0], nPlan006[1], nPlan006[2], nPlan006[3], nPlan006[4], nPlan006[5]))
			$("#container-CA-CB").append(scard(nPlan010[0], nPlan010[1], nPlan010[2], nPlan010[3], nPlan010[4], nPlan010[5]))
			$("#container-CA-CB").append(scard(nPlan013[0], nPlan013[1], nPlan013[2], nPlan013[3], nPlan013[4], nPlan013[5]))
			$("#container-CA-CB").append(scard(nPlan014[0], nPlan014[1], nPlan014[2], nPlan014[3], nPlan014[4], nPlan014[5]))
		}

	/* CL */
		function loadCL () {
			$("#container-CL").append(scard(n029[0], n029[1], n029[2], n029[3], n029[4], n029[5]))
			$("#container-CL").append(scard(n030[0], n030[1], n030[2], n030[3], n030[4], n030[5]))
			$("#container-CL").append(scard(n031[0], n031[1], n031[2], n031[3], n031[4], n031[5]))
			$("#container-CL").append(scard(n032[0], n032[1], n032[2], n032[3], n032[4], n032[5]))
			$("#container-CL").append(scard(n033[0], n033[1], n033[2], n033[3], n033[4], n033[5]))
			$("#container-CL").append(scard(n034[0], n034[1], n034[2], n034[3], n034[4], n034[5]))
			$("#container-CL").append(scard(n035[0], n035[1], n035[2], n035[3], n035[4], n035[5]))
			$("#container-CL").append(scard(n036[0], n036[1], n036[2], n036[3], n036[4], n036[5]))
			$("#container-CL").append(scard(n037[0], n037[1], n037[2], n037[3], n037[4], n037[5]))
			$("#container-CL").append(scard(n038[0], n038[1], n038[2], n038[3], n038[4], n038[5]))
			$("#container-CL").append(scard(n104[0], n104[1], n104[2], n104[3], n104[4], n104[5]))
			$("#container-CL").append(scard(n105[0], n105[1], n105[2], n105[3], n105[4], n105[5]))
			$("#container-CL").append(scard(n106[0], n106[1], n106[2], n106[3], n106[4], n106[5]))
			$("#container-CL").append(scard(n107[0], n107[1], n107[2], n107[3], n107[4], n107[5]))
			$("#container-CL").append(scard(n110[0], n110[1], n110[2], n110[3], n110[4], n110[5]))
			$("#container-CL").append(scard(n111[0], n111[1], n111[2], n111[3], n111[4], n111[5]))
			$("#container-CL").append(scard(n113[0], n113[1], n113[2], n113[3], n113[4], n113[5]))
			$("#container-CL").append(scard(n114[0], n114[1], n114[2], n114[3], n114[4], n114[5]))
			$("#container-CL").append(scard(n115[0], n115[1], n115[2], n115[3], n115[4], n115[5]))
			$("#container-CL").append(scard(n116[0], n116[1], n116[2], n116[3], n116[4], n116[5]))
			$("#container-CL").append(scard(n117[0], n117[1], n117[2], n117[3], n117[4], n117[5]))
			$("#container-CL").append(scard(n118[0], n118[1], n118[2], n118[3], n118[4], n118[5]))
			$("#container-CL").append(scard(n179[0], n179[1], n179[2], n179[3], n179[4], n179[5]))
			$("#container-CL").append(scard(n182[0], n182[1], n182[2], n182[3], n182[4], n182[5]))
			$("#container-CL").append(scard(n183[0], n183[1], n183[2], n183[3], n183[4], n183[5]))
			$("#container-CL").append(scard(n186[0], n186[1], n186[2], n186[3], n186[4], n186[5]))
			$("#container-CL").append(scard(n187[0], n187[1], n187[2], n187[3], n187[4], n187[5]))
			$("#container-CL").append(scard(n188[0], n188[1], n188[2], n188[3], n188[4], n188[5]))
			$("#container-CL").append(scard(n189[0], n189[1], n189[2], n189[3], n189[4], n189[5]))
			$("#container-CL").append(scard(n238[0], n238[1], n238[2], n238[3], n238[4], n238[5]))
			$("#container-CL").append(scard(n239[0], n239[1], n239[2], n239[3], n239[4], n239[5]))
			$("#container-CL").append(scard(n240[0], n240[1], n240[2], n240[3], n240[4], n240[5]))
			$("#container-CL").append(scard(n241[0], n241[1], n241[2], n241[3], n241[4], n241[5]))
			$("#container-CL").append(scard(n257[0], n257[1], n257[2], n257[3], n257[4], n257[5]))
			$("#container-CL").append(scard(n258[0], n258[1], n258[2], n258[3], n258[4], n258[5]))
			$("#container-CL").append(scard(n259[0], n259[1], n259[2], n259[3], n259[4], n259[5]))
			$("#container-CL").append(scard(n262[0], n262[1], n262[2], n262[3], n262[4], n262[5]))
			$("#container-CL").append(scard(n303[0], n303[1], n303[2], n303[3], n303[4], n303[5]))
			$("#container-CL").append(scard(n304[0], n304[1], n304[2], n304[3], n304[4], n304[5]))
			$("#container-CL").append(scard(n305[0], n305[1], n305[2], n305[3], n305[4], n305[5]))
			$("#container-CL").append(scard(n308[0], n308[1], n308[2], n308[3], n308[4], n308[5]))
			$("#container-CL").append(scard(n309[0], n309[1], n309[2], n309[3], n309[4], n309[5]))
			$("#container-CL").append(scard(n310[0], n310[1], n310[2], n310[3], n310[4], n310[5]))
			$("#container-CL").append(scard(n321[0], n321[1], n321[2], n321[3], n321[4], n321[5]))
			$("#container-CL").append(scard(n322[0], n322[1], n322[2], n322[3], n322[4], n322[5]))
			$("#container-CL").append(scard(n327[0], n327[1], n327[2], n327[3], n327[4], n327[5]))
			$("#container-CL").append(scard(n328[0], n328[1], n328[2], n328[3], n328[4], n328[5]))
			$("#container-CL").append(scard(n329[0], n329[1], n329[2], n329[3], n329[4], n329[5]))
			$("#container-CL").append(scard(n330[0], n330[1], n330[2], n330[3], n330[4], n330[5]))
			$("#container-CL").append(scard(n335[0], n335[1], n335[2], n335[3], n335[4], n335[5]))
			$("#container-CL").append(scard(n349[0], n349[1], n349[2], n349[3], n349[4], n349[5]))
			$("#container-CL").append(scard(n360[0], n360[1], n360[2], n360[3], n360[4], n360[5]))
			$("#container-CL").append(scard(n361[0], n361[1], n361[2], n361[3], n361[4], n361[5]))
			$("#container-CL").append(scard(n366[0], n366[1], n366[2], n366[3], n366[4], n366[5]))
			$("#container-CL").append(scard(n371[0], n371[1], n371[2], n371[3], n371[4], n371[5]))
			$("#container-CL").append(scard(n372[0], n372[1], n372[2], n372[3], n372[4], n372[5]))
			$("#container-CL").append(scard(n373[0], n373[1], n373[2], n373[3], n373[4], n373[5]))
			$("#container-CL").append(scard(n390[0], n390[1], n390[2], n390[3], n390[4], n390[5]))
			$("#container-CL").append(scard(n391[0], n391[1], n391[2], n391[3], n391[4], n391[5]))
			$("#container-CL").append(scard(n392[0], n392[1], n392[2], n392[3], n392[4], n392[5]))
			$("#container-CL").append(scard(n393[0], n393[1], n393[2], n393[3], n393[4], n393[5]))
			$("#container-CL").append(scard(n404[0], n404[1], n404[2], n404[3], n404[4], n404[5]))
			$("#container-CL").append(scard(n405[0], n405[1], n405[2], n405[3], n405[4], n405[5]))
			$("#container-CL").append(scard(n408[0], n408[1], n408[2], n408[3], n408[4], n408[5]))
			$("#container-CL").append(scard(n420[0], n420[1], n420[2], n420[3], n420[4], n420[5]))
			$("#container-CL").append(scard(n421[0], n421[1], n421[2], n421[3], n421[4], n421[5]))
			$("#container-CL").append(scard(n423[0], n423[1], n423[2], n423[3], n423[4], n423[5]))
			$("#container-CL").append(scard(n428[0], n428[1], n428[2], n428[3], n428[4], n428[5]))
			$("#container-CL").append(scard(n434[0], n434[1], n434[2], n434[3], n434[4], n434[5]))
			$("#container-CL").append(scard(n435[0], n435[1], n435[2], n435[3], n435[4], n435[5]))
			$("#container-CL").append(scard(n436[0], n436[1], n436[2], n436[3], n436[4], n436[5]))
			$("#container-CL").append(scard(n445[0], n445[1], n445[2], n445[3], n445[4], n445[5]))
			$("#container-CL").append(scard(n448[0], n448[1], n448[2], n448[3], n448[4], n448[5]))
			$("#container-CL").append(scard(n454[0], n454[1], n454[2], n454[3], n454[4], n454[5]))
			$("#container-CL").append(scard(n456[0], n456[1], n456[2], n456[3], n456[4], n456[5]))
			$("#container-CL").append(scard(n463[0], n463[1], n463[2], n463[3], n463[4], n463[5]))
			$("#container-CL").append(scard(n476[0], n476[1], n476[2], n476[3], n476[4], n476[5]))
			$("#container-CL").append(scard(n486[0], n486[1], n486[2], n486[3], n486[4], n486[5]))
			$("#container-CL").append(scard(n493[0], n493[1], n493[2], n493[3], n493[4], n493[5]))
			$("#container-CL").append(scard(n494[0], n494[1], n494[2], n494[3], n494[4], n494[5]))
			$("#container-CL").append(scard(n495[0], n495[1], n495[2], n495[3], n495[4], n495[5]))
			$("#container-CL").append(scard(n498[0], n498[1], n498[2], n498[3], n498[4], n498[5]))
			$("#container-CL").append(scard(n501[0], n501[1], n501[2], n501[3], n501[4], n501[5]))
			$("#container-CL").append(scard(n514[0], n514[1], n514[2], n514[3], n514[4], n514[5]))
			$("#container-CL").append(scard(n3033[0], n3033[1], n3033[2], n3033[3], n3033[4], n3033[5]))
			$("#container-CL").append(scard(n3036[0], n3036[1], n3036[2], n3036[3], n3036[4], n3036[5]))
			$("#container-CL").append(scard(n3104[0], n3104[1], n3104[2], n3104[3], n3104[4], n3104[5]))
			$("#container-CL").append(scard(n3105[0], n3105[1], n3105[2], n3105[3], n3105[4], n3105[5]))
			$("#container-CL").append(scard(n3106[0], n3106[1], n3106[2], n3106[3], n3106[4], n3106[5]))
			$("#container-CL").append(scard(n3179[0], n3179[1], n3179[2], n3179[3], n3179[4], n3179[5]))
			$("#container-CL").append(scard(n3183[0], n3183[1], n3183[2], n3183[3], n3183[4], n3183[5]))
			$("#container-CL").append(scard(n3186[0], n3186[1], n3186[2], n3186[3], n3186[4], n3186[5]))
			$("#container-CL").append(scard(n3187[0], n3187[1], n3187[2], n3187[3], n3187[4], n3187[5]))
			$("#container-CL").append(scard(n3239[0], n3239[1], n3239[2], n3239[3], n3239[4], n3239[5]))
			$("#container-CL").append(scard(n3240[0], n3240[1], n3240[2], n3240[3], n3240[4], n3240[5]))
			$("#container-CL").append(scard(n3241[0], n3241[1], n3241[2], n3241[3], n3241[4], n3241[5]))
			$("#container-CL").append(scard(n3258[0], n3258[1], n3258[2], n3258[3], n3258[4], n3258[5]))
			$("#container-CL").append(scard(n3259[0], n3259[1], n3259[2], n3259[3], n3259[4], n3259[5]))
			$("#container-CL").append(scard(n3308[0], n3308[1], n3308[2], n3308[3], n3308[4], n3308[5]))
			$("#container-CL").append(scard(n3309[0], n3309[1], n3309[2], n3309[3], n3309[4], n3309[5]))
			$("#container-CL").append(scard(n3349[0], n3349[1], n3349[2], n3349[3], n3349[4], n3349[5]))
			$("#container-CL").append(scard(n3361[0], n3361[1], n3361[2], n3361[3], n3361[4], n3361[5]))
			$("#container-CL").append(scard(n3372[0], n3372[1], n3372[2], n3372[3], n3372[4], n3372[5]))
			$("#container-CL").append(scard(n3373[0], n3373[1], n3373[2], n3373[3], n3373[4], n3373[5]))
			$("#container-CL").append(scard(n3434[0], n3434[1], n3434[2], n3434[3], n3434[4], n3434[5]))
			$("#container-CL").append(scard(n10064[0], n10064[1], n10064[2], n10064[3], n10064[4], n10064[5]))
			$("#container-CL").append(scard(n10067[0], n10067[1], n10067[2], n10067[3], n10067[4], n10067[5]))
			$("#container-CL").append(scard(nCollab001[0], nCollab001[1], nCollab001[2], nCollab001[3], nCollab001[4], nCollab001[5]))
			$("#container-CL").append(scard(nCollab005[0], nCollab005[1], nCollab005[2], nCollab005[3], nCollab005[4], nCollab005[5]))
			$("#container-CL").append(scard(nCollab033[0], nCollab033[1], nCollab033[2], nCollab033[3], nCollab033[4], nCollab033[5]))
			$("#container-CL").append(scard(nPlan001[0], nPlan001[1], nPlan001[2], nPlan001[3], nPlan001[4], nPlan001[5]))
			$("#container-CL").append(scard(nPlan007[0], nPlan007[1], nPlan007[2], nPlan007[3], nPlan007[4], nPlan007[5]))
			$("#container-CL").append(scard(nPlan015[0], nPlan015[1], nPlan015[2], nPlan015[3], nPlan015[4], nPlan015[5]))
		}

	/* DD */
		function loadDD () {
			$("#container-DD").append(scard(n001[0], n001[1], n001[2], n001[3], n001[4], n001[5]))
			$("#container-DD").append(scard(n002[0], n002[1], n002[2], n002[3], n002[4], n002[5]))
			$("#container-DD").append(scard(n003[0], n003[1], n003[2], n003[3], n003[4], n003[5]))
			$("#container-DD").append(scard(n004[0], n004[1], n004[2], n004[3], n004[4], n004[5]))
			$("#container-DD").append(scard(n005[0], n005[1], n005[2], n005[3], n005[4], n005[5]))
			$("#container-DD").append(scard(n006[0], n006[1], n006[2], n006[3], n006[4], n006[5]))
			$("#container-DD").append(scard(n007[0], n007[1], n007[2], n007[3], n007[4], n007[5]))
			$("#container-DD").append(scard(n008[0], n008[1], n008[2], n008[3], n008[4], n008[5]))
			$("#container-DD").append(scard(n009[0], n009[1], n009[2], n009[3], n009[4], n009[5]))
			$("#container-DD").append(scard(n010[0], n010[1], n010[2], n010[3], n010[4], n010[5]))
			$("#container-DD").append(scard(n011[0], n011[1], n011[2], n011[3], n011[4], n011[5]))
			$("#container-DD").append(scard(n013[0], n013[1], n013[2], n013[3], n013[4], n013[5]))
			$("#container-DD").append(scard(n014[0], n014[1], n014[2], n014[3], n014[4], n014[5]))
			$("#container-DD").append(scard(n015[0], n015[1], n015[2], n015[3], n015[4], n015[5]))
			$("#container-DD").append(scard(n016[0], n016[1], n016[2], n016[3], n016[4], n016[5]))
			$("#container-DD").append(scard(n017[0], n017[1], n017[2], n017[3], n017[4], n017[5]))
			$("#container-DD").append(scard(n018[0], n018[1], n018[2], n018[3], n018[4], n018[5]))
			$("#container-DD").append(scard(n019[0], n019[1], n019[2], n019[3], n019[4], n019[5]))
			$("#container-DD").append(scard(n026[0], n026[1], n026[2], n026[3], n026[4], n026[5]))
			$("#container-DD").append(scard(n027[0], n027[1], n027[2], n027[3], n027[4], n027[5]))
			$("#container-DD").append(scard(n028[0], n028[1], n028[2], n028[3], n028[4], n028[5]))
			$("#container-DD").append(scard(n081[0], n081[1], n081[2], n081[3], n081[4], n081[5]))
			$("#container-DD").append(scard(n082[0], n082[1], n082[2], n082[3], n082[4], n082[5]))
			$("#container-DD").append(scard(n083[0], n083[1], n083[2], n083[3], n083[4], n083[5]))
			$("#container-DD").append(scard(n086[0], n086[1], n086[2], n086[3], n086[4], n086[5]))
			$("#container-DD").append(scard(n087[0], n087[1], n087[2], n087[3], n087[4], n087[5]))
			$("#container-DD").append(scard(n088[0], n088[1], n088[2], n088[3], n088[4], n088[5]))
			$("#container-DD").append(scard(n089[0], n089[1], n089[2], n089[3], n089[4], n089[5]))
			$("#container-DD").append(scard(n090[0], n090[1], n090[2], n090[3], n090[4], n090[5]))
			$("#container-DD").append(scard(n091[0], n091[1], n091[2], n091[3], n091[4], n091[5]))
			$("#container-DD").append(scard(n092[0], n092[1], n092[2], n092[3], n092[4], n092[5]))
			$("#container-DD").append(scard(n093[0], n093[1], n093[2], n093[3], n093[4], n093[5]))
			$("#container-DD").append(scard(n094[0], n094[1], n094[2], n094[3], n094[4], n094[5]))
			$("#container-DD").append(scard(n096[0], n096[1], n096[2], n096[3], n096[4], n096[5]))
			$("#container-DD").append(scard(n100[0], n100[1], n100[2], n100[3], n100[4], n100[5]))
			$("#container-DD").append(scard(n101[0], n101[1], n101[2], n101[3], n101[4], n101[5]))
			$("#container-DD").append(scard(n102[0], n102[1], n102[2], n102[3], n102[4], n102[5]))
			$("#container-DD").append(scard(n103[0], n103[1], n103[2], n103[3], n103[4], n103[5]))
			$("#container-DD").append(scard(n151[0], n151[1], n151[2], n151[3], n151[4], n151[5]))
			$("#container-DD").append(scard(n155[0], n155[1], n155[2], n155[3], n155[4], n155[5]))
			$("#container-DD").append(scard(n159[0], n159[1], n159[2], n159[3], n159[4], n159[5]))
			$("#container-DD").append(scard(n160[0], n160[1], n160[2], n160[3], n160[4], n160[5]))
			$("#container-DD").append(scard(n161[0], n161[1], n161[2], n161[3], n161[4], n161[5]))
			$("#container-DD").append(scard(n162[0], n162[1], n162[2], n162[3], n162[4], n162[5]))
			$("#container-DD").append(scard(n163[0], n163[1], n163[2], n163[3], n163[4], n163[5]))
			$("#container-DD").append(scard(n164[0], n164[1], n164[2], n164[3], n164[4], n164[5]))
			$("#container-DD").append(scard(n165[0], n165[1], n165[2], n165[3], n165[4], n165[5]))
			$("#container-DD").append(scard(n166[0], n166[1], n166[2], n166[3], n166[4], n166[5]))
			$("#container-DD").append(scard(n167[0], n167[1], n167[2], n167[3], n167[4], n167[5]))
			$("#container-DD").append(scard(n168[0], n168[1], n168[2], n168[3], n168[4], n168[5]))
			$("#container-DD").append(scard(n170[0], n170[1], n170[2], n170[3], n170[4], n170[5]))
			$("#container-DD").append(scard(n171[0], n171[1], n171[2], n171[3], n171[4], n171[5]))
			$("#container-DD").append(scard(n173[0], n173[1], n173[2], n173[3], n173[4], n173[5]))
			$("#container-DD").append(scard(n174[0], n174[1], n174[2], n174[3], n174[4], n174[5]))
			$("#container-DD").append(scard(n175[0], n175[1], n175[2], n175[3], n175[4], n175[5]))
			$("#container-DD").append(scard(n176[0], n176[1], n176[2], n176[3], n176[4], n176[5]))
			$("#container-DD").append(scard(n177[0], n177[1], n177[2], n177[3], n177[4], n177[5]))
			$("#container-DD").append(scard(n178[0], n178[1], n178[2], n178[3], n178[4], n178[5]))
			$("#container-DD").append(scard(n233[0], n233[1], n233[2], n233[3], n233[4], n233[5]))
			$("#container-DD").append(scard(n236[0], n236[1], n236[2], n236[3], n236[4], n236[5]))
			$("#container-DD").append(scard(n237[0], n237[1], n237[2], n237[3], n237[4], n237[5]))
			$("#container-DD").append(scard(n253[0], n253[1], n253[2], n253[3], n253[4], n253[5]))
			$("#container-DD").append(scard(n254[0], n254[1], n254[2], n254[3], n254[4], n254[5]))
			$("#container-DD").append(scard(n255[0], n255[1], n255[2], n255[3], n255[4], n255[5]))
			$("#container-DD").append(scard(n256[0], n256[1], n256[2], n256[3], n256[4], n256[5]))
			$("#container-DD").append(scard(n263[0], n263[1], n263[2], n263[3], n263[4], n263[5]))
			$("#container-DD").append(scard(n264[0], n264[1], n264[2], n264[3], n264[4], n264[5]))
			$("#container-DD").append(scard(n265[0], n265[1], n265[2], n265[3], n265[4], n265[5]))
			$("#container-DD").append(scard(n266[0], n266[1], n266[2], n266[3], n266[4], n266[5]))
			$("#container-DD").append(scard(n267[0], n267[1], n267[2], n267[3], n267[4], n267[5]))
			$("#container-DD").append(scard(n269[0], n269[1], n269[2], n269[3], n269[4], n269[5]))
			$("#container-DD").append(scard(n270[0], n270[1], n270[2], n270[3], n270[4], n270[5]))
			$("#container-DD").append(scard(n271[0], n271[1], n271[2], n271[3], n271[4], n271[5]))
			$("#container-DD").append(scard(n272[0], n272[1], n272[2], n272[3], n272[4], n272[5]))
			$("#container-DD").append(scard(n274[0], n274[1], n274[2], n274[3], n274[4], n274[5]))
			$("#container-DD").append(scard(n276[0], n276[1], n276[2], n276[3], n276[4], n276[5]))
			$("#container-DD").append(scard(n277[0], n277[1], n277[2], n277[3], n277[4], n277[5]))
			$("#container-DD").append(scard(n278[0], n278[1], n278[2], n278[3], n278[4], n278[5]))
			$("#container-DD").append(scard(n280[0], n280[1], n280[2], n280[3], n280[4], n280[5]))
			$("#container-DD").append(scard(n288[0], n288[1], n288[2], n288[3], n288[4], n288[5]))
			$("#container-DD").append(scard(n293[0], n293[1], n293[2], n293[3], n293[4], n293[5]))
			$("#container-DD").append(scard(n295[0], n295[1], n295[2], n295[3], n295[4], n295[5]))
			$("#container-DD").append(scard(n296[0], n296[1], n296[2], n296[3], n296[4], n296[5]))
			$("#container-DD").append(scard(n297[0], n297[1], n297[2], n297[3], n297[4], n297[5]))
			$("#container-DD").append(scard(n299[0], n299[1], n299[2], n299[3], n299[4], n299[5]))
			$("#container-DD").append(scard(n300[0], n300[1], n300[2], n300[3], n300[4], n300[5]))
			$("#container-DD").append(scard(n301[0], n301[1], n301[2], n301[3], n301[4], n301[5]))
			$("#container-DD").append(scard(n306[0], n306[1], n306[2], n306[3], n306[4], n306[5]))
			$("#container-DD").append(scard(n307[0], n307[1], n307[2], n307[3], n307[4], n307[5]))
			$("#container-DD").append(scard(n316[0], n316[1], n316[2], n316[3], n316[4], n316[5]))
			$("#container-DD").append(scard(n317[0], n317[1], n317[2], n317[3], n317[4], n317[5]))
			$("#container-DD").append(scard(n318[0], n318[1], n318[2], n318[3], n318[4], n318[5]))
			$("#container-DD").append(scard(n319[0], n319[1], n319[2], n319[3], n319[4], n319[5]))
			$("#container-DD").append(scard(n325[0], n325[1], n325[2], n325[3], n325[4], n325[5]))
			$("#container-DD").append(scard(n326[0], n326[1], n326[2], n326[3], n326[4], n326[5]))
			$("#container-DD").append(scard(n331[0], n331[1], n331[2], n331[3], n331[4], n331[5]))
			$("#container-DD").append(scard(n332[0], n332[1], n332[2], n332[3], n332[4], n332[5]))
			$("#container-DD").append(scard(n333[0], n333[1], n333[2], n333[3], n333[4], n333[5]))
			$("#container-DD").append(scard(n334[0], n334[1], n334[2], n334[3], n334[4], n334[5]))
			$("#container-DD").append(scard(n345[0], n345[1], n345[2], n345[3], n345[4], n345[5]))
			$("#container-DD").append(scard(n346[0], n346[1], n346[2], n346[3], n346[4], n346[5]))
			$("#container-DD").append(scard(n347[0], n347[1], n347[2], n347[3], n347[4], n347[5]))
			$("#container-DD").append(scard(n348[0], n348[1], n348[2], n348[3], n348[4], n348[5]))
			$("#container-DD").append(scard(n351[0], n351[1], n351[2], n351[3], n351[4], n351[5]))
			$("#container-DD").append(scard(n355[0], n355[1], n355[2], n355[3], n355[4], n355[5]))
			$("#container-DD").append(scard(n359[0], n359[1], n359[2], n359[3], n359[4], n359[5]))
			$("#container-DD").append(scard(n362[0], n362[1], n362[2], n362[3], n362[4], n362[5]))
			$("#container-DD").append(scard(n363[0], n363[1], n363[2], n363[3], n363[4], n363[5]))
			$("#container-DD").append(scard(n365[0], n365[1], n365[2], n365[3], n365[4], n365[5]))
			$("#container-DD").append(scard(n369[0], n369[1], n369[2], n369[3], n369[4], n369[5]))
			$("#container-DD").append(scard(n370[0], n370[1], n370[2], n370[3], n370[4], n370[5]))
			$("#container-DD").append(scard(n374[0], n374[1], n374[2], n374[3], n374[4], n374[5]))
			$("#container-DD").append(scard(n375[0], n375[1], n375[2], n375[3], n375[4], n375[5]))
			$("#container-DD").append(scard(n379[0], n379[1], n379[2], n379[3], n379[4], n379[5]))
			$("#container-DD").append(scard(n388[0], n388[1], n388[2], n388[3], n388[4], n388[5]))
			$("#container-DD").append(scard(n389[0], n389[1], n389[2], n389[3], n389[4], n389[5]))
			$("#container-DD").append(scard(n394[0], n394[1], n394[2], n394[3], n394[4], n394[5]))
			$("#container-DD").append(scard(n395[0], n395[1], n395[2], n395[3], n395[4], n395[5]))
			$("#container-DD").append(scard(n406[0], n406[1], n406[2], n406[3], n406[4], n406[5]))
			$("#container-DD").append(scard(n407[0], n407[1], n407[2], n407[3], n407[4], n407[5]))
			$("#container-DD").append(scard(n409[0], n409[1], n409[2], n409[3], n409[4], n409[5]))
			$("#container-DD").append(scard(n415[0], n415[1], n415[2], n415[3], n415[4], n415[5]))
			$("#container-DD").append(scard(n417[0], n417[1], n417[2], n417[3], n417[4], n417[5]))
			$("#container-DD").append(scard(n424[0], n424[1], n424[2], n424[3], n424[4], n424[5]))
			$("#container-DD").append(scard(n427[0], n427[1], n427[2], n427[3], n427[4], n427[5]))
			$("#container-DD").append(scard(n429[0], n429[1], n429[2], n429[3], n429[4], n429[5]))
			$("#container-DD").append(scard(n431[0], n431[1], n431[2], n431[3], n431[4], n431[5]))
			$("#container-DD").append(scard(n432[0], n432[1], n432[2], n432[3], n432[4], n432[5]))
			$("#container-DD").append(scard(n433[0], n433[1], n433[2], n433[3], n433[4], n433[5]))
			$("#container-DD").append(scard(n444[0], n444[1], n444[2], n444[3], n444[4], n444[5]))
			$("#container-DD").append(scard(n449[0], n449[1], n449[2], n449[3], n449[4], n449[5]))
			$("#container-DD").append(scard(n450[0], n450[1], n450[2], n450[3], n450[4], n450[5]))
			$("#container-DD").append(scard(n452[0], n452[1], n452[2], n452[3], n452[4], n452[5]))
			$("#container-DD").append(scard(n457[0], n457[1], n457[2], n457[3], n457[4], n457[5]))
			$("#container-DD").append(scard(n460[0], n460[1], n460[2], n460[3], n460[4], n460[5]))
			$("#container-DD").append(scard(n465[0], n465[1], n465[2], n465[3], n465[4], n465[5]))
			$("#container-DD").append(scard(n466[0], n466[1], n466[2], n466[3], n466[4], n466[5]))
			$("#container-DD").append(scard(n468[0], n468[1], n468[2], n468[3], n468[4], n468[5]))
			$("#container-DD").append(scard(n475[0], n475[1], n475[2], n475[3], n475[4], n475[5]))
			$("#container-DD").append(scard(n481[0], n481[1], n481[2], n481[3], n481[4], n481[5]))
			$("#container-DD").append(scard(n487[0], n487[1], n487[2], n487[3], n487[4], n487[5]))
			$("#container-DD").append(scard(n488[0], n488[1], n488[2], n488[3], n488[4], n488[5]))
			$("#container-DD").append(scard(n490[0], n490[1], n490[2], n490[3], n490[4], n490[5]))
			$("#container-DD").append(scard(n491[0], n491[1], n491[2], n491[3], n491[4], n491[5]))
			$("#container-DD").append(scard(n497[0], n497[1], n497[2], n497[3], n497[4], n497[5]))
			$("#container-DD").append(scard(n499[0], n499[1], n499[2], n499[3], n499[4], n499[5]))
			$("#container-DD").append(scard(n504[0], n504[1], n504[2], n504[3], n504[4], n504[5]))
			$("#container-DD").append(scard(n505[0], n505[1], n505[2], n505[3], n505[4], n505[5]))
			$("#container-DD").append(scard(n506[0], n506[1], n506[2], n506[3], n506[4], n506[5]))
			$("#container-DD").append(scard(n507[0], n507[1], n507[2], n507[3], n507[4], n507[5]))
			$("#container-DD").append(scard(n508[0], n508[1], n508[2], n508[3], n508[4], n508[5]))
			$("#container-DD").append(scard(n509[0], n509[1], n509[2], n509[3], n509[4], n509[5]))
			$("#container-DD").append(scard(n515[0], n515[1], n515[2], n515[3], n515[4], n515[5]))
			$("#container-DD").append(scard(n3005[0], n3005[1], n3005[2], n3005[3], n3005[4], n3005[5]))
			$("#container-DD").append(scard(n3006[0], n3006[1], n3006[2], n3006[3], n3006[4], n3006[5]))
			$("#container-DD").append(scard(n3019[0], n3019[1], n3019[2], n3019[3], n3019[4], n3019[5]))
			$("#container-DD").append(scard(n3026[0], n3026[1], n3026[2], n3026[3], n3026[4], n3026[5]))
			$("#container-DD").append(scard(n3027[0], n3027[1], n3027[2], n3027[3], n3027[4], n3027[5]))
			$("#container-DD").append(scard(n3081[0], n3081[1], n3081[2], n3081[3], n3081[4], n3081[5]))
			$("#container-DD").append(scard(n3082[0], n3082[1], n3082[2], n3082[3], n3082[4], n3082[5]))
			$("#container-DD").append(scard(n3083[0], n3083[1], n3083[2], n3083[3], n3083[4], n3083[5]))
			$("#container-DD").append(scard(n3088[0], n3088[1], n3088[2], n3088[3], n3088[4], n3088[5]))
			$("#container-DD").append(scard(n3089[0], n3089[1], n3089[2], n3089[3], n3089[4], n3089[5]))
			$("#container-DD").append(scard(n3090[0], n3090[1], n3090[2], n3090[3], n3090[4], n3090[5]))
			$("#container-DD").append(scard(n3091[0], n3091[1], n3091[2], n3091[3], n3091[4], n3091[5]))
			$("#container-DD").append(scard(n3092[0], n3092[1], n3092[2], n3092[3], n3092[4], n3092[5]))
			$("#container-DD").append(scard(n3101[0], n3101[1], n3101[2], n3101[3], n3101[4], n3101[5]))
			$("#container-DD").append(scard(n3155[0], n3155[1], n3155[2], n3155[3], n3155[4], n3155[5]))
			$("#container-DD").append(scard(n3165[0], n3165[1], n3165[2], n3165[3], n3165[4], n3165[5]))
			$("#container-DD").append(scard(n3167[0], n3167[1], n3167[2], n3167[3], n3167[4], n3167[5]))
			$("#container-DD").append(scard(n3168[0], n3168[1], n3168[2], n3168[3], n3168[4], n3168[5]))
			$("#container-DD").append(scard(n3171[0], n3171[1], n3171[2], n3171[3], n3171[4], n3171[5]))
			$("#container-DD").append(scard(n3174[0], n3174[1], n3174[2], n3174[3], n3174[4], n3174[5]))
			$("#container-DD").append(scard(n3175[0], n3175[1], n3175[2], n3175[3], n3175[4], n3175[5]))
			$("#container-DD").append(scard(n3176[0], n3176[1], n3176[2], n3176[3], n3176[4], n3176[5]))
			$("#container-DD").append(scard(n3233[0], n3233[1], n3233[2], n3233[3], n3233[4], n3233[5]))
			$("#container-DD").append(scard(n3236[0], n3236[1], n3236[2], n3236[3], n3236[4], n3236[5]))
			$("#container-DD").append(scard(n3263[0], n3263[1], n3263[2], n3263[3], n3263[4], n3263[5]))
			$("#container-DD").append(scard(n3269[0], n3269[1], n3269[2], n3269[3], n3269[4], n3269[5]))
			$("#container-DD").append(scard(n3270[0], n3270[1], n3270[2], n3270[3], n3270[4], n3270[5]))
			$("#container-DD").append(scard(n3271[0], n3271[1], n3271[2], n3271[3], n3271[4], n3271[5]))
			$("#container-DD").append(scard(n3272[0], n3272[1], n3272[2], n3272[3], n3272[4], n3272[5]))
			$("#container-DD").append(scard(n3301[0], n3301[1], n3301[2], n3301[3], n3301[4], n3301[5]))
			$("#container-DD").append(scard(n3318[0], n3318[1], n3318[2], n3318[3], n3318[4], n3318[5]))
			$("#container-DD").append(scard(n3319[0], n3319[1], n3319[2], n3319[3], n3319[4], n3319[5]))
			$("#container-DD").append(scard(n3348[0], n3348[1], n3348[2], n3348[3], n3348[4], n3348[5]))
			$("#container-DD").append(scard(n3351[0], n3351[1], n3351[2], n3351[3], n3351[4], n3351[5]))
			$("#container-DD").append(scard(n10061[0], n10061[1], n10061[2], n10061[3], n10061[4], n10061[5]))
			$("#container-DD").append(scard(nCollab003[0], nCollab003[1], nCollab003[2], nCollab003[3], nCollab003[4], nCollab003[5]))
			$("#container-DD").append(scard(nCollab007[0], nCollab007[1], nCollab007[2], nCollab007[3], nCollab007[4], nCollab007[5]))
			$("#container-DD").append(scard(nCollab021[0], nCollab021[1], nCollab021[2], nCollab021[3], nCollab021[4], nCollab021[5]))
			$("#container-DD").append(scard(nCollab022[0], nCollab022[1], nCollab022[2], nCollab022[3], nCollab022[4], nCollab022[5]))
			$("#container-DD").append(scard(nCollab032[0], nCollab032[1], nCollab032[2], nCollab032[3], nCollab032[4], nCollab032[5]))
			$("#container-DD").append(scard(nCollab041[0], nCollab041[1], nCollab041[2], nCollab041[3], nCollab041[4], nCollab041[5]))
			$("#container-DD").append(scard(nCollab051[0], nCollab051[1], nCollab051[2], nCollab051[3], nCollab051[4], nCollab051[5]))
			$("#container-DD").append(scard(nCollab054[0], nCollab054[1], nCollab054[2], nCollab054[3], nCollab054[4], nCollab054[5]))
			$("#container-DD").append(scard(nPlan009[0], nPlan009[1], nPlan009[2], nPlan009[3], nPlan009[4], nPlan009[5]))
		}

	/* SS/SSV */
		function loadSS () {
			$("#container-SS-SSV").append(scard(n338[0], n338[1], n338[2], n338[3], n338[4], n338[5]))
			$("#container-SS-SSV").append(scard(n339[0], n339[1], n339[2], n339[3], n339[4], n339[5]))
			$("#container-SS-SSV").append(scard(n340[0], n340[1], n340[2], n340[3], n340[4], n340[5]))
			$("#container-SS-SSV").append(scard(n341[0], n341[1], n341[2], n341[3], n341[4], n341[5]))
			$("#container-SS-SSV").append(scard(n342[0], n342[1], n342[2], n342[3], n342[4], n342[5]))
			$("#container-SS-SSV").append(scard(n343[0], n343[1], n343[2], n343[3], n343[4], n343[5]))
			$("#container-SS-SSV").append(scard(n344[0], n344[1], n344[2], n344[3], n344[4], n344[5]))
			$("#container-SS-SSV").append(scard(n350[0], n350[1], n350[2], n350[3], n350[4], n350[5]))
			$("#container-SS-SSV").append(scard(n358[0], n358[1], n358[2], n358[3], n358[4], n358[5]))
			$("#container-SS-SSV").append(scard(n381[0], n381[1], n381[2], n381[3], n381[4], n381[5]))
			$("#container-SS-SSV").append(scard(n386[0], n386[1], n386[2], n386[3], n386[4], n386[5]))
			$("#container-SS-SSV").append(scard(n387[0], n387[1], n387[2], n387[3], n387[4], n387[5]))
			$("#container-SS-SSV").append(scard(n396[0], n396[1], n396[2], n396[3], n396[4], n396[5]))
			$("#container-SS-SSV").append(scard(n397[0], n397[1], n397[2], n397[3], n397[4], n397[5]))
			$("#container-SS-SSV").append(scard(n398[0], n398[1], n398[2], n398[3], n398[4], n398[5]))
			$("#container-SS-SSV").append(scard(n399[0], n399[1], n399[2], n399[3], n399[4], n399[5]))
			$("#container-SS-SSV").append(scard(n400[0], n400[1], n400[2], n400[3], n400[4], n400[5]))
			$("#container-SS-SSV").append(scard(n402[0], n402[1], n402[2], n402[3], n402[4], n402[5]))
			$("#container-SS-SSV").append(scard(n416[0], n416[1], n416[2], n416[3], n416[4], n416[5]))
			$("#container-SS-SSV").append(scard(n446[0], n446[1], n446[2], n446[3], n446[4], n446[5]))
			$("#container-SS-SSV").append(scard(n467[0], n467[1], n467[2], n467[3], n467[4], n467[5]))
			$("#container-SS-SSV").append(scard(n477[0], n477[1], n477[2], n477[3], n477[4], n477[5]))
			$("#container-SS-SSV").append(scard(n484[0], n484[1], n484[2], n484[3], n484[4], n484[5]))
			$("#container-SS-SSV").append(scard(n492[0], n492[1], n492[2], n492[3], n492[4], n492[5]))
			$("#container-SS-SSV").append(scard(n503[0], n503[1], n503[2], n503[3], n503[4], n503[5]))
			$("#container-SS-SSV").append(scard(n513[0], n513[1], n513[2], n513[3], n513[4], n513[5]))
			$("#container-SS-SSV").append(scard(nCollab053[0], nCollab053[1], nCollab053[2], nCollab053[3], nCollab053[4], nCollab053[5]))
		}

	/* Auxiliaries */ 
		function loadAUX () {
			$("#container-AR-AE").append(scard(n080[0], n080[1], n080[2], n080[3], n080[4], n080[5]))
			$("#container-AR-AE").append(scard(n232[0], n232[1], n232[2], n232[3], n232[4], n232[5]))
			$("#container-AR-AE").append(scard(n472[0], n472[1], n472[2], n472[3], n472[4], n472[5]))
		}