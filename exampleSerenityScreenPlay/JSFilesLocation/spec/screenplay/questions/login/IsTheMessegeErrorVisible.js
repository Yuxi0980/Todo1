"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const assertions_1 = require("../../assertions");
const LoginPage_1 = require("../../user_interface/LoginPage");
exports.IsTheMessageErrorVisible = ({
    reads: (expectedMessage) => screenplay_protractor_1.Task.where(`#actor checks if the message error reads ${expectedMessage}`, screenplay_protractor_1.See.if(screenplay_protractor_1.Text.of(LoginPage_1.LoginPage.messageError), assertions_1.equals(expectedMessage))),
});
//# sourceMappingURL=IsTheMessegeErrorVisible.js.map