import {See, Task, Text, Wait, Is } from 'serenity-js/lib/screenplay-protractor';

import { equals } from '../../assertions';
import { BooksPage } from '../../user_interface/BooksPage';
import { LoginPage } from '../../user_interface/LoginPage';

export const IsTheBooksPageDisplayed = ({
    see: (expectedTitle: string) => Task.where(`#actor checks if the ${expectedTitle} page is displayed`,
        See.if(Text.of(BooksPage.title), equals(expectedTitle))
    ),
});