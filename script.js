// create common shipcards
	var l1 = '<div class="shipcard" id="';
    var lx = 'Common'; //shiprarity
    var l3 = '">' +
             '<div class="shipcover">' +
             '<div class="shipstype';
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