import { SearchPage } from '../pages/searchPage';
import { GlobalActivities } from '../pages/GlobalActivities';

let searchPage = new SearchPage();
let globalActivities = new GlobalActivities();

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