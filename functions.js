function fedpov(house,income,percentage){
	// Determines if your income is less than or equal to
	// a percentage of the 2020 federal poverty guidelines
	// for the contiguous United States. See
	// https://aspe.hhs.gov/poverty-guidelines

		var line = NaN;

		if (house == 1) {
			line = 12760;
		} else if (house == 2) {
			line = 17240;
		} else if (house == 3) {
			line = 21720;
		} else if (house == 4) {
			line = 26200;
		} else if (house == 5) {
			line = 30680;
		} else if (house == 6) {
			line = 35160;
		} else if (house == 7) {
			line = 39640;
		} else if (house == 8) {
			line = 44120;
		} else if (house > 8) {
			line = 44120 + (house-8)*4480;
		}

		if (income <= (line*(percentage/100))) {
			return true;
		} else {
			return false;
		}