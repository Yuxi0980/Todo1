"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const assertions_1 = require("../../assertions");
const BooksPage_1 = require("../../user_interface/BooksPage");
exports.IsTheBooksPageDisplayed = ({
    see: (expectedTitle) => screenplay_protractor_1.Task.where(`#actor checks if the ${expectedTitle} page is displayed`, screenplay_protractor_1.See.if(screenplay_protractor_1.Text.of(BooksPage_1.BooksPage.title), assertions_1.equals(expectedTitle))),
});
//# sourceMappingURL=IsTheBooksPageDisplayed.js.map