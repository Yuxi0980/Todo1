"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const GlobalActivities_1 = require("../pages/GlobalActivities");
let globalActivities = new GlobalActivities_1.GlobalActivities();
class SearchPage {
    constructor() {
        this.searchInput = protractor_1.element(protractor_1.by.id('lst-ib'));
        this.searchGoogleButton = protractor_1.element(protractor_1.by.name('btnK'));
        this.googleLogoSearchResult = protractor_1.element(protractor_1.by.xpath("//*[@id='logo']/img"));
        this.resultNameTitle = protractor_1.element(protractor_1.by.xpath("//*[@id='rso']/div[1]/div/div/div/div/h3/a"));
        this.resultNameDescription = protractor_1.element(protractor_1.by.xpath("//*[@id='rso']/div[1]/div/div/div/div/div/div/div[1]/cite"));
    }
    setSearchParameter(value) {
        globalActivities.waitForElement(this.searchInput, 30);
        this.searchInput.sendKeys(value);
        this.searchInput.sendKeys(protractor_1.protractor.Key.TAB);
    }
    pressSearchGoogleButton() {
        this.searchGoogleButton.click();
    }
    verifySearchResult(title, urlDescription) {
        //expect(this.resultNameTitle.getText()).toEqual(title);
        //expect(this.resultNameDescription.getText()).toEqual(urlDescription);
    }
    enterTheResult(parameter) {
        protractor_1.element(protractor_1.by.linkText(parameter)).click();
    }
    verifyEntryToThePage(title) {
        //expect(browser.getTitle()).toEqual(title);
    }
}
exports.SearchPage = SearchPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL3NlYXJjaFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0U7QUFDcEUsZ0VBQTZEO0FBRTdELElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0FBRTlDLE1BQWEsVUFBVTtJQUF2QjtRQUVDLGdCQUFXLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3RELHVCQUFrQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3RCwyQkFBc0IsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUNqRixvQkFBZSxHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFDO1FBQ2pHLDBCQUFxQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQyxDQUFDO0lBeUJ2SCxDQUFDO0lBdkJPLGtCQUFrQixDQUFDLEtBQWE7UUFDdEMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLHVCQUF1QjtRQUM3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLGtCQUFrQixDQUFDLEtBQWEsRUFBRSxjQUFzQjtRQUM5RCx3REFBd0Q7UUFDeEQsdUVBQXVFO0lBQ3hFLENBQUM7SUFFTSxjQUFjLENBQUMsU0FBaUI7UUFDdEMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVNLG9CQUFvQixDQUFDLEtBQWE7UUFDeEMsNENBQTRDO0lBQzdDLENBQUM7Q0FFRDtBQS9CRCxnQ0ErQkMifQ==