"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const RegisterPage_1 = require("../../user_interface/RegisterPage");
const fs = require("fs");
const userInfo = JSON.parse(fs.readFileSync('./data/userInfo.json', 'utf8'));
exports.SendFormRegister = ({
    withAllInformation: () => screenplay_protractor_1.Task.where(`#actor navigate to register page`, screenplay_protractor_1.Enter.theValue(userInfo.username).into(RegisterPage_1.RegisterPage.usernameField), screenplay_protractor_1.Enter.theValue(userInfo.password).into(RegisterPage_1.RegisterPage.passwordField), screenplay_protractor_1.Enter.theValue(userInfo.password2).into(RegisterPage_1.RegisterPage.password2Field), screenplay_protractor_1.Enter.theValue(userInfo.gender).into(userInfo.gender == 'male' ?
        RegisterPage_1.RegisterPage.genderMaleOption : RegisterPage_1.RegisterPage.genderFemaleOption), screenplay_protractor_1.Enter.theValue(userInfo.address).into(RegisterPage_1.RegisterPage.addressField), screenplay_protractor_1.Enter.theValue(userInfo.billingAddress).into(RegisterPage_1.RegisterPage.billingAddressField), screenplay_protractor_1.Select.theValue(userInfo.state).from(RegisterPage_1.RegisterPage.stateList), screenplay_protractor_1.Click.on(RegisterPage_1.RegisterPage.termsAndConditionsOption), screenplay_protractor_1.Click.on(RegisterPage_1.RegisterPage.registerButton)),
});
//# sourceMappingURL=SendFormRegister.js.map