import {FieldError, Error} from './error-handling-with-class-constructor.js'
import {ErrorDetails} from './constants.js'

const errorDetails = ErrorDetails;
let phoneNumberError = new FieldError(errorDetails);
Error.throwError(phoneNumberError);


