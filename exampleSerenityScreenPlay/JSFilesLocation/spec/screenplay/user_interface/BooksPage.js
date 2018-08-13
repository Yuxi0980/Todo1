"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const protractor_1 = require("protractor");
exports.BooksPage = {
    title: screenplay_protractor_1.Target.the('page title').located(protractor_1.by.css('#available > h2')),
};
//# sourceMappingURL=BooksPage.js.map