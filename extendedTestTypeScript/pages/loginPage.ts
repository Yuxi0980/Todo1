import { element, by, ElementFinder } from 'protractor';
import { GlobalActivities } from '../pages/GlobalActivities';

let globalActivities = new GlobalActivities();

export class LoginPage {
    
    usernameTextInput: ElementFinder = element(by.name("user"));
    passwordTextInput: ElementFinder = element(by.name('password'));
    loginButton: ElementFinder = element(by.css("body > center > div > form > table > tbody > tr:nth-child(3) > td:nth-child(2) > input"));
    messageError: ElementFinder = element(by.id("errorMessage"));

    public setUsername(value: string) {
		this.usernameTextInput.sendKeys(value);
    }
    
    public setPassword(value: string) {
		this.passwordTextInput.sendKeys(value);
    }

    public sendFormLogin() {
        this.loginButton.click();
    }

    public clearFormLogin() {
        this.usernameTextInput.clear();
        this.passwordTextInput.clear();
    }

    public async getMessageError(): Promise<string> {
        return await this.messageError.getText();
    }

    public rightLogin() {
        this.setUsername("test");
        this.setPassword("secret");
        this.sendFormLogin();
    }

}