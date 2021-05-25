var q0 = '<tr>' +
		   '<th class="clevel">';
//var cex0 = 'level-r1c1';
var q1 = '</th>' +
		   '<th class="cnext">';
//var cex1 = 'next-r1c1';
var q2 = '</th>' +
		   '<th class="ctotal">';
//var cex2 = 'total-r1c1';
var q3 = '</th>' +
		   '<th class="coils">';
//var cex3 = 'oils-r1c1';
var q4 = '</th>' +
		   '<th class="ccoins">';
//var cex3 = 'coins-r1c1';
var q5 = '</th>' +
		   '<th class="clevel">';
//var cex0 = 'level-r1c1';
var q6 = '</th>' +
		   '<th class="cnext">';
//var cex1 = 'next-r1c1';
var q7 = '</th>' +
		   '<th class="ctotal">';
//var cex2 = 'total-r1c1';
var q8 = '</th>' +
		   '<th class="coils">';
//var cex3 = 'oils-r1c1';
var q9 = '</th>' +
		   '<th class="ccoins">';
//var cex3 = 'coins-r1c1';
var q10 = '</th>' +
		   '<th class="clevel">';
//var cex0 = 'level-r1c1';
var q11 = '</th>' +
		   '<th class="cnext">';
//var cex1 = 'next-r1c1';
var q12 = '</th>' +
		   '<th class="ctotal">';
//var cex2 = 'total-r1c1';
var q13 = '</th>' +
		   '<th class="coils">';
//var cex3 = 'oils-r1c1';
var q14 = '</th>' +
		   '<th class="ccoins">';
//var cex3 = 'coins-r1c1';
var q15 = '</th>' +
		   '<th class="clevel">';
//var cex0 = 'level-r1c1';
var q16 = '</th>' +
		   '<th class="cnext">';
//var cex1 = 'next-r1c1';
var q17 = '</th>' +
		   '<th class="ctotal">';
//var cex2 = 'total-r1c1';
var q18 = '</th>' +
		   '<th class="coils">';
//var cex3 = 'oils-r1c1';
var q19 = '</th>' +
		   '<th class="ccoins">';
//var cex3 = 'coins-r1c1';
var q20 = '</th>' +
			'</tr>';

function commanderLevel (lv1, nx1, tt1, ol1, co1, lv2, nx2, tt2, ol2, co2, lv3, nx3, tt3, ol3, co3, lv4, nx4, tt4, ol4, co4) {
	return q0+lv1+q1+nx1+q2+tt1+q3+ol1+q4+co1+q5+lv2+q6+nx2+q7+tt2+q8+ol2+q9+co2+q10+lv3+q11+nx3+q12+tt3+q13+ol3+q14+co3+q15+lv4+q16+nx4+q17+tt4+q18+ol4+q19+co4+q20
}

function get_experience_to_next_level (level) {
	if (!(+level>0)) {
		return-1;
	}
	if (level<=40) {
		return 100*level;
	}
	else if (level<=60) {
		return 4000+200*(level-40)
	}
	else if (level<=69) {
		return 8000+300*(level-60);
	}
	else if (level<=70) {
		return 10700+1400*(level-69);
	}
	else if (level<=79) {
		return 12100+440*(level-70);
	}
	else if (level<=89) {
		return 17250+575*(level-80);
	}
	else if (level<=90) {
		return 22425+1575*(level-89);
	}
	else if (level<=92) {
		return 24000+1200*(level-90);
	}
	else if (level<=94) {
		return 26400+2400*(level-92);
	}
	else if (level<=95) {
		return 31200+4800*(level-94);
	}
	else if (level<=97) {
		return 36000+6000*(level-95);
	}
	else if (level<=98) {
		return 48000+24000*(level-97);
	}
	else if (level<=99) {
		return 72000+86400*(level-98);
	}
	else if (level<=104) {
		return 70000+2000*(level-100);
	}
	else if (level<=105) {
		return 85000+7000*(level-105);
	}
	else if (level<=110) {
		return 145000+12000*(level-110);
	}
	else if (level<=115) {
		return 235000+18000*(level-115);
	}
	else if (level<120) {
		return 235000+21000*(level-115);
	}
	else {
		return-1;
	}
}

var experience_table = null;
function populate_experience_table () {
	if (experience_table) {
		return;
	}
	experience_table = new Array(120);
	experience_table[0] = 0;
	for (let i=1;i<120;i++) {
		experience_table[i] = experience_table[i-1] + get_experience_to_next_level(i);
	}
}

populate_experience_table();
function get_total_exp (level) {
	if (level>0&&level<=120) {
		return experience_table[level-1];
	}
	else {
		return-1;
	}
}
function get_exp_diff (current_level,target_level) {
	let current_exp=get_total_exp(current_level);
	let target_exp=get_total_exp(target_level);
	if (current_exp<0||target_exp<0||target_exp<current_exp) {
		return-1;
	}
	return target_exp-current_exp;
}

function calculate_experience () {
	let current_level=$('#currentleveltextfield').prop("value");
	let target_level=$('#targetleveltextfield').prop("value");
	let exp_diff=get_exp_diff(current_level,target_level);
	if (exp_diff<0) {
		$('#expneeded').prop("innerHTML","Some Error Occurred :(");
	}
	else {
		$('#expneeded').prop("innerHTML",exp_diff.toLocaleString());
	}
}