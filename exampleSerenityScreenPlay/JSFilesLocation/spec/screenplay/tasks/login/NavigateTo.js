"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const LoginPage_1 = require("../../user_interface/LoginPage");
const fs = require("fs");
const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
exports.NavigateTo = ({
    registerLink: () => screenplay_protractor_1.Task.where(`#actor navigate to register page`, screenplay_protractor_1.Click.on(LoginPage_1.LoginPage.registerLink)),
});
//# sourceMappingURL=NavigateTo.js.map