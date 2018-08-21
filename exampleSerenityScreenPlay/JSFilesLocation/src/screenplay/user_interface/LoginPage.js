"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const protractor_1 = require("protractor");
exports.LoginPage = {
    usernameField: screenplay_protractor_1.Target.the('username field').located(protractor_1.by.name('user')),
    passwordField: screenplay_protractor_1.Target.the('password field').located(protractor_1.by.name('password')),
    loginButton: screenplay_protractor_1.Target.the('login button').located(protractor_1.by.css('input[onclick="login()"]')),
    messageError: screenplay_protractor_1.Target.the('message error').located(protractor_1.by.id('errorMessage')),
    registerLink: screenplay_protractor_1.Target.the('register link').located(protractor_1.by.linkText('Register')),
};
//# sourceMappingURL=LoginPage.js.map