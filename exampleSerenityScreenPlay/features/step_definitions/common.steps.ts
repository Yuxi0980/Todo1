import { IsTheAlertMessageVisible } from '../../spec/screenplay/questions/common/IsTheAlertMessageVisible';

export = async function Common() {

    await this.Then(/^he should see a alert message indicating "([^"]*)"$/, async (message: string) => {
        return this.stage.theActorInTheSpotlight().attemptsTo(
            await IsTheAlertMessageVisible.reads(message),
        );
    });

};