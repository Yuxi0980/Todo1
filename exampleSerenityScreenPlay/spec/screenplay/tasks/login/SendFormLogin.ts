import { Enter, Task, Click, Clear } from 'serenity-js/lib/screenplay-protractor';
import { LoginPage } from '../../user_interface/LoginPage';
import * as fs from 'fs';

const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));

export const SendFormLogin = ({

    withNoneInformation: (parameter: string) => Task.where(`#actor send the form login with ${parameter} information`,
        Clear.theValueOf(LoginPage.usernameField),
        Clear.theValueOf(LoginPage.passwordField),
        Click.on(LoginPage.loginButton)
    ),

    withWrongInformation: (parameter: string) => Task.where(`#actor send the form login with ${parameter} information`,
        Enter.theValue(users.wrong.username).into(LoginPage.usernameField),
        Enter.theValue(users.wrong.password).into(LoginPage.passwordField),
        Click.on(LoginPage.loginButton)
    ),

    withRightInformation: (parameter: string) => Task.where(`#actor send the form login with ${parameter} information`,
        Enter.theValue(users.right.username).into(LoginPage.usernameField),
        Enter.theValue(users.right.password).into(LoginPage.passwordField),
        Click.on(LoginPage.loginButton)
    ),
    
});