"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const protractor_1 = require("protractor");
exports.RegisterPage = ({
    usernameField: screenplay_protractor_1.Target.the('username field').located(protractor_1.by.id('uid')),
    passwordField: screenplay_protractor_1.Target.the('password field').located(protractor_1.by.id('pid')),
    password2Field: screenplay_protractor_1.Target.the('password 2 field').located(protractor_1.by.id('pid2')),
    addressField: screenplay_protractor_1.Target.the('address field').located(protractor_1.by.id('taid')),
    maleRadioButton: screenplay_protractor_1.Target.the('male option').located(protractor_1.by.css('input[value="M"]')),
    femaleRadioButton: screenplay_protractor_1.Target.the('female option').located(protractor_1.by.css('input[value="F"]')),
    billingAddressField: screenplay_protractor_1.Target.the('billing address field').located(protractor_1.by.id('btaid')),
    stateList: screenplay_protractor_1.Target.the('state list').located(protractor_1.by.name('state')),
    termsAndConditionsOption: screenplay_protractor_1.Target.the('terms and conditions option').located(protractor_1.by.name('agree')),
    registerButton: screenplay_protractor_1.Target.the('register button').located(protractor_1.by.css('input[value="Register"]')),
    cancelButton: screenplay_protractor_1.Target.the('cancel button').located(protractor_1.by.css('input[value="Cancel"]')),
});
//# sourceMappingURL=RegisterPage.js.map