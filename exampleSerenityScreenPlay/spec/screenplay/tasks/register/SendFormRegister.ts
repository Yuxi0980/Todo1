import { Task, Click, Enter, Select, PerformsTasks } from 'serenity-js/lib/screenplay-protractor';
import { WaitForAlert } from 'serenity-js/lib/serenity-protractor/screenplay/interactions/waitForAlert';
import { RegisterPage } from '../../user_interface/RegisterPage';
import { Choose } from '../../Interactions/register/Choose';
import { Alert } from 'serenity-js/lib/serenity-protractor/screenplay/interactions/alert';
import * as fs from 'fs';

const userInfo = JSON.parse(fs.readFileSync('./data/userInfo.json', 'utf8'));

export class SendFormRegister implements Task {

    static with(parameter: string) {
        return new SendFormRegister(parameter);
    }

    performAs(actor: PerformsTasks) {
        switch (this.parameter) {
            case 'all':
                return actor.attemptsTo(
                    new AllInformation(),
                )
            default:
                break;
        }
    }

    constructor(private parameter: string) {}

} 

export class AllInformation implements Task {

    performAs(actor: PerformsTasks) {
        return actor.attemptsTo(
            Enter.theValue(userInfo.username).into(RegisterPage.usernameField),
            Enter.theValue(userInfo.password).into(RegisterPage.passwordField),
            Enter.theValue(userInfo.password2).into(RegisterPage.password2Field),
            Choose.gender(userInfo.gender),
            Enter.theValue(userInfo.address).into(RegisterPage.addressField),
            Enter.theValue(userInfo.billingAddress).into(RegisterPage.billingAddressField),
            Select.theValue(userInfo.state).from(RegisterPage.stateList),
            Click.on(RegisterPage.termsAndConditionsOption),
            Click.on(RegisterPage.registerButton),
            WaitForAlert.toBePresent(),
        )
    }

} 