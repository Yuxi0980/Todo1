import { Target } from 'serenity-js/lib/screenplay-protractor';
import { browser, by } from 'protractor';

export const CommonElements = {
    alert: Target.the('alert message').located(browser.switchTo().alert())
};