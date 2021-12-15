let barrage = "";
fetch("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/barrage.json")
   .then(res => res.json())
   .then((data) => {
      barrage = data;
      console.log("barrage Loaded");
      barrageCall();
      $(function () {$('[data-toggle="tooltip"]').tooltip()})
      $(".ShipOutput").append(ShipOutput)
      $("#ShipTable").dataTable({searching: false, paging: false, info: false});
   },
   (error) => {
      console.log('error: ' + error);
	});
