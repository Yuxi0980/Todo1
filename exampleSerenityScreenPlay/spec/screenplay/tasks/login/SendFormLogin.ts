import { Enter, Task, Click, Clear } from 'serenity-js/lib/screenplay-protractor';
import { LoginPage } from '../../user_interface/LoginPage';
import * as fs from 'fs';

const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));

export const SendFormLogin = ({

    withNoneInformation: async (parameter: string) => Task.where(`#actor send the form login with ${parameter} information`,
        await Clear.theValueOf(LoginPage.usernameField),
        await Clear.theValueOf(LoginPage.passwordField),
        await Click.on(LoginPage.loginButton)
    ),

    withWrongInformation: async (parameter: string) => Task.where(`#actor send the form login with ${parameter} information`,
        await Enter.theValue(users.wrong.username).into(LoginPage.usernameField),
        await Enter.theValue(users.wrong.password).into(LoginPage.passwordField),
        await Click.on(LoginPage.loginButton)
    ),

    withRightInformation: async (parameter: string) => Task.where(`#actor send the form login with ${parameter} information`,
        await Enter.theValue(users.right.username).into(LoginPage.usernameField),
        await Enter.theValue(users.right.password).into(LoginPage.passwordField),
        await Click.on(LoginPage.loginButton)
    ),

});