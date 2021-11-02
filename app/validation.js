import Error from './error-handling-with-class-constructor.js'
const errorDetails = {
	message: 'Phone Number should be exactly 10 digits.',
	description: 'Phone Number without ISD code should not exceed 10 digits.',
	nextAction: 'Please try again and enter the phone number with 10 digits.',
}


let phoneNumberError = new Error(errorDetails);
phoneNumberError.throwError();