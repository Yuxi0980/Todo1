import { Enter, Task, Click, Clear, PerformsTasks } from 'serenity-js/lib/screenplay-protractor';
import { LoginPage } from '../../user_interface/LoginPage';
import * as fs from 'fs';

const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));

export class SendFormLogin implements Task {

    static with(parameter: string) {
        return new SendFormLogin(parameter);
    }

    async performAs(actor: PerformsTasks) {
        switch (this.parameter) {
            case 'none':
                return actor.attemptsTo(
                    await Clear.theValueOf(LoginPage.usernameField),
                    await Clear.theValueOf(LoginPage.passwordField),
                    await Click.on(LoginPage.loginButton)
                )
            case 'wrong':
                return actor.attemptsTo(
                    await Enter.theValue(users.wrong.username).into(LoginPage.usernameField),
                    await Enter.theValue(users.wrong.password).into(LoginPage.passwordField),
                    await Click.on(LoginPage.loginButton)
                )
            case 'right':
                return actor.attemptsTo(
                    await Enter.theValue(users.right.username).into(LoginPage.usernameField),
                    await Enter.theValue(users.right.password).into(LoginPage.passwordField),
                    await Click.on(LoginPage.loginButton)
                )
            default:
                break;
        }

    }

    constructor(private parameter: string) {}

} 