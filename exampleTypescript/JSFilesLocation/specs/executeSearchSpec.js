"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchPage_1 = require("../pages/searchPage");
const GlobalActivities_1 = require("../pages/GlobalActivities");
let searchPage = new searchPage_1.SearchPage();
let globalActivities = new GlobalActivities_1.GlobalActivities();
describe('Execute a search on Google', function () {
    beforeAll(function () {
        globalActivities.enterThePage("https://www.google.com.co/");
    });
    it('Search on Google', function () {
        searchPage.setSearchParameter("gmail");
        searchPage.pressSearchGoogleButton();
        searchPage.verifySearchResult("Gmail - Google", "https://www.google.com/gmail/");
    });
    it('Navigate to page researched', function () {
        searchPage.setSearchParameter("gmail");
        searchPage.pressSearchGoogleButton();
        searchPage.enterTheResult("Gmail - Google");
        searchPage.verifyEntryToThePage("Gmail");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZVNlYXJjaFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9leGVjdXRlU2VhcmNoU3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9EQUFpRDtBQUNqRCxnRUFBNkQ7QUFFN0QsSUFBSSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDbEMsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFFOUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBRW5DLFNBQVMsQ0FBQztRQUNOLGdCQUFnQixDQUFDLFlBQVksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtCQUFrQixFQUFFO1FBQ25CLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxVQUFVLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUNyQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsK0JBQStCLENBQUMsQ0FBQztJQUNyRixDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw2QkFBNkIsRUFBRTtRQUM5QixVQUFVLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsVUFBVSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDckMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzVDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=