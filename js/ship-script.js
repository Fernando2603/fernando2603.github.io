let output = ""
ship.forEach((ship) => {
	shipgid = ship._gid;
	id = ship.id
	name = ship.names.en;
	thumbnail = ship.thumbnail;
	hullType = ship.hullType;
	nation = ship.nationality;

	let rarityBorder = "";
	let rarityClass = "";
	if (ship.rarity == "Normal") {rarityBorder = "Normal"; rarityClass = "rarity-1"}
	if (ship.rarity == "Rare") {rarityBorder = "Rare"; rarityClass = "rarity-2"}
	if (ship.rarity == "Elite") {rarityBorder = "Elite"; rarityClass = "rarity-3"}
	if (ship.rarity == "Super Rare") {rarityBorder = "Super-Rare"; rarityClass = "rarity-4"}
	if (ship.rarity == "Priority") {rarityBorder = "Priority"; rarityClass = "rarity-4"}
	if (ship.rarity == "Ultra Rare") {rarityBorder = "Ultra-Rare"; rarityClass = "rarity-5"}
	if (ship.rarity == "Decisive") {rarityBorder = "Decisive"; rarityClass = "rarity-5"}

	let hullTypeClass = "";
	let slotType = "";
	if (ship.hullType == "Battleship") {hullTypeClass = "BB"; slotType = "slot-1";}
	if (ship.hullType == "Battlecruiser") {hullTypeClass = "BC"; slotType = "slot-1";}
	if (ship.hullType == "Aviation Battleship") {hullTypeClass = "BBV"; slotType = "slot-1";}
	if (ship.hullType == "Aircraft Carrier") {hullTypeClass = "CV"; slotType = "slot-1";}
	if (ship.hullType == "Light Carrier") {hullTypeClass = "CVL"; slotType = "slot-1";}
	if (ship.hullType == "Large Cruiser") {hullTypeClass = "CB"; slotType = "slot-2";}
	if (ship.hullType == "Heavy Cruiser") {hullTypeClass = "CA"; slotType = "slot-2";}
	if (ship.hullType == "Light Cruiser") {hullTypeClass = "CL"; slotType = "slot-2";}
	if (ship.hullType == "Destroyer") {hullTypeClass = "DD"; slotType = "slot-2";}
	if (ship.hullType == "Submarine") {hullTypeClass = "SS"; slotType = "slot-3";}
	if (name == "I-13") {hullTypeClass = "SSV"; slotType = "slot-3";}
	if (ship.hullType == "Repair") {hullTypeClass = "AR"; slotType = "slot-2";}
	if (name == "Kashino" || name == "Ritsuko Akizuki") {hullTypeClass = "AE"; slotType = "slot-2";}
	if (ship.hullType == "Monitor") {hullTypeClass = "BM"; slotType = "slot-1";}
	
	let nationClass = "";
	if (nation == "Eagle Union") {nationClass = "USS";}
	if (nation == "Royal Navy") {nationClass = "HMS";}
	if (nation == "Sakura Empire") {nationClass = "IJN";}
	if (nation == "Iron Blood") {nationClass = "KMS";}
	if (nation == "Dragon Empery") {nationClass = "ROC";}
	if (nation == "Northern Parliament") {nationClass = "SN";}
	if (nation == "Iris Libre") {nationClass = "FFNF";}
	if (nation == "Vichya Dominion") {nationClass = "MNF";}
	if (nation == "Sardegna Empire") {nationClass = "RN";}
	if (nation == "Neptunia") {nationClass = "HDN";}
	if (nation == "Bilibili") {nationClass = "BILI";}
	if (nation == "Utawarerumono") {nationClass = "UTM";}
	if (nation == "Kizuna AI") {nationClass = "KAI";}
	if (nation == "Hololive") {nationClass = "HOLO";}
	if (nation == "Venus Vacation") {nationClass = "VEVA";}
	if (nation == "META") {nationClass = "META";}
	if (nation == "Universal") {nationClass = "Universal"}
	if (nation == undefined) {nationClass = "IMAS"}

	let unitList = "";
	if (id < 1000) {unitList = "Standart"}
	if (id.match('Plan') !== null) {unitList = "Research"}
	if (id == 30001 || id == 30002 || id == 30003) {unitList = "META"}
	if (id.match('Collab') !== null) {unitList = "Collab"}
	if (id > 10000 && id < 20000) {unitList = "Collab"}
	if (ship.retrofit !== undefined) {unitList = "Retrofit unit-Standart"}
	output += `
		<div 
			class="shipCard ship o${shipgid} hullType${hullTypeClass} ${rarityClass} ${slotType} nation-${nationClass} unit-${unitList}" 
			onclick="shipModalCall(${shipgid})" 
			data-toggle="modal"
			data-target=".s${shipgid}"
		>
			<div 
				class="shipBorder"
				data-toggle="tooltip"
				data-placement="top" 
				title="${nation} - ${hullType}"
			><img src="${thumbnail}" class="shipImage ${rarityBorder}"></div>
			<div class="align-middle shipName">${name}</div>
		</div>
	`
})

function buttonter(idx) {
	if ($(".btn-"+idx).hasClass("btn-outline-primary")) {
		$(".btn-"+idx).removeClass("btn-outline-primary")
		$(".btn-"+idx).addClass("btn-primary")
	} else {
		$(".btn-"+idx).addClass("btn-outline-primary")
		$(".btn-"+idx).removeClass("btn-primary")
	}

}

var filterHull = [];
var filterRarity = [];
var filterSlot = [];
var filterNation = [];
var filterUnit = [];

function filterByHullTypeReset () {
	$(".btn-00").removeClass("btn-outline-primary").addClass("btn-primary");
	$(`
		.btn-01,
		.btn-02,
		.btn-03,
		.btn-04,
		.btn-05,
		.btn-06,
		.btn-07,
		.btn-08,
		.btn-09,
		.btn-10,
		.btn-11,
		.btn-12,
		.btn-13,
		.btn-14
	`).removeClass("btn-primary").removeClass("btn-outline-primary").addClass("btn-outline-primary");
	$(".ship").removeClass("hide-ship");
	filterHull = [];
}

function filterByHullType (idx, hullType) {
	buttonter(idx);

	if($(".btn-"+idx).hasClass("btn-outline-primary")) {
		for (var i = 0; i < filterHull.length; i++) {
			if (filterHull[i].valueOf() == hullType) {filterHull.splice(i, 1)}
		}
	} else {
		filterHull.push(hullType);
	}

	if (filterHull.length == 0) {
		$(".ship").removeClass("hide-ship");
		$(".btn-00").removeClass("btn-outline-primary").addClass("btn-primary");
	} else {
		$(".ship").addClass("hide-ship")
		$(".btn-00").removeClass("btn-primary").addClass("btn-outline-primary");
	}

	filterHull.forEach((filterHull) => {
		$(".hullType"+filterHull).removeClass("hide-ship")
	})
}

function filterByRarityReset () {
	$(".btn-15").removeClass("btn-outline-primary").addClass("btn-primary");
	$(`
		.btn-16,
		.btn-17,
		.btn-18,
		.btn-19,
		.btn-20
	`).removeClass("btn-primary").removeClass("btn-outline-primary").addClass("btn-outline-primary");
	$(".ship").removeClass("hide-rarity");
	filterRarity = [];
}

function filterByRarity (idx, rarity) {
	buttonter(idx);

	if($(".btn-"+idx).hasClass("btn-outline-primary")) {
		for (var i = 0; i < filterRarity.length; i++) {
			if (filterRarity[i].valueOf() == rarity) {filterRarity.splice(i, 1)}
		}
	} else {
		filterRarity.push(rarity);
	}

	if (filterRarity.length == 0) {
		$(".ship").removeClass("hide-rarity");
		$(".btn-15").removeClass("btn-outline-primary").addClass("btn-primary");
	} else {
		$(".ship").addClass("hide-rarity")
		$(".btn-15").removeClass("btn-primary").addClass("btn-outline-primary");
	}

	filterRarity.forEach((filterRarity) => {
		$(".rarity-"+filterRarity).removeClass("hide-rarity")
	})
}

function filterBySlotReset () {
	$(".btn-21").removeClass("btn-outline-primary").addClass("btn-primary");
	$(`
		.btn-22,
		.btn-23,
		.btn-24
	`).removeClass("btn-primary").removeClass("btn-outline-primary").addClass("btn-outline-primary");
	$(".ship").removeClass("hide-slot");
	filterSlot = [];
}

function filterBySlot (idx, slot) {
	buttonter(idx);

	if($(".btn-"+idx).hasClass("btn-outline-primary")) {
		for (var i = 0; i < filterSlot.length; i++) {
			if (filterSlot[i].valueOf() == slot) {filterSlot.splice(i, 1)}
		}
	} else {
		filterSlot.push(slot);
	}

	if (filterSlot.length == 0) {
		$(".ship").removeClass("hide-slot");
		$(".btn-21").removeClass("btn-outline-primary").addClass("btn-primary");
	} else {
		$(".ship").addClass("hide-slot")
		$(".btn-21").removeClass("btn-primary").addClass("btn-outline-primary");
	}

	filterSlot.forEach((filterSlot) => {
		$(".slot-"+filterSlot).removeClass("hide-slot")
	})
}

function filterByUnitReset () {
	$(".btn-25").removeClass("btn-outline-primary").addClass("btn-primary");
	$(`
		.btn-26,
		.btn-27,
		.btn-28,
		.btn-29,
		.btn-30
	`).removeClass("btn-primary").removeClass("btn-outline-primary").addClass("btn-outline-primary");
	$(".ship").removeClass("hide-unit");
	filterUnit = [];
}

function filterByUnit (idx, unit) {
	buttonter(idx);

	if($(".btn-"+idx).hasClass("btn-outline-primary")) {
		for (var i = 0; i < filterUnit.length; i++) {
			if (filterUnit[i].valueOf() == unit) {filterUnit.splice(i, 1)}
		}
	} else {
		filterUnit.push(unit);
	}

	if (filterUnit.length == 0) {
		$(".ship").removeClass("hide-unit");
		$(".btn-25").removeClass("btn-outline-primary").addClass("btn-primary");
	} else {
		$(".ship").addClass("hide-unit")
		$(".btn-25").removeClass("btn-primary").addClass("btn-outline-primary");
	}

	filterUnit.forEach((filterUnit) => {
		$(".unit-"+filterUnit).removeClass("hide-unit")
	})
}

function filterByNationReset () {
	$(".btn-31").removeClass("btn-outline-primary").addClass("btn-primary");
	$(`
		.btn-32,
		.btn-33,
		.btn-34,
		.btn-35,
		.btn-36,
		.btn-37,
		.btn-38,
		.btn-39,
		.btn-40,
		.btn-41,
		.btn-42,
		.btn-43,
		.btn-44,
		.btn-45,
		.btn-46,
		.btn-47,
		.btn-48,
		.btn-49
	`).removeClass("btn-primary").removeClass("btn-outline-primary").addClass("btn-outline-primary");
	$(".ship").removeClass("hide-nation");
	filterNation = [];
}

function filterByNation (idx, nation) {
	buttonter(idx);

	if($(".btn-"+idx).hasClass("btn-outline-primary")) {
		for (var i = 0; i < filterNation.length; i++) {
			if (filterNation[i].valueOf() == nation) {filterNation.splice(i, 1)}
		}
	} else {
		filterNation.push(nation);
	}

	if (filterNation.length == 0) {
		$(".ship").removeClass("hide-nation");
		$(".btn-31").removeClass("btn-outline-primary").addClass("btn-primary");
	} else {
		$(".ship").addClass("hide-nation")
		$(".btn-31").removeClass("btn-primary").addClass("btn-outline-primary");
	}

	filterNation.forEach((filterNation) => {
		$(".nation-"+filterNation).removeClass("hide-nation")
	})
}
