// $("#tester").html(cards(cardparent, cardid, cardtype, cardlink, cardimage, cardtitle, cardidnumber, cardstatus))
// create parent root with cardparent
// create new id with card id // on patch 30112021 [id] change to [class]
// create new class at cardstatus 
//   var card = [parent, class, type, link, image, title, number, status]
var card00 = ["card-00", "fernando", "blank", "Fernando", "Fernando.jpg", "Fernando", "#00", "Personal"];

var card01 = ["card-01", "azur-lane", "blank", "AL", "Azur-Lane.png", "AL", "#01", "Database"];
var card02 = ["card-02", "azur-lane", "blank", "EventOil", "Azur-Lane.png", "EventOil", "#02", "Calculator"];
var card03 = ["card-03", "azur-lane", "blank", "ShipBannerGenerator", "Azur-Lane.png", "ShipBanner", "#03", "Generator"];
var card04 = ["card-04", "azur-lane", "blank", "barrage", "Azur-Lane.png", "Barrage", "#04", "Database"];
var card05 = ["card-05", "azur-lane", "blank", "coins", "Azur-Lane.png", "Coins", "#05", "Personal"];
var card06 = ["card-06", "azur-lane", "blank", "gear", "Azur-Lane.png", "Gear", "#06", "Database"];
var card07 = ["card-07", "azur-lane", "blank", "meowfficer", "Azur-Lane.png", "Meowfficer", "#07", "Database"];
var card08 = ["card-08", "azur-lane", "blank", "opsi", "Azur-Lane.png", "Operation Siren", "#08", "Personal"];
var card09 = ["card-09", "azur-lane", "blank", "ship", "Azur-Lane.png", "ShipList", "#09", "Database"];
var card10 = ["card-10", "azur-lane", "blank", "shipmax", "Azur-Lane.png", "Ship Max", "#10", "Personal"];
var card11 = ["card-11", "azur-lane", "blank", "ships", "Azur-Lane.png", "Ship Stats", "#11", "Database"];

function cardCreateIndex(container, data){
  $("#container-"+container).append(cards(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7]))
}

function cardCreate00(data) {cardCreateIndex("00", data)}
function cardCreate01(data) {cardCreateIndex("01", data)}

function cardCall() {
  cardCreate01(card00);
  cardCreate01(card01);
  cardCreate01(card02);
  cardCreate01(card03);
  cardCreate01(card04);
  cardCreate01(card05);
  cardCreate01(card06);
  cardCreate01(card07);
  cardCreate01(card08);
  cardCreate01(card09);
  cardCreate01(card10);
  cardCreate01(card11);
}
