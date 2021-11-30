// Index Cards
// function cards
function cards (cardparent, cid, ctype, clink, cimage, ctitle, cidnumber, cstatus) {
  return `
    <div id="${cardparent}">
      <div class="card ${cid}">
        <div class="cover">
          <div class="edit ${ctype}"></div>
          <div class="image" onclick="location.href=\'${clink}\'" style="backgrond-image: url(\'Images/${cimage}\');"></div>
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
  var ss = 12
  // 2 + 4 + 6 + 9 + 11 + 13 + 15 + 16 need to figure this out later [30112021] im too lazy lmao

function scard (shiprarity, shiptype, shiplink, shipimage, shipname, shipid) {
	return `
	<div id="${shipid}">
		<div class="shipcard" id="${shipid}">
			<div class="shipcover">
				<div class="shiptype ${shiptype}"></div>
				<div class="shipimage" onclick="window.open(\'AL/${shiplink}\', \'_blank\')" style="background-image: url(\'AL/Shipcover/'${shipimage}\');"></div>
			</div>
			<div class="shipname">
				<a href="AL/${shiplink}">${shipname}</a>
			</div>
			<div id="shipid">#${shipid}</div>
			<div class="rarity ${shiprarity}">${shiprarity}</div>
		</div>
	</div>
      `
}

// function pscard
  // Azur Lane Cards
  // create common shipcards
  // document.getElementById("demo1").innerHTML = sc1("Rare","a.html","a.png","zara","#22");
  // $("#tester").html(scard(n52[0], n52[1], n52[2], n52[3], n52[4], n52[5]))
function pscard (shiprarity, shiptype, shiplink, shipimage, shipname, shipid) {
	return `
	<div id="${shipid}">
		<div class="shipcard" id="${shiprarity}">
			<div class="shipcover">
				<div class="shiptype ${shiptype}"></div>
				<div class="shipimage" onclick="window.open(\'../AL/${shiplink}\', \'_blank\')" style="background-image: url(\'../AL/Shipcover/${shipimage}\');"></div>'
			</div> 
			<div class="shipname">
				<a href="../AL/${shiplink}">${shipname}</a>
			</div>
			<div id="shipid">#${shipid}</div>
			<div class="rarity ${shiprarity}">${shiprarity}</div>
		</div>
	</div>
`
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
