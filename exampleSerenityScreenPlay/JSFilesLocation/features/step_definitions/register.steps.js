"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const NavigateTo_1 = require("../../spec/screenplay/tasks/login/NavigateTo");
const SendFormRegister_1 = require("../../spec/screenplay/tasks/register/SendFormRegister");
const fs = require("fs");
const links = JSON.parse(fs.readFileSync('./data/links.json', 'utf8'));
module.exports = function Register() {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.Given(/^(.*) wants to register on website$/, function (actor) {
            return this.stage.theActorCalled(actor).attemptsTo(screenplay_protractor_1.Open.browserOn(links.login), NavigateTo_1.NavigateTo.registerLink());
        });
        yield this.When(/^he send form register with all information$/, function () {
            return this.stage.theActorInTheSpotlight().attemptsTo(SendFormRegister_1.SendFormRegister.withAllInformation());
        });
    });
};
//# sourceMappingURL=register.steps.js.map