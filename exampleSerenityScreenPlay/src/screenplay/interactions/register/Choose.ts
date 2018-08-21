import { Interaction, Actor } from 'serenity-js/lib/screenplay';
import { Click } from '../../../../node_modules/serenity-js/lib/serenity-protractor';
import { RegisterPage } from '../../user_interface/RegisterPage';

export class Choose implements Interaction {

    static gender(gender: string) {
        return new Choose(gender);
    }

    async performAs(actor: Actor) {
        switch (this.gender) {
            case 'male':
                return actor.attemptsTo(
                    await Click.on(RegisterPage.maleRadioButton),
                )
            case 'female':
                return actor.attemptsTo(
                    await Click.on(RegisterPage.femaleRadioButton),
                )
            default:
        }
    }

    constructor(private gender: string) {}

}