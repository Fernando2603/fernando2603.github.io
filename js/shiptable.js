function shipTable (ID, Shipname, Rarity, Nation, Type, Luck, Armor, Speed, HP, FP, AA, TRP, EVA, AVI, COST, RLD, ASW, OXY, AMMO, ACC) {
return  '<tr id="'+ID+'">'+
            '<td>'+ID+'</td>'+
            '<td>'+Name+'</td>'+
            '<td>'+Rarity+'</td>'+
            '<td>'+Faction+'</td>'+
            '<td>'+Type+'</td>'+
            '<td>'+Luck+'</td>'+
            '<td>'+Armor+'</td>'+
            '<td>'+Spd+'</td>'+
            '<td>'+HP+'</td>'+
            '<td>'+FP+'</td>'+
            '<td>'+AA+'</td>'+
            '<td>'+TRP+'</td>'+
            '<td>'+EVA+'</td>'+
            '<td>'+AVI+'</td>'+
            '<td>'+OIL+'</td>'+
            '<td>'+RLD+'</td>'+
            '<td>'+ASW+'</td>'+
            '<td>'+OXY+'</td>'+
            '<td>'+AMMO+'</td>'+
            '<td>'+ACC+'</td>'+
        '</tr>'
}
var z001 = ["001","Universal Bulin","Elite","Universal","DD","100","Light","35","232","23","23","23","116","23","3","116","33","0","0","116"];
function shipInsert (idx) {
    $(idx).append(shipTable(z001))
}

function getUsers() {
fetch('https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json')
.then((ships) => ships.json())
.then((data) => {
    let output = '<h2>Users</h2>';
    console.log(data);
    data.forEach((ship) => {
        output += `
            <tr>
                <td>${ship.id}</td>
                <td>${ship.names.en}</td>
                <td>${ship.rarity}</td>
                <td>${ship.nationality}</td>
                <td>${ship.hullType}</td>
                <td>${ship.stats.level120.luck}</td>
                <td>${ship.ship.stats.level120.armor}</td>
                <td>${ship.stats.level120.speed}</td>
                <td>${ship.stats.level120.health}</td>
                <td>${ship.stats.level120.firepower}</td>
                <td>${ship.stats.level120.antiair}</td>
                <td>${ship.stats.level120.torpedo}</td>
                <td>${ship.stats.level120.evasion}</td>
                <td>${ship.stats.level120.aviation}</td>
                <td>${ship.stats.level120.oilConsumption}</td>
                <td>${ship.stats.level120.reload}</td>
                <td>${ship.stats.level120.antisubmarineWarfare}</td>
                <td>${ship.stats.level120.oxygen}</td>
                <td>${ship.stats.level120.ammunition}</td>
                <td>${ship.stats.level120.accuracy}</td>
            </tr>
        `;
        })
        document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err));
}

    $(".shipName").html(ship.names.code + " - " + ship.names.en)
    $("#ship-ID, #ship-ID2").append(ship.id);
    $("#ship-Faction, #ship-Faction2").append(ship.nationality);
    $("#ship-Rarity, #ship-Rarity2").append(ship.rarity);
    $("#ship-Type, #ship-Type2").append(ship.hullType);
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