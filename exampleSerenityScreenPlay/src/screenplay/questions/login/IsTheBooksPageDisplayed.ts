import {See, Task, Text, Wait, Is, Question, Website } from 'serenity-js/lib/screenplay-protractor';

import { equals } from '../../assertions';
import { BooksPage } from '../../user_interface/BooksPage';

export const IsTheBooksPageDisplayed = ({
    see: async (expectedTitle: string) => Task.where(`#actor checks if the ${expectedTitle} page is displayed`,
        See.if(Website.title(), equals(expectedTitle))
    ),
});