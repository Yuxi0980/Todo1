"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const assertions_1 = require("../../assertions");
const LoginPage_1 = require("../../user_interface/LoginPage");
exports.IsTheMessageErrorVisible = ({
    reads: (expectedMessage) => screenplay_protractor_1.Task.where(`#actor checks if the message error reads ${expectedMessage}`, screenplay_protractor_1.See.if(screenplay_protractor_1.Text.of(LoginPage_1.LoginPage.messageError), assertions_1.equals(expectedMessage))),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNUaGVNZXNzZWdlRXJyb3JWaXNpYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3BlYy9xdWVzdGlvbnMvbG9naW4vSXNUaGVNZXNzZWdlRXJyb3JWaXNpYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUZBQXVFO0FBRXZFLGlEQUEwQztBQUMxQyw4REFBMkQ7QUFFOUMsUUFBQSx3QkFBd0IsR0FBRyxDQUFDO0lBQ3JDLEtBQUssRUFBRSxDQUFDLGVBQXVCLEVBQUUsRUFBRSxDQUFDLDRCQUFJLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxlQUFlLEVBQUUsRUFDeEcsMkJBQUcsQ0FBQyxFQUFFLENBQUMsNEJBQUksQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxtQkFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQ25FO0NBQ0osQ0FBQyxDQUFDIn0=