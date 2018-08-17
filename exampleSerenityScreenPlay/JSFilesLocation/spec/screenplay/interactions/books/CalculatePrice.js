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
const protractor_1 = require("../../../../node_modules/protractor");
class CalculatePrice {
    constructor() {
        this.rows = protractor_1.element.all(protractor_1.by.css("#added > tbody > tr"));
    }
    GrandTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            let totalSum = 0;
            let numberOfRows = yield this.rows.count();
            for (let row = 2; row <= numberOfRows; row++) {
                let cellValue = yield protractor_1.element(protractor_1.by.css("#added > tbody > tr:nth-child(" + row + ") > td:nth-child(4)")).getText();
                let newCellValue = cellValue.replace("Rs.", "");
                totalSum = totalSum + parseInt(newCellValue);
            }
            return totalSum.toString();
        });
    }
}
exports.CalculatePrice = CalculatePrice;
//# sourceMappingURL=CalculatePrice.js.map