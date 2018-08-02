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
    getTitlePage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getTitle();
        });
    }
    enterThePage(url) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.ignoreSynchronization = true;
            yield protractor_1.browser.get(url);
        });
    }
    waitForElement(parameter, seconds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(parameter), seconds * 1000, 'Failed the explicit wait');
        });
    }
}
exports.GlobalActivities = GlobalActivities;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsQWN0aXZpdGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL2dsb2JhbEFjdGl2aXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFzRTtBQUV0RSxNQUFhLGdCQUFnQjtJQUVaLFlBQVk7O1lBQ3JCLE9BQU8sTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUVZLFlBQVksQ0FBQyxHQUFXOztZQUNqQyxvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztZQUMzQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7S0FBQTtJQUVZLGNBQWMsQ0FBQyxTQUF3QixFQUFFLE9BQWU7O1lBQ2pFLE1BQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsK0JBQWtCLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxHQUFHLElBQUksRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBQ3ZILENBQUM7S0FBQTtDQUVKO0FBZkQsNENBZUMifQ==