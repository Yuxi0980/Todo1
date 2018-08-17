"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const LoginPage_1 = require("../../user_interface/LoginPage");
class NavigateTo {
    static registerLink() {
        return new NavigateTo();
    }
    performAs(actor) {
        return actor.attemptsTo(screenplay_protractor_1.Click.on(LoginPage_1.LoginPage.registerLink));
    }
    constructor() { }
}
exports.NavigateTo = NavigateTo;
//# sourceMappingURL=NavigateTo.js.map