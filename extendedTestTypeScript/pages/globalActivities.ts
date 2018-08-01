import {browser, ExpectedConditions, ElementFinder} from 'protractor';

export class GlobalActivities {
    
    public navigateToThePage(url: string): any {
        browser.ignoreSynchronization = true;
		browser.get(url);
    }

    public closeBrowser(): any {
        browser.quit();
    }
    
    public async getTitlePage(): Promise<string> {
        return await browser.getTitle();
    }

    public waitForElement(parameter: ElementFinder, seconds: number) {
        browser.wait(ExpectedConditions.elementToBeClickable(parameter), seconds * 1000, 'Failed the explicit wait');
    }

}