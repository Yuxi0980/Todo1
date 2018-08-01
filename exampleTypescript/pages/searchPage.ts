import { element, by, protractor, ElementFinder } from 'protractor';
import { GlobalActivities } from '../pages/GlobalActivities';

let globalActivities = new GlobalActivities();

export class SearchPage {

	searchInput: ElementFinder = element(by.id('lst-ib'));
	searchGoogleButton: ElementFinder = element(by.name('btnK'));
	googleLogoSearchResult: ElementFinder = element(by.css("#logo > img"));
	resultNameTitle: ElementFinder = element(by.css("#rso > div:nth-child(1) > div > div > div > div > h3 > a"));
	resultNameDescription: ElementFinder = element(by.css("#rso > div:nth-child(1) > div > div > div > div > div > div > div.f.hJND5c.TbwUpd > cite"));
	elementOfThePageResult: ElementFinder = element(by.css("#hdtb-msb-vis > div.hdtb-mitem.hdtb-msel.hdtb-imb"));

	public setSearchParameter(value: string) {
		globalActivities.waitForElement(this.searchInput, 10);
		this.searchInput.sendKeys(value);
		this.searchInput.sendKeys(protractor.Key.TAB);
	}

	public touchSearchGoogleButton() {
		globalActivities.waitForElement(this.searchGoogleButton, 5);
		this.searchGoogleButton.click();
		globalActivities.waitForElement(this.elementOfThePageResult, 5);
	}

	public async getResultTittle() : Promise<string> {
		return await this.resultNameTitle.getText();
	}

	public async getResultNameDescription() : Promise<string> {
		return await this.resultNameDescription.getText();
	}

	public enterTheResult(parameter: string) {
		element(by.linkText(parameter)).click();
	}

}