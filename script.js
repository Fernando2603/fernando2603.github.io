// create common shipcards
	var l1 = '<div class="shipcard" id="';
    var l2 = 'Common'; //srar
    var l3 = '">' +
            '<div class="shipcover">' +
            '<div class="shipedit">' +
            '</div>' +
            '<div class="shipimage" onclick="location.href=\'';
    var l4 = 'card-01.html'; //sl
    var l5 = '\'" style="background-image: url(\'';
    var l6 = 'shipimage'; //si
    var l7 = '\');"></div>' +
            '</div>' +
            '<div class="shipname">';
    var l8 = '<a href="';
    var l9 = 'shiplink'; //sl
    var l10 = '">';
    var l11 = 'shipname'; //sn
    var l12 = '</a>' + 
            '</div>' +
            '<div id="shipid">';
    var l13 = '#01'; //sid
    var l14 = '</div>' + 
            '<div class="rarity ';
    var l151 = 'Common'
    var l15 = '">'; //srar
    var l16 = 'Common'; //srrr
    var l17 = '</div>' +
            '</div>';

    var ss = 12
    var shipcards = (l1+l2+l3+l4+l5+l6+l2+l7+l8+l9+l10+l11+l12+l13+l14+l15+l16+l17);
    // 2 + 4 + 6 + 9 + 11 + 13 + 15 + 16

    function scard (shiprarity, shiplink, shipimage, shipname, shipid) {
        return l1+shiprarity+l3+shiplink+l5+shipimage+l7+l8+shiplink+l10+shipname+l12+shipid+l14+shiprarity+l15+shiprarity+l17
    }

// document.getElementById("demo1").innerHTML = sc1("Rare","a.html","a.png","zara","#22");