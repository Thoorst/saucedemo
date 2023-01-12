# saucedemo
Test automation for saucedemo webapp

## Instalation

1. Open terminal

2. Instal `npm` if u dont have installed yet:

`brew install npm`

To make sure `npm` is installed:

`npm -v`

3. When u have npm installed- go to your project location

4. Intall cypress

`npm install cypress -save-dev`

5 Clone repo to your project location with ssh

`git clone git@github.com:Thoorst/codeAndPepper.git`

## Manual

To open interactive mode

`npx cypress open`

To execute tests in terminal

`npx cypress run`

To log result into file

`npx cypress run > cypress/logs/logs.log`

## Before tests run

You have to create in root folder `cypress.env.json` file based on `template-cypress.env.json` file included in root folder. Add here users credetials to be able to use the app.
