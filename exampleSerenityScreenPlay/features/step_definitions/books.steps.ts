import { Open } from 'serenity-js/lib/screenplay-protractor';
import { AddBooks } from '../../spec/screenplay/tasks/books/AddBooks';
import { SendFormLogin } from '../../spec/screenplay/tasks/login/SendFormLogin';

import * as fs from 'fs';
import { IsGrandTotalRight } from '../../spec/screenplay/questions/books/IsGrandTotalRight';

const links = JSON.parse(fs.readFileSync('./data/links.json', 'utf8'));

export = async function Books() {

    await this.Given(/^(.*) wants to buy books$/, async function (actor: string) {
        return this.stage.theActorCalled(actor).attemptsTo(
            await Open.browserOn(links.login),
            await SendFormLogin.with('right')
        );
    });

    await this.When(/^he add (\d+) "([^"]*)" books$/, async function (quantity: number, book: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            await AddBooks.toShoppingCart(quantity, book)
        );
    });

    await this.Then(/^he should see the total price of shopping$/, async function () {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            await IsGrandTotalRight.reads(),
        );
    });

};