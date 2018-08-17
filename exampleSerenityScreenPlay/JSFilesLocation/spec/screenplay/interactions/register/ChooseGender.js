"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_1 = require("serenity-js/lib/screenplay");
const RegisterPage_1 = require("../../user_interface/RegisterPage");
class Choose {
    constructor(gender) {
        this.gender = gender;
    }
    static gender(gender) {
        return new SendFormRegister(gender);
    }
    performAs(actor) {
        switch (Choose.gender) {
            case 'male':
                return screenplay_1.Click.on(RegisterPage_1.RegisterPage.genderMaleOption);
            case 'female':
                return screenplay_1.Click.on(RegisterPage_1.RegisterPage.genderFemaleOption);
            default:
        }
    }
}
exports.Choose = Choose;
//# sourceMappingURL=ChooseGender.js.map