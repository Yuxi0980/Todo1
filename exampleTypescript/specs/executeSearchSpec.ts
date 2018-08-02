import { SearchPage } from '../pages/searchPage';
import { GlobalActivities } from '../pages/globalActivities';
import { async } from '../node_modules/@types/q';

let searchPage = new SearchPage();
let globalActivities = new GlobalActivities();

describe('Execute a search on Google', function () {

    beforeAll( async() => {
        await globalActivities.enterThePage("https://www.google.com.co/");
    });

    it('Search on Google', async() => {
        await searchPage.setSearchParameter("gmail");
        await searchPage.touchSearchGoogleButton();
        expect(await searchPage.getResultTittle()).toEqual('Gmail - Google');
		expect(await searchPage.getResultNameDescription()).toEqual("https://www.google.com/gmail/");
    });

    it('Navigate to page researched', async() => {
        await searchPage.enterTheResult("Gmail - Google");
        expect(await globalActivities.getTitlePage()).toEqual("Gmail");
    });

});