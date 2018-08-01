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
const protractor_1 = require("protractor");
const GlobalActivities_1 = require("../pages/GlobalActivities");
let globalActivities = new GlobalActivities_1.GlobalActivities();
class BooksPage {
    addBooks(quantity, book) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.setBook(yield this.findBookInTheTable(book), quantity);
        });
    }
    findBookInTheTable(book) {
        return __awaiter(this, void 0, void 0, function* () {
            let tableData = yield document.getElementById("listing");
            let numberOfRows = yield tableData.childNodes.length;
            let position;
            for (let row = 2; row <= numberOfRows; row++) {
                let cellValue = yield protractor_1.element(protractor_1.by.css("#listing > tbody > tr:nth-child(" + row + ") > td:nth-child(1)")).getText();
                cellValue = yield cellValue.trim();
                if (book == cellValue) {
                    position = row;
                    row = numberOfRows;
                }
            }
            return position;
        });
    }
    setBook(position, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.element(protractor_1.by.css("#listing > tbody > tr: nth - child(" + position + ") > td: nth - child(4) > input[type = 'text']")).sendKeys(quantity);
        });
    }
    getGrandTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.element(protractor_1.by.id("total")).getText();
        });
    }
    calculateGrandTotal() {
        //return await getTotalCostFromShoppingCart();
    }
}
exports.BooksPage = BooksPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va3NQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvYm9va3NQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBNEU7QUFDNUUsZ0VBQTZEO0FBRTdELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBRTlDLE1BQWEsU0FBUztJQUVMLFFBQVEsQ0FBQyxRQUFnQixFQUFFLElBQVk7O1lBQ2hELE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RSxDQUFDO0tBQUE7SUFFYSxrQkFBa0IsQ0FBQyxJQUFZOztZQUN6QyxJQUFJLFNBQVMsR0FBZ0IsTUFBTSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksWUFBWSxHQUFXLE1BQU0sU0FBUyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDN0QsSUFBSSxRQUFnQixDQUFDO1lBQ3JCLEtBQUssSUFBSSxHQUFHLEdBQVcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxZQUFZLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQ2xELElBQUksU0FBUyxHQUFXLE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxHQUFHLEdBQUcsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzFILFNBQVMsR0FBRyxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkMsSUFBSSxJQUFJLElBQUksU0FBUyxFQUFFO29CQUNuQixRQUFRLEdBQUcsR0FBRyxDQUFDO29CQUNmLEdBQUcsR0FBRyxZQUFZLENBQUM7aUJBQ3RCO2FBQ0o7WUFDRCxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO0tBQUE7SUFFYSxPQUFPLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjs7WUFDcEQsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxHQUFHLFFBQVEsR0FBRywrQ0FBK0MsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNJLENBQUM7S0FBQTtJQUVZLGFBQWE7O1lBQ3RCLE9BQU8sTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuRCxDQUFDO0tBQUE7SUFFTSxtQkFBbUI7UUFDdEIsOENBQThDO0lBQ2xELENBQUM7Q0FFSjtBQWpDRCw4QkFpQ0MifQ==