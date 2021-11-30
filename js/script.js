// Index Cards
// function cards
function cards (cardparent, cid, ctype, clink, cimage, ctitle, cidnumber, cstatus) {
  return `
    <div id="${cardparent}">
      <div class="card ${cid}">
        <div class="cover">
          <div class="edit ${ctype}"></div>
          <div class="image" onclick="location.href=\'${clink}\'"> style="backgrond-image: url(\'Images/${cimage}\');"></div>
        </div>
        <div class="title">
          <a id="${clink}">${ctitle}</a>
        </div>
        <div id="number">${cidnumber}</div>
        <div class="progress ${cstatus}">${cstatus}</div>
      </div>
    </div>`;
	}

// function scard
  // Azur Lane Cards
  // create common shipcards
  // document.getElementById("demo1").innerHTML = sc1("Rare","a.html","a.png","zara","#22");
  // $("#tester").html(scard(n52[0], n52[1], n52[2], n52[3], n52[4], n52[5]))
  var S1 = '<div id="';
  var Sx = 'card-01' //Card Parent > fill with ship id
  var S2 = '">' +
           '<div class="shipcard" id="';
  var Sx = 'Common'; //shiprarity
  var S3 = '">' +
           '<div class="shipcover">' +
           '<div class="shiptype ';
  var Sx = 'BB/CV/CVL'; //shiptype 
  var S4 = '">' +
           '</div>' +
           '<div class="shipimage" onclick="window.open(\'AL/';
  var Sx = 'card-01.html'; //shiplink
  var S5 = '\', \'_blank\')" style="background-image: url(\'AL/Shipcover/';
  var Sx = 'shipimage'; //shipimages
  var S6 = '\');"></div>' +
           '</div>' +
           '<div class="shipname">' +
           '<a href="AL/';
  var Sx = 'shiplink'; //shiplink
  var S7 = '">';
  var Sx = 'shipname'; //shipname
  var S8 = '</a>' + 
           '</div>' +
           '<div id="shipid">#';
  var Sx = '#01'; //shipid
  var S9 = '</div>' + 
            '<div class="rarity ';
  var Sx = 'Common' //shiprarity
  var S10 = '">'; 
  var Sx = 'Common'; //shiprarity
  var S11 = '</div>' +
            '</div>' +
            '</div>';

  var ss = 12
  // 2 + 4 + 6 + 9 + 11 + 13 + 15 + 16

  function scard (shiprarity, shiptype, shiplink, shipimage, shipname, shipid) {
      return S1+shipid+S2+shiprarity+S3+shiptype+S4+shiplink+S5+shipimage+S6+shiplink+S7+shipname+S8+shipid+S9+shiprarity+S10+shiprarity+S11
  }

// function pscard
  // Azur Lane Cards
  // create common shipcards
  // document.getElementById("demo1").innerHTML = sc1("Rare","a.html","a.png","zara","#22");
  // $("#tester").html(scard(n52[0], n52[1], n52[2], n52[3], n52[4], n52[5]))
  var PS1 =  '<div id="';
  var PS2 =  '">' +
             '<div class="shipcard" id="';
  var PS3 =  '">' +
             '<div class="shipcover">' +
             '<div class="shiptype ';
  var PS4 =  '">' +
             '</div>' +
             '<div class="shipimage" onclick="window.open(\'../AL/';
  var PS5 =  '\', \'_blank\')" style="background-image: url(\'../AL/Shipcover/';
  var PS6 =  '\');"></div>' +
             '</div>' +
             '<div class="shipname">' +
             '<a href="../AL/';
  var PS7 =  '">';
  var PS8 =  '</a>' + 
             '</div>' +
             '<div id="shipid">#';
  var PS9 =  '</div>' + 
             '<div class="rarity ';
  var PS10 = '">'; 
  var PS11 = '</div>' +
             '</div>' +
             '</div>';

  function pscard (shiprarity, shiptype, shiplink, shipimage, shipname, shipid) {
      return PS1+shipid+PS2+shiprarity+PS3+shiptype+PS4+shiplink+PS5+shipimage+PS6+shiplink+PS7+shipname+PS8+shipid+PS9+shiprarity+PS10+shiprarity+PS11
  }

// AZUR LANE TAB FUNCTION
  function openCards(evt, cardName) {
          var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
              tabcontent[i].style.display = "none";
          }
          tablinks = document.getElementsByClassName("tablinks");
          for (i = 0; i < tablinks.length; i++) {
              tablinks[i].className = tablinks[i].className.replace(" active", "");
          }
          document.getElementById(cardName).style.display = "block";
          evt.currentTarget.className += " active";
      }

  function openCardsChild(evt, cardName) {
          var i, tabcontentChild, tablinksChild;
          tabcontentChild = document.getElementsByClassName("tabcontentChild");
          for (i = 0; i < tabcontentChild.length; i++) {
              tabcontentChild[i].style.display = "none";
          }
          tablinksChild = document.getElementsByClassName("tablinksChild");
          for (i = 0; i < tablinksChild.length; i++) {
              tablinksChild[i].className = tablinksChild[i].className.replace(" active", "");
          }
          document.getElementById(cardName).style.display = "block";
          evt.currentTarget.className += " active";
      }

  function openCardsChild2(evt, cardName) {
          var i, tabcontentChild2, tablinksChild2;
          tabcontentChild2 = document.getElementsByClassName("tabcontentChild2");
          for (i = 0; i < tabcontentChild2.length; i++) {
              tabcontentChild2[i].style.display = "none";
          }
          tablinksChild2 = document.getElementsByClassName("tablinksChild2");
          for (i = 0; i < tablinksChild2.length; i++) {
              tablinksChild2[i].className = tablinksChild2[i].className.replace(" active", "");
          }
          document.getElementById(cardName).style.display = "block";
          evt.currentTarget.className += " active";
      }

// AZUR LANE SHOW ALL FUNCTION 
  function allshow () {
      $("#BB-tab").show();
      $("#CV-tab").show();
      $("#CA-tab").show();
      $("#CL-tab").show();
      $("#DD-tab").show();
      $("#SS-tab").show();
      $("#AUX-tab").show();   
    }

// AJAX // EXPERIMENTAL
  function bodyajax (ids) {
    $(document).ready(function () {
      $('#'+ids).click(function () {
        $("body").load(ids+'.txt');
      })
    })
  }

// blank
  function loadDoc(url, cFunction) {
    var xhttp;
    xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        cFunction(this);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  function myFunction(xhttp) {
    document.getElementById("demo").innerHTML =
    xhttp.responseText;
  }
