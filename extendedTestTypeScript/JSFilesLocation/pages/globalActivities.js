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
    navigateToThePage(url) {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get(url);
    }
    closeBrowser() {
        protractor_1.browser.quit();
    }
    getTitlePage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getTitle();
        });
    }
    waitForElement(parameter, seconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(parameter), seconds * 1000, 'Failed the explicit wait');
    }
}
exports.GlobalActivities = GlobalActivities;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2xvYmFsQWN0aXZpdGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL0dsb2JhbEFjdGl2aXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFzRTtBQUV0RSxNQUFhLGdCQUFnQjtJQUVsQixpQkFBaUIsQ0FBQyxHQUFXO1FBQ2hDLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQzNDLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVNLFlBQVk7UUFDZixvQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFWSxZQUFZOztZQUNyQixPQUFPLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFFTSxjQUFjLENBQUMsU0FBd0IsRUFBRSxPQUFlO1FBQzNELG9CQUFPLENBQUMsSUFBSSxDQUFDLCtCQUFrQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sR0FBRyxJQUFJLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztJQUNqSCxDQUFDO0NBRUo7QUFuQkQsNENBbUJDIn0=