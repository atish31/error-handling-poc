export default class Error {
	constructor(errorDetails) {
		this.message = errorDetails.message;
		this.description = errorDetails.description;
		this.nextAction = errorDetails.nextAction;
	}

	throwError() {
		try {
			throw this.message;
		} 
		catch(error) {
			alert(error);
		}
		finally {
			alert(this.description + ' ' + this.nextAction);
		}
	}
}



