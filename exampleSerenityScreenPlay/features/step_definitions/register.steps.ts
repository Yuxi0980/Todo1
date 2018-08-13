import { Open } from 'serenity-js/lib/screenplay-protractor';
import { NavigateTo } from '../../spec/screenplay/tasks/login/NavigateTo';
import { SendFormRegister } from '../../spec/screenplay/tasks/register/SendFormRegister';

import * as fs from 'fs';

const links = JSON.parse(fs.readFileSync('./data/links.json', 'utf8'));

export = async function Register() {

    await this.Given(/^(.*) wants to register on website$/, function (actor: string) {
        return this.stage.theActorCalled(actor).attemptsTo(
            Open.browserOn(links.login),
            NavigateTo.registerLink()
        );
    });

    await this.When(/^he send form register with all information$/, function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            SendFormRegister.withAllInformation()
        );
    });

};