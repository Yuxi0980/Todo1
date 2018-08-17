import { Open, Execute } from 'serenity-js/lib/screenplay-protractor';
import { NavigateTo } from '../../spec/screenplay/tasks/login/NavigateTo';
import { SendFormRegister } from '../../spec/screenplay/tasks/register/SendFormRegister';
import { IsTheAlertMessageVisible } from '../../spec/screenplay/questions/register/IsTheAlertMessageVisible';

import * as fs from 'fs';

const links = JSON.parse(fs.readFileSync('./data/links.json', 'utf8'));

export = async function Register() {

    await this.Given(/^(.*) wants to register on website$/, async function (actor: string) {
        return this.stage.theActorCalled(actor).attemptsTo(
            await Open.browserOn(links.login),
            await NavigateTo.registerLink()
        );
    });

    await this.When(/^he send form register with "([^"]*)" information$/, async function (parameter: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            await SendFormRegister.with(parameter)
        );
    });

    await this.Then(/^he should see a alert message indicating "([^"]*)"$/, async function (message: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            await IsTheAlertMessageVisible.reads(message),
        );
    });

};