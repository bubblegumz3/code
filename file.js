function generate_numbers() {
	var random_numbers = [];

	while(random_numbers.length < 4) {
		var number = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
			random_numbers.push(number);
	}
	return random_numbers;
}

function check_numbers(numbers, result) {
	var input_n1 = document.getElementsByName('input_n1')[0].value;
	var input_n2 = document.getElementsByName('input_n2')[0].value;
	var input_n3 = document.getElementsByName('input_n3')[0].value;
	var input_n4 = document.getElementsByName('input_n4')[0].value;

	///////////////////////////////////////////////////////////////

	if(input_n1 == numbers[0]) {
		result[0] = "G";
	} else {	
		if (numbers.indexOf(parseInt(input_n1)) != -1) {
			result[0] = "Y";
		} else {
			result[0] = "R";
		}
	}


	if(input_n2 == numbers[1]) {
		result[1] = "G";
	} else {	
		if (numbers.indexOf(parseInt(input_n2)) != -1) {
			result[1] = "Y";
		} else {
			result[1] = "R";
		}
	}


	if(input_n3 == numbers[2]) {
		result[2] = "G";
	} else {	
		if (numbers.indexOf(parseInt(input_n3)) != -1) {
			result[2] = "Y";
		} else {
			result[2] = "R";
		}
	}


	if(input_n4 == numbers[3]) {
		result[3] = "G";
	} else {	
		if (numbers.indexOf(parseInt(input_n4)) != -1) {
			result[3] = "Y";
		} else {
			result[3] = "R";
		}
	}
	console.log(result);
}


