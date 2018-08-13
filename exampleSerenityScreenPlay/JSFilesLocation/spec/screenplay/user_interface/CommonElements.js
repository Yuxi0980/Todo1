"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const protractor_1 = require("protractor");
exports.CommonElements = {
    alert: screenplay_protractor_1.Target.the('alert message').located(protractor_1.browser.switchTo().alert())
};
//# sourceMappingURL=CommonElements.js.map