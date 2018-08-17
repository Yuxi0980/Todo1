"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
exports.ReadAlert = {
    getAlertText: () => {
        return protractor_1.browser.driver.switchTo().alert().getText();
    },
};
//# sourceMappingURL=readAlert.js.map