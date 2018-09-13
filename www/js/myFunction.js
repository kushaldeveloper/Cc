		//window.addEventListener("batterystatus", onBatteryStatus, false);
		//window.addEventListener("batterylow", onBatteryLow, false);
		//window.addEventListener("batterycritical", onBatteryCritical, false);
		document.addEventListener("deviceready", onDeviceReady,false);
		//document.addEventListener("cameraTakePicture",cameraTakePicture,false);
		//("click", cameraTakePicture); 
		function onDeviceReady() {
		alert("Device is starting");
		cameraTakePicture();
		//batteryStatus();
		}
		function cameraTakePicture() { 
		alert('camera is starting');
		alert('camera:' + navigator.camera);
		alert('camera:' + navigator.camera.getPicture);
			navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
				destinationType: Camera.DestinationType.FILE_URI });

			function onSuccess(imageData) {
				var image = document.getElementById('myImage');
				image.src = "data:image/jpeg;base64," + imageData;
			}

			function onFail(message) {
				alert('Failed because: ' + message);
		}
	}
		/*function batteryStatus(){
		function onBatteryStatus(info) { 
		   alert("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged); 
		}
		function onBatteryLow(info) {
    		alert("Battery Level Low " + info.level + "%");
		}
		function onBatteryCritical(info) {
    		alert("Battery Level Critical " + info.level + "%\nRecharge Soon!");
		}
	}*/