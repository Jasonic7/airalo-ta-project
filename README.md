# airalo-ta-project

This project is created using Typescript/Javascript as programming language and Cypress as automation framework.
For the UI tests, Cucumber-html-reporter is used in order to create test results in html format.

The test results are stored under ./jsonlogs/ folder

In order to set up the project the user must first clone the project and install all the appropriate packages executing the command:

*npm install*

## Test execution
For the UI and API test execution, specific scripts were added in package.json file.

The user can run the tests by executing the command:

*npm run tests*

### UI test

After the test execution, the user can generate the UI results by executing the command:

*npm run report*

### API test

The endpoints used are:
- Request Access Token
- Submit order
- Get eSIMs List

