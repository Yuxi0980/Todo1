import { Enter, Is, Task, Wait, Click } from 'serenity-js/lib/screenplay-protractor';
import { LoginPage } from '../../user_interface/LoginPage';

export const FormLogin = ({
    send: (expectedInformation: string) => Task.where('#actor send the form login information',
        Enter.theValue('').into(LoginPage.usernameField),
        Enter.theValue('').into(LoginPage.passwordField),
        Click.on(LoginPage.loginButton)
    ),
    clear: (expectedInformation: string) => Task.where('#actor clear the form login information',
    Enter.theValue('').into(LoginPage.usernameField),
    Enter.theValue('').into(LoginPage.passwordField),
    Click.on(LoginPage.loginButton)
),
});