fetch("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/barrage.json")
   .then(res => res.json())
   .then((data) => {
      const barrage = data;
      console.log("barrage Loaded");
      barrageCall();
   },
   (error) => {
      console.log('error: ' + error);
	});
