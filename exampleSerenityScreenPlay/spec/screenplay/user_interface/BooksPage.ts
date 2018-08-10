import { Target } from 'serenity-js/lib/screenplay-protractor';
import { by } from 'protractor';

export const BooksPage = {
    title: Target.the('page title').located(by.css('#available > h2')),
};