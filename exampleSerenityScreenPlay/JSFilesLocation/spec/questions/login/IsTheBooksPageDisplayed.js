"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const assertions_1 = require("../../assertions");
const BooksPage_1 = require("../../user_interface/BooksPage");
const LoginPage_1 = require("../../user_interface/LoginPage");
exports.IsTheBooksPageDisplayed = ({
    see: (expectedPage) => screenplay_protractor_1.Task.where(`#actor checks if the ${expectedPage} page is displayed`, screenplay_protractor_1.Wait.until(LoginPage_1.LoginPage.loginButton, screenplay_protractor_1.Is.invisible()), screenplay_protractor_1.See.if(screenplay_protractor_1.Text.of(BooksPage_1.BooksPage.title), assertions_1.equals(expectedPage))),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNUaGVCb29rc1BhZ2VEaXNwbGF5ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcGVjL3F1ZXN0aW9ucy9sb2dpbi9Jc1RoZUJvb2tzUGFnZURpc3BsYXllZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlGQUFpRjtBQUVqRixpREFBMEM7QUFDMUMsOERBQTJEO0FBQzNELDhEQUEyRDtBQUU5QyxRQUFBLHVCQUF1QixHQUFHLENBQUM7SUFDcEMsR0FBRyxFQUFFLENBQUMsWUFBb0IsRUFBRSxFQUFFLENBQUMsNEJBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLFlBQVksb0JBQW9CLEVBQzlGLDRCQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLDBCQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsRUFDakQsMkJBQUcsQ0FBQyxFQUFFLENBQUMsNEJBQUksQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxtQkFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQ3pEO0NBQ0osQ0FBQyxDQUFDIn0=