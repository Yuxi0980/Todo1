import { element, by, protractor, ElementFinder } from 'protractor';
import { GlobalActivities } from '../pages/GlobalActivities';

let globalActivities = new GlobalActivities();

export class SearchPage {

	searchInput: ElementFinder = element(by.id('lst-ib'));
	searchGoogleButton: ElementFinder = element(by.name('btnK'));
	googleLogoSearchResult: ElementFinder = element(by.xpath("//*[@id='logo']/img"));
	resultNameTitle: ElementFinder = element(by.xpath("//*[@id='rso']/div[1]/div/div/div/div/h3/a"));
	resultNameDescription: ElementFinder = element(by.xpath("//*[@id='rso']/div[1]/div/div/div/div/div/div/div[1]/cite"));

	public setSearchParameter(value: string) {
		globalActivities.waitForElement(this.searchInput, 30);
		this.searchInput.sendKeys(value);
		this.searchInput.sendKeys(protractor.Key.TAB);
	}

	public pressSearchGoogleButton() {
		this.searchGoogleButton.click();
	}

	public verifySearchResult(title: string, urlDescription: string) {
		//expect(this.resultNameTitle.getText()).toEqual(title);
		//expect(this.resultNameDescription.getText()).toEqual(urlDescription);
	}

	public enterTheResult(parameter: string) {
		element(by.linkText(parameter)).click();
	}

	public verifyEntryToThePage(title: string) {
		//expect(browser.getTitle()).toEqual(title);
	}

}