let barrage = "";
fetch("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/barrage.json")
   .then(res => res.json())
   .then((data) => {
      barrage = data;
      console.log("barrage Loaded");
      barrageCall();
   },
   (error) => {
      console.log('error: ' + error);
	});
