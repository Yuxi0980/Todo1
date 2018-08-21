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
const BooksPage_1 = require("../../user_interface/BooksPage");
const CalculatePrice_1 = require("../../interactions/books/CalculatePrice");
const assertions_1 = require("../../assertions");
let calculatePrice = new CalculatePrice_1.CalculatePrice();
class IsGrandTotalRight {
    static reads() {
        return new IsGrandTotalRight();
    }
    performAs(actor) {
        return __awaiter(this, void 0, void 0, function* () {
            const granTotal = yield calculatePrice.GrandTotal();
            return actor.attemptsTo(yield screenplay_protractor_1.See.if(screenplay_protractor_1.Attribute.of(BooksPage_1.BooksPage.grandTotalField).called('value'), assertions_1.equals(granTotal)));
        });
    }
    constructor() { }
}
exports.IsGrandTotalRight = IsGrandTotalRight;
//# sourceMappingURL=IsGrandTotalRight.js.map