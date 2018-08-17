import { Target } from 'serenity-js/lib/screenplay-protractor';
import { by } from 'protractor';

export const BooksPage = {
    quantityTextField: (position: number) => Target.the('quantity field').located(by.css('#listing > tbody > tr:nth-child(' + position + ') > td:nth-child(4) > input[type = "text"]')),
    grandTotalField: Target.the('grand total field').located(by.id('total')),
    addButton: Target.the('add button').located(by.css('input[onclick="addToCart()"]')),
};