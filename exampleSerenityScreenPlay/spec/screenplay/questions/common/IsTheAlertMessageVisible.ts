import {See, Task, Text, Question} from 'serenity-js/lib/screenplay-protractor';

import { equals } from '../../assertions';
import { CommonElements } from '../../user_interface/CommonElements'

export const IsTheAlertMessageVisible = ({
    reads: async (expectedMessage: string) => Question.about(`#actor checks if the ${expectedMessage} is visible`, async () => {
        await See.if(Text.of(CommonElements.alert), equals(expectedMessage));
    }),
});