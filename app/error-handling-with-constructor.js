function getErrorDetails(errorDetails) {
	this.errorMessage = errorDetails.message;
	this.errorDescription = errorDetails.description;
	this.nextAction = errorDetails.nextAction;
}

function throwError(errorDetails) {
	console.log(errorDetails)
	try {
		throw errorDetails;
	}
	catch(error) {
		alert(error.errorMessage + ' ' + error.errorDescription);
	} 
	finally {
		alert(errorDetails.nextAction);
	}
}

function getPhoneNumberErrorDetails() {
	let errorDetails = {
		message: 'Phone Number should be exactly 10 digits.',
		description: 'Phone Number without ISD code should not exceed 10 digits.',
		nextAction: 'Please try again and enter the phone number with 10 digits.',
	}
	return new getErrorDetails(errorDetails);
}

function validatePhoneNumber() {
	let phoneNumber = 123456789;
	if(phoneNumber.length != 10) {
		let phoneNumberError = getPhoneNumberErrorDetails();
		throwError(phoneNumberError);
	}
}

validatePhoneNumber();


