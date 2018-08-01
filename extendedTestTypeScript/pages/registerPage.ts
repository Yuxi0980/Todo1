import { element, by, ElementFinder, $, browser } from 'protractor';
import { GlobalActivities } from '../pages/GlobalActivities';

let globalActivities = new GlobalActivities();

export class RegisterPage {
    
    usernameTextInput: ElementFinder = element(by.name("username"));
    passwordTextInput: ElementFinder = element(by.name('password'));
    password2TextInput: ElementFinder = element(by.name('password2'));
    maleRadioButton: ElementFinder = element(by.css('body > center > div > form > div > table > tbody > tr:nth-child(4) > td:nth-child(2) > input[type="radio"]:nth-child(1)'));
    femaleRadioButton: ElementFinder = element(by.css('body > center > div > form > div > table > tbody > tr:nth-child(4) > td:nth-child(2) > input[type="radio"]:nth-child(2)'));
    addressTextInput: ElementFinder = element(by.name('address'));
    billingAddressTextInput: ElementFinder = element(by.name('billaddress'));
    stateSelectInput: ElementFinder = $('[name="state"]');
    termsAndConditionsCheckBox: ElementFinder = element(by.name('agree'));
    registerButton: ElementFinder = element(by.css("body > center > div > form > input[type='button']:nth-child(5)"));

    public setUsername(value: string) {
		this.usernameTextInput.sendKeys(value);
    }
    
    public setPassword(value: string) {
		this.passwordTextInput.sendKeys(value);
    }

    public setPassword2(value: string) {
        this.password2TextInput.sendKeys(value);
    }

    public chooseGender(value: string) {
        if (value == "male") {
            this.maleRadioButton.click();
        } else {
            this.femaleRadioButton.click();
        }
    }

    public setAddress(value: string) {
        this.addressTextInput.sendKeys(value);
    }

    public setBillingAddress(value: string) {
        this.billingAddressTextInput.sendKeys(value);
    }

    public selectState(value: string) {
        this.stateSelectInput.element(by.cssContainingText('option', value)).click();
    }

    public markTermsAndCondition() {
        this.termsAndConditionsCheckBox.click();
    }

    public sendFormRegister() {
        this.registerButton.click();
    }

    public async getMessageAlert(): Promise<string> {
        return await browser.switchTo().alert().getText();
    }

}