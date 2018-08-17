"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const assertions_1 = require("../../assertions");
const CommonElements_1 = require("../../user_interface/CommonElements");
exports.IsTheAlertMessageVisible = ({
    reads: (expectedMessage) => screenplay_protractor_1.Task.where(`#actor checks if the ${expectedMessage} is visible`, screenplay_protractor_1.See.if(screenplay_protractor_1.Text.of(CommonElements_1.CommonElements.alert), assertions_1.equals(expectedMessage))),
});
//# sourceMappingURL=IsTheAlertMessageVisible.js.map