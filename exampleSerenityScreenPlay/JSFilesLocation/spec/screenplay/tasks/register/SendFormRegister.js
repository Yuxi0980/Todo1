"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const waitForAlert_1 = require("serenity-js/lib/serenity-protractor/screenplay/interactions/waitForAlert");
const RegisterPage_1 = require("../../user_interface/RegisterPage");
const Choose_1 = require("../../Interactions/register/Choose");
const fs = require("fs");
const userInfo = JSON.parse(fs.readFileSync('./data/userInfo.json', 'utf8'));
class SendFormRegister {
    constructor(parameter) {
        this.parameter = parameter;
    }
    static with(parameter) {
        return new SendFormRegister(parameter);
    }
    performAs(actor) {
        switch (this.parameter) {
            case 'all':
                return actor.attemptsTo(new AllInformation());
            default:
                break;
        }
    }
}
exports.SendFormRegister = SendFormRegister;
class AllInformation {
    performAs(actor) {
        return actor.attemptsTo(screenplay_protractor_1.Enter.theValue(userInfo.username).into(RegisterPage_1.RegisterPage.usernameField), screenplay_protractor_1.Enter.theValue(userInfo.password).into(RegisterPage_1.RegisterPage.passwordField), screenplay_protractor_1.Enter.theValue(userInfo.password2).into(RegisterPage_1.RegisterPage.password2Field), Choose_1.Choose.gender(userInfo.gender), screenplay_protractor_1.Enter.theValue(userInfo.address).into(RegisterPage_1.RegisterPage.addressField), screenplay_protractor_1.Enter.theValue(userInfo.billingAddress).into(RegisterPage_1.RegisterPage.billingAddressField), screenplay_protractor_1.Select.theValue(userInfo.state).from(RegisterPage_1.RegisterPage.stateList), screenplay_protractor_1.Click.on(RegisterPage_1.RegisterPage.termsAndConditionsOption), screenplay_protractor_1.Click.on(RegisterPage_1.RegisterPage.registerButton), waitForAlert_1.WaitForAlert.toBePresent());
    }
}
exports.AllInformation = AllInformation;
//# sourceMappingURL=SendFormRegister.js.map