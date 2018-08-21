import {See, Task, PerformsTasks} from 'serenity-js/lib/screenplay-protractor';
import { equals } from '../../assertions';
import { Alerts } from '../../interactions/register/Alerts';

export class IsTheAlertMessageVisible implements Task {

    static reads(expectedMessage: string) {
        return new IsTheAlertMessageVisible(expectedMessage);
    }

    async performAs(actor: PerformsTasks) {
        const alertMessage: any = await Alerts.GetAlertText();
        console.log(alertMessage);
        return actor.attemptsTo(
            See.if(alertMessage, equals(this.expectedMessage)),
        );
    }

    constructor(private expectedMessage: string) {}

}