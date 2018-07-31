import {browser, ExpectedConditions, ElementFinder} from 'protractor';

export class GlobalActivities {

    public enterThePage(url: string) {
        browser.ignoreSynchronization = true;
		browser.get(url);
    }

    public waitForElement(parameter: ElementFinder, seconds: number) {
        browser.wait(ExpectedConditions.elementToBeClickable(parameter), seconds * 1000, 'Failed the explicit wait');
    }

}