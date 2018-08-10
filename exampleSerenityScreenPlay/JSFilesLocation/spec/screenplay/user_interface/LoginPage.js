"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const protractor_1 = require("protractor");
exports.LoginPage = {
    usernameField: screenplay_protractor_1.Target.the('username field').located(protractor_1.by.name('user')),
    passwordField: screenplay_protractor_1.Target.the('password field').located(protractor_1.by.name('password')),
    loginButton: screenplay_protractor_1.Target.the('login button').located(protractor_1.by.css('input[onclick="login()"]')),
    messageError: screenplay_protractor_1.Target.the('message error').located(protractor_1.by.id('errorMessage')),
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3BlYy9zY3JlZW5wbGF5L3VzZXJfaW50ZXJmYWNlL0xvZ2luUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlGQUErRDtBQUMvRCwyQ0FBZ0M7QUFFbkIsUUFBQSxTQUFTLEdBQUc7SUFDckIsYUFBYSxFQUFFLDhCQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEUsYUFBYSxFQUFFLDhCQUFNLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEUsV0FBVyxFQUFFLDhCQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDbkYsWUFBWSxFQUFFLDhCQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0NBQzNFLENBQUMifQ==