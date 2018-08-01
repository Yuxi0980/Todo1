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
class GlobalActivities {
    closeBrowser() {
        protractor_1.browser.quit();
    }
    getTitlePage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getTitle();
        });
    }
    enterThePage(url) {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get(url);
    }
    waitForElement(parameter, seconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(parameter), seconds * 1000, 'Failed the explicit wait');
    }
}
exports.GlobalActivities = GlobalActivities;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsQWN0aXZpdGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL2dsb2JhbEFjdGl2aXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFzRTtBQUV0RSxNQUFhLGdCQUFnQjtJQUVsQixZQUFZO1FBQ2Ysb0JBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRVksWUFBWTs7WUFDckIsT0FBTyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBRU0sWUFBWSxDQUFDLEdBQVc7UUFDM0Isb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDM0Msb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRU0sY0FBYyxDQUFDLFNBQXdCLEVBQUUsT0FBZTtRQUMzRCxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEdBQUcsSUFBSSxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDakgsQ0FBQztDQUVKO0FBbkJELDRDQW1CQyJ9