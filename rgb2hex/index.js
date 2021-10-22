
function printResult(result) {
	
	document.querySelector("#hex").innerHTML = result;
};

function validateInput(x) {
	
	const inptArr = x.split(",");
	if (inptArr.length !== 3) {
		return false;
	}
	
	const r = inptArr[0];
	const g = inptArr[1];
	const b = inptArr[2];
	
	return validateRGB(r) && validateRGB(g) && validateRGB(b);
};

function validateRGB(x) {
	
  if (isNaN(x) || x < 0 || x > 255) {
    return false;
  } else {
    return true
  }
};

function color2hex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
};

function rgb2hex(rgb) {
	let rgbArr = rgb.split(",");
	return "#" + color2hex(parseInt(rgbArr[0])) + color2hex(parseInt(rgbArr[1])) + color2hex(parseInt(rgbArr[2]));
};

function main() {
	
	const userInput = document.querySelector('#rgbCode').value.toString();
	
	if (validateInput(userInput)) {
		
		printResult(rgb2hex(userInput));
	}
	else {
		printResult("Input not valid");
	}
};









