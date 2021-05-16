// Index Cards
var A1 = '<div id="'
var Axs =  'card-01' //Card Parent
var A2 = '">' +
		 '<div class="card" id="';
var Axs = 'Azur-Lane'; //Card ID
var A3 = '">' +
         '<div class="cover">' +
         '<div class="edit ';
var Axs = 'BB/CV/CVL'; //Card Type
var A4 = '">' +
         '</div>' +
         '<div class="image" onclick="location.href=\'';
var Axs = 'al-card.html'; //Card Link
var A5 = '\'" style="background-image: url(\'Images/';
var Axs = 'Azurlane.png'; //Card Image
var A6 = '\');"></div>' +
         '</div>' +
         '<div class="title">' +
		 '<a href="';
var Axs = 'al-card.html'; //Card Link
var A7 = '">';
var Axs = 'Azur Lane'; //Card Title
var A8 = '</a>' + 
         '</div>' +
         '<div id="number">';
var Axs = '#01'; //Card IDNumber
var A9 = '</div>' + 
         '<div class="progress ';
var Axs = 'Azur-Lane' //Card Status
var A10 = '">';
var Axs = 'Developing'; //Card Status
var A11 = '</div>' +
        '</div>' +
        '</div>';

function cards (cardparent, cid, ctype, clink, cimage, ctitle, cidnumber, cstatus) {
        return A1+cardparent+A2+cid+A3+ctype+A4+clink+A5+cimage+A6+clink+A7+ctitle+A8+cidnumber+A9+cstatus+A10+cstatus+A11
    }
// Azur Lane Cards
// create common shipcards
	var l1 = '<div class="shipcard" id="';
    var lx = 'Common'; //shiprarity
    var l3 = '">' +
             '<div class="shipcover">' +
             '<div class="shiptype ';
    var Lz = 'BB/CV/CVL'; //shiptype 
    var l4 = '">' +
             '</div>' +
             '<div class="shipimage" onclick="window.open(\'';
    var lx = 'card-01.html'; //shiplink
    var l5 = '\', \'_blank\')" style="background-image: url(\'AL/Shipcover/';
    var l6 = 'shipimage'; //shipimages
    var l7 = '\');"></div>' +
             '</div>' +
             '<div class="shipname">';
    var l8 = '<a href="';
    var l9 = 'shiplink'; //shiplink
    var l10 = '">';
    var l11 = 'shipname'; //shipname
    var l12 = '</a>' + 
            '</div>' +
            '<div id="shipid">';
    var l13 = '#01'; //shipid
    var l14 = '</div>' + 
            '<div class="rarity ';
    var l151 = 'Common'
    var l15 = '">'; //shiprarity
    var l16 = 'Common'; //shiprarity
    var l17 = '</div>' +
            '</div>';

    var ss = 12
    // 2 + 4 + 6 + 9 + 11 + 13 + 15 + 16

    function scard (shiprarity, shiptype, shiplink, shipimage, shipname, shipid) {
        return l1+shiprarity+l3+shiptype+l4+shiplink+l5+shipimage+l7+l8+shiplink+l10+shipname+l12+shipid+l14+shiprarity+l15+shiprarity+l17
    }

// document.getElementById("demo1").innerHTML = sc1("Rare","a.html","a.png","zara","#22");
// $("#tester").html(scard(n52[0], n52[1], n52[2], n52[3], n52[4], n52[5]))