# Pre-requisites

- NodeJS installed globally in the system. https://nodejs.org/en/download/
- JAVA(jdk) installed in the system.
- Andriod(sdk) installed in the system.
- Set JAVA_HOME & ANDROID_HOME paths correctly in the system.
- Chrome browser installed
- Text Editor/IDE (Optional) installed →Sublime/Visual Studio Code/Brackets.

## Installation

- Clone the repository appium-webdriverio-typescript into a folder
- Go inside the folder and run following command from terminal/command prompt

`npm install`

- All the dependencies from package.json and typescript typings would be installed in node_modules folder.

Tip: Use Yarn to install your modules npm install -g yarn as it caches & locks them which would help us install correct versions of modules across various platforms without any issues. This project is configured with yarn.lock file. So you could make use of it.

## Run Tests

- First step is to start the appium server, This project includes the appium node module so you don't have to download it externally. You can run the appium server by the following npm command.

`npm run appium`

- Next you have to transpile/compile your typescript files to javascript files, you could do this by running the command

`npm run build`

The node command to run Native app tests of this project is

`npm run app-test`

## Run Test Suite

You could run both the native app and browser tests by running the following command -

`npm test`

## Run Test Suite

Currently this project has been integrated with Allure-Reports. WebdriverIO's wdio-allure-reporter helps us generate detailed reports of our mobile automated tests. Once the test execution is finished you would find the allure-results folder generated automatically. Then you would have to run the following command to generate HTML Report

`npm run report`