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
var w0 = '<tr>' +
		 '<th class="slevel">';
var w1 = '</th>' +
		 '<th class="snext">';
var w2 = '</th>' +
		 '<th class="stotal">';
var w3 = '</th>' +
		 '<th class="slevel">';
var w4 = '</th>' +
		 '<th class="snext">';
var w5 = '</th>' +
		 '<th class="stotal">';
var w6 = '</th>' +
		 '<th class="slevel">';
var w7 = '</th>' +
		 '<th class="snext">';
var w8 = '</th>' +
		 '<th class="stotal">';
var w9 = '</th>' +
		 '<th class="slevel">';
var w10 = '</th>' +
		 '<th class="snext">';
var w11 = '</th>' +
		 '<th class="stotal">';
var w12 = '</th>' +
		  '</tr>';

function shipLevel (sl1, sn1, st1, sl2, sn2, st2, sl3, sn3, st3, sl4, sn4, st4) {
	return w0+sl1+w1+sn1+w2+st1+w3+sl2+w4+sn2+w5+st2+w6+sl3+w7+sn3+w8+st3+w9+sl4+w10+sn4+w11+st4+w12
}
var tabExp =		'<div>' +
    					'<div class="tabcontentChild" id="tab0x1" style="display: block;">' +
			    			'<h3>Commander Experience</h3>' +
			    			'<div>' +
			    				'<div>' +
			    					'<table class="cexpB">' +
			    						'<tbody>' +
			    							'<tr>' +
			    								'<th>Ships</th>' +
			    								'<td>2</td>' +
			    								'<td>3</td>' +
			    								'<td>4</td>' +
			    								'<td>5</td>' +
			    								'<td>6</td>' +
			    								'<td>7</td>' +
			    								'<td>8</td>' +
			    								'<td>9</td>' +
			    							'</tr>' +
			    							'<tr>' +
			    								'<th>Campaign, A-rank</th>' +
			    								'<td>20</td>' +
			    								'<td>27</td>' +
			    								'<td>35</td>' +
			    								'<td>42</td>' +
			    								'<td>49</td>' +
			    								'<td>57</td>' +
			    								'<td>65</td>' +
			    								'<td>72</td>' +
			    							'</tr>' +
			    							'<tr>' +
			    								'<th>Campaign, S-rank</th>' +
			    								'<td>24</td>' +
			    								'<td>32</td>' +
			    								'<td>42</td>' +
			    								'<td>51</td>' +
			    								'<td>59</td>' +
			    								'<td>69</td>' +
			    								'<td>78</td>' +
			    								'<td>87</td>' +
			    							'</tr>' +
			    							'<tr>' +
			    								'<th>Daily raid, S-rank</th>' +
			    								'<td colspan="8">60</td>' +
			    							'</tr>' +
			    						'</tbody>' +
			    					'</table>' +
			    				'</div>' +
			    				'<div>' +
			    					'<p>Difference level gap between <strong>Commander</strong> & <strong>Enemy</strong> reduce the experience gain. 21-40 level difference reduce the experience by half, 41+ level difference reduce 1/10 experience of original value.</p>' +
			    				'</div>' +
			    				'<div class="cexpt">' +
			    					'<table>' +
				    					'<tbody id="CxChart">' +
				    						'<tr>' +
				    							'<th class="clevel">Level</th>' +
				    							'<th class="cnext">Next</th>' +
				    							'<th class="ctotal">Total</th>' +
				    							'<th class="coils">Oils</th>' +
				    							'<th class="ccoins">Coins</th>' +
				    							'<th class="clevel">Level</th>' +
				    							'<th class="cnext">Next</th>' +
				    							'<th class="ctotal">Total</th>' +
				    							'<th class="coils">Oils</th>' +
				    							'<th class="ccoins">Coins</th>' +
				    							'<th class="clevel">Level</th>' +
				    							'<th class="cnext">Next</th>' +
				    							'<th class="ctotal">Total</th>' +
				    							'<th class="coils">Oils</th>' +
				    							'<th class="ccoins">Coins</th>' +
				    							'<th class="clevel">Level</th>' +
				    							'<th class="cnext">Next</th>' +
				    							'<th class="ctotal">Total</th>' +
				    							'<th class="coils">Oils</th>' +
				    							'<th class="ccoins">Coins</th>' +
				    						'</tr>' +
				    					'</tbody>' +
				    				'</table>' +
			    				'</div>' +
			    			'</div>' +
			            '</div>' +
			            '<div class="tabcontentChild" id="tab0x2" style="display: none;">' +
			    			'<h3>Ship Experience</h3>' +
			    			'<div>' +
			    				'<p>Total Experience Chart</p>' +
			    				'<div class="expcs">' +
			    					'<table>' +
			    						'<tbody>' +
			    							'<tr>' +
			    								'<th>Ship Rarity</th>' +
				    							'<td>Limit Break 1</td>' +
				    							'<td>Limit Break 2</td>' +
				    							'<td>Limit Break 3</td>' +
				    							'<td>Level 100</td>' +
				    							'<td>Level 105</td>' +
				    							'<td>Level 110</td>' +
				    							'<td>Level 115</td>' +
				    							'<td>Level 120</td>' +
				    						'</tr>' +
				    						'<tr>' +
				    							'<th class="srar1">N/R/E/SR/PR</th>' +
				    							'<td>4500</td>' +
				    							'<td>43500</td>' +
				    							'<td>289500</td>' +
				    							'<td>1120675</td>' +
				    							'<td>1490675</td>' +
				    							'<td>2035675</td>' +
				    							'<td>2940675</td>' +
				    							'<td>4325675</td>' +
				    						'</tr>' +
				    						'<tr>' +
				    							'<th class="srar2">UR/DR</th>' +
				    							'<td>5400</td>' +
				    							'<td>5220</td>' +
				    							'<td>347400</td>' +
				    							'<td>1241000</td>' +
				    							'<td>1685000</td>' +
				    							'<td>2339000</td>' +
				    							'<td>3425000</td>' +
				    							'<td>5087000</td>' +
				    						'</tr>' +
			    						'</tbody>' +
			    					'</table>' +
			    				'</div>' +
			    				'<p>Experience Chart Level 120</p>' +
			    				'<div class="expcs2">' +
			    					'<table>' +
			    						'<tbody>' +
			    							'<tr>' +
			    								'<th rowspan="4">Normal/Rare/Elite/Super Rare/Priority</th>' +
			    								'<td>100 > 105</td>' +
			    								'<td>370000</td>' +
			    							'</tr>' +
			    							'<tr>' +
			    								'<td>100 > 110</td>' +
			    								'<td>915000</td>' +
			    								'<td>105 > 110</td>' +
			    								'<td>545000</td>' +
			    							'</tr>' +
			    							'<tr>' +
			    								'<td>100 > 115</td>' +
			    								'<td>1820000</td>' +
			    								'<td>105 > 115</td>' +
			    								'<td>1450000</td>' +
			    								'<td>110 > 115</td>' +
			    								'<td>905000</td>' +
			    							'</tr>' +
			    							'<tr>' +
			    								'<td>100 > 120</td>' +
			    								'<td>3846000</td>' +
			    								'<td>105 > 120</td>' +
			    								'<td>3402000</td>' +
			    								'<td>110 > 120</td>' +
			    								'<td>2748000</td>' +
			    								'<td>115 > 120</td>' +
			    								'<td>1662000</td>' +
			    							'</tr>' +
			    						'</tbody>' +
			    					'</table>' +
			    				'</div>' +
			    				'<div class="expcs3">' +
			    					'<table>' +
			    						'<tbody>' +
			    							'<tr>' +
			    								'<th rowspan="4">Ultra Rare/Decisive</th>' +
			    								'<td>100 > 105</td>' +
			    								'<td>444000</td>' +
			    							'</tr>' +
			    							'<tr>' +
			    								'<td>100 > 110</td>' +
			    								'<td>1098000</td>' +
			    								'<td>105 > 110</td>' +
			    								'<td>654000</td>' +
			    							'</tr>' +
			    							'<tr>' +
			    								'<td>100 > 115</td>' +
			    								'<td>2184000</td>' +
			    								'<td>105 > 115</td>' +
			    								'<td>1740000</td>' +
			    								'<td>110 > 115</td>' +
			    								'<td>1086000</td>' +
			    							'</tr>' +
			    							'<tr>' +
			    								'<td>100 > 120</td>' +
			    								'<td>3846000</td>' +
			    								'<td>105 > 120</td>' +
			    								'<td>3402000</td>' +
			    								'<td>110 > 120</td>' +
			    								'<td>2748000</td>' +
			    								'<td>115 > 120</td>' +
			    								'<td>1662000</td>' +
			    							'</tr>' +
			    						'</tbody>' +
			    					'</table>' +
			    				'</div>' +
			    			'</div>' +
			    			'<div>' +
			    				'<div class="sexpt">' +
			    					'<p>Experience Table</p>' +
			    					'<table>' +
			    						'<tbody id="SxChart">' +
			    							'<tr>' +
			    								'<th colspan="6" class="srar1">Super Rare / Priority</th>' +
			    								'<th colspan="6" class="srar2">Ultra Rare / Decisive</th>' +
			    							'</tr>' +
			    							'<tr>' +
			    								'<th class="slevel">Level</th>' +
			    								'<th class="snext">Next</th>' +
			    								'<th class="stotal">Total</th>' +
			    								'<th class="slevel">Level</th>' +
			    								'<th class="snext">Next</th>' +
			    								'<th class="stotal">Total</th>' +
			    								'<th class="slevel">Level</th>' +
			    								'<th class="snext">Next</th>' +
			    								'<th class="stotal">Total</th>' +
			    								'<th class="slevel">Level</th>' +
			    								'<th class="snext">Next</th>' +
			    								'<th class="stotal">Total</th>' +
			    							'</tr>' +
			    						'</tbody>' +
			    					'</table>' +
			    				'</div>' +
			    			'</div>' +
			            '</div>' +
			            '<div class="tabcontentChild" id="tab0x3" style="display: none;">' +
			    			'<h3>Stage Experience</h3>' +
			            '</div>' +
    				'<div>';