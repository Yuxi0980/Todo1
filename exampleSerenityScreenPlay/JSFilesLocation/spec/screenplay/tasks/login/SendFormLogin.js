"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const LoginPage_1 = require("../../user_interface/LoginPage");
const fs = require("fs");
const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
exports.SendFormLogin = ({
    withNoneInformation: (parameter) => screenplay_protractor_1.Task.where(`#actor send the form login with ${parameter} information`, screenplay_protractor_1.Clear.theValueOf(LoginPage_1.LoginPage.usernameField), screenplay_protractor_1.Clear.theValueOf(LoginPage_1.LoginPage.passwordField), screenplay_protractor_1.Click.on(LoginPage_1.LoginPage.loginButton)),
    withWrongInformation: (parameter) => screenplay_protractor_1.Task.where(`#actor send the form login with ${parameter} information`, screenplay_protractor_1.Enter.theValue(users.wrong.username).into(LoginPage_1.LoginPage.usernameField), screenplay_protractor_1.Enter.theValue(users.wrong.password).into(LoginPage_1.LoginPage.passwordField), screenplay_protractor_1.Click.on(LoginPage_1.LoginPage.loginButton)),
    withRightInformation: (parameter) => screenplay_protractor_1.Task.where(`#actor send the form login with ${parameter} information`, screenplay_protractor_1.Enter.theValue(users.right.username).into(LoginPage_1.LoginPage.usernameField), screenplay_protractor_1.Enter.theValue(users.right.password).into(LoginPage_1.LoginPage.passwordField), screenplay_protractor_1.Click.on(LoginPage_1.LoginPage.loginButton)),
});
//# sourceMappingURL=SendFormLogin.js.map