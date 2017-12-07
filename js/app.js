$(() => {
	//Waiting data
	$('#showLow').html("Loading..")  
	$('#showHigh').html("Loading..") 
	$('#status').html("Loading..") 

	const stateRef = firebase.database().ref();

	//Insert Data to Firebase
	$('#btn').click(()=>{
	const low = $('#templow').val()
	const high = $('#tempHigh').val()
	const lowNumber = Number(low)
	const HighNumber = Number(high)
	const setting = stateRef.child('SetHumid')
		setting.set({
			High: HighNumber,
			Low: lowNumber
		})
		$('#templow').val('')
		$('#tempHigh').val('')
	})
	// Show Min / Max / State
	const dbRefd = firebase.database().ref().child('SetHumid/High');
  	const dbRefe = firebase.database().ref().child('SetHumid/Low');
  	const dbRefs = firebase.database().ref().child('Humidifier/Status');		

  	const resultd = null;
  	dbRefd.on('value', snap => {
  		const resultd = snap.val()
  		document.getElementById('showHigh').innerHTML = resultd
  	})
  	const resulte = null;
  	dbRefe.on('value', snap => {
  		const resulte = snap.val()
  		document.getElementById('showLow').innerHTML = resulte
  	})
  	const results = null;
  	dbRefs.on('value', snap => {
  		const results = snap.val()
  		if(results == 1){
  			var element = document.getElementById("status");
      		element.innerHTML = 'ON';
      		element.style.color = '#00ff00';
  		}else{
  			var elements = document.getElementById("status");
      		elements.innerHTML = 'OFF';
      		elements.style.color = 'red';
  		}
  	})
  	
  	
})