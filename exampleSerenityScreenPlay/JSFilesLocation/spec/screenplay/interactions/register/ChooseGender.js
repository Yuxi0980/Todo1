"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const RegisterPage_1 = require("../../user_interface/RegisterPage");
exports.ChooseGender = {
    clickOn: (gender) => {
        switch (gender) {
            case 'male':
                return screenplay_protractor_1.Click.on(RegisterPage_1.RegisterPage.genderMaleOption);
            case 'female':
                return screenplay_protractor_1.Click.on(RegisterPage_1.RegisterPage.genderFemaleOption);
            default:
                return screenplay_protractor_1.Click.on(RegisterPage_1.RegisterPage.genderMaleOption);
        }
    },
};
//# sourceMappingURL=ChooseGender.js.map