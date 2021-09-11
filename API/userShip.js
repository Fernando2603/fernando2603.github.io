// 11 September 2021
var userVersion = 'v11092021';
var user = [
  // Akashi
  {
    "name":"Akashi",
    "rarity":[1,1,1,1,1],
    "slot1":"High Performance Anti-Air Radar",
    "slot2":"Sextuple 40mm Bofors",
    "slot3":"Sextuple 40mm Bofors",
    "slot4":"High Performance Anti-Air Radar",
    "slot5":"High Performance Anti-Air Radar"
  },
  // Alabama
  {
    "name":"Alabama",
    "rarity":[2,1,1,1,1],
    "slot1":"Triple 406mm (16\"/45 Mk 6)",
    "slot2":"Twin 100mm (Type 98)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"Super Heavy Shell"
  },
  // Amagi
  {
    "name":"Amagi",
    "rarity":[1,1,1,1,1],
    "slot1":"Twin 406mm (SK C/34 Prototype)",
    "slot2":"Triple 155mm (3rd Year Type)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"Super Heavy Shell"
  },
  // Aquila
  {
    "name":"Aquila",
    "rarity":[1,1,1,1,1],
    "slot1":"Supermarine Seafang",
    "slot2":"Supermarine Seafang",
    "slot3":"Fairey Barracuda",
    "slot4":"Steam Catapult",
    "slot5":"Steam Catapult"
  },
  // Ayanami (Retrofit)
  {
    "name":"Ayanami",
    "rarity":[3,1,1,0,0],
    "slot1":"Single 76mm (3\"/50 caliber gun)",
    "slot2":"533mm Quadruple Homing Torpedo Mount",
    "slot3":"Quadruple 40mm Bofors (Mk 2 Mount)",
    "slot4":"Type 93 Pure Oxygen Torpedo",
    "slot5":"Type 93 Pure Oxygen Torpedo"
  },
  // Belfast
  {
    "name":"Belfast",
    "rarity":[1,1,1,1,2],
    "slot1":"Triple 155mm (3rd Year Type)",
    "slot2":"533mm Quintuple Torpedo Mount",
    "slot3":"Sextuple 40mm Bofors",
    "slot4":"Improved Hydraulic Rudder",
    "slot5":"Repair Toolkit"
  },
  // Bismarck
  {
    "name":"Bismarck",
    "rarity":[2,1,1,1,1],
    "slot1":"Triple 406mm (16\"/45 Mk 6)",
    "slot2":"Twin 100mm (Type 98)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"Unfulfilled Promise"
  },
  // Champagne
  {
    "name":"Champagne",
    "rarity":[2,1,1,1,1],
    "slot1":"Triple 406mm (16\"/45 Mk 6)",
    "slot2":"Triple 155mm (3rd Year Type)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"Super Heavy Shell"
  },
  // Cheshire
  {
    "name":"Cheshire",
    "rarity":[1,1,1,1,2],
    "slot1":"Twin 234mm (BL 9.2\" Mk XII Prototype)",
    "slot2":"533mm Quintuple Torpedo Mount",
    "slot3":"Sextuple 40mm Bofors",
    "slot4":"Improved Hydraulic Rudder",
    "slot5":"Repair Toolkit"
  },
  // Drake
  {
    "name":"Drake",
    "rarity":[0,1,1,1,2],
    "slot1":"Triple 234mm (BL 9.2\" Mk XII Prototype)",
    "slot2":"533mm Quintuple Torpedo Mount",
    "slot3":"Sextuple 40mm Bofors",
    "slot4":"Improved Hydraulic Rudder",
    "slot5":"Repair Toolkit"
  },
  // Enterprise
  {
    "name":"Enterprise",
    "rarity":[1,2,1,1,1],
    "slot1":"De Havilland Sea Hornet",
    "slot2":"Curtiss SB2C Helldiver",
    "slot3":"General Motors TBM Avenger (VT-18 Squadron)",
    "slot4":"Steam Catapult",
    "slot5":"Steam Catapult"
  },
  // Essex
  {
    "name":"Essex",
    "rarity":[1,1,1,1,1],
    "slot1":"Supermarine Seafang",
    "slot2":"Yokosuka D4Y Suisei",
    "slot3":"Fairey Barracuda",
    "slot4":"Steam Catapult",
    "slot5":"Steam Catapult"
  },
  // Helena (Retrofit)
  {
    "name":"Helena",
    "rarity":[1,1,1,1,1],
    "slot1":"Triple 152mm (6\"/47 Mk 17 DP Prototype)",
    "slot2":"Twin 114mm (QF Mk IV Prototype)",
    "slot3":"Quadruple 40mm Bofors (Mk 2 Mount)",
    "slot4":"Improved Hydraulic Rudder",
    "slot5":"Eagle Union Elite Damage Control"
  },
  // Hiryuu META
  {
    "name":"Hiryuu META",
    "rarity":[1,2,1,1,1],
    "slot1":"Grumman F6F Hellcat",
    "slot2":"Curtiss SB2C Helldiver",
    "slot3":"Fairey Barracuda",
    "slot4":"Steam Catapult",
    "slot5":"Steam Catapult"
  },
  // Hood
  {
    "name":"Hood",
    "rarity":[1,1,1,1,1],
    "slot1":"Twin 406mm (SK C/34 Prototype)",
    "slot2":"Triple 155mm (3rd Year Type)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"Super Heavy Shell"
  },
  // Howe
  {
    "name":"Howe",
    "rarity":[2,1,1,1,1],
    "slot1":"Triple 406mm (16\"/45 Mk 6)",
    "slot2":"Twin 100mm (Type 98)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"Super Heavy Shell"
  },
  // Intrepid
  {
    "name":"Intrepid",
    "rarity":[1,1,1,1,1],
    "slot1":"Supermarine Seafang",
    "slot2":"Yokosuka D4Y Suisei",
    "slot3":"Fairey Barracuda",
    "slot4":"Steam Catapult",
    "slot5":"Steam Catapult"
  },
  // Jean Bart
  {
    "name":"Jean Bart",
    "rarity":[1,1,1,1,1],
    "slot1":"Quadruple 380mm (Mle 1935)",
    "slot2":"Triple 155mm (3rd Year Type)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"Super Heavy Shell"
  },
  // Kii
  {
    "name":"Kii",
    "rarity":[1,1,1,1,1],
    "slot1":"Triple 305mm (SK C/39 Prototype)",
    "slot2":"Triple 155mm (3rd Year Type)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"Super Heavy Shell"
  },
  // Laffey (Retrofit)
  {
    "name":"Laffey",
    "rarity":[1,1,1,1,2],
    "slot1":"Twin 114mm (QF Mk IV Prototype)",
    "slot2":"533mm Quintuple Torpedo Mount",
    "slot3":"Sextuple 40mm Bofors",
    "slot4":"Improved Hydraulic Rudder",
    "slot5":"Repair Toolkit"
  },
  // Long Island
  {
    "name":"Long Island",
    "rarity":[1,1,1,1,1],
    "slot1":"Supermarine Seafang",
    "slot2":"Curtiss SB2C Helldiver",
    "slot3":"Octuple 40mm Pom-Pom",
    "slot4":"Steam Catapult",
    "slot5":"Steam Catapult"
  },
  // Nagato
  {
    "name":"Nagato",
    "rarity":[1,1,1,1,1],
    "slot1":"Twin 406mm (SK C/34 Prototype)",
    "slot2":"Triple 152mm (BL 6\" Mk XXV Prototype)",
    "slot3":"Twin 40mm Bofors STAAG",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"High Performance Fire Control Radar"
  },
  // New Jersey
  {
    "name":"New Jersey",
    "rarity":[0,1,1,1,1],
    "slot1":"Triple 406mm (16\"/50 Mk 7)",
    "slot2":"Twin 128mm/45 SK C/41",
    "slot3":"Twin 40mm Bofors STAAG",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"High Performance Fire Control Radar"
  },
  // Odin
  {
    "name":"Odin",
    "rarity":[2,1,1,1,1],
    "slot1":"Triple 406mm (16\"/45 Mk 6)",
    "slot2":"Twin 100mm (Type 98)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"Super Heavy Shell"
  },
  // Perseus
  {
    "name":"Perseus",
    "rarity":[1,0,1,1,1],
    "slot1":"Grumman F7F Tigercat",
    "slot2":"Westland Wyvern",
    "slot3":"Twin 37mm ACAD (Mle 1936)",
    "slot4":"Steam Catapult",
    "slot5":"Steam Catapult"
  },
  // Prinz Heinrich
  {
    "name":"Prinz Heinrich",
    "rarity":[1,1,1,1,2],
    "slot1":"Twin 234mm (BL 9.2\" Mk XII Prototype)",
    "slot2":"533mm Quintuple Torpedo Mount",
    "slot3":"Octuple 40mm Pom-Pom",
    "slot4":"Improved Hydraulic Rudder",
    "slot5":"Repair Toolkit"
  },
  // Richelieu
  {
    "name":"Richelieu",
    "rarity":[1,1,1,1,1],
    "slot1":"Twin 406mm (SK C/34 Prototype)",
    "slot2":"Triple 155mm (3rd Year Type)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"High Performance Fire Control Radar"
  },
  // Roon
  {
    "name":"Roon",
    "rarity":[1,1,1,1,1],
    "slot1":"Triple 203mm (SK C/34 Prototype)",
    "slot2":"610mm Quadruple Torpedo Mount",
    "slot3":"Twin 113mm AA (QF Mark I)",
    "slot4":"Improved Hydraulic Rudder",
    "slot5":"Repair Toolkit"
  },
  // Roon μ (Muse)
  {
    "name":"Roon μ",
    "rarity":[1,1,1,1,2],
    "slot1":"Triple 203mm (Mle 1934 Prototype)",
    "slot2":"610mm Quadruple Torpedo Mount",
    "slot3":"Quadruple 40mm Bofors (Mk 2 Mount)",
    "slot4":"Improved Hydraulic Rudder",
    "slot5":"Repair Toolkit"
  },
  // San Diego (Retrofit)
  {
    "name":"San Diego",
    "rarity":[1,1,1,1,2],
    "slot1":"Twin 114mm (QF Mk IV Prototype)",
    "slot2":"533mm Quintuple Torpedo Mount",
    "slot3":"Twin 113mm AA (QF Mark I)",
    "slot4":"Improved Hydraulic Rudder",
    "slot5":"Repair Toolkit"
  },
  // Saratoga (Retrofit)
  {
    "name":"Saratoga",
    "rarity":[1,2,2,1,1],
    "slot1":"Vought F4U Corsair (VF-17 Squadron)",
    "slot2":"Curtiss SB2C Helldiver",
    "slot3":"Curtiss SB2C Helldiver",
    "slot4":"Steam Catapult",
    "slot5":"Steam Catapult"
  },
  // Shinano
  {
    "name":"Shinano",
    "rarity":[1,1,1,1,1],
    "slot1":"Aichi B7A Ryuusei",
    "slot2":"Curtiss XSB3C (Experimental)",
    "slot3":"Aichi B7A Ryuusei",
    "slot4":"Steam Catapult",
    "slot5":"Steam Catapult"
  },
  // Sovetskaya Belorussiya
  {
    "name":"Sovetskaya Belorussiya",
    "rarity":[1,1,1,1,1],
    "slot1":"Twin 406mm (SK C/34 Prototype)",
    "slot2":"Triple 155mm (3rd Year Type)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"Super Heavy Shell"
  },
  // Sovetskaya Rossiya
  {
    "name":"Sovetskaya Rossiya",
    "rarity":[1,1,1,1,1],
    "slot1":"Twin 406mm (SK C/34 Prototype)",
    "slot2":"Triple 155mm (3rd Year Type)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"Super Heavy Shell"
  },
  // Suzutsuki
  {
    "name":"Suzutsuki",
    "rarity":[1,1,1,0,2],
    "slot1":"Single 138.6mm (Mle 1929)",
    "slot2":"533mm Quadruple Homing Torpedo Mount",
    "slot3":"Twin 113mm AA (QF Mark I)",
    "slot4":"Type 93 Pure Oxygen Torpedo",
    "slot5":"Repair Toolkit"
  },
  // Tallinn
  {
    "name":"Tallinn",
    "rarity":[1,1,1,1,2],
    "slot1":"Twin 234mm (BL 9.2\" Mk XII Prototype)",
    "slot2":"533mm Quintuple Torpedo Mount",
    "slot3":"Octuple 40mm Pom-Pom",
    "slot4":"Improved Hydraulic Rudder",
    "slot5":"Repair Toolkit"
  },
  // Tashkent
  {
    "name":"Tashkent",
    "rarity":[1,1,1,2,2],
    "slot1":"Twin 130mm (B-2LM)",
    "slot2":"533mm Quintuple Torpedo Mount",
    "slot3":"Twin 40mm Bofors (Type 5)",
    "slot4":"Intel Report - Arctic Stronghold",
    "slot5":"Repair Toolkit"
  },
  // U-37
  {
    "name":"U-37",
    "rarity":[1,1,1,1,2],
    "slot1":"Submarine-mounted G7e Acoustic Homing Torpedo",
    "slot2":"Submarine-mounted G7e Acoustic Homing Torpedo",
    "slot3":"Twin 100mm (Type 98)",
    "slot4":"Improved Snorkel",
    "slot5":"Pressure-Resistant Hull Design"
  },
  // U-96
  {
    "name":"U-96",
    "rarity":[1,1,1,1,2],
    "slot1":"Submarine-mounted Mark 20S \"Bidder\" Torpedo",
    "slot2":"Submarine-mounted Mark 20S \"Bidder\" Torpedo",
    "slot3":"Twin 100mm (Type 98)",
    "slot4":"Improved Snorkel",
    "slot5":"Pressure-Resistant Hull Design"
  },
  // U-101
  {
    "name":"U-101",
    "rarity":[1,1,1,1,2],
    "slot1":"Submarine-mounted G7e Acoustic Homing Torpedo",
    "slot2":"Submarine-mounted G7e Acoustic Homing Torpedo",
    "slot3":"Twin 100mm (Type 98)",
    "slot4":"Improved Snorkel",
    "slot5":"Pressure-Resistant Hull Design"
  },
  // Vittorio Veneto
  {
    "name":"Vittorio Veneto",
    "rarity":[1,1,1,1,1],
    "slot1":"Twin 406mm (SK C/34 Prototype)",
    "slot2":"Triple 155mm (3rd Year Type)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"Super Heavy Shell"
  },
  // Warspite (Retrofit)
  {
    "name":"Warspite",
    "rarity":[1,1,1,1,1],
    "slot1":"Triple 381mm (BL 15\" Mk III Prototype)",
    "slot2":"Triple 155mm (3rd Year Type)",
    "slot3":"Twin 40mm Bofors Hazemeyer",
    "slot4":"Type 1 Armor Piercing Shell",
    "slot5":"Super Heavy Shell"
  },
]
