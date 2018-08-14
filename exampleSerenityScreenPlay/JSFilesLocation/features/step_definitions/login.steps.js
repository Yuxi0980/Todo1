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
const SendFormLogin_1 = require("../../spec/screenplay/tasks/login/SendFormLogin");
const IsTheMessegeErrorVisible_1 = require("../../spec/screenplay/questions/login/IsTheMessegeErrorVisible");
const IsTheBooksPageDisplayed_1 = require("../../spec/screenplay/questions/login/IsTheBooksPageDisplayed");
const fs = require("fs");
const links = JSON.parse(fs.readFileSync('./data/links.json', 'utf8'));
module.exports = function Login() {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.Given(/^(.*) wants to login on website$/, function (actor) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.stage.theActorCalled(actor).attemptsTo(yield screenplay_protractor_1.Open.browserOn(links.login));
            });
        });
        yield this.When(/^he send form login with (.*) information$/, function (parameter) {
            return __awaiter(this, void 0, void 0, function* () {
                switch (parameter) {
                    case 'none':
                        return this.stage.theActorInTheSpotlight().attemptsTo(yield SendFormLogin_1.SendFormLogin.withNoneInformation(parameter));
                        break;
                    case 'wrong':
                        return this.stage.theActorInTheSpotlight().attemptsTo(yield SendFormLogin_1.SendFormLogin.withWrongInformation(parameter));
                        break;
                    case 'right':
                        return this.stage.theActorInTheSpotlight().attemptsTo(yield SendFormLogin_1.SendFormLogin.withRightInformation(parameter));
                        break;
                    default:
                        break;
                }
            });
        });
        yield this.Then(/^he should see a message indicating "([^"]*)"$/, function (message) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.stage.theActorInTheSpotlight().attemptsTo(yield IsTheMessegeErrorVisible_1.IsTheMessageErrorVisible.reads(message));
            });
        });
        yield this.Then(/^he should see "([^"]*)"$/, function (title) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.stage.theActorInTheSpotlight().attemptsTo(yield IsTheBooksPageDisplayed_1.IsTheBooksPageDisplayed.see(title));
            });
        });
    });
};
//# sourceMappingURL=login.steps.js.map