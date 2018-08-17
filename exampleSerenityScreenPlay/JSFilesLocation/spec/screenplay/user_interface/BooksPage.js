"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const protractor_1 = require("protractor");
exports.BooksPage = {
    quantityTextField: (position) => screenplay_protractor_1.Target.the('quantity field').located(protractor_1.by.css('#listing > tbody > tr:nth-child(' + position + ') > td:nth-child(4) > input[type = "text"]')),
    grandTotalField: screenplay_protractor_1.Target.the('grand total field').located(protractor_1.by.id('total')),
    addButton: screenplay_protractor_1.Target.the('add button').located(protractor_1.by.css('input[onclick="addToCart()"]')),
};
//# sourceMappingURL=BooksPage.js.map