import { Open } from 'serenity-js/lib/screenplay-protractor';
import { FormLogin } from '../../spec/tasks/Login/FormLogin';
import { IsTheMessageErrorVisible } from '../../spec/questions/Login/IsTheMessegeErrorVisible';

export = function Login() {

    this.Given(/^(.*) wants to interact with AngularJS apps$/, function(actor: string) {
        return this.stage.theActorCalled(actor).attemptsTo(
            Open.browserOn('https://www.angularjs.org/'),
        );
    });

    this.When(/^he send form login with (.*) information$/, function(information: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            FormLogin.send(information),
        );
    });

    this.Then(/^he should see a message indicating "([^"]*)"$/, function(message: string) {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            IsTheMessageErrorVisible.reads(message),
        );
    });
};