import {See, Task, Text} from 'serenity-js/lib/screenplay-protractor';

import { equals } from '../../assertions';
import { CommonElements } from '../../user_interface/CommonElements';

export const IsTheAlertMessageVisible = ({
    reads: (expectedMessage: string) => Task.where(`#actor checks if the ${expectedMessage} is visible`,
        See.if(Text.of(CommonElements.alert), equals(expectedMessage))
    ),
});