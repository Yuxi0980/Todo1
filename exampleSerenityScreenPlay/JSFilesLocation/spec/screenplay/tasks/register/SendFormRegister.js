"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const RegisterPage_1 = require("../../user_interface/RegisterPage");
const ChooseGender_1 = require("../../Interactions/register/ChooseGender");
const fs = require("fs");
const userInfo = JSON.parse(fs.readFileSync('./data/userInfo.json', 'utf8'));
exports.SendFormRegister = ({
    withAllInformation: () => __awaiter(this, void 0, void 0, function* () {
        return screenplay_protractor_1.Task.where(`#actor navigate to register page`, yield screenplay_protractor_1.Enter.theValue(userInfo.username).into(RegisterPage_1.RegisterPage.usernameField), yield screenplay_protractor_1.Enter.theValue(userInfo.password).into(RegisterPage_1.RegisterPage.passwordField), yield screenplay_protractor_1.Enter.theValue(userInfo.password2).into(RegisterPage_1.RegisterPage.password2Field), yield ChooseGender_1.ChooseGender.clickOn(userInfo.gender), yield screenplay_protractor_1.Enter.theValue(userInfo.address).into(RegisterPage_1.RegisterPage.addressField), yield screenplay_protractor_1.Enter.theValue(userInfo.billingAddress).into(RegisterPage_1.RegisterPage.billingAddressField), yield screenplay_protractor_1.Select.theValue(userInfo.state).from(RegisterPage_1.RegisterPage.stateList), yield screenplay_protractor_1.Click.on(RegisterPage_1.RegisterPage.termsAndConditionsOption), yield screenplay_protractor_1.Click.on(RegisterPage_1.RegisterPage.registerButton));
    }),
});
//# sourceMappingURL=SendFormRegister.js.map