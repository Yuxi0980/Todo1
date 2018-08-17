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
const AddBooks_1 = require("../../spec/screenplay/tasks/books/AddBooks");
const SendFormLogin_1 = require("../../spec/screenplay/tasks/login/SendFormLogin");
const fs = require("fs");
const IsGrandTotalRight_1 = require("../../spec/screenplay/questions/books/IsGrandTotalRight");
const links = JSON.parse(fs.readFileSync('./data/links.json', 'utf8'));
module.exports = function Books() {
    return __awaiter(this, void 0, void 0, function* () {
        yield this.Given(/^(.*) wants to buy books$/, function (actor) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.stage.theActorCalled(actor).attemptsTo(yield screenplay_protractor_1.Open.browserOn(links.login), yield SendFormLogin_1.SendFormLogin.with('right'));
            });
        });
        yield this.When(/^he add (\d+) "([^"]*)" books$/, function (quantity, book) {
            return __awaiter(this, void 0, void 0, function* () {
                return this.stage.theActorInTheSpotlight().attemptsTo(yield AddBooks_1.AddBooks.toShoppingCart(quantity, book));
            });
        });
        yield this.Then(/^he should see the total price of shopping$/, function () {
            return __awaiter(this, void 0, void 0, function* () {
                return this.stage.theActorInTheSpotlight().attemptsTo(yield IsGrandTotalRight_1.IsGrandTotalRight.reads());
            });
        });
    });
};
//# sourceMappingURL=books.steps.js.map