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
const screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
const BooksPage_1 = require("../../user_interface/BooksPage");
const FindBook_1 = require("../../interactions/books/FindBook");
let findBook = new FindBook_1.FindBook();
class AddBooks {
    constructor(quantity, book) {
        this.quantity = quantity;
        this.book = book;
    }
    static toShoppingCart(quantity, book) {
        return new AddBooks(quantity, book);
    }
    performAs(actor) {
        return __awaiter(this, void 0, void 0, function* () {
            const position = yield findBook.InTheTable(this.book);
            return actor.attemptsTo(yield screenplay_protractor_1.Clear.theValueOf(BooksPage_1.BooksPage.quantityTextField(position)), yield screenplay_protractor_1.Enter.theValue(this.quantity.toString()).into(BooksPage_1.BooksPage.quantityTextField(position)), yield screenplay_protractor_1.Click.on(BooksPage_1.BooksPage.addButton));
        });
    }
}
exports.AddBooks = AddBooks;
//# sourceMappingURL=AddBooks.js.map