// Index Cards
// function cards
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
  var Axs = 'al-card.html'; //Card Link -> Card ID FOR AJAX X
  var A5 = '\'" style="background-image: url(\'Images/';
  var Axs = 'Azurlane.png'; //Card Image
  var A6 = '\');"></div>' +
           '</div>' +
           '<div class="title">' +
  		     '<a id="';
  var Axs = 'al-card.html'; //Card Link -> Card ID FOR AJAX X
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