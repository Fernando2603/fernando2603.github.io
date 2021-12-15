let ShipOutput = "";
let ClassOutput = "";
let SkillOutput = "";
let ModalOutput = "";
function barrageCall() {
    barrage.forEach((barrage)=> {
        if (barrage.type == "ship") {
            var id = barrage.id.replace(/\./g,'').replace(/\:/g,'');
            var name = barrage.name;
            var icon = barrage.icon;
            // Ship
                let ship01 = "";
                let ship02 = "";
                let ship03 = "";
                let ship04 = "";
                let ship05 = "";
                let ship06 = "";
                let ship07 = "";
                let ship08 = "";
                let ship09 = "";
                let ship10 = "";
                let ship11 = "";
                let ship12 = "";
                let ship13 = "";
                let ship14 = "";
                let ship15 = "";
                let ship16 = "";
                let ship17 = "";
                let ship18 = "";
                let ship19 = "";
                let ship20 = "";
                if (barrage.ships[0] !== undefined) {ship01 = barrage.ships[0]}
                if (barrage.ships[1] !== undefined) {ship02 = ", " + barrage.ships[1]}
                if (barrage.ships[2] !== undefined) {ship03 = ", " + barrage.ships[2]}
                if (barrage.ships[3] !== undefined) {ship04 = ", " + barrage.ships[3]}
                if (barrage.ships[4] !== undefined) {ship05 = ", " + barrage.ships[4]}
                if (barrage.ships[5] !== undefined) {ship06 = ", " + barrage.ships[5]}
                if (barrage.ships[6] !== undefined) {ship07 = ", " + barrage.ships[6]}
                if (barrage.ships[7] !== undefined) {ship08 = ", " + barrage.ships[7]}
                if (barrage.ships[8] !== undefined) {ship09 = ", " + barrage.ships[8]}
                if (barrage.ships[9] !== undefined) {ship10 = ", " + barrage.ships[9]}
                if (barrage.ships[10] !== undefined) {ship11 = ", " + barrage.ships[10]}
                if (barrage.ships[11] !== undefined) {ship12 = ", " + barrage.ships[11]}
                if (barrage.ships[12] !== undefined) {ship13 = ", " + barrage.ships[12]}
                if (barrage.ships[13] !== undefined) {ship14 = ", " + barrage.ships[13]}
                if (barrage.ships[14] !== undefined) {ship15 = ", " + barrage.ships[14]}
                if (barrage.ships[15] !== undefined) {ship16 = ", " + barrage.ships[15]}
                if (barrage.ships[16] !== undefined) {ship17 = ", " + barrage.ships[16]}
                if (barrage.ships[17] !== undefined) {ship18 = ", " + barrage.ships[17]}
                if (barrage.ships[18] !== undefined) {ship19 = ", " + barrage.ships[18]}
                if (barrage.ships[19] !== undefined) {ship20 = ", " + barrage.ships[19]}
            var ship = ship01+ship02+ship03+ship04+ship05+ship06+ship07+ship08+ship09+ship10+ship11+ship12+ship13+ship14+ship15+ship16+ship17+ship18+ship19+ship20;
            var hull = barrage.hull;
            var roundLength = barrage.rounds.length;
            let type = barrage.rounds[0].type;
            let dmgL = barrage.rounds[0].dmgL;
            let dmgM = barrage.rounds[0].dmgM;
            let dmgH = barrage.rounds[0].dmgH;
            let note = "";
            if (barrage.rounds[0].note !== undefined && barrage.rounds[0].note !== null) {note = barrage.rounds[0].note;}
            let gif = "eqn";
            if (barrage.image !== undefined && barrage.image !== null) {gif = "eqy"}
            if (roundLength == 1) {
                ShipOutput += `
                    <tr class="x${id}" data-toggle="modal" data-target=".${id}" onclick="modalCall('${id}')">
                        <td class="${gif}"><img class="icon" src="${icon}"></td>
                        <td><a href="#${id}">${name}</a></td>
                        <td>${ship}</td>
                        <td>${hull}</td>
                        <td class="${type}">${type}</td>
                        <td>${dmgL}</td>
                        <td>${dmgM}</td>
                        <td>${dmgH}</td>
                        <td>${note}</td>
                    </tr>
                `}
            if (roundLength == 2) {
                let type1 = barrage.rounds[1].type;
                let dmgL1 = barrage.rounds[1].dmgL;
                let dmgM1 = barrage.rounds[1].dmgM;
                let dmgH1 = barrage.rounds[1].dmgH;
                let note1 = "";
                if (barrage.rounds[1].note !== undefined && barrage.rounds[1].note !== null) {note1 = barrage.rounds[1].note;}
                ShipOutput += `
                    <tr class="x${id}" data-toggle="modal" data-target=".${id}" onclick="modalCall('${id}')">
                        <td rowspan="2" class="${gif}"><img class="icon" src="${icon}"></td>
                        <td rowspan="2"><a href="#${id}">${name}</a></td>
                        <td rowspan="2">${ship}</td>
                        <td rowspan="2">${hull}</td>
                        <td class="${type}">${type}</td>
                        <td>${dmgL}</td>
                        <td>${dmgM}</td>
                        <td>${dmgH}</td>
                        <td>${note}</td>
                    </tr>
                    <tr data-toggle="modal" data-target=".${id}">
                        <td class="${type1}">${type1}</td>
                        <td>${dmgL1}</td>
                        <td>${dmgM1}</td>
                        <td>${dmgH1}</td>
                        <td>${note1}</td>
                    </tr>
                `}
            if (roundLength == 3) {
                let type1 = barrage.rounds[1].type;
                let dmgL1 = barrage.rounds[1].dmgL;
                let dmgM1 = barrage.rounds[1].dmgM;
                let dmgH1 = barrage.rounds[1].dmgH;
                let note1 = "";
                if (barrage.rounds[1].note !== undefined && barrage.rounds[1].note !== null) {note1 = barrage.rounds[1].note;}
                let type2 = barrage.rounds[2].type;
                let dmgL2 = barrage.rounds[2].dmgL;
                let dmgM2 = barrage.rounds[2].dmgM;
                let dmgH2 = barrage.rounds[2].dmgH;
                let note2 = "";
                if (barrage.rounds[2].note !== undefined && barrage.rounds[2].note !== null) {note2 = barrage.rounds[2].note;}
                ShipOutput += `
                    <tr class="x${id}" data-toggle="modal" data-target=".${id}" onclick="modalCall('${id}')">
                        <td rowspan="3" class="${gif}"><img class="icon" src="${icon}"></td>
                        <td rowspan="3"><a href="#${id}">${name}</a></td>
                        <td rowspan="3">${ship}</td>
                        <td rowspan="3">${hull}</td>
                        <td class="${type}">${type}</td>
                        <td>${dmgL}</td>
                        <td>${dmgM}</td>
                        <td>${dmgH}</td>
                        <td>${note}</td>
                    </tr>
                    <tr data-toggle="modal" data-target=".${id}">
                        <td class="${type1}">${type1}</td>
                        <td>${dmgL1}</td>
                        <td>${dmgM1}</td>
                        <td>${dmgH1}</td>
                        <td>${note1}</td>
                    </tr>
                    <tr>
                        <td class="${type2}">${type2}</td>
                        <td>${dmgL2}</td>
                        <td>${dmgM2}</td>
                        <td>${dmgH2}</td>
                        <td>${note2}</td>
                    </tr>
                `}
            if (roundLength == 4) {
                let type1 = barrage.rounds[1].type;
                let dmgL1 = barrage.rounds[1].dmgL;
                let dmgM1 = barrage.rounds[1].dmgM;
                let dmgH1 = barrage.rounds[1].dmgH;
                let note1 = "";
                if (barrage.rounds[1].note !== undefined && barrage.rounds[1].note !== null) {note1 = barrage.rounds[1].note;}
                let type2 = barrage.rounds[2].type;
                let dmgL2 = barrage.rounds[2].dmgL;
                let dmgM2 = barrage.rounds[2].dmgM;
                let dmgH2 = barrage.rounds[2].dmgH;
                let note2 = "";
                if (barrage.rounds[2].note !== undefined && barrage.rounds[2].note !== null) {note2 = barrage.rounds[2].note;}
                let type3 = barrage.rounds[3].type;
                let dmgL3 = barrage.rounds[3].dmgL;
                let dmgM3 = barrage.rounds[3].dmgM;
                let dmgH3 = barrage.rounds[3].dmgH;
                let note3 = "";
                if (barrage.rounds[3].note !== undefined && barrage.rounds[3].note !== null) {note2 = barrage.rounds[3].note;}
                ShipOutput += `
                    <tr class="x${id}" data-toggle="modal" data-target=".${id}" onclick="modalCall('${id}')">
                        <td rowspan="4" class="${gif}"><img class="icon" src="${icon}"></td>
                        <td rowspan="4"><a href="#${id}">${name}</a></td>
                        <td rowspan="4">${ship}</td>
                        <td rowspan="4">${hull}</td>
                        <td class="${type}">${type}</td>
                        <td>${dmgL}</td>
                        <td>${dmgM}</td>
                        <td>${dmgH}</td>
                        <td>${note}</td>
                    </tr>
                    <tr data-toggle="modal" data-target=".${id}">
                        <td class="${type1}">${type1}</td>
                        <td>${dmgL1}</td>
                        <td>${dmgM1}</td>
                        <td>${dmgH1}</td>
                        <td>${note1}</td>
                    </tr>
                    <tr data-toggle="modal" data-target=".${id}">
                        <td class="${type2}">${type2}</td>
                        <td>${dmgL2}</td>
                        <td>${dmgM2}</td>
                        <td>${dmgH2}</td>
                        <td>${note2}</td>
                    </tr>
                    <tr>
                        <td class="${type3}">${type3}</td>
                        <td>${dmgL3}</td>
                        <td>${dmgM3}</td>
                        <td>${dmgH3}</td>
                        <td>${note3}</td>
                    </tr>
                `}
        }
        if (barrage.type == "class") {
            var id = barrage.id.replace(/\./g,'').replace(/\:/g,'');
            var name = barrage.name;
            var icon = barrage.icon;
            // Ship
                let ship01 = "";
                let ship02 = "";
                let ship03 = "";
                let ship04 = "";
                let ship05 = "";
                let ship06 = "";
                let ship07 = "";
                let ship08 = "";
                let ship09 = "";
                let ship10 = "";
                let ship11 = "";
                let ship12 = "";
                let ship13 = "";
                let ship14 = "";
                let ship15 = "";
                let ship16 = "";
                let ship17 = "";
                let ship18 = "";
                let ship19 = "";
                let ship20 = "";
                if (barrage.ships[0] !== undefined) {ship01 = barrage.ships[0]}
                if (barrage.ships[1] !== undefined) {ship02 = ", " + barrage.ships[1]}
                if (barrage.ships[2] !== undefined) {ship03 = ", " + barrage.ships[2]}
                if (barrage.ships[3] !== undefined) {ship04 = ", " + barrage.ships[3]}
                if (barrage.ships[4] !== undefined) {ship05 = ", " + barrage.ships[4]}
                if (barrage.ships[5] !== undefined) {ship06 = ", " + barrage.ships[5]}
                if (barrage.ships[6] !== undefined) {ship07 = ", " + barrage.ships[6]}
                if (barrage.ships[7] !== undefined) {ship08 = ", " + barrage.ships[7]}
                if (barrage.ships[8] !== undefined) {ship09 = ", " + barrage.ships[8]}
                if (barrage.ships[9] !== undefined) {ship10 = ", " + barrage.ships[9]}
                if (barrage.ships[10] !== undefined) {ship11 = ", " + barrage.ships[10]}
                if (barrage.ships[11] !== undefined) {ship12 = ", " + barrage.ships[11]}
                if (barrage.ships[12] !== undefined) {ship13 = ", " + barrage.ships[12]}
                if (barrage.ships[13] !== undefined) {ship14 = ", " + barrage.ships[13]}
                if (barrage.ships[14] !== undefined) {ship15 = ", " + barrage.ships[14]}
                if (barrage.ships[15] !== undefined) {ship16 = ", " + barrage.ships[15]}
                if (barrage.ships[16] !== undefined) {ship17 = ", " + barrage.ships[16]}
                if (barrage.ships[17] !== undefined) {ship18 = ", " + barrage.ships[17]}
                if (barrage.ships[18] !== undefined) {ship19 = ", " + barrage.ships[18]}
                if (barrage.ships[19] !== undefined) {ship20 = ", " + barrage.ships[19]}
            var ship = ship01+ship02+ship03+ship04+ship05+ship06+ship07+ship08+ship09+ship10+ship11+ship12+ship13+ship14+ship15+ship16+ship17+ship18+ship19+ship20;
            var hull = barrage.hull;
            var roundLength = barrage.rounds.length;
            let type = barrage.rounds[0].type;
            let dmgL = barrage.rounds[0].dmgL;
            let dmgM = barrage.rounds[0].dmgM;
            let dmgH = barrage.rounds[0].dmgH;
            let note = "";
            if (barrage.rounds[0].note !== undefined && barrage.rounds[0].note !== null) {note = barrage.rounds[0].note;}
            let gif = "eqn";
            if (barrage.image !== undefined && barrage.image !== null) {gif = "eqy"}
            if (roundLength == 1) {
                ClassOutput += `
                    <tr class="x${id}" data-toggle="modal" data-target=".${id}" onclick="modalCall('${id}')">
                        <td class="${gif}"><img class="icon" src="${icon}"></td>
                        <td><a href="#${id}">${name}</a></td>
                        <td>${ship}</td>
                        <td>${hull}</td>
                        <td class="${type}">${type}</td>
                        <td>${dmgL}</td>
                        <td>${dmgM}</td>
                        <td>${dmgH}</td>
                        <td>${note}</td>
                    </tr>
                `}
            if (roundLength == 2) {
                let type1 = barrage.rounds[1].type;
                let dmgL1 = barrage.rounds[1].dmgL;
                let dmgM1 = barrage.rounds[1].dmgM;
                let dmgH1 = barrage.rounds[1].dmgH;
                let note1 = "";
                if (barrage.rounds[1].note !== undefined && barrage.rounds[1].note !== null) {note1 = barrage.rounds[1].note;}
                ClassOutput += `
                    <tr class="x${id}" data-toggle="modal" data-target=".${id}" onclick="modalCall('${id}')">
                        <td rowspan="2" class="${gif}"><img class="icon" src="${icon}"></td>
                        <td rowspan="2"><a href="#${id}">${name}</a></td>
                        <td rowspan="2">${ship}</td>
                        <td rowspan="2">${hull}</td>
                        <td class="${type}">${type}</td>
                        <td>${dmgL}</td>
                        <td>${dmgM}</td>
                        <td>${dmgH}</td>
                        <td>${note}</td>
                    </tr>
                    <tr data-toggle="modal" data-target=".${id}">
                        <td class="${type1}">${type1}</td>
                        <td>${dmgL1}</td>
                        <td>${dmgM1}</td>
                        <td>${dmgH1}</td>
                        <td>${note1}</td>
                    </tr>
                `}
            if (roundLength == 3) {
                let type1 = barrage.rounds[1].type;
                let dmgL1 = barrage.rounds[1].dmgL;
                let dmgM1 = barrage.rounds[1].dmgM;
                let dmgH1 = barrage.rounds[1].dmgH;
                let note1 = "";
                if (barrage.rounds[1].note !== undefined && barrage.rounds[1].note !== null) {note1 = barrage.rounds[1].note;}
                let type2 = barrage.rounds[2].type;
                let dmgL2 = barrage.rounds[2].dmgL;
                let dmgM2 = barrage.rounds[2].dmgM;
                let dmgH2 = barrage.rounds[2].dmgH;
                let note2 = "";
                if (barrage.rounds[2].note !== undefined && barrage.rounds[2].note !== null) {note2 = barrage.rounds[2].note;}
                ClassOutput += `
                    <tr class="x${id}" data-toggle="modal" data-target=".${id}" onclick="modalCall('${id}')">
                        <td rowspan="3" class="${gif}"><img class="icon" src="${icon}"></td>
                        <td rowspan="3"><a href="#${id}">${name}</a></td>
                        <td rowspan="3">${ship}</td>
                        <td rowspan="3">${hull}</td>
                        <td class="${type}">${type}</td>
                        <td>${dmgL}</td>
                        <td>${dmgM}</td>
                        <td>${dmgH}</td>
                        <td>${note}</td>
                    </tr>
                    <tr data-toggle="modal" data-target=".${id}">
                        <td class="${type1}">${type1}</td>
                        <td>${dmgL1}</td>
                        <td>${dmgM1}</td>
                        <td>${dmgH1}</td>
                        <td>${note1}</td>
                    </tr>
                    <tr>
                        <td class="${type2}">${type2}</td>
                        <td>${dmgL2}</td>
                        <td>${dmgM2}</td>
                        <td>${dmgH2}</td>
                        <td>${note2}</td>
                    </tr>
                `}
            if (roundLength == 4) {
                let type1 = barrage.rounds[1].type;
                let dmgL1 = barrage.rounds[1].dmgL;
                let dmgM1 = barrage.rounds[1].dmgM;
                let dmgH1 = barrage.rounds[1].dmgH;
                let note1 = "";
                if (barrage.rounds[1].note !== undefined && barrage.rounds[1].note !== null) {note1 = barrage.rounds[1].note;}
                let type2 = barrage.rounds[2].type;
                let dmgL2 = barrage.rounds[2].dmgL;
                let dmgM2 = barrage.rounds[2].dmgM;
                let dmgH2 = barrage.rounds[2].dmgH;
                let note2 = "";
                if (barrage.rounds[2].note !== undefined && barrage.rounds[2].note !== null) {note2 = barrage.rounds[2].note;}
                let type3 = barrage.rounds[3].type;
                let dmgL3 = barrage.rounds[3].dmgL;
                let dmgM3 = barrage.rounds[3].dmgM;
                let dmgH3 = barrage.rounds[3].dmgH;
                let note3 = "";
                if (barrage.rounds[3].note !== undefined && barrage.rounds[3].note !== null) {note2 = barrage.rounds[3].note;}
                ClassOutput += `
                    <tr class="x${id}" data-toggle="modal" data-target=".${id}" onclick="modalCall('${id}')">
                        <td rowspan="4" class="${gif}"><img class="icon" src="${icon}"></td>
                        <td rowspan="4"><a href="#${id}">${name}</a></td>
                        <td rowspan="4">${ship}</td>
                        <td rowspan="4">${hull}</td>
                        <td class="${type}">${type}</td>
                        <td>${dmgL}</td>
                        <td>${dmgM}</td>
                        <td>${dmgH}</td>
                        <td>${note}</td>
                    </tr>
                    <tr data-toggle="modal" data-target=".${id}">
                        <td class="${type1}">${type1}</td>
                        <td>${dmgL1}</td>
                        <td>${dmgM1}</td>
                        <td>${dmgH1}</td>
                        <td>${note1}</td>
                    </tr>
                    <tr data-toggle="modal" data-target=".${id}">
                        <td class="${type2}">${type2}</td>
                        <td>${dmgL2}</td>
                        <td>${dmgM2}</td>
                        <td>${dmgH2}</td>
                        <td>${note2}</td>
                    </tr>
                    <tr>
                        <td class="${type3}">${type3}</td>
                        <td>${dmgL3}</td>
                        <td>${dmgM3}</td>
                        <td>${dmgH3}</td>
                        <td>${note3}</td>
                    </tr>
                `}
        }
        if (barrage.type == "skill") {
            var id = barrage.id.replace(/\./g,'').replace(/\:/g,'');
            var name = barrage.name;
            var icon = barrage.icon;
            // Ship
                let ship01 = "";
                let ship02 = "";
                let ship03 = "";
                let ship04 = "";
                let ship05 = "";
                let ship06 = "";
                let ship07 = "";
                let ship08 = "";
                let ship09 = "";
                let ship10 = "";
                let ship11 = "";
                let ship12 = "";
                let ship13 = "";
                let ship14 = "";
                let ship15 = "";
                let ship16 = "";
                let ship17 = "";
                let ship18 = "";
                let ship19 = "";
                let ship20 = "";
                if (barrage.ships[0] !== undefined) {ship01 = barrage.ships[0]}
                if (barrage.ships[1] !== undefined) {ship02 = ", " + barrage.ships[1]}
                if (barrage.ships[2] !== undefined) {ship03 = ", " + barrage.ships[2]}
                if (barrage.ships[3] !== undefined) {ship04 = ", " + barrage.ships[3]}
                if (barrage.ships[4] !== undefined) {ship05 = ", " + barrage.ships[4]}
                if (barrage.ships[5] !== undefined) {ship06 = ", " + barrage.ships[5]}
                if (barrage.ships[6] !== undefined) {ship07 = ", " + barrage.ships[6]}
                if (barrage.ships[7] !== undefined) {ship08 = ", " + barrage.ships[7]}
                if (barrage.ships[8] !== undefined) {ship09 = ", " + barrage.ships[8]}
                if (barrage.ships[9] !== undefined) {ship10 = ", " + barrage.ships[9]}
                if (barrage.ships[10] !== undefined) {ship11 = ", " + barrage.ships[10]}
                if (barrage.ships[11] !== undefined) {ship12 = ", " + barrage.ships[11]}
                if (barrage.ships[12] !== undefined) {ship13 = ", " + barrage.ships[12]}
                if (barrage.ships[13] !== undefined) {ship14 = ", " + barrage.ships[13]}
                if (barrage.ships[14] !== undefined) {ship15 = ", " + barrage.ships[14]}
                if (barrage.ships[15] !== undefined) {ship16 = ", " + barrage.ships[15]}
                if (barrage.ships[16] !== undefined) {ship17 = ", " + barrage.ships[16]}
                if (barrage.ships[17] !== undefined) {ship18 = ", " + barrage.ships[17]}
                if (barrage.ships[18] !== undefined) {ship19 = ", " + barrage.ships[18]}
                if (barrage.ships[19] !== undefined) {ship20 = ", " + barrage.ships[19]}
            var ship = ship01+ship02+ship03+ship04+ship05+ship06+ship07+ship08+ship09+ship10+ship11+ship12+ship13+ship14+ship15+ship16+ship17+ship18+ship19+ship20;
            var hull = barrage.hull;
            var roundLength = barrage.rounds.length;
            let type = barrage.rounds[0].type;
            let dmgL = barrage.rounds[0].dmgL;
            let dmgM = barrage.rounds[0].dmgM;
            let dmgH = barrage.rounds[0].dmgH;
            let note = "";
            if (barrage.rounds[0].note !== undefined && barrage.rounds[0].note !== null) {note = barrage.rounds[0].note;}
            let gif = "eqn";
            if (barrage.image !== undefined && barrage.image !== null) {gif = "eqy"}
            if (roundLength == 1) {
                SkillOutput += `
                    <tr class="x${id}" data-toggle="modal" data-target=".${id}" onclick="modalCall('${id}')">
                        <td class="${gif}"><img class="icon" src="${icon}"></td>
                        <td><a href="#${id}">${name}</a></td>
                        <td>${ship}</td>
                        <td>${hull}</td>
                        <td class="${type}">${type}</td>
                        <td>${dmgL}</td>
                        <td>${dmgM}</td>
                        <td>${dmgH}</td>
                        <td>${note}</td>
                    </tr>
                `}
            if (roundLength == 2) {
                let type1 = barrage.rounds[1].type;
                let dmgL1 = barrage.rounds[1].dmgL;
                let dmgM1 = barrage.rounds[1].dmgM;
                let dmgH1 = barrage.rounds[1].dmgH;
                let note1 = "";
                if (barrage.rounds[1].note !== undefined && barrage.rounds[1].note !== null) {note1 = barrage.rounds[1].note;}
                SkillOutput += `
                    <tr class="x${id}" data-toggle="modal" data-target=".${id}" onclick="modalCall('${id}')">
                        <td rowspan="2" class="${gif}"><img class="icon" src="${icon}"></td>
                        <td rowspan="2"><a href="#${id}">${name}</a></td>
                        <td rowspan="2">${ship}</td>
                        <td rowspan="2">${hull}</td>
                        <td class="${type}">${type}</td>
                        <td>${dmgL}</td>
                        <td>${dmgM}</td>
                        <td>${dmgH}</td>
                        <td>${note}</td>
                    </tr>
                    <tr data-toggle="modal" data-target=".${id}">
                        <td class="${type1}">${type1}</td>
                        <td>${dmgL1}</td>
                        <td>${dmgM1}</td>
                        <td>${dmgH1}</td>
                        <td>${note1}</td>
                    </tr>
                `}
            if (roundLength == 3) {
                let type1 = barrage.rounds[1].type;
                let dmgL1 = barrage.rounds[1].dmgL;
                let dmgM1 = barrage.rounds[1].dmgM;
                let dmgH1 = barrage.rounds[1].dmgH;
                let note1 = "";
                if (barrage.rounds[1].note !== undefined && barrage.rounds[1].note !== null) {note1 = barrage.rounds[1].note;}
                let type2 = barrage.rounds[2].type;
                let dmgL2 = barrage.rounds[2].dmgL;
                let dmgM2 = barrage.rounds[2].dmgM;
                let dmgH2 = barrage.rounds[2].dmgH;
                let note2 = "";
                if (barrage.rounds[2].note !== undefined && barrage.rounds[2].note !== null) {note2 = barrage.rounds[2].note;}
                SkillOutput += `
                    <tr class="x${id}" data-toggle="modal" data-target=".${id}" onclick="modalCall('${id}')">
                        <td rowspan="3" class="${gif}"><img class="icon" src="${icon}"></td>
                        <td rowspan="3"><a href="#${id}">${name}</a></td>
                        <td rowspan="3">${ship}</td>
                        <td rowspan="3">${hull}</td>
                        <td class="${type}">${type}</td>
                        <td>${dmgL}</td>
                        <td>${dmgM}</td>
                        <td>${dmgH}</td>
                        <td>${note}</td>
                    </tr>
                    <tr data-toggle="modal" data-target=".${id}">
                        <td class="${type1}">${type1}</td>
                        <td>${dmgL1}</td>
                        <td>${dmgM1}</td>
                        <td>${dmgH1}</td>
                        <td>${note1}</td>
                    </tr>
                    <tr>
                        <td class="${type2}">${type2}</td>
                        <td>${dmgL2}</td>
                        <td>${dmgM2}</td>
                        <td>${dmgH2}</td>
                        <td>${note2}</td>
                    </tr>
                `}
            if (roundLength == 4) {
                let type1 = barrage.rounds[1].type;
                let dmgL1 = barrage.rounds[1].dmgL;
                let dmgM1 = barrage.rounds[1].dmgM;
                let dmgH1 = barrage.rounds[1].dmgH;
                let note1 = "";
                if (barrage.rounds[1].note !== undefined && barrage.rounds[1].note !== null) {note1 = barrage.rounds[1].note;}
                let type2 = barrage.rounds[2].type;
                let dmgL2 = barrage.rounds[2].dmgL;
                let dmgM2 = barrage.rounds[2].dmgM;
                let dmgH2 = barrage.rounds[2].dmgH;
                let note2 = "";
                if (barrage.rounds[2].note !== undefined && barrage.rounds[2].note !== null) {note2 = barrage.rounds[2].note;}
                let type3 = barrage.rounds[3].type;
                let dmgL3 = barrage.rounds[3].dmgL;
                let dmgM3 = barrage.rounds[3].dmgM;
                let dmgH3 = barrage.rounds[3].dmgH;
                let note3 = "";
                if (barrage.rounds[3].note !== undefined && barrage.rounds[3].note !== null) {note2 = barrage.rounds[3].note;}
                SkillOutput += `
                    <tr class="x${id}" data-toggle="modal" data-target=".${id}" onclick="modalCall('${id}')">
                        <td rowspan="4" class="${gif}"><img class="icon" src="${icon}"></td>
                        <td rowspan="4"><a href="#${id}">${name}</a></td>
                        <td rowspan="4">${ship}</td>
                        <td rowspan="4">${hull}</td>
                        <td class="${type}">${type}</td>
                        <td>${dmgL}</td>
                        <td>${dmgM}</td>
                        <td>${dmgH}</td>
                        <td>${note}</td>
                    </tr>
                    <tr data-toggle="modal" data-target=".${id}">
                        <td class="${type1}">${type1}</td>
                        <td>${dmgL1}</td>
                        <td>${dmgM1}</td>
                        <td>${dmgH1}</td>
                        <td>${note1}</td>
                    </tr>
                    <tr data-toggle="modal" data-target=".${id}">
                        <td class="${type2}">${type2}</td>
                        <td>${dmgL2}</td>
                        <td>${dmgM2}</td>
                        <td>${dmgH2}</td>
                        <td>${note2}</td>
                    </tr>
                    <tr>
                        <td class="${type3}">${type3}</td>
                        <td>${dmgL3}</td>
                        <td>${dmgM3}</td>
                        <td>${dmgH3}</td>
                        <td>${note3}</td>
                    </tr>
                `}
        }
    })
}

function modalCreate (idx) {
    for (var i = 0; i < barrage.length; i++) {
        if (barrage[i].id.replace(/\./g,'').replace(/\:/g,'') == idx) {
            var name = barrage[i].name;
            var icon = barrage[i].icon;
            // Ship
                let ship01 = "";
                let ship02 = "";
                let ship03 = "";
                let ship04 = "";
                let ship05 = "";
                let ship06 = "";
                let ship07 = "";
                let ship08 = "";
                let ship09 = "";
                let ship10 = "";
                let ship11 = "";
                let ship12 = "";
                let ship13 = "";
                let ship14 = "";
                let ship15 = "";
                let ship16 = "";
                let ship17 = "";
                let ship18 = "";
                let ship19 = "";
                let ship20 = "";
                if (barrage[i].ships[0] !== undefined) {ship01 = barrage[i].ships[0]}
                if (barrage[i].ships[1] !== undefined) {ship02 = ", " + barrage[i].ships[1]}
                if (barrage[i].ships[2] !== undefined) {ship03 = ", " + barrage[i].ships[2]}
                if (barrage[i].ships[3] !== undefined) {ship04 = ", " + barrage[i].ships[3]}
                if (barrage[i].ships[4] !== undefined) {ship05 = ", " + barrage[i].ships[4]}
                if (barrage[i].ships[5] !== undefined) {ship06 = ", " + barrage[i].ships[5]}
                if (barrage[i].ships[6] !== undefined) {ship07 = ", " + barrage[i].ships[6]}
                if (barrage[i].ships[7] !== undefined) {ship08 = ", " + barrage[i].ships[7]}
                if (barrage[i].ships[8] !== undefined) {ship09 = ", " + barrage[i].ships[8]}
                if (barrage[i].ships[9] !== undefined) {ship10 = ", " + barrage[i].ships[9]}
                if (barrage[i].ships[10] !== undefined) {ship11 = ", " + barrage[i].ships[10]}
                if (barrage[i].ships[11] !== undefined) {ship12 = ", " + barrage[i].ships[11]}
                if (barrage[i].ships[12] !== undefined) {ship13 = ", " + barrage[i].ships[12]}
                if (barrage[i].ships[13] !== undefined) {ship14 = ", " + barrage[i].ships[13]}
                if (barrage[i].ships[14] !== undefined) {ship15 = ", " + barrage[i].ships[14]}
                if (barrage[i].ships[15] !== undefined) {ship16 = ", " + barrage[i].ships[15]}
                if (barrage[i].ships[16] !== undefined) {ship17 = ", " + barrage[i].ships[16]}
                if (barrage[i].ships[17] !== undefined) {ship18 = ", " + barrage[i].ships[17]}
                if (barrage[i].ships[18] !== undefined) {ship19 = ", " + barrage[i].ships[18]}
                if (barrage[i].ships[19] !== undefined) {ship20 = ", " + barrage[i].ships[19]}
            var ship = ship01+ship02+ship03+ship04+ship05+ship06+ship07+ship08+ship09+ship10+ship11+ship12+ship13+ship14+ship15+ship16+ship17+ship18+ship19+ship20;
            let image = "";
            if (barrage[i].image !== undefined && barrage[i].image !== null) {image = `
                <tr>
                    <th colspan="5">Pattern Animation</th>
                <tr>
                </tr>
                    <td colspan="5"><img src="${barrage[i].image}"></td>
                </tr>
            `}
            // round0
                var type = `<td class="${barrage[i].rounds[0].type}">${barrage[i].rounds[0].type}</td>`;
                    dmgL = `<td>${barrage[i].rounds[0].dmgL}</td>`;
                    dmgM = `<td>${barrage[i].rounds[0].dmgM}</td>`;
                    dmgH = `<td>${barrage[i].rounds[0].dmgH}</td>`;
                let note = "";
                if(barrage[i].rounds[0] !== undefined && barrage[i].rounds[0].note !== null) {
                    if (barrage[i].rounds[0].note !== null) {
                        note = `<td>${barrage[i].rounds[0].note}</td>`
                    }
                }
            // round1
                let type1 = "";
                    dmgL1 = "";
                    dmgM1 = "";
                    dmgH1 = "";
                    note1 = "";
                if (barrage[i].rounds[1] !== undefined) {
                    type1 = `<td class="${barrage[i].rounds[1].type}">${barrage[i].rounds[1].type}</td>`;
                    dmgL1 = `<td>${barrage[i].rounds[1].dmgL}</td>`;
                    dmgM1 = `<td>${barrage[i].rounds[1].dmgM}</td>`;
                    dmgH1 = `<td>${barrage[i].rounds[1].dmgH}</td>`;
                }
                if(barrage[i].rounds[1] !== undefined && barrage[i].rounds[1] !== null) {
                    if (barrage[i].rounds[1].note !== null) {
                        note1 = `<td>${barrage[i].rounds[1].note}</td>`
                    }
                }
            // round2
                let type2 = "";
                    dmgL2 = "";
                    dmgM2 = "";
                    dmgH2 = "";
                    note2 = "";
                if (barrage[i].rounds[2] !== undefined) {
                    type2 = `<td class="${barrage[i].rounds[2].type}">${barrage[i].rounds[2].type}</td>`;
                    dmgL2 = `<td>${barrage[i].rounds[2].dmgL}</td>`;
                    dmgM2 = `<td>${barrage[i].rounds[2].dmgM}</td>`;
                    dmgH2 = `<td>${barrage[i].rounds[2].dmgH}</td>`;
                }
                if(barrage[i].rounds[2] !== undefined && barrage[i].rounds[2].note !== null) {
                    if (barrage[i].rounds[2].note !== null) {
                        note = `<td>${barrage[i].rounds[2].note}</td>`
                    }
                }
            // round3
                let type3 = "";
                    dmgL3 = "";
                    dmgM3 = "";
                    dmgH3 = "";
                    note3 = "";
                if (barrage[i].rounds[3] !== undefined) {
                    type3 = `<td class="${barrage[i].rounds[3].type}">${barrage[i].rounds[3].type}</td>`;
                    dmgL3 = `<td>${barrage[i].rounds[3].dmgL}</td>`;
                    dmgM3 = `<td>${barrage[i].rounds[3].dmgM}</td>`;
                    dmgH3 = `<td>${barrage[i].rounds[3].dmgH}</td>`;
                }
                if(barrage[i].rounds[3] !== undefined && barrage[i].rounds[3].note !== null) {
                    if (barrage[i].rounds[3].note !== null) {
                        note = `<td>${barrage[i].rounds[3].note}</td>`
                    }
                }
            var round0 = `<tr>${type+dmgL+dmgM+dmgH+note}</tr>`;
            var round1 = `<tr>${type1+dmgL1+dmgM1+dmgH1+note1}</tr>`;
            var round2 = `<tr>${type2+dmgL2+dmgM2+dmgH2+note2}</tr>`;
            var round3 = `<tr>${type3+dmgL3+dmgM3+dmgH3+note3}</tr>`;
            var round = round0 + round1 + round2 + round3;
            return `
                <div class="modal fade ${idx}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <table class="table table-bordered text-center">
                                <thead>
                                    <tr>
                                        <th colspan="5">${name}</th>
                                    </tr>
                                    <tr>
                                        <th colspan="5"><img src="${icon}"></th>
                                    </tr>
                                    <tr>
                                        <th>Ships</th>
                                        <td colspan="5">${ship}</td>
                                    </tr>
                                    <tr>
                                        <th>Round Type</th>
                                        <th>Light</th>
                                        <th>Medium</th>
                                        <th>Heavy</th>
                                        <th>Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${round}
                                    ${image}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}
function modalCall (idx) {
    $(".modal-container").append(modalCreate(idx))
    $(".x"+idx).removeAttr("onclick")
}
function classLoad () {
    document.getElementById("ocf-1").onclick = ()=> false
    $(".ClassOutput").append(ClassOutput)};
    $("#ClassTable").dataTable({searching: false, paging: false, info: false});
function skillLoad () {
    document.getElementById("ocf-2").onclick = ()=> false
    $(".SkillOutput").append(SkillOutput)};
    $("#SkillTable").dataTable({searching: false, paging: false, info: false});
