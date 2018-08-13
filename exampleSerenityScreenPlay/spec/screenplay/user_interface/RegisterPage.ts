import { Target } from 'serenity-js/lib/screenplay-protractor';
import { by } from 'protractor';

export const RegisterPage = {
    usernameField: Target.the('username field').located(by.id('uid')),
    passwordField: Target.the('password field').located(by.id('pid')),
    password2Field: Target.the('password 2 field').located(by.id('pid2')),
    genderMaleOption: Target.the('gender male option').located(by.css('input[value="M"]')),
    genderFemaleOption: Target.the('gender female option').located(by.css('input[value="F"]')),
    addressField: Target.the('address field').located(by.id('taid')),
    billingAddressField: Target.the('billing address field').located(by.id('btaid')),
    stateList: Target.the('state list').located(by.name('state')),
    termsAndConditionsOption: Target.the('terms and conditions option').located(by.name('agree')),
    registerButton: Target.the('register button').located(by.css('input[value="Register"]')),
    cancelButton: Target.the('cancel button').located(by.css('input[value="Cancel"]')),
};