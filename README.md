# error-handling-poc

## This a POC for error handling using function constructors, class constructors and google sheets as config.
## This is only a showcase. You can still copy paste as per your will.
### Disclaimer: The contributers of this repo don't claim this to be a production level code and won't be responsible for any security/ performance or other related issues with the code in this repo.
### To use data from your google sheet, you will have to generate api key and use spreadsheetID. Use these in the validation.js file in fetchApiConfigValues function. you can also move the hardcoded api to a const.
### Data in the spreadsheet should be in following format:
https://docs.google.com/spreadsheets/d/1J1LXtMVCgRvmBEudH2-3jIhn1yEIx-JCXRjNgraXcio/edit?usp=sharing
Key Format: Field(First letter captilized)-(ErrorMessage/ ErrorDescription/ ErrorDescription (Pascal case))