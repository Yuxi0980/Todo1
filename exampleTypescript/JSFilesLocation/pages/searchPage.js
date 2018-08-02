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
class SearchPage {
    constructor() {
        this.searchInput = protractor_1.element(protractor_1.by.id('lst-ib'));
        this.searchGoogleButton = protractor_1.element(protractor_1.by.name('btnK'));
        this.googleLogoSearchResult = protractor_1.element(protractor_1.by.css("#logo > img"));
        this.resultNameTitle = protractor_1.element(protractor_1.by.css("#rso > div:nth-child(1) > div > div > div > div > h3 > a"));
        this.resultNameDescription = protractor_1.element(protractor_1.by.css("#rso > div:nth-child(1) > div > div > div > div > div > div > div.f.hJND5c.TbwUpd > cite"));
        this.elementOfThePageResult = protractor_1.element(protractor_1.by.css("#hdtb-msb-vis > div.hdtb-mitem.hdtb-msel.hdtb-imb"));
    }
    setSearchParameter(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalActivities.waitForElement(this.searchInput, 10);
            yield this.searchInput.sendKeys(value);
            yield this.searchInput.sendKeys(protractor_1.protractor.Key.TAB);
        });
    }
    touchSearchGoogleButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield globalActivities.waitForElement(this.searchGoogleButton, 5);
            yield this.searchGoogleButton.click();
            yield globalActivities.waitForElement(this.elementOfThePageResult, 5);
        });
    }
    getResultTittle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resultNameTitle.getText();
        });
    }
    getResultNameDescription() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.resultNameDescription.getText();
        });
    }
    enterTheResult(parameter) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.element(protractor_1.by.linkText(parameter)).click();
        });
    }
}
exports.SearchPage = SearchPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL3NlYXJjaFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFvRTtBQUNwRSxnRUFBNkQ7QUFFN0QsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFFOUMsTUFBYSxVQUFVO0lBQXZCO1FBRUMsZ0JBQVcsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEQsdUJBQWtCLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdELDJCQUFzQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUN2RSxvQkFBZSxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMERBQTBELENBQUMsQ0FBQyxDQUFDO1FBQzdHLDBCQUFxQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMEZBQTBGLENBQUMsQ0FBQyxDQUFDO1FBQ25KLDJCQUFzQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbURBQW1ELENBQUMsQ0FBQyxDQUFDO0lBMEI5RyxDQUFDO0lBeEJhLGtCQUFrQixDQUFDLEtBQWE7O1lBQzVDLE1BQU0sZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDNUQsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtJQUVZLHVCQUF1Qjs7WUFDbkMsTUFBTSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RDLE1BQU0sZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDO0tBQUE7SUFFWSxlQUFlOztZQUMzQixPQUFPLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM3QyxDQUFDO0tBQUE7SUFFWSx3QkFBd0I7O1lBQ3BDLE9BQU8sTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkQsQ0FBQztLQUFBO0lBRVksY0FBYyxDQUFDLFNBQWlCOztZQUM1QyxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQy9DLENBQUM7S0FBQTtDQUVEO0FBakNELGdDQWlDQyJ9