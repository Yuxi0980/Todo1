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
const protractor_2 = require("serenity-js/protractor");
exports.Window = {
    switchToFrame: (index) => __awaiter(this, void 0, void 0, function* () {
        return protractor_2.Interaction.where(`#actor switches to a frame`, () => {
            return protractor_1.protractor.browser.driver.switchTo().frame(index);
        });
    }),
};
//# sourceMappingURL=interactions.js.map