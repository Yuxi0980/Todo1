import { Task, Click, PerformsTasks } from 'serenity-js/lib/screenplay-protractor';
import { LoginPage } from '../../user_interface/LoginPage';

export class NavigateTo implements Task {

    static registerLink() {
        return new NavigateTo();
    }

    performAs(actor: PerformsTasks) {
        return actor.attemptsTo(
            Click.on(LoginPage.registerLink)
        )
    }

    constructor() { }

}