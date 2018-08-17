import { Open } from 'serenity-js/lib/screenplay-protractor';
import { SendFormLogin } from '../../spec/screenplay/tasks/login/SendFormLogin';
import { IsTheMessageErrorVisible } from '../../spec/screenplay/questions/login/IsTheMessegeErrorVisible';
import { IsTheBooksPageDisplayed } from '../../spec/screenplay/questions/login/IsTheBooksPageDisplayed';
import * as fs from 'fs';

const links = JSON.parse(fs.readFileSync('./data/links.json', 'utf8'));

export = async function Login() {

    await this.Given(/^(.*) wants to login on website$/, async function (actor: string) {
        return this.stage.theActorCalled(actor).attemptsTo(
            await Open.browserOn(links.login),
        );
    });

    await this.When(/^he send form login with (.*) information$/, async function (parameter: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            await SendFormLogin.with(parameter),
        );
    });

    await this.Then(/^he should see a message indicating "([^"]*)"$/, async function (message: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            await IsTheMessageErrorVisible.reads(message),
        );
    });

    await this.Then(/^he should see the (.*) page$/, async function (title: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            await IsTheBooksPageDisplayed.see(title),
        );
    });

};