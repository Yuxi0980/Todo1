"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serenity_protractor_1 = require("../../../../node_modules/serenity-js/lib/serenity-protractor");
const RegisterPage_1 = require("../../user_interface/RegisterPage");
class Choose {
    constructor(gender) {
        this.gender = gender;
    }
    static gender(gender) {
        return new Choose(gender);
    }
    performAs(actor) {
        switch (this.gender) {
            case 'male':
                return actor.attemptsTo(serenity_protractor_1.Click.on(RegisterPage_1.RegisterPage.maleRadioButton));
            case 'female':
                return actor.attemptsTo(serenity_protractor_1.Click.on(RegisterPage_1.RegisterPage.femaleRadioButton));
            default:
        }
    }
}
exports.Choose = Choose;
//# sourceMappingURL=Choose.js.map