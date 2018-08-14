import { Target } from 'serenity-js/lib/screenplay-protractor';
import { protractor, by } from 'protractor';

export const CommonElements = {
    alert: Target.the('alert message').located(by.css(''))
};
