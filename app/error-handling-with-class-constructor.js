export class FieldError {
	constructor(errorDetails) {
		this.message = errorDetails.ErrorMessage;
		this.description = errorDetails.ErrorDescription;
		this.nextAction = errorDetails.ErrorNextAction;
	}
}

export class Error {
	static throwError(errorDetails) {
		try {
			throw errorDetails.message;
		}
		catch(error) {
			alert(error);
		}
		finally {
			alert(errorDetails.description + ' ' + errorDetails.nextAction);
		}
	}
}





