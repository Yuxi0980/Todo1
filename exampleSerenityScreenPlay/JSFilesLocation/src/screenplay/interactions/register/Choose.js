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
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.gender) {
                case 'male':
                    return actor.attemptsTo(yield serenity_protractor_1.Click.on(RegisterPage_1.RegisterPage.maleRadioButton));
                case 'female':
                    return actor.attemptsTo(yield serenity_protractor_1.Click.on(RegisterPage_1.RegisterPage.femaleRadioButton));
                default:
            }
        });
    }
}
exports.Choose = Choose;
//# sourceMappingURL=Choose.js.map