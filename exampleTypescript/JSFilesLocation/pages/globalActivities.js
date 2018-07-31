"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class GlobalActivities {
    enterThePage(url) {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.get(url);
    }
    waitForElement(parameter, seconds) {
        protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(parameter), seconds * 1000, 'Failed the explicit wait');
    }
}
exports.GlobalActivities = GlobalActivities;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsQWN0aXZpdGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL2dsb2JhbEFjdGl2aXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBc0U7QUFFdEUsTUFBYSxnQkFBZ0I7SUFFbEIsWUFBWSxDQUFDLEdBQVc7UUFDM0Isb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDM0Msb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBRU0sY0FBYyxDQUFDLFNBQXdCLEVBQUUsT0FBZTtRQUMzRCxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEdBQUcsSUFBSSxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDakgsQ0FBQztDQUVKO0FBWEQsNENBV0MifQ==