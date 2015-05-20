var counter = 0;
var new_tick = 0;
var old_tick = 0;
var next_tick = 0;
var adder = 1;
//$("#testing").html(counter);
loadData();
//setTimeout(counterr, 1);
function counterr()
{
	if (next_tick < Date.now())
	{
		var start_tick = Date.now()
		counter += adder;
		next_tick = Date.now() + 1000
		counter = Math.round(counter * 100)/100;
		adder = Math.floor((adder*1.01)*100)/100;
		$("#testing").html(counter);
		saveData();
		var end_tick = Date.now();
		$("#testing2").html(adder);
	}
	setTimeout(counterr, 1);
};

function saveData()
{
	//alert($("#testing").val())
	var saveVar = 
	{
		attack:counter,
		adder:adder
	}
	localStorage.setItem("incremental", JSON.stringify(saveVar));
	//alert("saved")
}

function loadData()
{
	var loadVar = {}
	try 
	{
		loadString = localStorage.getItem("incremental")
		parsedString = JSON.parse(loadString)
		counter = parsedString.attack
		adder = parsedString.adder
		//alert(counter)
		$("#testing").html(counter)
		$("#testing2").html(adder);
		old_tick = Date.now()
		setTimeout(counterr, 1);
	}
	catch(err)
	{
		$("#testing").html(counter)
		$("#testing2").html(adder);
		setTimeout(counterr, 1);
	}
}
//counter();