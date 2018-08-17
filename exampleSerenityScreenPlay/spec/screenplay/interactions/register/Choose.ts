import { PerformsTasks, Task } from 'serenity-js/lib/screenplay';
import { Click } from '../../../../node_modules/serenity-js/lib/serenity-protractor';
import { RegisterPage } from '../../user_interface/RegisterPage';

export class Choose implements Task {

    static gender(gender: string) {
        return new Choose(gender);
    }

    performAs(actor: PerformsTasks) {
        switch (this.gender) {
            case 'male':
                return actor.attemptsTo(
                    Click.on(RegisterPage.maleRadioButton),
                )
            case 'female':
                return actor.attemptsTo(
                    Click.on(RegisterPage.femaleRadioButton),
                )
            default:
        }
    }

    constructor(private gender: string) { }

}