var result = document.getElementById("result").childNodes[0];

var number1 = 0;
var number2 = 0;
var i;

var previousAction = "";
var newAction = true;

function numberPressed(ev) {
	if ( newAction ) {
		result.nodeValue = "";
		newAction = false;
	}

	result.nodeValue += ev.currentTarget.value;
}

for (i=0; i<10; i++) {
	document.getElementById(i.toString()).onclick = numberPressed;
}

function signPressed(ev) {
	number2 = parseInt(result.nodeValue);
	switch (previousAction) {
		case "plus":
			number1 += number2;
			break;
		case "minus":
			number1 -= number2;
			break;
		case "mult":
			number1 *= number2;
			break;
		case "divide":
			number1 /= number2;
			break;
		default:
			number1 = number2;
			break;
	}
	previousAction = ev.currentTarget.value;
	result.nodeValue = number1;
	newAction = true;
}

for (i=0; i<5; i++) {
	document.getElementById("a"+i).onclick = signPressed;
}
