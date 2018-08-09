"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const assertions_1 = require("../../assertions");
const LoginPage_1 = require("../../user_interface/LoginPage");
exports.IsTheMessageErrorVisible = ({
    reads: (expectedMessage) => screenplay_protractor_1.Task.where(`#actor checks if the message error reads ${expectedMessage}`, screenplay_protractor_1.See.if(screenplay_protractor_1.Text.of(LoginPage_1.LoginPage.messageError), assertions_1.equals(expectedMessage))),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNUaGVNZXNzZWdlRXJyb3JWaXNpYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3BlYy9zY3JlZW5wbGF5L3F1ZXN0aW9ucy9sb2dpbi9Jc1RoZU1lc3NlZ2VFcnJvclZpc2libGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRkFBdUU7QUFFdkUsaURBQTBDO0FBQzFDLDhEQUEyRDtBQUU5QyxRQUFBLHdCQUF3QixHQUFHLENBQUM7SUFDckMsS0FBSyxFQUFFLENBQUMsZUFBdUIsRUFBRSxFQUFFLENBQUMsNEJBQUksQ0FBQyxLQUFLLENBQUMsNENBQTRDLGVBQWUsRUFBRSxFQUN4RywyQkFBRyxDQUFDLEVBQUUsQ0FBQyw0QkFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLG1CQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FDbkU7Q0FDSixDQUFDLENBQUMifQ==