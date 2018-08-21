import { Target } from 'serenity-js/lib/screenplay-protractor';
import { by } from 'protractor';

export const LoginPage = {
    usernameField: Target.the('username field').located(by.name('user')),
    passwordField: Target.the('password field').located(by.name('password')),
    loginButton: Target.the('login button').located(by.css('input[onclick="login()"]')),
    messageError: Target.the('message error').located(by.id('errorMessage')),
    registerLink: Target.the('register link').located(by.linkText('Register')),
};