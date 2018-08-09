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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3BlYy91c2VyX2ludGVyZmFjZS9Mb2dpblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRkFBK0Q7QUFDL0QsMkNBQWdDO0FBRW5CLFFBQUEsU0FBUyxHQUFHO0lBQ3JCLGFBQWEsRUFBRSw4QkFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLGFBQWEsRUFBRSw4QkFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hFLFdBQVcsRUFBRSw4QkFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ25GLFlBQVksRUFBRSw4QkFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQztDQUMzRSxDQUFDIn0=