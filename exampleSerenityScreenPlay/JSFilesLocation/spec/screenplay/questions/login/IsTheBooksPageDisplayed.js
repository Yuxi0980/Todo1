"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const assertions_1 = require("../../assertions");
const BooksPage_1 = require("../../../user_interface/BooksPage");
const LoginPage_1 = require("../../../user_interface/LoginPage");
exports.IsTheBooksPageDisplayed = ({
    see: (expectedPage) => screenplay_protractor_1.Task.where(`#actor checks if the ${expectedPage} page is displayed`, screenplay_protractor_1.Wait.until(LoginPage_1.LoginPage.loginButton, screenplay_protractor_1.Is.invisible()), screenplay_protractor_1.See.if(screenplay_protractor_1.Text.of(BooksPage_1.BooksPage.title), assertions_1.equals(expectedPage))),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNUaGVCb29rc1BhZ2VEaXNwbGF5ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcGVjL3NjcmVlbnBsYXkvcXVlc3Rpb25zL2xvZ2luL0lzVGhlQm9va3NQYWdlRGlzcGxheWVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUZBQWlGO0FBRWpGLGlEQUEwQztBQUMxQyxpRUFBOEQ7QUFDOUQsaUVBQThEO0FBRWpELFFBQUEsdUJBQXVCLEdBQUcsQ0FBQztJQUNwQyxHQUFHLEVBQUUsQ0FBQyxZQUFvQixFQUFFLEVBQUUsQ0FBQyw0QkFBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsWUFBWSxvQkFBb0IsRUFDOUYsNEJBQUksQ0FBQyxLQUFLLENBQUMscUJBQVMsQ0FBQyxXQUFXLEVBQUUsMEJBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUNqRCwyQkFBRyxDQUFDLEVBQUUsQ0FBQyw0QkFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLG1CQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FDekQ7Q0FDSixDQUFDLENBQUMifQ==