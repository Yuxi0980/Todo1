import {See, Task, Text } from 'serenity-js/lib/screenplay-protractor';

import { equals } from '../../assertions';
import { LoginPage } from '../../user_interface/LoginPage';

export const IsTheMessageErrorVisible = ({
    reads: (expectedMessage: string) => Task.where('#actor checks if the message error reads "${expectedMessage}"',
        See.if(Text.of(LoginPage.messageError), equals(expectedMessage))
    ),
});