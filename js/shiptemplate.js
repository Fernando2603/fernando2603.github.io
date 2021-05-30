function templateLoad () {
	$("head").append(shipTitle())
	$(".main").append(shipBody())
	$(document).ready(shipTemplate())
}
function shipTitle () {return '<title id="title">Azur Lane - ' + ship.names.en + '</title>'}
function shipBody () {
	return '<div class="shipMetadata">' +
	    		'<div class="shipName blinker SRarity"></div>' +
	    		'<div class="mobile-tc SRarity">' +
	    			'<table>' +
	    				'<tbody>' +
	    					'<tr>' +
	    						'<th rowspan="3" id="thumbnail-mobile"><img id="ship-thumbnail" src=""></th>' +
	    						'<th rowspan="3" id="chibi-mobile"><img id="ship-chibi" src=""></th>' +
	    					'</tr>' +
	    				'</tbody>' +
	    			'</table>' +
	    		'</div>' +
	    		'<div class="shipInfo SRarity">' +
					'<table>' +
	    				'<tbody>' +
	    					'<tr>' +
	    						'<th rowspan="3" id="thumbnail"><img id="ship-thumbnail2" src=""></th>' +
	    						'<th class="shipInfoTitle">ID</th>' +
	    						'<td id="ship-ID" class="shipInfoContent shipInfoMobile">: </td>' +
	    						'<th class="shipInfoTitle">Faction</th>' +
	    						'<td id="ship-Faction" class="shipInfoContent">: </td>' +
	    						'<th rowspan="3" id="chibi"><img id="ship-chibi2" src=""></th>' +
	    					'</tr>' +
	    					'<tr>' +
	    						'<th class="shipInfoTitle">Rarity</th>' +
	    						'<td id="ship-Rarity" class="shipInfoContent shipInfoMobile">: </td>' +
	    						'<th class="shipInfoTitle">Construction Time</th>' +
	    						'<td id="ship-CTime" class="shipInfoContent">: </td>' +
	    					'</tr>' +
	    					'<tr>' +
	    						'<th class="shipInfoTitle">Type</th>' +
	    						'<td id="ship-Type" class="shipInfoContent shipInfoMobile">: </td>' +
	    						'<th class="shipInfoTitle">Class</th>' +
	    						'<td id="ship-Class" class="shipInfoContent">: </td>' +
	    					'</tr>' +
	    				'</tbody>' +
	    			'</table>' +
	    		'</div>' +
	    		'<div class="shipInfo-mobile SRarity">' +
					'<table>' +
	    				'<tbody>' +
	    					'<tr>' +
	    						'<th class="shipInfoTitle">ID</th>' +
	    						'<td id="ship-ID2" class="shipInfoContent shipInfoMobile">: </td>' +
	    					'</tr>' +
	    					'<tr>' +
	    						'<th class="shipInfoTitle">Construction</th>' +
	    						'<td id="ship-CTime2" class="shipInfoContent">: </td>' +
	    					'</tr>' +
	    					'<tr>' +
	    						'<th class="shipInfoTitle">Rarity</th>' +
	    						'<td id="ship-Rarity2" class="shipInfoContent shipInfoMobile">: </td>' +
	    					'</tr>' +
	    					'<tr>' +
	    						'<th class="shipInfoTitle">Type</th>' +
	    						'<td id="ship-Type2" class="shipInfoContent shipInfoMobile">: </td>' +
	    					'</tr>' +
	    					'<tr>' +
	    						'<th class="shipInfoTitle">Faction</th>' +
	    						'<td id="ship-Faction2" class="shipInfoContent">: </td>' +
	    					'</tr>' +
	    					'<tr>' +
	    						'<th class="shipInfoTitle">Class</th>' +
	    						'<td id="ship-Class2" class="shipInfoContent">: </td>' +
	    					'</tr>' +
	    				'</tbody>' +
	    			'</table>' +
	    		'</div>' +
	    		'<div class="shipNotes SRarity">' +
	    			'<table>' +
	    				'<tbody>' +
	    					'<tr>' +
	    						'<td id="ship-Notes"></td>' +
	    					'</tr>' +
	    				'</tbody>' +
	    			'</table>' +
	    		'</div>' +
	    	'</div>' +
	    	'<div class="shipMain">' +
		    	'<div class="shipImage SRarity">' +
		    		'<div>' +
		    			'<img id="ship-Image" src="">' +
		    		'</div>' +
		    	'</div>' +
		    	'<div class="shipData">' +
		    		'<div class="shipStats SRarity">' +
			    		'<table>' +
				    		'<tbody>' +
				    			'<tr>' +
				    				'<th colspan="28">Ship Stats Level 120/100 Affection/Max Enhancements</th>' +
				    			'</tr>' +
				    			'<tr>' +
				    				'<th><img src="Stats/Health.png" alt="health"></th>' +
				    				'<td id="ship-stats-health"></td>' +
				    				'<th><img src="Stats/Armor.png" alt="armor"></th>' +
				    				'<td id="ship-stats-armor"></td>' +
				    				'<th><img src="Stats/Firepower.png" alt="firepower"></th>' +
				    				'<td id="ship-stats-firepower"></td>' +
				    				'<th><img src="Stats/Aviation.png" alt="aviation"></th>' +
				    				'<td id="ship-stats-aviation"></td>' +
				    				'<th><img src="Stats/Torpedo.png" alt="torpedo"></th>' +
				    				'<td id="ship-stats-torpedo"></td>' +
				    				'<th><img src="Stats/AntiAir.png" alt="anti-air"></th>' +
				    				'<td id="ship-stats-antiair"></td>' +
				    				'<th style="color: red;">eHP</th>' +
				    				'<td id="ship-stats-eHP"></td>' +
				    			'</tr>' +
				    			'<tr>' +
				    				'<th><img src="Stats/Reload.png" alt="reload"></th>' +
				    				'<td id="ship-stats-reload"></td>' +
				    				'<th><img src="Stats/Hit.png" alt="accuracy"></th>' +
				    				'<td id="ship-stats-accuracy"></td>' +
				    				'<th><img src="Stats/Luck.png" alt="luck"></th>' +
				    				'<td id="ship-stats-luck"></td>' +
				    				'<th><img src="Stats/Evasion.png" alt="evasion"></th>' +
				    				'<td id="ship-stats-evasion"></td>' +
				    				'<th><img src="Stats/ASW.png" alt="antisubmarinewarfare"></th>' +
				    				'<td id="ship-stats-asw"></td>' +
				    				'<th><img src="Stats/Consumption.png" alt="cost"></th>' +
				    				'<td id="ship-stats-consumption"></td>' +
				    				'<th style="color: green;">Spd</th>' +
				    				'<td id="ship-stats-speed"></td>' +
				    			'</tr>' +
				    		'</tbody>' +
				    	'</table>' +
			    	'</div>' +
			    	'<div class="shipStats-mobile SRarity">' +
			    		'<table>' +
				    		'<tbody>' +
				    			'<tr>' +
				    				'<th colspan="28">Ship Stats Level 120/100 Affection/Max Enhancements</th>' +
				    			'</tr>' +
				    			'<tr>' +
				    				'<th><img src="Stats/Health.png" alt="health"></th>' +
				    				'<td id="ship-stats-health2"></td>' +
				    				'<th><img src="Stats/Armor.png" alt="armor"></th>' +
				    				'<td id="ship-stats-armor2"></td>' +
				    				'<th><img src="Stats/Luck.png" alt="luck"></th>' +
				    				'<td id="ship-stats-luck2"></td>' +
				    				'<th><img src="Stats/Evasion.png" alt="evasion"></th>' +
				    				'<td id="ship-stats-evasion2"></td>' +
				    			'</tr>' +
				    			'<tr>' +
				    				'<th><img src="Stats/Firepower.png" alt="firepower"></th>' +
				    				'<td id="ship-stats-firepower2"></td>' +
				    				'<th><img src="Stats/Aviation.png" alt="aviation"></th>' +
				    				'<td id="ship-stats-aviation2"></td>' +
				    				'<th><img src="Stats/ASW.png" alt="antisubmarinewarfare"></th>' +
				    				'<td id="ship-stats-asw2"></td>' +
				    				'<th><img src="Stats/Consumption.png" alt="cost"></th>' +
				    				'<td id="ship-stats-consumption2" ></td>' +
				    			'</tr>' +
				    			'<tr>' +
				    				'<th><img src="Stats/Torpedo.png" alt="torpedo"></th>' +
				    				'<td id="ship-stats-torpedo2"></td>' +
				    				'<th><img src="Stats/AntiAir.png" alt="anti-air"></th>' +
				    				'<td id="ship-stats-antiair2"></td>' +
				    				'<th style="color: green;">Spd</th>' +
				    				'<td id="ship-stats-speed2"></td>' +
				    				'<th style="color: red;">eHP</th>' +
				    				'<td id="ship-stats-eHP"></td>' +
				    			'</tr>' +
				    			'<tr>' +
				    				'<th><img src="Stats/Reload.png" alt="reload"></th>' +
				    				'<td id="ship-stats-reload2"></td>' +
				    				'<th><img src="Stats/Hit.png" alt="accuracy"></th>' +
				    				'<td id="ship-stats-accuracy2"></td>' +
				    				'<td class="note-mobile" colspan="4">Note : eHP not include skill and only raw eHP</td>' +
				    			'</tr>' +
				    		'</tbody>' +
				    	'</table>' +
			    	'</div>' +
			    	'<div class="shipAux">' +
			    		'<div class="shipGear SRarity">' +
				    		'<table>' +
					    		'<tbody>' +
					    			'<tr>' +
					    				'<th colspan="4">Gear</th>' +
					    			'</tr>' +
					    			'<tr>' +
					    				'<th>Slot</th>' +
					    				'<th>Efficiency</th>' +
					    				'<th>Equippable</th>' +
					    				'<th>Max #</th>' +
					    			'</tr>' +
					    			'<tr>' +
					    				'<td>1</td>' +
					    				'<td id="ship-slots1-efficiency"></td>' +
					    				'<td id="ship-slots1-guns"></td>' +
					    				'<td id="ship-slots1-max"></td>' +
					    			'</tr>' +
					    			'<tr>' +
					    				'<td>2</td>' +
					    				'<td id="ship-slots2-efficiency"></td>' +
					    				'<td id="ship-slots2-guns"></td>' +
					    				'<td id="ship-slots2-max"></td>' +
					    			'</tr>' +
					    			'<tr>' +
					    				'<td>3</td>' +
					    				'<td id="ship-slots3-efficiency"></td>' +
					    				'<td id="ship-slots3-guns"></td>' +
					    				'<td id="ship-slots3-max"></td>' +
					    			'</tr>' +
					    		'</tbody>' +
					    	'</table>' +
					    '</div>' +
					    '<div class="shipValue">' +
				    		'<table class="SRarity">' +
					    		'<tbody>' +
					    			'<tr>' +
					    				'<th colspan="8">Enhance Value</th>' +
					    			'</tr>' +
					    			'<tr>' +
					    				'<th><img src="Stats/Firepower.png" alt="firepower"></th>' +
					    				'<td id="ship-enhanceValue-firepower"></td>' +
					    				'<th><img src="Stats/Torpedo.png" alt="torpedo"></th>' +
					    				'<td id="ship-enhanceValue-torpedo"></td>' +
					    				'<th><img src="Stats/Aviation.png" alt="aviation"></th>' +
					    				'<td id="ship-enhanceValue-aviation"></td>' +
					    				'<th><img src="Stats/Reload.png" alt="reload"></th>' +
					    				'<td id="ship-enhanceValue-reload"></td>' +
					    			'</tr>' +
					    		'</tbody>' +
					    	'</table>' +
					    	'<table style="margin-top: 10px;" class="SRarity">' +
					    		'<tbody>' +
					    			'<tr>' +
					    				'<th colspan="8">Scrap Value</th>' +
					    			'</tr>' +
					    			'<tr>' +
					    				'<th><img src="Resources/Coin.png" alt="Coin"></th>' +
					    				'<td id="ship-scrapValue-coin"></td>' +
					    				'<th><img src="Resources/Oil.png" alt="Oil"></th>' +
					    				'<td id="ship-scrapValue-oil"></td>' +
					    				'<th><img src="Resources/Medal.png" alt="Medal"></th>' +
					    				'<td id="ship-scrapValue-medal"></td>' +
					    			'</tr>' +
					    		'</tbody>' +
					    	'</table>' +
					    '</div>' +
			    	'</div>' +
			    	'<div class="shipLB SRarity">' +
			    		'<table>' +
				    		'<tbody>' +
				    			'<tr>' +
				    				'<th colspan="2" class="shipLBT">Limit Break Ranks</th>' +
				    			'</tr>' +
				    			'<tr>' +
				    				'<th>1st</th>' +
				    				'<td id="ship-LB1"></td>' +
				    			'</tr>' +
				    			'<tr>' +
				    				'<th>2nd</th>' +
				    				'<td id="ship-LB2"></td>' +
				    			'</tr>' +
				    			'<tr>' +
				    				'<th>3rd</th>' +
				    				'<td id="ship-LB3"></td>' +
				    			'</tr>' +
				    		'</tbody>' +
				    	'</table>' +
				    '</div>' +
				    '<div class="shipSkill SRarity">' +
				    	'<table>' +
				    		'<tbody id="ship-Skills">' +
				    			'<tr>' +
				    				'<th colspan="3">Skills</th>' +
				    			'</tr>' +
				    		'</tbody>' +
				    	'</table>' +
				    '</div>' +
				    '<div class="shipSkill-mobile ship-Skills-mobile SRarity">' +
				    	'<table style="width: 100%;">' +
				    		'<tbody>' +
				    			'<tr>' +
				    				'<th class="shipSkillMT">Skills</th>' +
				    			'</tr>' +
				    		'</tbody>' +
				    	'</table>' +
				    '</div>' +
		    	'</div>' +
	    	'</div>';
	}
function shipTemplate() {
	$(".shipName").html(ship.names.code + " - " + ship.names.en)
	$("#ship-thumbnail, #ship-thumbnail2").attr("src",ship.thumbnail);
	$("#ship-chibi, #ship-chibi2").attr("src",ship.skins[0].chibi);
	$("#ship-ID, #ship-ID2").append(ship.id);
	$("#ship-Faction, #ship-Faction2").append(ship.nationality);
	$("#ship-Rarity, #ship-Rarity2").append(ship.rarity);
	$("#ship-CTime, #ship-CTime2").append(ship.construction.constructionTime);
	$("#ship-Type, #ship-Type2").append(ship.hullType);
	$("#ship-Class, #ship-Class2").append(ship.class);
	$("#ship-Notes").append(ship.obtainedFrom.obtainedFrom);
	$("#ship-Image").attr("src",ship.skins[0].image);
	$("#ship-stats-accuracy, #ship-stats-accuracy2").append(ship.stats.level120.accuracy);
	$("#ship-stats-antiair, #ship-stats-antiair2").append(ship.stats.level120.antiair);
	$("#ship-stats-asw, #ship-stats-asw2").append(ship.stats.level120.antisubmarineWarfare);
	$("#ship-stats-armor, #ship-stats-armor2").append(ship.stats.level120.armor);
	$("#ship-stats-aviation, #ship-stats-aviation2").append(ship.stats.level120.aviation);
	$("#ship-stats-evasion, #ship-stats-evasion2").append(ship.stats.level120.evasion);
	$("#ship-stats-firepower, #ship-stats-firepower2").append(ship.stats.level120.firepower);
	$("#ship-stats-health, #ship-stats-health2").append(ship.stats.level120.health);
	$("#ship-stats-luck, #ship-stats-luck2").append(ship.stats.level120.luck);
	$("#ship-stats-consumption, #ship-stats-consumption2").append(ship.stats.level120.oilConsumption);
	$("#ship-stats-speed, #ship-stats-speed2").append(ship.stats.level120.speed);
	$("#ship-stats-reload, #ship-stats-reload2").append(ship.stats.level120.reload);
	$("#ship-stats-torpedo, #ship-stats-torpedo2").append(ship.stats.level120.torpedo);
	$("#ship-slots1-efficiency").append(ship.slots[0].minEfficiency + "% → " + ship.slots[0].maxEfficiency + "%");
	$("#ship-slots1-guns").append(ship.slots[0].type);
	$("#ship-slots1-max").append(ship.slots[0].max);
	$("#ship-slots2-efficiency").append(ship.slots[1].minEfficiency + "% → " + ship.slots[1].maxEfficiency + "%");
	$("#ship-slots2-guns").append(ship.slots[1].type);
	$("#ship-slots2-max").append(ship.slots[1].max);
	$("#ship-slots3-efficiency").append(ship.slots[2].minEfficiency + "% → " + ship.slots[2].maxEfficiency + "%");
	$("#ship-slots3-guns").append(ship.slots[2].type);
	$("#ship-slots3-max").append(ship.slots[2].max);
	$("#ship-enhanceValue-firepower").append(ship.enhanceValue.firepower);
	$("#ship-enhanceValue-torpedo").append(ship.enhanceValue.torpedo);
	$("#ship-enhanceValue-aviation").append(ship.enhanceValue.aviation);
	$("#ship-enhanceValue-reload").append(ship.enhanceValue.reload);
	$("#ship-scrapValue-coin").append(ship.scrapValue.coin);
	$("#ship-scrapValue-oil").append(ship.scrapValue.oil);
	$("#ship-scrapValue-medal").append(ship.scrapValue.medal);
	if (ship.limitBreaks < String) {
		if (ship.limitBreaks[0][0] < String) {$("#ship-LB1").append(ship.limitBreaks[0][0]);}
		if (ship.limitBreaks[0][1] < String) {$("#ship-LB1").append(" / " + ship.limitBreaks[0][1]);}
		if (ship.limitBreaks[0][2] < String) {$("#ship-LB1").append(" / " + ship.limitBreaks[0][2]);}
		if (ship.limitBreaks[1][0] < String) {$("#ship-LB2").append(ship.limitBreaks[1][0]);}
		if (ship.limitBreaks[1][1] < String) {$("#ship-LB2").append(" / " + ship.limitBreaks[1][1]);}
		if (ship.limitBreaks[1][2] < String) {$("#ship-LB2").append(" / " + ship.limitBreaks[1][2]);}
		if (ship.limitBreaks[2][0] < String) {$("#ship-LB3").append(ship.limitBreaks[2][0]);}
		if (ship.limitBreaks[2][1] < String) {$("#ship-LB3").append(" / " + ship.limitBreaks[2][1]);}
		if (ship.limitBreaks[2][2] < String) {$("#ship-LB3").append(" / " + ship.limitBreaks[2][2]);}}
	if (ship.skills[0] < String) {
	$("#ship-Skills").append('<tr><th class="shipSkillImage"><img src="' + ship.skills[0].icon + '"></th><th class="shipSkillTitle">' + ship.skills[0].names.en + '</th><td>' + ship.skills[0].description + '</td></tr>)')
	$(".ship-Skills-mobile").append('<table><tbody><tr><th><img src="' + ship.skills[0].icon + '"><br>' + ship.skills[0].names.en + '</th><td>' + ship.skills[0].description + '</td></tr></tbody></table>')}
	if (ship.skills[1] < String) {
	$("#ship-Skills").append('<tr><th class="shipSkillImage"><img src="' + ship.skills[1].icon + '"></th><th class="shipSkillTitle">' + ship.skills[1].names.en + '</th><td>' + ship.skills[1].description + '</td></tr>)')
	$(".ship-Skills-mobile").append('<table><tbody><tr><th><img src="' + ship.skills[1].icon + '"><br>' + ship.skills[1].names.en + '</th><td>' + ship.skills[1].description + '</td></tr></tbody></table>')}
	if (ship.skills[2] < String) {
	$("#ship-Skills").append('<tr><th class="shipSkillImage"><img src="' + ship.skills[2].icon + '"></th><th class="shipSkillTitle">' + ship.skills[2].names.en + '</th><td>' + ship.skills[2].description + '</td></tr>)')
	$(".ship-Skills-mobile").append('<table><tbody><tr><th><img src="' + ship.skills[2].icon + '"><br>' + ship.skills[2].names.en + '</th><td>' + ship.skills[2].description + '</td></tr></tbody></table>')}
	if (ship.skills[3] < String) {
	$("#ship-Skills").append('<tr><th class="shipSkillImage"><img src="' + ship.skills[3].icon + '"></th><th class="shipSkillTitle">' + ship.skills[3].names.en + '</th><td>' + ship.skills[3].description + '</td></tr>)')
	$(".ship-Skills-mobile").append('<table><tbody><tr><th><img src="' + ship.skills[3].icon + '"><br>' + ship.skills[3].names.en + '</th><td>' + ship.skills[3].description + '</td></tr></tbody></table>')}
	if (ship.skills[4] < String) {
	$("#ship-Skills").append('<tr><th class="shipSkillImage"><img src="' + ship.skills[4].icon + '"></th><th class="shipSkillTitle">' + ship.skills[4].names.en + '</th><td>' + ship.skills[4].description + '</td></tr>)')
	$(".ship-Skills-mobile").append('<table><tbody><tr><th><img src="' + ship.skills[4].icon + '"><br>' + ship.skills[4].names.en + '</th><td>' + ship.skills[4].description + '</td></tr></tbody></table>')}
	if (ship.rarity == "Normal") {$(".SRarity").attr("id", "Normal")}
	if (ship.rarity == "Rare") {$(".SRarity").attr("id", "Rare")}
	if (ship.rarity == "Elite") {$(".SRarity").attr("id", "Elite")}
	if (ship.rarity == "Super Rare") {$(".SRarity").attr("id", "Super-Rare")}
	if (ship.rarity == "Ultra Rare") {$(".SRarity").attr("id", "Ultra-Rare")}
	if (ship.rarity == "Priority") {$(".SRarity").attr("id", "Priority")}
	if (ship.rarity == "Decisive") {$(".SRarity").attr("id", "Decisive")}
	function eHP() {
		var sHealth = parseInt(ship.stats.level120.health);
		var sEvasion = parseInt(ship.stats.level120.evasion);
		var sLuck = parseInt(ship.stats.level120.luck);
		var eHit = 75;
		var eLuck = 25;
		var attackerHit = eHit/(eHit+sEvasion+2)
		var attackerLuck = (eLuck-sLuck+0)/1000
		var Accuracy = 0.1+attackerHit+attackerLuck
		var ehp = sHealth/Accuracy
		return Math.floor(ehp)
	}
	$("#ship-stats-eHP").append(eHP())
}