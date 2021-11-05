export class FieldError {
	constructor(errorDetails) {
		this.message = errorDetails.message;
		this.description = errorDetails.description;
		this.nextAction = errorDetails.nextAction;
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





