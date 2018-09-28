const {Given, When, Then} = require('cucumber');

import {expect} from 'chai';
import { RegisterPage } from '../../src/pages/registerPage';
import { LoginPage } from '../../src/pages/loginPage';

const registerPage: RegisterPage = new RegisterPage();
const loginPage: LoginPage = new LoginPage();

import * as fs from 'fs';

const userInfo = JSON.parse(fs.readFileSync('./data/register.info.json', 'utf8'));

Given(/^que Juan no se encuentra registrado en el canal de e-banking$/, async function() {
    await loginPage.launchConfiguration();
    await loginPage.touchRegisterButton();
});

When(/^el diligencie el formulario de registro$/, async function() {
    await registerPage.sendFormRegister(userInfo.register.country, userInfo.register.idType, userInfo.register.idNumber, userInfo.register.password);
});

Then(/^el debería visualizar un mensaje indicando el éxito del proceso$/, async function() {
    let respondMessage = await loginPage.getAlertMessage();
    await expect(respondMessage.title).to.equal('Exito');
    await expect(respondMessage.message).to.equal('Registro de usuario exitoso');
});