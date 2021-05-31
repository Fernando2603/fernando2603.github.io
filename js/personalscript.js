// $("#tester").html(cards(cardparent, cardid, cardtype, cardlink, cardimage, cardtitle, cardidnumber, cardstatus))
// create parent root with cardparent
// create new id with card id
// create new class at cardstatus 
//   var card = [parent, id, type, link, image, title, number, status]
var pcard01 = ["card-01", "azur-lane", "blank", "Fernando/Ship-List", "Azur-Lane.png", "Ship List", "#01", "AzurLane"];
var pcard02 = ["card-02", "fernando", "blank", "Fernando", "Fernando.png", "Fernando", "#02", "Personal"];

// AL SCRIPT
	function pALscript () {
	/* BB/BC/BBV/BM */
		$(document).ready(ploadBB())
	/* CL/CVL */
		$(document).ready(ploadCV())
	/* CA/CB */
		$(document).ready(ploadCA())
	/* CL */
		$(document).ready(ploadCL())
	/* DD */
		$(document).ready(ploadDD())
	/* SS/SSV */
		$(document).ready(ploadSS())
	/* Auxiliaries */ 
		$(document).ready(ploadAUX())
	// SHOW ALL TAB 
		$(document).ready(allshow())
	// LOAD COUNTER
		$(document).ready(pLoadcount())
	}

// Counters
	function pLoadcount() {
		$("#card-bb").append(" ("+$("#container-BB-BC-BBV-BM .shipcard").length+")")
	    $("#card-cv").append(" ("+$("#container-CV-CVL .shipcard").length+")")
	    $("#card-ca").append(" ("+$("#container-CA-CB .shipcard").length+")")
	    $("#card-cl").append(" ("+$("#container-CL .shipcard").length+")")
	    $("#card-dd").append(" ("+$("#container-DD .shipcard").length+")")
	    $("#card-ss").append(" ("+$("#container-SS-SSV .shipcard").length+")")
	    $("#card-aux").append(" ("+$("#container-AR-AE .shipcard").length+")")
	    var pcTotal = $(".shipcard").length
	    var pcUR = $(".shipcard#Ultra-Rare, .shipcard#Decisive").length
	    var pcSR = $(".shipcard#Super-Rare, .shipcard#Priority").length
	    var pcElite = $(".shipcard#Elite").length
	    var pcRare = $(".shipcard#Rare").length
	    var pcNormal = $(".shipcard#Normal").length
	    $("#pCounter").append("Total("+pcTotal+") "+"UR/DR("+pcUR+") "+"SR/PR("+pcSR+") "+"Elite("+pcElite+") "+"Rare("+pcRare+") "+"Normal("+pcNormal+")")
	}
// Triggers
	/* BB/BC/BBV/BM */
		function ploadBB () {
			$("#container-BB-BC-BBV-BM").append(pscard(n129[0], n129[1], n129[2], n129[3], n129[4], n129[5]))
		    $("#container-BB-BC-BBV-BM").append(pscard(n131[0], n131[1], n131[2], n131[3], n131[4], n131[5]))
		    $("#container-BB-BC-BBV-BM").append(pscard(n212[0], n212[1], n212[2], n212[3], n212[4], n212[5]))
		    $("#container-BB-BC-BBV-BM").append(pscard(n250[0], n250[1], n250[2], n250[3], n250[4], n250[5]))
		    $("#container-BB-BC-BBV-BM").append(pscard(n353[0], n353[1], n353[2], n353[3], n353[4], n353[5]))
		    $("#container-BB-BC-BBV-BM").append(pscard(n367[0], n367[1], n367[2], n367[3], n367[4], n367[5]))
		    $("#container-BB-BC-BBV-BM").append(pscard(n440[0], n440[1], n440[2], n440[3], n440[4], n440[5]))
		    $("#container-BB-BC-BBV-BM").append(pscard(n441[0], n441[1], n441[2], n441[3], n441[4], n441[5]))
		    $("#container-BB-BC-BBV-BM").append(pscard(n453[0], n453[1], n453[2], n453[3], n453[4], n453[5]))
		    $("#container-BB-BC-BBV-BM").append(pscard(n461[0], n461[1], n461[2], n461[3], n461[4], n461[5])) 
		    $("#container-BB-BC-BBV-BM").append(pscard(n3131[0], n3131[1], n3131[2], n3131[3], n3131[4], n3131[5]))
		    $("#container-BB-BC-BBV-BM").append(pscard(nPlan016[0], nPlan016[1], nPlan016[2], nPlan016[3], nPlan016[4], nPlan016[5]))
		    $("#container-BB-BC-BBV-BM").append(pscard(nPlan017[0], nPlan017[1], nPlan017[2], nPlan017[3], nPlan017[4], nPlan017[5]))
		}

	/* CL/CVL */
		function ploadCV () {
			$("#container-CV-CVL").append(pscard(n070[0], n070[1], n070[2], n070[3], n070[4], n070[5]))
		    $("#container-CV-CVL").append(pscard(n074[0], n074[1], n074[2], n074[3], n074[4], n074[5]))
		    $("#container-CV-CVL").append(pscard(n077[0], n077[1], n077[2], n077[3], n077[4], n077[5]))
		    $("#container-CV-CVL").append(pscard(n231[0], n231[1], n231[2], n231[3], n231[4], n231[5]))
		    $("#container-CV-CVL").append(pscard(n357[0], n357[1], n357[2], n357[3], n357[4], n357[5]))
		    $("#container-CV-CVL").append(pscard(n442[0], n442[1], n442[2], n442[3], n442[4], n442[5]))
		    $("#container-CV-CVL").append(pscard(n462[0], n462[1], n462[2], n462[3], n462[4], n462[5]))
		    $("#container-CV-CVL").append(pscard(n3074[0], n3074[1], n3074[2], n3074[3], n3074[4], n3074[5]))
		    $("#container-CV-CVL").append(pscard(n3070[0], n3070[1], n3070[2], n3070[3], n3070[4], n3070[5]))
		    $("#container-CV-CVL").append(pscard(n30001[0], n30001[1], n30001[2], n30001[3], n30001[4], n30001[5]))
		}

	/* CA/CB */
		function ploadCA () {
			$("#container-CA-CB").append(pscard(n479[0], n479[1], n479[2], n479[3], n479[4], n479[5]))
			$("#container-CA-CB").append(pscard(nPlan005[0], nPlan005[1], nPlan005[2], nPlan005[3], nPlan005[4], nPlan005[5]))
		    $("#container-CA-CB").append(pscard(nPlan013[0], nPlan013[1], nPlan013[2], nPlan013[3], nPlan013[4], nPlan013[5]))
		}

	/* CL */
		function ploadCL () {
			$("#container-CL").append(pscard(n033[0], n033[1], n033[2], n033[3], n033[4], n033[5]))
			$("#container-CL").append(pscard(n036[0], n036[1], n036[2], n036[3], n036[4], n036[5]))
			$("#container-CL").append(pscard(n115[0], n115[1], n115[2], n115[3], n115[4], n115[5]))
			$("#container-CL").append(pscard(n3033[0], n3033[1], n3033[2], n3033[3], n3033[4], n3033[5]))
			$("#container-CL").append(pscard(n3036[0], n3036[1], n3036[2], n3036[3], n3036[4], n3036[5]))
		}

	/* DD */
		function ploadDD () {
			$("#container-DD").append(pscard(n019[0], n019[1], n019[2], n019[3], n019[4], n019[5]))
			$("#container-DD").append(pscard(n155[0], n155[1], n155[2], n155[3], n155[4], n155[5]))
			$("#container-DD").append(pscard(n433[0], n433[1], n433[2], n433[3], n433[4], n433[5]))
			$("#container-DD").append(pscard(n468[0], n468[1], n468[2], n468[3], n468[4], n468[5]))
			$("#container-DD").append(pscard(n3019[0], n3019[1], n3019[2], n3019[3], n3019[4], n3019[5]))
			$("#container-DD").append(pscard(n3155[0], n3155[1], n3155[2], n3155[3], n3155[4], n3155[5]))
		}

	/* SS/SSV */
		function ploadSS () {
			$("#container-SS-SSV").append(pscard(n399[0], n399[1], n399[2], n399[3], n399[4], n399[5]))
			$("#container-SS-SSV").append(pscard(n467[0], n467[1], n467[2], n467[3], n467[4], n467[5]))
			$("#container-SS-SSV").append(pscard(n484[0], n484[1], n484[2], n484[3], n484[4], n484[5]))
		}

	/* Auxiliaries */ 
		function ploadAUX () {
			
		}