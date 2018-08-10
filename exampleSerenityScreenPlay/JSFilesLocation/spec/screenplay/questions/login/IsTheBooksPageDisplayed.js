"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const assertions_1 = require("../../assertions");
const BooksPage_1 = require("../../user_interface/BooksPage");
exports.IsTheBooksPageDisplayed = ({
    see: (expectedTitle) => screenplay_protractor_1.Task.where(`#actor checks if the ${expectedTitle} page is displayed`, screenplay_protractor_1.See.if(screenplay_protractor_1.Text.of(BooksPage_1.BooksPage.title), assertions_1.equals(expectedTitle))),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNUaGVCb29rc1BhZ2VEaXNwbGF5ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcGVjL3NjcmVlbnBsYXkvcXVlc3Rpb25zL2xvZ2luL0lzVGhlQm9va3NQYWdlRGlzcGxheWVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUZBQWlGO0FBRWpGLGlEQUEwQztBQUMxQyw4REFBMkQ7QUFHOUMsUUFBQSx1QkFBdUIsR0FBRyxDQUFDO0lBQ3BDLEdBQUcsRUFBRSxDQUFDLGFBQXFCLEVBQUUsRUFBRSxDQUFDLDRCQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixhQUFhLG9CQUFvQixFQUNoRywyQkFBRyxDQUFDLEVBQUUsQ0FBQyw0QkFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLG1CQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FDMUQ7Q0FDSixDQUFDLENBQUMifQ==