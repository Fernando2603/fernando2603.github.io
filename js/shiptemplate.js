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