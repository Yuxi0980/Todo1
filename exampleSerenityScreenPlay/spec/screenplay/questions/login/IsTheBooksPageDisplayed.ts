import {See, Task, Text, Wait, Is } from 'serenity-js/lib/screenplay-protractor';

import { equals } from '../../assertions';
import { BooksPage } from '../../user_interface/BooksPage';
import { LoginPage } from '../../user_interface/LoginPage';

export const IsTheBooksPageDisplayed = ({
    see: (expectedPage: string) => Task.where(`#actor checks if the ${expectedPage} page is displayed`,
        Wait.until(LoginPage.loginButton, Is.invisible()),
        See.if(Text.of(BooksPage.title), equals(expectedPage))
    ),
});