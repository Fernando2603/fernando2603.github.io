// Index Cards
var A1 = '<div class="card" id="';
var Ax1 = 'Azur-Lane'; //Card ID
var A3 = '">' +
         '<div class="cover">' +
         '<div class="edit ';
var Ax2 = 'BB/CV/CVL'; //Card Type
var A4 = '">' +
         '</div>' +
         '<div class="image" onclick="location.href=\'';
var Ax3 = 'al-card.html'; //Card Link
var A5 = '\'" style="background-image: url(\'Images/';
var A6 = 'Azurlane.png'; //Card Image
var A7 = '\');"></div>' +
         '</div>' +
         '<div class="title">';
var A8 = '<a href="';
var A9 = 'al-card.html'; //Card Link
var A10 = '">';
var A11 = 'Azur Lane'; //Card Title
var A12 = '</a>' + 
        '</div>' +
        '<div id="number">';
var A13 = '#01'; //Card IDNumber
var A14 = '</div>' + 
        '<div class="progress ';
var Ax4 = 'Azur-Lane' //Card Status
var A15 = '">';
var A16 = 'Developing'; //Card Status
var A17 = '</div>' +
        '</div>';

function cards (cardid, cardtype, cardlink, cardimage, cardtitle, cardidnumber, cardstatus) {
        return A1+cardid+A3+cardtype+A4+cardlink+A5+cardimage+A7+A8+cardlink+A10+cardtitle+A12+cardidnumber+A14+cardstatus+A15+cardstatus+A17
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
    var shipcards = (l1+l2+l3+l4+l5+l6+l2+l7+l8+l9+l10+l11+l12+l13+l14+l15+l16+l17);
    // 2 + 4 + 6 + 9 + 11 + 13 + 15 + 16

    function scard (shiprarity, shiptype, shiplink, shipimage, shipname, shipid) {
        return l1+shiprarity+l3+shiptype+l4+shiplink+l5+shipimage+l7+l8+shiplink+l10+shipname+l12+shipid+l14+shiprarity+l15+shiprarity+l17
    }

// document.getElementById("demo1").innerHTML = sc1("Rare","a.html","a.png","zara","#22");
// $("#tester").html(scard(n52[0], n52[1], n52[2], n52[3], n52[4], n52[5]))
