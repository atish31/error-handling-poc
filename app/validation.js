import {FieldError, Error} from './error-handling-with-class-constructor.js';

let errorDetails = {};
let configValues = {};

fetchApiConfigValues();

function fetchApiConfigValues() {
  fetch("https://sheets.googleapis.com/v4/spreadsheets/{subscriber_id}?key={api_key}&includeGridData=true")
  .then(response => {
    return response.json()
  })
  .then(data => {
    let configValuesFromApi = data.sheets[0].data[0].rowData;
    configValuesFromApi.forEach(configValueFromApi => {
      configValues[configValueFromApi.values[0].formattedValue] = 
      configValueFromApi.values[1].formattedValue;
    });
    addListenerToPhoneField();
  });
}

function addListenerToPhoneField() {
  let phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('change', function(event) {
    let inputValue = event.target.value;
    if(inputValue.length != 10 || isNan(inputValue)) {
      let keys = Object.keys(configValues);
      keys.forEach(key => {
        let arrayOfKeyString = key.split('-');
        if(arrayOfKeyString[0] === 'Phone') {
          errorDetails[arrayOfKeyString[1]] = configValues[key];
        }
      })
      let phoneNumberError = new FieldError(errorDetails);
      Error.throwError(phoneNumberError);
    }
  });
}

