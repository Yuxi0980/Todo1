import { browser } from '../../../../node_modules/protractor';
import { UsesAbilities } from '../../../../node_modules/serenity-js/lib/screenplay';


export class Alerts {

    static GetAlertText() {
        return new Alerts();
    } 
    async answeredBy(actor: UsesAbilities) {
        return await Promise.resolve(browser.switchTo().alert().getText());
    } 
    
    constructor() {}

}