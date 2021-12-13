// TableHeadLoad 
	function TableHeadLoad () {
		$(".DD-CL-CA-TableHead").append(tableHeadChild01())
		$(".CB-BB-TableHead").append(tableHeadChild02())
		$(".Torpedo-Surface-TableHead").append(tableHeadChild03())
		$(".Torpedo-Submarine-TableHead").append(tableHeadChild04())
		$(".Fighter-DiveBomber-Seaplane-TableHead").append(tableHeadChild05())
		$(".TorpedoBomber-TableHead").append(tableHeadChild06())
		$(".AntiAir-TableHead").append(tableHeadChild07())
		$(".Aux-TableHead").append(tableHeadChild08())
		$(".Cargo-TableHead").append(tableHeadChild09())
		$(".ASW-TableHead").append(tableHeadChild10())
	}
	function tableHeadChild01 () {
		// Table Head Load for DD-CL-CA-TableHead
		return `
			<tr>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Icon">Icon</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Name">Equipment</th>
				<th data-toggle="tooltip" data-placement="top" title="Firepower"><img src="AL/Stats/Firepower.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Anti-Air"><img src="AL/Stats/AntiAir.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Round">Rnd</th>
				<th data-toggle="tooltip" data-placement="top" title="Damage">Dmg</th>
				<th data-toggle="tooltip" data-placement="top" title="Coefficient">Coef</th>
				<th data-toggle="tooltip" data-placement="top" title="Volley Time">VT</th>
				<th data-toggle="tooltip" data-placement="top" title="Reload">Rld</th>
				<th data-toggle="tooltip" data-placement="top" title="Round/Second">Rnd/s</th>
				<th data-toggle="tooltip" data-placement="top" title="Raw DPS">Raw</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Light Armor">L</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Medium Armor">M</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Heavy Armor">H</th>
				<th data-toggle="tooltip" data-placement="top" title="Range">Rng</th>
				<th data-toggle="tooltip" data-placement="top" title="Spread">Sprd</th>
				<th data-toggle="tooltip" data-placement="top" title="Angle">Angle</th>
				<th data-toggle="tooltip" data-placement="top" title="Attribute/Characteristic">Attr</th>
				<th data-toggle="tooltip" data-placement="top" title="Ammo Type">Ammo</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Nation">Nation</th>
			</tr>
		`
	}

	function tableHeadChild02 () {
		// Table Head Load for CB-BB-TableHead
		return `
			<tr>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Icon">Icon</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Name">Equipment</th>
				<th data-toggle="tooltip" data-placement="top" title="Firepower"><img src="AL/Stats/Firepower.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Anti-Air"><img src="AL/Stats/AntiAir.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Round">Rnd</th>
				<th data-toggle="tooltip" data-placement="top" title="Damage">Dmg</th>
				<th data-toggle="tooltip" data-placement="top" title="Coefficient">Coef</th>
				<th data-toggle="tooltip" data-placement="top" title="Volley Time">VT</th>
				<th data-toggle="tooltip" data-placement="top" title="Reload">Rld</th>
				<th data-toggle="tooltip" data-placement="top" title="Raw DPS">Raw</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Light Armor">L</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Medium Armor">M</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Heavy Armor">H</th>
				<th data-toggle="tooltip" data-placement="top" title="Range">Rng</th>
				<th data-toggle="tooltip" data-placement="top" title="Spread">Sprd</th>
				<th data-toggle="tooltip" data-placement="top" title="Angle">Angle</th>
				<th data-toggle="tooltip" data-placement="top" title="Attribute/Characteristic">Attr</th>
				<th data-toggle="tooltip" data-placement="top" title="Ammo Type">Ammo</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Nation">Nation</th>
			</tr>
		`
	}

	function tableHeadChild03 () {
		// Table Head Load for Torpedo-Surface-TableHead
		return `
			<tr>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Icon">Icon</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Name">Equipment</th>
				<th data-toggle="tooltip" data-placement="top" title="Torpedo"><img src="AL/Stats/Torpedo.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Round">Rnd</th>
				<th data-toggle="tooltip" data-placement="top" title="Damage">Dmg</th>
				<th data-toggle="tooltip" data-placement="top" title="Reload">Rld</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Light Armor">L</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Medium Armor">M</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Heavy Armor">H</th>
				<th data-toggle="tooltip" data-placement="top" title="Preload DPS vs Light Armor">PL</th>
				<th data-toggle="tooltip" data-placement="top" title="Preload DPS vs Medium Armor">PM</th>
				<th data-toggle="tooltip" data-placement="top" title="Preload DPS vs Heavy Armor">PH</th>
				<th data-toggle="tooltip" data-placement="top" title="Range">Rng</th>
				<th data-toggle="tooltip" data-placement="top" title="Spread">Sprd</th>
				<th data-toggle="tooltip" data-placement="top" title="Angle">Angle</th>
				<th data-toggle="tooltip" data-placement="top" title="Attribute/Characteristic">Attr</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Nation">Nation</th>
			</tr>
		`
	}

	function tableHeadChild04 () {
		// Table Head Load for Torpedo-Submarine-TableHead
		return `
			<tr>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Icon">Icon</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Name">Equipment</th>
				<th data-toggle="tooltip" data-placement="top" title="Torpedo"><img src="AL/Stats/Torpedo.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Round">Rnd</th>
				<th data-toggle="tooltip" data-placement="top" title="Damage">Dmg</th>
				<th data-toggle="tooltip" data-placement="top" title="Reload">Rld</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Light Armor">L</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Medium Armor">M</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Heavy Armor">H</th>
				<th data-toggle="tooltip" data-placement="top" title="Range">Rng</th>
				<th data-toggle="tooltip" data-placement="top" title="Spread">Sprd</th>
				<th data-toggle="tooltip" data-placement="top" title="Angle">Angle</th>
				<th data-toggle="tooltip" data-placement="top" title="Attribute/Characteristic">Attr</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Nation">Nation</th>
			</tr>
		`
	}

	function tableHeadChild05 () {
		// Table Head Load for Fighter-DiveBomber-Seaplane-TableHead
		return `
			<tr>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Icon">Icon</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Name">Equipment</th>
				<th data-toggle="tooltip" data-placement="top" title="Aviation"><img src="AL/Stats/Aviation.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Ordnance">Ordnance</th>
				<th data-toggle="tooltip" data-placement="top" title="Guns">Guns</th>
				<th data-toggle="tooltip" data-placement="top" title="Reload">Rld</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Light Armor">L</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Medium Armor">M</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Heavy Armor">H</th>
				<th data-toggle="tooltip" data-placement="top" title="Anti-Air DPS">AA<br>DPS</th>
				<th data-toggle="tooltip" data-placement="top" title="Anti-Air Burst">AA<br>Burst</th>
				<th data-toggle="tooltip" data-placement="top" title="Speed">Spd</th>
				<th data-toggle="tooltip" data-placement="top" title="Crash Damage">Crash<br>Dmg</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Nation">Nation</th>
			</tr>
		`
	}

	function tableHeadChild06 () {
		// Table Head Load for TorpedoBomber-TableHead
		return `
			<tr>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Icon">Icon</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Name">Equipment</th>
				<th data-toggle="tooltip" data-placement="top" title="Aviation"><img src="AL/Stats/Aviation.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Ordnance">Ordnance</th>
				<th data-toggle="tooltip" data-placement="top" title="Guns">Guns</th>
				<th data-toggle="tooltip" data-placement="top" title="Damage">Dmg</th>
				<th data-toggle="tooltip" data-placement="top" title="Reload">Rld</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Light Armor">L</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Medium Armor">M</th>
				<th data-toggle="tooltip" data-placement="top" title="DPS vs Heavy Armor">H</th>
				<th data-toggle="tooltip" data-placement="top" title="Anti-Air DPS">AA<br>DPS</th>
				<th data-toggle="tooltip" data-placement="top" title="Anti-Air Burst">AA<br>Burst</th>
				<th data-toggle="tooltip" data-placement="top" title="Speed">Spd</th>
				<th data-toggle="tooltip" data-placement="top" title="Crash Damage">Crash<br>Dmg</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Nation">Nation</th>
			</tr>
		`
	}

	function tableHeadChild07 () {
		// Table Head Load for AntiAir-TableHead
		return `
			<tr>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Icon">Icon</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Name">Equipment</th>
				<th data-toggle="tooltip" data-placement="top" title="Firepower"><img src="AL/Stats/Firepower.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Anti-Air"><img src="AL/Stats/AntiAir.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Hit"><img src="AL/Stats/Hit.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Damage">Dmg</th>
				<th data-toggle="tooltip" data-placement="top" title="Reload">Rld</th>
				<th data-toggle="tooltip" data-placement="top" title="Anti-Air DPS">AA DPS</th>
				<th data-toggle="tooltip" data-placement="top" title="Range">Rng</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Nation">Nation</th>
			</tr>
		`
	}

	function tableHeadChild08 () {
		// Table Head Load for Aux-TableHead
		return `
			<tr>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Icon">Icon</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Name">Equipment</th>
				<th data-toggle="tooltip" data-placement="top" title="Stars">★</th>
				<th data-toggle="tooltip" data-placement="top" title="Health"><img src="AL/Stats/Health.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Firepower"><img src="AL/Stats/Firepower.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Anti-Air"><img src="AL/Stats/AntiAir.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Torpedo"><img src="AL/Stats/Torpedo.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Aviation"><img src="AL/Stats/Aviation.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Reload"><img src="AL/Stats/Reload.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Evasion"><img src="AL/Stats/Evasion.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Anti-Submarine Warfare"><img src="AL/Stats/ASW.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Oxygen"><img src="AL/Stats/Oxygen.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Accuracy">Acc</th>
				<th data-toggle="tooltip" data-placement="top" title="Speed">Spd</th>
				<th data-toggle="tooltip" data-placement="top" title="Notes">Notes</th>
			</tr>
		`
	}

	function tableHeadChild09 () {
		// Table Head Load for Cargo-TableHead
		return `
			<tr>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Icon">Icon</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Name">Equipment</th>
				<th data-toggle="tooltip" data-placement="top" title="Stars">★</th>
				<th data-toggle="tooltip" data-placement="top" title="Health"><img src="AL/Stats/Health.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Notes">Notes</th>
			</tr>
		`
	}

	function tableHeadChild10 () {
		// Table Head Load for ASW-TableHead
		return `
			<tr>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Icon">Icon</th>
				<th data-toggle="tooltip" data-placement="top" title="Equipment Name">Equipment</th>
				<th data-toggle="tooltip" data-placement="top" title="Stars">★</th>
				<th data-toggle="tooltip" data-placement="top" title="Anti-Submarine Warfare"><img src="AL/Stats/ASW.png"></th>
				<th data-toggle="tooltip" data-placement="top" title="Accuracy">Acc</th>
				<th data-toggle="tooltip" data-placement="top" title="Damage">Dmg</th>
				<th data-toggle="tooltip" data-placement="top" title="Reload(s)">Rld(s)</th>
				<th data-toggle="tooltip" data-placement="top" title="Damage Per Second">DPS</th>
				<th data-toggle="tooltip" data-placement="top" title="Range">Range</th>
				<th data-toggle="tooltip" data-placement="top" title="AoE Radius">AoE Radius</th>
				<th data-toggle="tooltip" data-placement="top" title="Type">Type</th>
				<th data-toggle="tooltip" data-placement="top" title="Notes">Notes</th>
			</tr>
		`
	}

// Script
function DDGun (name, target, rarity, modifier1, modifier2, modifier3, coefficient) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var firepower = parseFloat(gear[i].tiers[x].stats.firepower.formatted);
                        var antiair = parseFloat(gear[i].tiers[x].stats.antiair.formatted);
                        var volleyA = parseFloat(gear[i].tiers[x].stats.volley.multiplier);
                        var volleyB = parseFloat(gear[i].tiers[x].stats.volley.count);
                        var damage = parseFloat(gear[i].tiers[x].stats.damage.max);
                        var volleyTime = gear[i].tiers[x].stats.volleyTime.value;
                        var rateOfFire = (gear[i].tiers[x].stats.rateOfFire.max).replace('s','');
                        var rnds = ((volleyA * volleyB) / (parseFloat(rateOfFire) + parseFloat(volleyTime) + 0.26)).toFixed(2);
                        var absoluteReload = parseFloat(rateOfFire) + parseFloat(volleyTime) + 0.26
                        var raw = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * 1) / absoluteReload).toFixed(2);
                        var light = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier1 / 100)) / absoluteReload).toFixed(2);
                        var medium = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier2 / 100)) / absoluteReload).toFixed(2);
                        var heavy = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier3 / 100)) / absoluteReload).toFixed(2);
                        var range = gear[i].tiers[x].stats.range.firing;
                        let spread = 0;
                        if (gear[i].tiers[x].stats.spread !== undefined) {spread = gear[i].tiers[x].stats.spread.value}
                        var angle = gear[i].tiers[x].stats.angle.value;
                        var attr = gear[i].tiers[x].stats.characteristic.formatted;
                        var ammoType = (gear[i].tiers[x].stats.ammoType.value).replace(/[0-9]/g, "").replace("(","");
                        var ammoTypeDesc = gear[i].tiers[x].stats.ammoType.formatted;
                        var faction = gear[i].nationality;
                        return `
                            <tr data-toggle="modal" data-target=".${target}" onclick="${target}()" class="table${target}">
                                <td class="mozkit"><div class="${rarity} border border-dark rounded divcon"><img class="icon" src="${gear[i].image}"></div></td>
                                <td>${id}</td>
                                <td>${firepower}</td>
                                <td>${antiair}</td>
                                <td>${volleyA}×${volleyB}</td>
                                <td>${damage}</td>
                                <td>${coefficient}%</td>
                                <td>${volleyTime}</td>
                                <td>${rateOfFire}</td>
                                <td>${rnds}</td>
                                <td>${raw}</td>
                                <td>${light}</td>
                                <td>${medium}</td>
                                <td>${heavy}</td>
                                <td>${range}</td>
                                <td>${spread}°</td>
                                <td>${angle}°</td>
                                <td>${attr}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${ammoTypeDesc}">${ammoType}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${faction}"><img class="faction-banner" src="AL/Faction/${faction}.png"></td>
                            </tr>
                        `
                    }
                }
            }
        }
    }
}
function CLGun (name, target, rarity, modifier1, modifier2, modifier3, coefficient) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var firepower = parseFloat(gear[i].tiers[x].stats.firepower.formatted);
                        var antiair = parseFloat(gear[i].tiers[x].stats.antiair.formatted);
                        var volleyA = parseFloat(gear[i].tiers[x].stats.volley.multiplier);
                        var volleyB = parseFloat(gear[i].tiers[x].stats.volley.count);
                        var damage = parseFloat(gear[i].tiers[x].stats.damage.max);
                        var volleyTime = gear[i].tiers[x].stats.volleyTime.value;
                        var rateOfFire = (gear[i].tiers[x].stats.rateOfFire.max).replace('s','');
                        var rnds = ((volleyA * volleyB) / (parseFloat(rateOfFire) + parseFloat(volleyTime) + 0.28)).toFixed(2);
                        var absoluteReload = parseFloat(rateOfFire) + parseFloat(volleyTime) + 0.28
                        var raw = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * 1) / absoluteReload).toFixed(2);
                        var light = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier1 / 100)) / absoluteReload).toFixed(2);
                        var medium = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier2 / 100)) / absoluteReload).toFixed(2);
                        var heavy = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier3 / 100)) / absoluteReload).toFixed(2);
                        var range = gear[i].tiers[x].stats.range.firing;
                        let spread = 0;
                        if (gear[i].tiers[x].stats.spread !== undefined) {spread = gear[i].tiers[x].stats.spread.value}
                        var angle = gear[i].tiers[x].stats.angle.value;
                        var attr = gear[i].tiers[x].stats.characteristic.formatted;
                        var ammoType = (gear[i].tiers[x].stats.ammoType.value).replace(/[0-9]/g, "").replace("(","");
                        var ammoTypeDesc = gear[i].tiers[x].stats.ammoType.formatted;
                        var faction = gear[i].nationality;
                        return `
                            <tr data-toggle="modal" data-target=".${target}" onclick="${target}()" class="table${target}">
                                <td class="mozkit"><div class="${rarity} border border-dark rounded divcon"><img class="icon" src="${gear[i].image}"></div></td>
                                <td>${id}</td>
                                <td>${firepower}</td>
                                <td>${antiair}</td>
                                <td>${volleyA}×${volleyB}</td>
                                <td>${damage}</td>
                                <td>${coefficient}%</td>
                                <td>${volleyTime}</td>
                                <td>${rateOfFire}</td>
                                <td>${rnds}</td>
                                <td>${raw}</td>
                                <td>${light}</td>
                                <td>${medium}</td>
                                <td>${heavy}</td>
                                <td>${range}</td>
                                <td>${spread}°</td>
                                <td>${angle}°</td>
                                <td>${attr}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${ammoTypeDesc}">${ammoType}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${faction}"><img class="faction-banner" src="AL/Faction/${faction}.png"></td>
                            </tr>
                        `
                    }
                }
            }
        }
    }
}
function CAGun (name, target, rarity, modifier1, modifier2, modifier3, coefficient) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var firepower = parseFloat(gear[i].tiers[x].stats.firepower.formatted);
                        var antiair = parseFloat(gear[i].tiers[x].stats.antiair.formatted);
                        var volleyA = parseFloat(gear[i].tiers[x].stats.volley.multiplier);
                        var volleyB = parseFloat(gear[i].tiers[x].stats.volley.count);
                        var damage = parseFloat(gear[i].tiers[x].stats.damage.max);
                        var volleyTime = gear[i].tiers[x].stats.volleyTime.value;
                        var rateOfFire = (gear[i].tiers[x].stats.rateOfFire.max).replace('s','');
                        var rnds = ((volleyA * volleyB) / (parseFloat(rateOfFire) + parseFloat(volleyTime) + 0.30)).toFixed(2);
                        var absoluteReload = parseFloat(rateOfFire) + parseFloat(volleyTime) + 0.30
                        var raw = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * 1) / absoluteReload).toFixed(2);
                        var light = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier1 / 100)) / absoluteReload).toFixed(2);
                        var medium = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier2 / 100)) / absoluteReload).toFixed(2);
                        var heavy = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier3 / 100)) / absoluteReload).toFixed(2);
                        var range = gear[i].tiers[x].stats.range.firing;
                        let spread = 0;
                        if (gear[i].tiers[x].stats.spread !== undefined) {spread = gear[i].tiers[x].stats.spread.value}
                        var angle = gear[i].tiers[x].stats.angle.value;
                        var attr = gear[i].tiers[x].stats.characteristic.formatted;
                        var ammoType = (gear[i].tiers[x].stats.ammoType.value).replace(/[0-9]/g, "").replace("(","");
                        var ammoTypeDesc = gear[i].tiers[x].stats.ammoType.formatted;
                        var faction = gear[i].nationality;
                        return `
                            <tr data-toggle="modal" data-target=".${target}" onclick="${target}()" class="table${target}">
                                <td class="mozkit"><div class="${rarity} border border-dark rounded divcon"><img class="icon" src="${gear[i].image}"></div></td>
                                <td>${id}</td>
                                <td>${firepower}</td>
                                <td>${antiair}</td>
                                <td>${volleyA}×${volleyB}</td>
                                <td>${damage}</td>
                                <td>${coefficient}%</td>
                                <td>${volleyTime}</td>
                                <td>${rateOfFire}</td>
                                <td>${rnds}</td>
                                <td>${raw}</td>
                                <td>${light}</td>
                                <td>${medium}</td>
                                <td>${heavy}</td>
                                <td>${range}</td>
                                <td>${spread}°</td>
                                <td>${angle}°</td>
                                <td>${attr}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${ammoTypeDesc}">${ammoType}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${faction}"><img class="faction-banner" src="AL/Faction/${faction}.png"></td>
                            </tr>
                        `
                    }
                }
            }
        }
    }
}
function CBGun (name, target, rarity, modifier1, modifier2, modifier3, coefficient) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var firepower = parseFloat(gear[i].tiers[x].stats.firepower.formatted);
                        var antiair = parseFloat(gear[i].tiers[x].stats.antiair.formatted);
                        var volleyA = parseFloat(gear[i].tiers[x].stats.volley.multiplier);
                        var volleyB = parseFloat(gear[i].tiers[x].stats.volley.count);
                        var damage = parseFloat(gear[i].tiers[x].stats.damage.max);
                        var volleyTime = gear[i].tiers[x].stats.volleyTime.value;
                        var rateOfFire = (gear[i].tiers[x].stats.rateOfFire.max).replace('s','');
                        var absoluteReload = parseFloat(rateOfFire) + parseFloat(volleyTime) + 0.30
                        var raw = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * 1) / absoluteReload).toFixed(2);
                        var light = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier1 / 100)) / absoluteReload).toFixed(2);
                        var medium = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier2 / 100)) / absoluteReload).toFixed(2);
                        var heavy = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier3 / 100)) / absoluteReload).toFixed(2);
                        var range = gear[i].tiers[x].stats.range.firing;
                        let spread = 0;
                        if (gear[i].tiers[x].stats.spread !== undefined) {spread = gear[i].tiers[x].stats.spread.value}
                        var angle = gear[i].tiers[x].stats.angle.value;
                        var attr = gear[i].tiers[x].stats.characteristic.formatted;
                        var ammoType = (gear[i].tiers[x].stats.ammoType.value).replace(/[0-9]/g, "").replace("(","");
                        var ammoTypeDesc = gear[i].tiers[x].stats.ammoType.formatted;
                        var faction = gear[i].nationality;
                        return `
                            <tr data-toggle="modal" data-target=".${target}" onclick="${target}()" class="table${target}">
                                <td class="mozkit"><div class="${rarity} border border-dark rounded divcon"><img class="icon" src="${gear[i].image}"></div></td>
                                <td>${id}</td>
                                <td>${firepower}</td>
                                <td>${antiair}</td>
                                <td>${volleyA}×${volleyB}</td>
                                <td>${damage}</td>
                                <td>${coefficient}%</td>
                                <td>${volleyTime}</td>
                                <td>${rateOfFire}</td>
                                <td>${raw}</td>
                                <td>${light}</td>
                                <td>${medium}</td>
                                <td>${heavy}</td>
                                <td>${range}</td>
                                <td>${spread}°</td>
                                <td>${angle}°</td>
                                <td>${attr}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${ammoTypeDesc}">${ammoType}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${faction}"><img class="faction-banner" src="AL/Faction/${faction}.png"></td>
                            </tr>
                        `
                    }
                }
            }
        }
    }
}
function BBGun (name, target, rarity, modifier1, modifier2, modifier3, coefficient) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var firepower = parseFloat(gear[i].tiers[x].stats.firepower.formatted);
                        let antiair = 0;
                        if (gear[i].tiers[x].stats.antiair !== undefined) {antiair = gear[i].tiers[x].stats.antiair.formatted}
                        var volleyA = parseFloat(gear[i].tiers[x].stats.volley.multiplier);
                        var volleyB = parseFloat(gear[i].tiers[x].stats.volley.count);
                        var damage = parseFloat(gear[i].tiers[x].stats.damage.max);
                        var volleyTime = gear[i].tiers[x].stats.volleyTime.value;
                        var rateOfFire = (gear[i].tiers[x].stats.rateOfFire.max).replace('s','');
                        var absoluteReload = parseFloat(rateOfFire) + parseFloat(volleyTime);
                        var raw = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * 1) / absoluteReload).toFixed(2);
                        var light = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier1 / 100)) / absoluteReload).toFixed(2);
                        var medium = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier2 / 100)) / absoluteReload).toFixed(2);
                        var heavy = ((damage * (parseFloat(coefficient)/100) * (volleyA * volleyB) * (modifier3 / 100)) / absoluteReload).toFixed(2);
                        var range = gear[i].tiers[x].stats.range.formatted;
                        let spread = 0;
                        if (gear[i].tiers[x].stats.spread !== undefined) {spread = gear[i].tiers[x].stats.spread.formatted}
                        var angle = gear[i].tiers[x].stats.angle.value;
                        var attr = gear[i].tiers[x].stats.characteristic.formatted;
                        var ammoType = (gear[i].tiers[x].stats.ammoType.value).replace(/[0-9]/g, "").replace("(","");
                        var ammoTypeDesc = gear[i].tiers[x].stats.ammoType.formatted;
                        var faction = gear[i].nationality;
                        return `
                            <tr data-toggle="modal" data-target=".${target}" onclick="${target}()" class="table${target}">
                                <td class="mozkit"><div class="${rarity} border border-dark rounded divcon"><img class="icon" src="${gear[i].image}"></div></td>
                                <td>${id}</td>
                                <td>${firepower}</td>
                                <td>${antiair}</td>
                                <td>${volleyA}×${volleyB}</td>
                                <td>${damage}</td>
                                <td>${coefficient}%</td>
                                <td>${volleyTime}</td>
                                <td>${rateOfFire}</td>
                                <td>${raw}</td>
                                <td>${light}</td>
                                <td>${medium}</td>
                                <td>${heavy}</td>
                                <td>${range}</td>
                                <td>${spread}°</td>
                                <td>${angle}°</td>
                                <td>${attr}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${ammoTypeDesc}">${ammoType}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${faction}"><img class="faction-banner" src="AL/Faction/${faction}.png"></td>
                            </tr>
                        `
                    }
                }
            }
        }
    }
}
function TSurf (name, target, rarity, range, coefficient) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var torpedo = parseFloat(gear[i].tiers[x].stats.torpedo.formatted);
                        var noOfTorpedoes = parseFloat(gear[i].tiers[x].stats.noOfTorpedoes.value);
                        var damage = parseFloat(gear[i].tiers[x].stats.damage.max);
                        var rateOfFire = (gear[i].tiers[x].stats.rateOfFire.max).replace('s','');
                        var fixedDamage = damage * (parseFloat(coefficient)/100) * noOfTorpedoes 
                        var light = ((fixedDamage * (80 / 100)) / parseFloat(rateOfFire)).toFixed(2);
                        var medium = ((fixedDamage * (100 / 100)) / parseFloat(rateOfFire)).toFixed(2);
                        var heavy = ((fixedDamage * (130 / 100)) / parseFloat(rateOfFire)).toFixed(2);
                        var preloadLight = (parseFloat(light) + ((fixedDamage * (80 / 100)) / 60)).toFixed(2);
                        var preloadMedium = (parseFloat(medium) + ((fixedDamage * (100 / 100)) / 60)).toFixed(2);
                        var preloadHeavy = (parseFloat(heavy) + ((fixedDamage * (130 / 100)) / 60)).toFixed(2);
                        let spread = 0;
                        if (gear[i].tiers[x].stats.spread !== undefined) {spread = gear[i].tiers[x].stats.spread.value}
                        var angle = gear[i].tiers[x].stats.angle.value;
                        var attr = gear[i].tiers[x].stats.characteristic.formatted;
                        var faction = gear[i].nationality;
                        return `
                            <tr data-toggle="modal" data-target=".${target}" onclick="${target}()" class="table${target}">
                                <td class="mozkit"><div class="${rarity} border border-dark rounded divcon"><img class="icon" src="${gear[i].image}"></div></td>
                                <td>${id}</td>
                                <td>${torpedo}</td>
                                <td>${noOfTorpedoes}</td>
                                <td>${damage}</td>
                                <td>${rateOfFire}</td>
                                <td>${light}</td>
                                <td>${medium}</td>
                                <td>${heavy}</td>
                                <td>${preloadLight}</td>
                                <td>${preloadMedium}</td>
                                <td>${preloadHeavy}</td>
                                <td>${range}</td>
                                <td>${spread}°</td>
                                <td>${angle}°</td>
                                <td>${attr}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${faction}"><img class="faction-banner" src="AL/Faction/${faction}.png"></td>
                            </tr>
                        `
                    }
                }
            }
        }
    }
}
function TSubs (name, target, rarity, coefficient) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var torpedo = parseFloat(gear[i].tiers[x].stats.torpedo.formatted);
                        var noOfTorpedoes = parseFloat(gear[i].tiers[x].stats.noOfTorpedoes.value);
                        var damage = parseFloat(gear[i].tiers[x].stats.damage.max);
                        var rateOfFire = (gear[i].tiers[x].stats.rateOfFire.max).replace('s','');
                        var fixedDamage = damage * (parseFloat(coefficient)/100) * noOfTorpedoes 
                        var light = ((fixedDamage * (80 / 100)) / parseFloat(rateOfFire)).toFixed(2);
                        var medium = ((fixedDamage * (100 / 100)) / parseFloat(rateOfFire)).toFixed(2);
                        var heavy = ((fixedDamage * (130 / 100)) / parseFloat(rateOfFire)).toFixed(2);
                        var range = gear[i].tiers[x].stats.range.shell;
                        let spread = 0;
                        if (gear[i].tiers[x].stats.spread !== undefined) {spread = gear[i].tiers[x].stats.spread.value}
                        var angle = gear[i].tiers[x].stats.angle.value;
                        var attr = gear[i].tiers[x].stats.characteristic.formatted;
                        var faction = gear[i].nationality;
                        return `
                            <tr data-toggle="modal" data-target=".${target}" onclick="${target}()" class="table${target}">
                                <td class="mozkit"><div class="${rarity} border border-dark rounded divcon"><img class="icon" src="${gear[i].image}"></div></td>
                                <td>${id}</td>
                                <td>${torpedo}</td>
                                <td>${noOfTorpedoes}</td>
                                <td>${damage}</td>
                                <td>${rateOfFire}</td>
                                <td>${light}</td>
                                <td>${medium}</td>
                                <td>${heavy}</td>
                                <td>${range}</td>
                                <td>${spread}°</td>
                                <td>${angle}°</td>
                                <td>${attr}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${faction}"><img class="faction-banner" src="AL/Faction/${faction}.png"></td>
                            </tr>
                        `
                    }
                }
            }
        }
    }
}
function FDive (name, target, rarity, AADPS, AABurst, coefficient) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var aviation = parseFloat(gear[i].tiers[x].stats.aviation.formatted);
                        let ordnance1 = "";
                        let ordnance2 = "";
                        let ordnance3 = "";
                        if (gear[i].tiers[x].stats.ordnance !== undefined) {
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].formatted !== undefined) {ordnance1 = gear[i].tiers[x].stats.ordnance.stats[0].formatted}
                    		if (gear[i].tiers[x].stats.ordnance.stats[1] !== undefined) {ordnance2 = "<br>" + gear[i].tiers[x].stats.ordnance.stats[1].formatted}
                			if (gear[i].tiers[x].stats.ordnance.stats[2] !== undefined) {ordnance3 = "<br>" + gear[i].tiers[x].stats.ordnance.stats[2].formatted}
                        }
                        let guns1 = ""
                        let guns2 = ""
                        let guns3 = ""
                    	if (gear[i].tiers[x].stats.aAGuns !== undefined) {
                    		if (gear[i].tiers[x].stats.aAGuns.stats[0].formatted !== undefined) {guns1 = gear[i].tiers[x].stats.aAGuns.stats[0].formatted}
                			if (gear[i].tiers[x].stats.aAGuns.stats[1] !== undefined) {guns2 = "<br>" + gear[i].tiers[x].stats.aAGuns.stats[1].formatted}
            				if (gear[i].tiers[x].stats.aAGuns.stats[2] !== undefined) {guns3 = "<br>" + gear[i].tiers[x].stats.aAGuns.stats[2].formatted}
                    	}
                        var rateOfFire = (gear[i].tiers[x].stats.rateOfFire.max).replace('s','');
                        var fixedReload = (parseFloat(rateOfFire) * 2.2) + 0.1;
                        let bombDamage = 0;
                        let bombCount = 0;
                        let am = [100, 100, 100]
                        if (gear[i].tiers[x].stats.ordnance !== undefined) {
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "100lb Bomb T2") {bombDamage = 159; am = [80,85,100]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "100lb Bomb T3") {bombDamage = 173; am = [80,85,100]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "100lb Bomb T0") {bombDamage = 185; am = [80,85,100]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "500lb Bomb T2") {bombDamage = 330; am = [80,90,110]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "500lb Bomb T3") {bombDamage = 360; am = [80,90,110]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "500lb Bomb T0") {bombDamage = 380; am = [80,90,110]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "1000lb Bomb T2") {bombDamage = 369; am = [80,95,115]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "1000lb Bomb T3") {bombDamage = 402; am = [80,95,115]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "1000lb Bomb T0") {bombDamage = 416; am = [80,95,115]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "1000lb BC Bomb T0") {bombDamage = 440; am = [80,95,115]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "1600lb Bomb T2") {bombDamage = 393; am = [75,100,120]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "1600lb Bomb T3") {bombDamage = 429; am = [75,100,120]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "1600lb AP Bomb T0") {bombDamage = 429; am = [80,110,130]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "2000lb Bomb T2") {bombDamage = 417; am = [70,105,125]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "2000lb Bomb T3") {bombDamage = 456; am = [70,105,125]}
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].unit == "2000lb Bomb T0") {bombDamage = 480; am = [70,105,125]}
                        	bombCount = gear[i].tiers[x].stats.ordnance.stats[0].count
                        }
                        let bombDamage2 = 0;
                        let bombCount2 = 0;
                        let am2 = [100, 100, 100]
                        if (gear[i].tiers[x].stats.ordnance !== undefined) {
                        	if (gear[i].tiers[x].stats.ordnance.stats[1] !== undefined) {
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "100lb Bomb T2") {bombDamage2 = 159; am2 = [80,85,100]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "100lb Bomb T3") {bombDamage2 = 173; am2 = [80,85,100]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "100lb Bomb T0") {bombDamage2 = 185; am2 = [80,85,100]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "500lb Bomb T2") {bombDamage2 = 330; am2 = [80,90,110]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "500lb Bomb T3") {bombDamage2 = 360; am2 = [80,90,110]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "500lb Bomb T0") {bombDamage2 = 380; am2 = [80,90,110]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "1000lb Bomb T2") {bombDamage2 = 369; am2 = [80,95,115]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "1000lb Bomb T3") {bombDamage2 = 402; am2 = [80,95,115]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "1000lb Bomb T0") {bombDamage2 = 416; am2 = [80,95,115]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "1000lb BC Bomb T0") {bombDamage2 = 440; am2 = [80,95,115]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "1600lb Bomb T2") {bombDamage2 = 393; am2 = [75,100,120]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "1600lb Bomb T3") {bombDamage2 = 429; am2 = [75,100,120]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "1600lb AP Bomb T0") {bombDamage2 = 429; am2 = [80,110,130]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "2000lb Bomb T2") {bombDamage2 = 417; am2 = [70,105,125]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "2000lb Bomb T3") {bombDamage2 = 456; am2 = [70,105,125]}
	                        	if (gear[i].tiers[x].stats.ordnance.stats[1].unit == "2000lb Bomb T0") {bombDamage2 = 480; am2 = [70,105,125]}
	                        	bombCount2 = gear[i].tiers[x].stats.ordnance.stats[1].count
	                        }
                        }
                        var bomb1 = (bombCount * bombDamage)
                        var bomb2 = (bombCount2 * bombDamage2)
                        var light = ((((bomb1 * (am[0] / 100)) + (bomb2 * (am2[0] / 100))) * (coefficient / 100)) / fixedReload).toFixed(2);
                        var medium = ((((bomb1 * (am[1] / 100)) + (bomb2 * (am2[1] / 100))) * (coefficient / 100)) / fixedReload).toFixed(2);
                        var heavy = ((((bomb1 * (am[2] / 100)) + (bomb2 * (am2[2] / 100))) * (coefficient / 100)) / fixedReload).toFixed(2);
                        var speed = gear[i].tiers[x].stats.speed.formatted;
                        var crashDamage = gear[i].tiers[x].stats.crashDamage.formatted;
                        var faction = gear[i].nationality;
                        return `
                            <tr data-toggle="modal" data-target=".${target}" onclick="${target}()" class="table${target}">
                                <td class="mozkit"><div class="${rarity} border border-dark rounded divcon"><img class="icon" src="${gear[i].image}"></div></td>
                                <td>${id}</td>
                                <td>${aviation}</td>
                                <td>${ordnance1 + ordnance2 + ordnance3}</td>
                                <td>${guns1 + guns2 + guns3}</td>
                                <td>${rateOfFire}</td>
                                <td>${light}</td>
                                <td>${medium}</td>
                                <td>${heavy}</td>
                                <td>${AADPS}</td>
                                <td>${AABurst}</td>
                                <td>${speed}</td>
                                <td>${crashDamage}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${faction}"><img class="faction-banner" src="AL/Faction/${faction}.png"></td>
                            </tr>
                        `
                    }
                }
            }
        }
    }
}
function TBomb (name, target, rarity, damage, AADPS, AABurst, coefficient) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var aviation = parseFloat(gear[i].tiers[x].stats.aviation.formatted);
                        let ordnance = "";
                        let ordnanceCount = 0;
                        if (gear[i].tiers[x].stats.ordnance !== undefined) {
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].formatted !== undefined) {ordnance = gear[i].tiers[x].stats.ordnance.stats[0].formatted}
                        	ordnanceCount = parseFloat(gear[i].tiers[x].stats.ordnance.stats[0].count)
                        }
                        let guns1 = ""
                        let guns2 = ""
                        let guns3 = ""
                    	if (gear[i].tiers[x].stats.aAGuns !== undefined) {
                    		if (gear[i].tiers[x].stats.aAGuns.stats[0].formatted !== undefined) {guns1 = gear[i].tiers[x].stats.aAGuns.stats[0].formatted}
                			if (gear[i].tiers[x].stats.aAGuns.stats[1] !== undefined) {guns2 = "<br>" + gear[i].tiers[x].stats.aAGuns.stats[1].formatted}
            				if (gear[i].tiers[x].stats.aAGuns.stats[2] !== undefined) {guns3 = "<br>" + gear[i].tiers[x].stats.aAGuns.stats[2].formatted}
                    	}
                        var rateOfFire = (gear[i].tiers[x].stats.rateOfFire.max).replace('s','');
                        var fixedReload = (parseFloat(rateOfFire) * 2.2) + 0.1;
                        var light = (((damage * ordnanceCount * 0.8) * (coefficient / 100)) / fixedReload).toFixed(2);
                        var medium = (((damage * ordnanceCount * 1.1) * (coefficient / 100)) / fixedReload).toFixed(2);
                        var heavy = (((damage * ordnanceCount * 1.3) * (coefficient / 100)) / fixedReload).toFixed(2);
                        var speed = gear[i].tiers[x].stats.speed.formatted;
                        var crashDamage = gear[i].tiers[x].stats.crashDamage.formatted;
                        var faction = gear[i].nationality;
                        return `
                            <tr data-toggle="modal" data-target=".${target}" onclick="${target}()" class="table${target}">
                                <td class="mozkit"><div class="${rarity} border border-dark rounded divcon"><img class="icon" src="${gear[i].image}"></div></td>
                                <td>${id}</td>
                                <td>${aviation}</td>
                                <td>${ordnance}</td>
                                <td>${guns1 + guns2 + guns3}</td>
                                <td>${damage}</td>
                                <td>${rateOfFire}</td>
                                <td>${light}</td>
                                <td>${medium}</td>
                                <td>${heavy}</td>
                                <td>${AADPS}</td>
                                <td>${AABurst}</td>
                                <td>${speed}</td>
                                <td>${crashDamage}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${faction}"><img class="faction-banner" src="AL/Faction/${faction}.png"></td>
                            </tr>
                        `
                    }
                }
            }
        }
    }
}
function AAGun (name, target, rarity, coefficient) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        let firepower = 0;
                        if (gear[i].tiers[x].stats.firepower !== undefined) {firepower = parseFloat(gear[i].tiers[x].stats.firepower.formatted);}
                        var antiair = parseFloat(gear[i].tiers[x].stats.antiair.formatted);
                        let accuracy = 0;
                        if (gear[i].tiers[x].stats.accuracy !== undefined) {accuracy = parseFloat(gear[i].tiers[x].stats.accuracy.formatted);}
                        var damage = parseFloat(gear[i].tiers[x].stats.damage.max);
                        var rateOfFire = (gear[i].tiers[x].stats.rateOfFire.max).replace('s','');
                        var AADPS = ((damage * (coefficient / 100)) / (parseFloat(rateOfFire) + 0.5)).toFixed(2);
                        var range = gear[i].tiers[x].stats.range.formatted;
                        var faction = gear[i].nationality;
                        return `
                            <tr data-toggle="modal" data-target=".${target}" onclick="${target}()" class="table${target}">
                                <td class="mozkit"><div class="${rarity} border border-dark rounded divcon"><img class="icon" src="${gear[i].image}"></div></td>
                                <td>${id}</td>
                                <td>${firepower}</td>
                                <td>${antiair}</td>
                                <td>${accuracy}</td>
                                <td>${damage}</td>
                                <td>${rateOfFire}</td>
                                <td>${AADPS}</td>
                                <td>${range}</td>
                                <td data-toggle="tooltip" data-placement="top" title="${faction}"><img class="faction-banner" src="AL/Faction/${faction}.png"></td>
                            </tr>
                        `
                    }
                }
            }
        }
    }
}
function Auxiliary (name, target, rarity, enhance) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var star = gear[i].tiers[x].stars.stars
                        let health = "";
                        let firepower = "";
						let antiair = "";
						let torpedo = "";
						let aviation = "";
						let reload = "";
						let evasion = "";
						let asw = "";
						let oxygen = "";
						let accuracy = "";
						let speed = "";
						if (enhance == "mid") {
	                        if (gear[i].tiers[x].stats.health !== undefined) {health = gear[i].tiers[x].stats.health.mid}
		                    if (gear[i].tiers[x].stats.firepower !== undefined) {firepower = gear[i].tiers[x].stats.firepower.mid}
	                        if (gear[i].tiers[x].stats.antiair !== undefined) {antiair = gear[i].tiers[x].stats.antiair.mid}
	                        if (gear[i].tiers[x].stats.torpedo !== undefined) {torpedo = gear[i].tiers[x].stats.torpedo.mid}
	                        if (gear[i].tiers[x].stats.aviation !== undefined) {aviation = gear[i].tiers[x].stats.aviation.mid}
	                        if (gear[i].tiers[x].stats.reload !== undefined) {reload = gear[i].tiers[x].stats.reload.mid}
	                        if (gear[i].tiers[x].stats.evasion !== undefined) {evasion = gear[i].tiers[x].stats.evasion.mid}
	                        if (gear[i].tiers[x].stats.antisubmarineWarfare !== undefined) {asw = gear[i].tiers[x].stats.antisubmarineWarfare.mid}
	                        if (gear[i].tiers[x].stats.oxygen !== undefined) {oxygen = gear[i].tiers[x].stats.oxygen.mid}
	                        if (gear[i].tiers[x].stats.accuracy !== undefined) {accuracy = gear[i].tiers[x].stats.accuracy.mid}
	                        if (gear[i].tiers[x].stats.speed !== undefined) {speed = gear[i].tiers[x].stats.speed.mid}
	                    }
		                if (enhance == "max") {
	                        if (gear[i].tiers[x].stats.health !== undefined) {health = gear[i].tiers[x].stats.health.max}
		                    if (gear[i].tiers[x].stats.firepower !== undefined) {firepower = gear[i].tiers[x].stats.firepower.max}
	                        if (gear[i].tiers[x].stats.antiair !== undefined) {antiair = gear[i].tiers[x].stats.antiair.max}
	                        if (gear[i].tiers[x].stats.torpedo !== undefined) {torpedo = gear[i].tiers[x].stats.torpedo.max}
	                        if (gear[i].tiers[x].stats.aviation !== undefined) {aviation = gear[i].tiers[x].stats.aviation.max}
	                        if (gear[i].tiers[x].stats.reload !== undefined) {reload = gear[i].tiers[x].stats.reload.max}
	                        if (gear[i].tiers[x].stats.evasion !== undefined) {evasion = gear[i].tiers[x].stats.evasion.max}
	                        if (gear[i].tiers[x].stats.antisubmarineWarfare !== undefined) {asw = gear[i].tiers[x].stats.antisubmarineWarfare.max}
	                        if (gear[i].tiers[x].stats.oxygen !== undefined) {oxygen = gear[i].tiers[x].stats.oxygen.max}
	                        if (gear[i].tiers[x].stats.accuracy !== undefined) {accuracy = gear[i].tiers[x].stats.accuracy.max}
	                        if (gear[i].tiers[x].stats.speed !== undefined) {speed = gear[i].tiers[x].stats.speed.max}
	                    }
                        var notes = gear[i].misc.notes;
                        var faction = gear[i].nationality;
                        return `
                            <tr data-toggle="modal" data-target=".${target}" onclick="${target}()" class="table${target}">
                                <td class="mozkit"><div class="${rarity} border border-dark rounded divcon"><img class="icon" src="${gear[i].image}"></div></td>
                                <td>${id}</td>
                                <td>${star}</td>
                                <td>${health}</td>
                                <td>${firepower}</td>
                                <td>${antiair}</td>
                                <td>${torpedo}</td>
                                <td>${aviation}</td>
                                <td>${reload}</td>
                                <td>${evasion}</td>
                                <td>${asw}</td>
                                <td>${oxygen}</td>
                                <td>${accuracy}</td>
                                <td>${speed}</td>
                                <td>${notes}</td>
                            </tr>
                        `
                    }
                }
            }
        }
    }
}
function ModalCreate (name, target, rarity) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var firepower = gear[i].tiers[x].stats.firepower.formatted;
                        var antiair = gear[i].tiers[x].stats.antiair.formatted;
                        var volleyA = gear[i].tiers[x].stats.volley.multiplier;
                        var volleyB = gear[i].tiers[x].stats.volley.count;
                        var volley = gear[i].tiers[x].stats.volley.formatted
                        var damage = gear[i].tiers[x].stats.damage.formatted;
                        var coefficient = gear[i].tiers[x].stats.coefficient.formatted;
                        var volleyTime = gear[i].tiers[x].stats.volleyTime.formatted;
                        var rateOfFire = gear[i].tiers[x].stats.rateOfFire.formatted;
                        var rangeF = gear[i].tiers[x].stats.range.firing;
                        var rangeS = gear[i].tiers[x].stats.range.shell;
                        let spread = 0;
                        if (gear[i].tiers[x].stats.spread !== undefined) {spread = gear[i].tiers[x].stats.spread.formatted}
                    	if (gear[i].tiers[x].stats.spread == undefined) {spread = 0}
                        var angle = gear[i].tiers[x].stats.angle.formatted;
                        var attr = gear[i].tiers[x].stats.characteristic.formatted;
                        var ammoType = gear[i].tiers[x].stats.ammoType.formatted;
                        var faction = gear[i].nationality;
                        var notes = gear[i].misc.notes;
                        var animation = gear[i].misc.animation;
                        var obtain = gear[i].misc.obtainedFrom;
                        return `
                        <div class="modal fade ${target}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <table class="table table-hover table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th colspan="10">${id}</th>
                                            </tr>
                                            <tr>
                                                <th colspan="10">Stats</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th colspan="2">Firepower</th>
                                                <td colspan="2">${firepower}</td>
                                                <th colspan="2">Anti-Air</th>
                                                <td colspan="2">${antiair}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Damage</th>
                                                <td colspan="2">${damage}</td>
                                                <th colspan="2">Rate of Fire</th>
                                                <td colspan="2">${rateOfFire}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Spread</th>
                                                <td colspan="2">${spread}</td>
                                                <th colspan="2">Angle</th>
                                                <td colspan="2">${angle}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Range</th>
                                                <td><strong>Firing:</strong> ${rangeF}</td>
                                                <td><strong>Shell:</strong> ${rangeS}</td>
                                                <th colspan="2">Volley</th>
                                                <td colspan="2">${volley}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Volley Time</th>
                                                <td colspan="2">${volleyTime}</td>
                                                <th colspan="2">Coefficient</th>
                                                <td colspan="2">${coefficient}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Ammo Type</th>
                                                <td colspan="2">${ammoType}</td>
                                                <th colspan="2">Characteristic</th>
                                                <td colspan="2">${attr}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover text-center">
                                        <thead>
                                            <tr>
                                                <th>Pattern Animation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${notes}</td>
                                            </tr>
                                            <tr>
                                                <td><img src="${animation}"></td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                                <th>Obtain</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${obtain}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover table-bordered text-center" style="margin-bottom: auto;">
                                        <thead>
                                            <tr>
                                                <th colspan="20">Used By</th>
                                            </tr>
                                            <tr>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Destroyer"><img src="AL/Type/DD.png"><br>DD</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Cruiser"><img src="AL/Type/CL.png"><br>CL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Heavy Cruiser"><img src="AL/Type/CA.png"><br>CA</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Monitor"><img src="AL/Type/BM.png"><br>BM</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Large Cruiser"><img src="AL/Type/CB.png"><br>CB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battleship"><img src="AL/Type/BB.png"><br>BB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battlecruiser"><img src="AL/Type/BC.png"><br>BC</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aviation Battleship"><img src="AL/Type/BBV.png"><br>BBV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aircraft Carrier"><img src="AL/Type/CV.png"><br>CV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Aircraft Carrier"><img src="AL/Type/CVL.png"><br>CVL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Repair Ship"><img src="AL/Type/AR.png"><br>AR</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Munition Ship"><img src="AL/Type/AE.png"><br>AE</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine"><img src="AL/Type/SS.png"><br>SS</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine Carrier"><img src="AL/Type/SSV.png"><br>SSV</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="usedBy${target}"></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                }
            }
        }
    }
}
function ModalCreate2 (name, target, rarity) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var firepower = gear[i].tiers[x].stats.firepower.formatted;
                        let antiair = 0;
                        if (gear[i].tiers[x].stats.antiair !== undefined) {antiair = gear[i].tiers[x].stats.antiair.formatted}
                        var volleyA = gear[i].tiers[x].stats.volley.multiplier;
                        var volleyB = gear[i].tiers[x].stats.volley.count;
                        var volley = gear[i].tiers[x].stats.volley.formatted
                        var damage = gear[i].tiers[x].stats.damage.formatted;
                        var coefficient = gear[i].tiers[x].stats.coefficient.formatted;
                        var volleyTime = gear[i].tiers[x].stats.volleyTime.formatted;
                        var rateOfFire = gear[i].tiers[x].stats.rateOfFire.formatted;
                        var range = gear[i].tiers[x].stats.range.formatted;
                        let spread = 0;
                        if (gear[i].tiers[x].stats.spread !== undefined) {spread = gear[i].tiers[x].stats.spread.formatted}
                    	if (gear[i].tiers[x].stats.spread == undefined) {spread = 0}
                        var angle = gear[i].tiers[x].stats.angle.formatted;
                        var attr = gear[i].tiers[x].stats.characteristic.formatted;
                        var ammoType = gear[i].tiers[x].stats.ammoType.formatted;
                        var faction = gear[i].nationality;
                        var notes = gear[i].misc.notes;
                        var obtain = gear[i].misc.obtainedFrom;
                        return `
                        <div class="modal fade ${target}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <table class="table table-hover table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th colspan="10">${id}</th>
                                            </tr>
                                            <tr>
                                                <th colspan="10">Stats</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th colspan="2">Firepower</th>
                                                <td colspan="2">${firepower}</td>
                                                <th colspan="2">Anti-Air</th>
                                                <td colspan="2">${antiair}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Damage</th>
                                                <td colspan="2">${damage}</td>
                                                <th colspan="2">Rate of Fire</th>
                                                <td colspan="2">${rateOfFire}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Spread</th>
                                                <td colspan="2">${spread}</td>
                                                <th colspan="2">Angle</th>
                                                <td colspan="2">${angle}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Range</th>
                                                <td colspan="2">${range}</td>
                                                <th colspan="2">Volley</th>
                                                <td colspan="2">${volley}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Volley Time</th>
                                                <td colspan="2">${volleyTime}</td>
                                                <th colspan="2">Coefficient</th>
                                                <td colspan="2">${coefficient}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Ammo Type</th>
                                                <td colspan="2">${ammoType}</td>
                                                <th colspan="2">Characteristic</th>
                                                <td colspan="2">${attr}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover text-center">
                                        <thead>
                                            <tr>
                                                <th>Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${notes}</td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                                <th>Obtain</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${obtain}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover table-bordered text-center" style="margin-bottom: auto;">
                                        <thead>
                                            <tr>
                                                <th colspan="20">Used By</th>
                                            </tr>
                                            <tr>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Destroyer"><img src="AL/Type/DD.png"><br>DD</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Cruiser"><img src="AL/Type/CL.png"><br>CL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Heavy Cruiser"><img src="AL/Type/CA.png"><br>CA</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Monitor"><img src="AL/Type/BM.png"><br>BM</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Large Cruiser"><img src="AL/Type/CB.png"><br>CB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battleship"><img src="AL/Type/BB.png"><br>BB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battlecruiser"><img src="AL/Type/BC.png"><br>BC</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aviation Battleship"><img src="AL/Type/BBV.png"><br>BBV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aircraft Carrier"><img src="AL/Type/CV.png"><br>CV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Aircraft Carrier"><img src="AL/Type/CVL.png"><br>CVL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Repair Ship"><img src="AL/Type/AR.png"><br>AR</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Munition Ship"><img src="AL/Type/AE.png"><br>AE</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine"><img src="AL/Type/SS.png"><br>SS</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine Carrier"><img src="AL/Type/SSV.png"><br>SSV</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="usedBy${target}"></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                }
            }
        }
    }
}
function ModalCreate3 (name, target, rarity, range) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var torpedo = gear[i].tiers[x].stats.torpedo.formatted;
                        var noOfTorpedoes = gear[i].tiers[x].stats.noOfTorpedoes.formatted
                        var damage = gear[i].tiers[x].stats.damage.formatted;
                        var coefficient = gear[i].tiers[x].stats.coefficient.formatted;
                        var rateOfFire = gear[i].tiers[x].stats.rateOfFire.formatted;
                        let spread = 0;
                        if (gear[i].tiers[x].stats.spread !== undefined) {spread = gear[i].tiers[x].stats.spread.formatted}
                    	if (gear[i].tiers[x].stats.spread == undefined) {spread = 0}
                        var angle = gear[i].tiers[x].stats.angle.formatted;
                        var attr = gear[i].tiers[x].stats.characteristic.formatted;
                        var faction = gear[i].nationality;
                        var notes = gear[i].misc.notes;
                        var animation = gear[i].misc.animation;
                        var obtain = gear[i].misc.obtainedFrom;
                        return `
                        <div class="modal fade ${target}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <table class="table table-hover table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th colspan="10">${id}</th>
                                            </tr>
                                            <tr>
                                                <th colspan="10">Stats</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Torpedo</th>
                                                <td>${torpedo}</td>
                                                <th>No. of Torpedoes</th>
                                                <td>${noOfTorpedoes}</td>
                                            </tr>
                                            <tr>
                                                <th>Damage</th>
                                                <td>${damage}</td>
                                                <th>Rate of Fire</th>
                                                <td>${rateOfFire}</td>
                                            </tr>
                                            <tr>
                                                <th>Spread</th>
                                                <td>${spread}</td>
                                                <th>Angle</th>
                                                <td>${angle}</td>
                                            </tr>
                                            <tr>
                                                <th>Range</th>
                                                <td>${range}</td>
                                                <th>Coefficient</th>
                                                <td>${coefficient}</td>
                                            </tr>
                                            <tr>
                                                <th>Characteristic</th>
                                                <td>${attr}</td>
                                                <th>Nationality</th>
                                                <td>${faction}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover text-center">
                                        <thead>
                                            <tr>
                                                <th>Pattern Animation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${notes}</td>
                                            </tr>
                                            <tr>
                                                <td><img src="${animation}"></td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                                <th>Obtain</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${obtain}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover table-bordered text-center" style="margin-bottom: auto;">
                                        <thead>
                                            <tr>
                                                <th colspan="20">Used By</th>
                                            </tr>
                                            <tr>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Destroyer"><img src="AL/Type/DD.png"><br>DD</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Cruiser"><img src="AL/Type/CL.png"><br>CL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Heavy Cruiser"><img src="AL/Type/CA.png"><br>CA</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Monitor"><img src="AL/Type/BM.png"><br>BM</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Large Cruiser"><img src="AL/Type/CB.png"><br>CB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battleship"><img src="AL/Type/BB.png"><br>BB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battlecruiser"><img src="AL/Type/BC.png"><br>BC</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aviation Battleship"><img src="AL/Type/BBV.png"><br>BBV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aircraft Carrier"><img src="AL/Type/CV.png"><br>CV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Aircraft Carrier"><img src="AL/Type/CVL.png"><br>CVL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Repair Ship"><img src="AL/Type/AR.png"><br>AR</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Munition Ship"><img src="AL/Type/AE.png"><br>AE</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine"><img src="AL/Type/SS.png"><br>SS</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine Carrier"><img src="AL/Type/SSV.png"><br>SSV</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="usedBy${target}"></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                }
            }
        }
    }
}
function ModalCreate4 (name, target, rarity) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var torpedo = gear[i].tiers[x].stats.torpedo.formatted;
                        var noOfTorpedoes = gear[i].tiers[x].stats.noOfTorpedoes.formatted
                        var damage = gear[i].tiers[x].stats.damage.formatted;
                        var coefficient = gear[i].tiers[x].stats.coefficient.formatted;
                        var rateOfFire = gear[i].tiers[x].stats.rateOfFire.formatted;
                        var rangeF = gear[i].tiers[x].stats.range.firing;
                        var rangeS = gear[i].tiers[x].stats.range.shell;
                        let spread = 0;
                        if (gear[i].tiers[x].stats.spread !== undefined) {spread = gear[i].tiers[x].stats.spread.formatted}
                    	if (gear[i].tiers[x].stats.spread == undefined) {spread = 0}
                        var angle = gear[i].tiers[x].stats.angle.formatted;
                        var attr = gear[i].tiers[x].stats.characteristic.formatted;
                        var faction = gear[i].nationality;
                        var notes = gear[i].misc.notes;
                        var animation = gear[i].misc.animation;
                        var obtain = gear[i].misc.obtainedFrom;
                        return `
                        <div class="modal fade ${target}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <table class="table table-hover table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th colspan="10">${id}</th>
                                            </tr>
                                            <tr>
                                                <th colspan="10">Stats</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th colspan="2">Torpedo</th>
                                                <td colspan="2">${torpedo}</td>
                                                <th colspan="2">No. of Torpedoes</th>
                                                <td colspan="2">${noOfTorpedoes}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Damage</th>
                                                <td colspan="2">${damage}</td>
                                                <th colspan="2">Rate of Fire</th>
                                                <td colspan="2">${rateOfFire}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Spread</th>
                                                <td colspan="2">${spread}</td>
                                                <th colspan="2">Angle</th>
                                                <td colspan="2">${angle}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Range</th>
                                                <td><strong>Firing:</strong> ${rangeF}</td>
                                                <td><strong>Shell:</strong> ${rangeS}</td>
                                                <th colspan="2">Coefficient</th>
                                                <td colspan="2">${coefficient}</td>
                                            </tr>
                                            <tr>
                                                <th colspan="2">Characteristic</th>
                                                <td colspan="2">${attr}</td>
                                                <th colspan="2">Nationality</th>
                                                <td colspan="2">${faction}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover text-center">
                                        <thead>
                                            <tr>
                                                <th>Pattern Animation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${notes}</td>
                                            </tr>
                                            <tr>
                                                <td><img src="${animation}"></td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                                <th>Obtain</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${obtain}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover table-bordered text-center" style="margin-bottom: auto;">
                                        <thead>
                                            <tr>
                                                <th colspan="20">Used By</th>
                                            </tr>
                                            <tr>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Destroyer"><img src="AL/Type/DD.png"><br>DD</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Cruiser"><img src="AL/Type/CL.png"><br>CL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Heavy Cruiser"><img src="AL/Type/CA.png"><br>CA</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Monitor"><img src="AL/Type/BM.png"><br>BM</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Large Cruiser"><img src="AL/Type/CB.png"><br>CB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battleship"><img src="AL/Type/BB.png"><br>BB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battlecruiser"><img src="AL/Type/BC.png"><br>BC</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aviation Battleship"><img src="AL/Type/BBV.png"><br>BBV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aircraft Carrier"><img src="AL/Type/CV.png"><br>CV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Aircraft Carrier"><img src="AL/Type/CVL.png"><br>CVL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Repair Ship"><img src="AL/Type/AR.png"><br>AR</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Munition Ship"><img src="AL/Type/AE.png"><br>AE</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine"><img src="AL/Type/SS.png"><br>SS</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine Carrier"><img src="AL/Type/SSV.png"><br>SSV</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="usedBy${target}"></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                }
            }
        }
    }
}
function ModalCreate5 (name, target, rarity) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var aviation = gear[i].tiers[x].stats.aviation.formatted;
                        var planeHealth = gear[i].tiers[x].stats.planeHealth.formatted;
                        var rateOfFire = gear[i].tiers[x].stats.rateOfFire.formatted;
                        var speed = gear[i].tiers[x].stats.speed.formatted;
                        var dodgeLimit = gear[i].tiers[x].stats.dodgeLimit.formatted;
                        var crashDamage = gear[i].tiers[x].stats.crashDamage.formatted;
                        let ordnance1 = "";
                        let ordnance2 = "";
                        let ordnance3 = "";
                        if (gear[i].tiers[x].stats.ordnance !== undefined) {
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].formatted !== undefined) {ordnance1 = gear[i].tiers[x].stats.ordnance.stats[0].formatted}
                    		if (gear[i].tiers[x].stats.ordnance.stats[1] !== undefined) {ordnance2 = "<br>" + gear[i].tiers[x].stats.ordnance.stats[1].formatted}
                			if (gear[i].tiers[x].stats.ordnance.stats[2] !== undefined) {ordnance3 = "<br>" + gear[i].tiers[x].stats.ordnance.stats[2].formatted}
                        }
                        let guns1 = ""
                        let guns2 = ""
                        let guns3 = ""
                    	if (gear[i].tiers[x].stats.aAGuns !== undefined) {
                    		if (gear[i].tiers[x].stats.aAGuns.stats[0].formatted !== undefined) {guns1 = gear[i].tiers[x].stats.aAGuns.stats[0].formatted}
                			if (gear[i].tiers[x].stats.aAGuns.stats[1] !== undefined) {guns2 = "<br>" + gear[i].tiers[x].stats.aAGuns.stats[1].formatted}
            				if (gear[i].tiers[x].stats.aAGuns.stats[2] !== undefined) {guns3 = "<br>" + gear[i].tiers[x].stats.aAGuns.stats[2].formatted}
                    	}
                        var faction = gear[i].nationality;
                        var notes = gear[i].misc.notes;
                        var animation = gear[i].misc.animation;
                        var obtain = gear[i].misc.obtainedFrom;
                        return `
                        <div class="modal fade ${target}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <table class="table table-hover table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th colspan="10">${id}</th>
                                            </tr>
                                            <tr>
                                                <th colspan="10">Stats</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Aviation</th>
                                                <td>${aviation}</td>
                                                <th>Plane Health</th>
                                                <td>${planeHealth}</td>
                                            </tr>
                                            <tr>
                                                <th>Rate of Fire</th>
                                                <td>${rateOfFire}</td>
                                                <th>Speed</th>
                                                <td>${speed}</td>
                                            </tr>
                                            <tr>
                                                <th>Dodge Limit</th>
                                                <td>${dodgeLimit}</td>
                                                <th>Crash Damage</th>
                                                <td>${crashDamage}</td>
                                            </tr>
                                            <tr>
	                                            <th>Ordnance</th>
                                                <td>${ordnance1 + ordnance2 + ordnance3}</td>
                                                <th>AA Guns</th>
                                                <td>${guns1 + guns2 + guns3}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover text-center">
                                        <thead>
                                            <tr>
                                                <th>Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${notes}</td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                                <th>Obtain</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${obtain}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover table-bordered text-center" style="margin-bottom: auto;">
                                        <thead>
                                            <tr>
                                                <th colspan="20">Used By</th>
                                            </tr>
                                            <tr>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Destroyer"><img src="AL/Type/DD.png"><br>DD</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Cruiser"><img src="AL/Type/CL.png"><br>CL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Heavy Cruiser"><img src="AL/Type/CA.png"><br>CA</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Monitor"><img src="AL/Type/BM.png"><br>BM</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Large Cruiser"><img src="AL/Type/CB.png"><br>CB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battleship"><img src="AL/Type/BB.png"><br>BB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battlecruiser"><img src="AL/Type/BC.png"><br>BC</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aviation Battleship"><img src="AL/Type/BBV.png"><br>BBV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aircraft Carrier"><img src="AL/Type/CV.png"><br>CV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Aircraft Carrier"><img src="AL/Type/CVL.png"><br>CVL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Repair Ship"><img src="AL/Type/AR.png"><br>AR</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Munition Ship"><img src="AL/Type/AE.png"><br>AE</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine"><img src="AL/Type/SS.png"><br>SS</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine Carrier"><img src="AL/Type/SSV.png"><br>SSV</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="usedBy${target}"></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                }
            }
        }
    }
}
function ModalCreate6 (name, target, rarity) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        var aviation = gear[i].tiers[x].stats.aviation.formatted;
                        var planeHealth = gear[i].tiers[x].stats.planeHealth.formatted;
                        var damage = gear[i].tiers[x].stats.damage.formatted;
                        var rateOfFire = gear[i].tiers[x].stats.rateOfFire.formatted;
                        var noOfTorpedoes = gear[i].tiers[x].stats.noOfTorpedoes.formatted;
                        var speed = gear[i].tiers[x].stats.speed.formatted;
                        var dodgeLimit = gear[i].tiers[x].stats.dodgeLimit.formatted;
                        var crashDamage = gear[i].tiers[x].stats.crashDamage.formatted;
                        let ordnance1 = "";
                        let ordnance2 = "";
                        let ordnance3 = "";
                        if (gear[i].tiers[x].stats.ordnance !== undefined) {
                        	if (gear[i].tiers[x].stats.ordnance.stats[0].formatted !== undefined) {ordnance1 = gear[i].tiers[x].stats.ordnance.stats[0].formatted}
                    		if (gear[i].tiers[x].stats.ordnance.stats[1] !== undefined) {ordnance2 = "<br>" + gear[i].tiers[x].stats.ordnance.stats[1].formatted}
                			if (gear[i].tiers[x].stats.ordnance.stats[2] !== undefined) {ordnance3 = "<br>" + gear[i].tiers[x].stats.ordnance.stats[2].formatted}
                        }
                        let guns1 = ""
                        let guns2 = ""
                        let guns3 = ""
                    	if (gear[i].tiers[x].stats.aAGuns !== undefined) {
                    		if (gear[i].tiers[x].stats.aAGuns.stats[0].formatted !== undefined) {guns1 = gear[i].tiers[x].stats.aAGuns.stats[0].formatted}
                			if (gear[i].tiers[x].stats.aAGuns.stats[1] !== undefined) {guns2 = "<br>" + gear[i].tiers[x].stats.aAGuns.stats[1].formatted}
            				if (gear[i].tiers[x].stats.aAGuns.stats[2] !== undefined) {guns3 = "<br>" + gear[i].tiers[x].stats.aAGuns.stats[2].formatted}
                    	}
                        var faction = gear[i].nationality;
                        var notes = gear[i].misc.notes;
                        var animation = gear[i].misc.animation;
                        var obtain = gear[i].misc.obtainedFrom;
                        return `
                        <div class="modal fade ${target}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <table class="table table-hover table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th colspan="10">${id}</th>
                                            </tr>
                                            <tr>
                                                <th colspan="10">Stats</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Aviation</th>
                                                <td>${aviation}</td>
                                                <th>Plane Health</th>
                                                <td>${planeHealth}</td>
                                            </tr>
                                            <tr>
                                                <th>Damage</th>
                                                <td>${damage}</td>
                                                <th>No. of Torpedoes</th>
                                                <td>${noOfTorpedoes}</td>
                                            </tr>
                                            <tr>
                                                <th>Rate of Fire</th>
                                                <td>${rateOfFire}</td>
                                                <th>Speed</th>
                                                <td>${speed}</td>
                                            </tr>
                                            <tr>
                                                <th>Dodge Limit</th>
                                                <td>${dodgeLimit}</td>
                                                <th>Crash Damage</th>
                                                <td>${crashDamage}</td>
                                            </tr>
                                            <tr>
	                                            <th>Ordnance</th>
                                                <td>${ordnance1 + ordnance2 + ordnance3}</td>
                                                <th>AA Guns</th>
                                                <td>${guns1 + guns2 + guns3}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover text-center">
                                        <thead>
                                            <tr>
                                                <th>Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${notes}</td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                                <th>Obtain</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${obtain}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover table-bordered text-center" style="margin-bottom: auto;">
                                        <thead>
                                            <tr>
                                                <th colspan="20">Used By</th>
                                            </tr>
                                            <tr>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Destroyer"><img src="AL/Type/DD.png"><br>DD</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Cruiser"><img src="AL/Type/CL.png"><br>CL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Heavy Cruiser"><img src="AL/Type/CA.png"><br>CA</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Monitor"><img src="AL/Type/BM.png"><br>BM</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Large Cruiser"><img src="AL/Type/CB.png"><br>CB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battleship"><img src="AL/Type/BB.png"><br>BB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battlecruiser"><img src="AL/Type/BC.png"><br>BC</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aviation Battleship"><img src="AL/Type/BBV.png"><br>BBV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aircraft Carrier"><img src="AL/Type/CV.png"><br>CV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Aircraft Carrier"><img src="AL/Type/CVL.png"><br>CVL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Repair Ship"><img src="AL/Type/AR.png"><br>AR</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Munition Ship"><img src="AL/Type/AE.png"><br>AE</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine"><img src="AL/Type/SS.png"><br>SS</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine Carrier"><img src="AL/Type/SSV.png"><br>SSV</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="usedBy${target}"></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                }
            }
        }
    }
}
function ModalCreate7 (name, target, rarity) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        let firepower = 0;
                        if (gear[i].tiers[x].stats.firepower !== undefined) {firepower = parseFloat(gear[i].tiers[x].stats.firepower.formatted);}
                        var antiair = parseFloat(gear[i].tiers[x].stats.antiair.formatted);
                        let accuracy = 0;
                        if (gear[i].tiers[x].stats.accuracy !== undefined) {accuracy = parseFloat(gear[i].tiers[x].stats.accuracy.formatted);}
                        var damage = gear[i].tiers[x].stats.damage.formatted;
                        var rateOfFire = gear[i].tiers[x].stats.rateOfFire.formatted;
                        var angle = gear[i].tiers[x].stats.angle.formatted;
                        var range = gear[i].tiers[x].stats.range.formatted;
                        var coefficient =gear[i].tiers[x].stats.coefficient.formatted;
                        var faction = gear[i].nationality;
                        var notes = gear[i].misc.notes;
                        var obtain = gear[i].misc.obtainedFrom;
                        return `
                        <div class="modal fade ${target}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <table class="table table-hover table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th colspan="10">${id}</th>
                                            </tr>
                                            <tr>
                                                <th colspan="10">Stats</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>Anti-Air</th>
                                                <td>${antiair}</td>
                                                <th>Firepower</th>
                                                <td>${firepower}</td>
                                            </tr>
                                            <tr>
                                                <th>Damage</th>
                                                <td>${damage}</td>
                                                <th>Accuracy</th>
                                                <td>${accuracy}</td>
                                            </tr>
                                            <tr>
                                                <th>Rate of Fire</th>
                                                <td>${rateOfFire}</td>
                                                <th>Angle</th>
                                                <td>${angle}</td>
                                            </tr>
                                            <tr>
	                                            <th>Range</th>
                                                <td>${range}</td>
                                                <th>Coefficient</th>
                                                <td>${coefficient}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover text-center">
                                        <thead>
                                            <tr>
                                                <th>Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${notes}</td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                                <th>Obtain</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${obtain}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover table-bordered text-center" style="margin-bottom: auto;">
                                        <thead>
                                            <tr>
                                                <th colspan="20">Used By</th>
                                            </tr>
                                            <tr>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Destroyer"><img src="AL/Type/DD.png"><br>DD</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Cruiser"><img src="AL/Type/CL.png"><br>CL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Heavy Cruiser"><img src="AL/Type/CA.png"><br>CA</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Monitor"><img src="AL/Type/BM.png"><br>BM</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Large Cruiser"><img src="AL/Type/CB.png"><br>CB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battleship"><img src="AL/Type/BB.png"><br>BB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battlecruiser"><img src="AL/Type/BC.png"><br>BC</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aviation Battleship"><img src="AL/Type/BBV.png"><br>BBV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aircraft Carrier"><img src="AL/Type/CV.png"><br>CV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Aircraft Carrier"><img src="AL/Type/CVL.png"><br>CVL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Repair Ship"><img src="AL/Type/AR.png"><br>AR</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Munition Ship"><img src="AL/Type/AE.png"><br>AE</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine"><img src="AL/Type/SS.png"><br>SS</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine Carrier"><img src="AL/Type/SSV.png"><br>SSV</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="usedBy${target}"></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                }
            }
        }
    }
}
function ModalCreate8 (name, target, rarity) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            for (var x = 0; x < gear[i].tiers.length; x++) {
                if (gear[i].tiers[x] !== null) {
                    if (gear[i].tiers[x].rarity == rarity) {
                        var id = gear[i].id;
                        let health = "";
                        let firepower = "";
						let antiair = "";
						let torpedo = "";
						let aviation = "";
						let reload = "";
						let evasion = "";
						let asw = "";
						let luck = "";
						let oxygen = "";
						let accuracy = "";
						let speed = "";
						var THhealth = `<th data-toggle="tooltip" data-placement="top" title="Health"><img src="AL/Stats/Health.png"></th>`;
						var THfirepower = `<th data-toggle="tooltip" data-placement="top" title="Firepower"><img src="AL/Stats/Firepower.png"></th>`;
						var THantiair = `<th data-toggle="tooltip" data-placement="top" title="Anti-Air"><img src="AL/Stats/AntiAir.png"></th>`;
						var THtorpedo = `<th data-toggle="tooltip" data-placement="top" title="Torpedo"><img src="AL/Stats/Torpedo.png"></th>`;
						var THaviation = `<th data-toggle="tooltip" data-placement="top" title="Aviation"><img src="AL/Stats/Aviation.png"></th>`;
						var THreload = `<th data-toggle="tooltip" data-placement="top" title="Reload"><img src="AL/Stats/Reload.png"></th>`;
						var THevasion = `<th data-toggle="tooltip" data-placement="top" title="Evasion"><img src="AL/Stats/Evasion.png"></th>`;
						var THasw = `<th data-toggle="tooltip" data-placement="top" title="Anti-Submarine Warfare"><img src="AL/Stats/ASW.png"></th>`;
						var THluck = `<th data-toggle="tooltip" data-placement="top" title="Luck"><img src="AL/Stats/Luck.png"></th>`;
						var THoxygen = `<th data-toggle="tooltip" data-placement="top" title="Oxygen"><img src="AL/Stats/Oxygen.png"></th>`;
						var THaccuracy = `<th data-toggle="tooltip" data-placement="top" title="Accuracy">Acc</th>`;
						var THspeed = `<th data-toggle="tooltip" data-placement="top" title="Speed">Spd</th>`;
                        if (gear[i].tiers[x].stats.health !== undefined) {health = `<tr>${THhealth}<td>${gear[i].tiers[x].stats.health.formatted}</td></tr>`}
	                    if (gear[i].tiers[x].stats.firepower !== undefined) {firepower = `<tr>${THfirepower}<td>${gear[i].tiers[x].stats.firepower.formatted}</td></tr>`}
                        if (gear[i].tiers[x].stats.antiair !== undefined) {antiair = `<tr>${THantiair}<td>${gear[i].tiers[x].stats.antiair.formatted}</td></tr>`}
                        if (gear[i].tiers[x].stats.torpedo !== undefined) {torpedo = `<tr>${THtorpedo}<td>${gear[i].tiers[x].stats.torpedo.formatted}</td></tr>`}
                        if (gear[i].tiers[x].stats.aviation !== undefined) {aviation = `<tr>${THaviation}<td>${gear[i].tiers[x].stats.aviation.formatted}</td></tr>`}
                        if (gear[i].tiers[x].stats.reload !== undefined) {reload = `<tr>${THreload}<td>${gear[i].tiers[x].stats.reload.formatted}</td></tr>`}
                        if (gear[i].tiers[x].stats.evasion !== undefined) {evasion = `<tr>${THevasion}<td>${gear[i].tiers[x].stats.evasion.formatted}</td></tr>`}
                        if (gear[i].tiers[x].stats.antisubmarineWarfare !== undefined) {asw = `<tr>${THasw}<td>${gear[i].tiers[x].stats.antisubmarineWarfare.formatted}</td></tr>`}
                        if (gear[i].tiers[x].stats.oxygen !== undefined) {oxygen = `<tr>${THoxygen}<td>${gear[i].tiers[x].stats.oxygen.formatted}</td></tr>`}
                    	if (gear[i].tiers[x].stats.luck !== undefined) {luck = `<tr>${THluck}<td>${gear[i].tiers[x].stats.luck.formatted}</td></tr>`}
                        if (gear[i].tiers[x].stats.accuracy !== undefined) {accuracy = `<tr>${THaccuracy}<td>${gear[i].tiers[x].stats.accuracy.formatted}</td></tr>`}
                        if (gear[i].tiers[x].stats.speed !== undefined) {speed = `<tr>${THspeed}<td>${gear[i].tiers[x].stats.speed.formatted}</td></tr>`}
                        var faction = gear[i].nationality;
                        var notes = gear[i].misc.notes;
                        var obtain = gear[i].misc.obtainedFrom;
                        return `
                        <div class="modal fade ${target}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <table class="table table-hover table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th colspan="10">${id}</th>
                                            </tr>
                                            <tr>
                                                <th colspan="10">Stats</th>
                                            </tr>
                                        </thead>
                                        <tbody>
	                                        ${health}
											${firepower}
											${antiair}
											${torpedo}
											${aviation}
											${reload}
											${evasion}
											${asw}
											${luck}
											${oxygen}
											${accuracy}
											${speed}
                                        </tbody>
                                    </table>
                                    <table class="table table-hover text-center">
                                        <thead>
                                            <tr>
                                                <th>Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${notes}</td>
                                            </tr>
                                        </tbody>
                                        <thead>
                                            <tr>
                                                <th>Obtain</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>${obtain}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table class="table table-hover table-bordered text-center" style="margin-bottom: auto;">
                                        <thead>
                                            <tr>
                                                <th colspan="20">Used By</th>
                                            </tr>
                                            <tr>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Destroyer"><img src="AL/Type/DD.png"><br>DD</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Cruiser"><img src="AL/Type/CL.png"><br>CL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Heavy Cruiser"><img src="AL/Type/CA.png"><br>CA</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Monitor"><img src="AL/Type/BM.png"><br>BM</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Large Cruiser"><img src="AL/Type/CB.png"><br>CB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battleship"><img src="AL/Type/BB.png"><br>BB</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Battlecruiser"><img src="AL/Type/BC.png"><br>BC</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aviation Battleship"><img src="AL/Type/BBV.png"><br>BBV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Aircraft Carrier"><img src="AL/Type/CV.png"><br>CV</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Light Aircraft Carrier"><img src="AL/Type/CVL.png"><br>CVL</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Repair Ship"><img src="AL/Type/AR.png"><br>AR</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Munition Ship"><img src="AL/Type/AE.png"><br>AE</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine"><img src="AL/Type/SS.png"><br>SS</th>
                                                <th style="width: 7%;" data-toggle="tooltip" data-placement="top" title="Submarine Carrier"><img src="AL/Type/SSV.png"><br>SSV</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="usedBy${target}"></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        `;
                    }
                }
            }
        }
    }
}
function ModalTable (name, target) {
    for (var i = 0; i < gear.length; i++) {
        if (gear[i].id == name) {
            var usedbyDD = gear[i].fits.destroyer;
            var usedbyCL = gear[i].fits.lightCruiser;
            var usedbyCA = gear[i].fits.heavyCruiser;
            var usedbyBM = gear[i].fits.monitor;
            var usedbyCB = gear[i].fits.largeCruiser;
            var usedbyBB = gear[i].fits.battleship;
            var usedbyBC = gear[i].fits.battlecruiser;
            var usedbyBBV = gear[i].fits.aviationBattleship;
            var usedbyCV = gear[i].fits.aircraftCarrier;
            var usedbyCVL = gear[i].fits.lightCarrier;
            var usedbyAR = gear[i].fits.repairShip;
            var usedbyAE = gear[i].fits.munitionShip;
            var usedbySS = gear[i].fits.submarine;
            var usedbySSV = gear[i].fits.submarineCarrier;
            if (usedbyDD == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbyDD == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbyDD !== "primary") {if(usedbyDD !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbyDD}'>⚪</td>`)}}
            if (usedbyCL == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbyCL == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbyCL !== "primary") {if(usedbyCL !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbyCL}'>⚪</td>`)}}
            if (usedbyCA == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbyCA == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbyCA !== "primary") {if(usedbyCA !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbyCA}'>⚪</td>`)}}
            if (usedbyBM == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbyBM == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbyBM !== "primary") {if(usedbyBM !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbyBM}'>⚪</td>`)}}
            if (usedbyCB == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbyCB == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbyCB !== "primary") {if(usedbyCB !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbyCB}'>⚪</td>`)}}
            if (usedbyBB == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbyBB == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbyBB !== "primary") {if(usedbyBB !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbyBB}'>⚪</td>`)}}
            if (usedbyBC == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbyBC == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbyBC !== "primary") {if(usedbyBC !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbyBC}'>⚪</td>`)}}
            if (usedbyBBV == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbyBBV == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbyBBV !== "primary") {if(usedbyBBV !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbyBBV}'>⚪</td>`)}}
            if (usedbyCV == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbyCV == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbyCV !== "primary") {if(usedbyCV !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbyCV}'>⚪</td>`)}}            
            if (usedbyCVL == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbyCVL == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbyCVL !== "primary") {if(usedbyCVL !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbyCVL}'>⚪</td>`)}}
            if (usedbyAR == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbyAR == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbyAR !== "primary") {if(usedbyAR !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbyAR}'>⚪</td>`)}}
            if (usedbyAE == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbyAE == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbyAE !== "primary") {if(usedbyAE !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbyAE}'>⚪</td>`)}}
            if (usedbySS == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbySS == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbySS !== "primary") {if(usedbySS !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbySS}'>⚪</td>`)}}
            if (usedbySSV == "primary") {$(".usedBy"+target).append(`<td class="eqy">✔</td>`)}
            if (usedbySSV == null) {$(".usedBy"+target).append(`<td class="eqn">✘</td>`)}
            if (usedbySSV !== "primary") {if(usedbySSV !== null) {$(".usedBy"+target).append(`<td class="eqd" data-toggle="tooltip" data-placement="top" title='${usedbySSV}'>⚪</td>`)}}
        }
    }
}
function ModalCall (name, target, rarity) {
    $(".modal-container").append(ModalCreate(name, target, rarity))
    $(document).ready(ModalTable(name, target))
    $(".table"+target).removeAttr("onclick")
    $(function () {$('[data-toggle="tooltip"]').tooltip()})
}
function ModalCall2 (name, target, rarity) {
    $(".modal-container").append(ModalCreate2(name, target, rarity))
    $(document).ready(ModalTable(name, target))
    $(".table"+target).removeAttr("onclick")
    $(function () {$('[data-toggle="tooltip"]').tooltip()})
}
function ModalCall3 (name, target, rarity, range) {
    $(".modal-container").append(ModalCreate3(name, target, rarity, range))
    $(document).ready(ModalTable(name, target))
    $(".table"+target).removeAttr("onclick")
    $(function () {$('[data-toggle="tooltip"]').tooltip()})
}
function ModalCall4 (name, target, rarity) {
    $(".modal-container").append(ModalCreate4(name, target, rarity))
    $(document).ready(ModalTable(name, target))
    $(".table"+target).removeAttr("onclick")
    $(function () {$('[data-toggle="tooltip"]').tooltip()})
}
function ModalCall5 (name, target, rarity) {
    $(".modal-container").append(ModalCreate5(name, target, rarity))
    $(document).ready(ModalTable(name, target))
    $(".table"+target).removeAttr("onclick")
    $(function () {$('[data-toggle="tooltip"]').tooltip()})
}
function ModalCall6 (name, target, rarity) {
    $(".modal-container").append(ModalCreate6(name, target, rarity))
    $(document).ready(ModalTable(name, target))
    $(".table"+target).removeAttr("onclick")
    $(function () {$('[data-toggle="tooltip"]').tooltip()})
}
function ModalCall7 (name, target, rarity) {
    $(".modal-container").append(ModalCreate7(name, target, rarity))
    $(document).ready(ModalTable(name, target))
    $(".table"+target).removeAttr("onclick")
    $(function () {$('[data-toggle="tooltip"]').tooltip()})
}
function ModalCall8 (name, target, rarity) {
    $(".modal-container").append(ModalCreate8(name, target, rarity))
    $(document).ready(ModalTable(name, target))
    $(".table"+target).removeAttr("onclick")
    $(function () {$('[data-toggle="tooltip"]').tooltip()})
}
function DDCall (name, target, rarity, mod1, mod2, mod3, coefmin, coefmax) {
    $(".DDGunMaxOutput").append(DDGun(name, target, rarity, mod1, mod2, mod3, coefmin))
    $(".DDGunFullOutput").append(DDGun(name, target, rarity, mod1, mod2, mod3, coefmax))
}
function CLCall (name, target, rarity, mod1, mod2, mod3, coefmin, coefmax) {
    $(".CLGunMaxOutput").append(CLGun(name, target, rarity, mod1, mod2, mod3, coefmin))
    $(".CLGunFullOutput").append(CLGun(name, target, rarity, mod1, mod2, mod3, coefmax))
}
function CACall (name, target, rarity, mod1, mod2, mod3, coefmin, coefmax) {
    $(".CAGunMaxOutput").append(CAGun(name, target, rarity, mod1, mod2, mod3, coefmin))
    $(".CAGunFullOutput").append(CAGun(name, target, rarity, mod1, mod2, mod3, coefmax))
}
function CBCall (name, target, rarity, mod1, mod2, mod3, coefmin, coefmax) {
    $(".CBGunMaxOutput").append(CBGun(name, target, rarity, mod1, mod2, mod3, coefmin))
    $(".CBGunFullOutput").append(CBGun(name, target, rarity, mod1, mod2, mod3, coefmax))
}
function BBCall (name, target, rarity, mod1, mod2, mod3, coefmin, coefmax) {
    $(".BBGunMaxOutput").append(BBGun(name, target, rarity, mod1, mod2, mod3, coefmin))
    $(".BBGunFullOutput").append(BBGun(name, target, rarity, mod1, mod2, mod3, coefmax))
}
function STCall (name, target, rarity, range) {
    $(".SurfaceTorpedoMaxOutput").append(TSurf(name, target, rarity, range, 100))
    $(".SurfaceTorpedoFullOutput").append(TSurf(name, target, rarity, range, 118))
}
function SSCall (name, target, rarity) {
    $(".SubmarineTorpedoMaxOutput").append(TSubs(name, target, rarity, 100))
    $(".SubmarineTorpedoFullOutput").append(TSubs(name, target, rarity, 118))
}
function FighterCall (name, target, rarity, AADPS1, AABurst1, AADPS2, AABurst2) {
    $(".FighterMaxOutput").append(FDive(name, target, rarity, AADPS1, AABurst1, 100))
    $(".FighterFullOutput").append(FDive(name, target, rarity, AADPS2, AABurst2, 118))
}
function DBCall (name, target, rarity, AADPS1, AABurst1, AADPS2, AABurst2) {
    $(".DiveBomberMaxOutput").append(FDive(name, target, rarity, AADPS1, AABurst1, 100))
    $(".DiveBomberFullOutput").append(FDive(name, target, rarity, AADPS2, AABurst2, 118))
}
function TBCall (name, target, rarity, damage1, damage2, AADPS1, AABurst1, AADPS2, AABurst2) {
    $(".TorpedoBomberMaxOutput").append(TBomb(name, target, rarity, damage1, AADPS1, AABurst1, 100))
    $(".TorpedoBomberFullOutput").append(TBomb(name, target, rarity, damage2, AADPS2, AABurst2, 118))
}
function SeaCall (name, target, rarity, AADPS1, AABurst1, AADPS2, AABurst2) {
    $(".SeaplaneMaxOutput").append(FDive(name, target, rarity, AADPS1, AABurst1, 100))
    $(".SeaplaneFullOutput").append(FDive(name, target, rarity, AADPS2, AABurst2, 118))
}
function AACall (name, target, rarity) {
    $(".AAGunMaxOutput").append(AAGun(name, target, rarity))
    $(".AAGunFullOutput").append(AAGun(name, target, rarity))
}
function AuxCall (name, target, rarity) {
    $(".AuxiliaryMaxOutput").append(Auxiliary(name, target, rarity, "mid"))
    $(".AuxiliaryFullOutput").append(Auxiliary(name, target, rarity, "max"))
}
