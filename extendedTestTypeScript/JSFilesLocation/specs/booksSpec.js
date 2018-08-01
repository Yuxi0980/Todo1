"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const globalActivities_1 = require("../pages/globalActivities");
const loginPage_1 = require("../pages/loginPage");
const booksPage_1 = require("../pages/booksPage");
let globalActivities = new globalActivities_1.GlobalActivities();
let loginPage = new loginPage_1.LoginPage();
let booksPage = new booksPage_1.BooksPage();
describe('Add books in the shopping cart', () => __awaiter(this, void 0, void 0, function* () {
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        globalActivities.navigateToThePage("http://sahitest.com/demo/training/");
        loginPage.rightLogin();
    }));
    it('Add diferent books', () => __awaiter(this, void 0, void 0, function* () {
        yield booksPage.addBooks(2, "Core Java");
        yield booksPage.addBooks(5, "Ruby for Rails");
        yield booksPage.addBooks(2, "Python Cookbook");
        //expect(await booksPage.getGrandTotal()).toEqual(booksPage.calculateGrandTotal());
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va3NTcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvYm9va3NTcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnRUFBNkQ7QUFDN0Qsa0RBQStDO0FBQy9DLGtEQUErQztBQUUvQyxJQUFJLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUM5QyxJQUFJLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUNoQyxJQUFJLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUVoQyxRQUFRLENBQUMsZ0NBQWdDLEVBQUUsR0FBUSxFQUFFO0lBRWpELFNBQVMsQ0FBRSxHQUFRLEVBQUU7UUFDakIsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUN6RSxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDM0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxHQUFRLEVBQUU7UUFDL0IsTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN6QyxNQUFNLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDOUMsTUFBTSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9DLG1GQUFtRjtJQUN2RixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9