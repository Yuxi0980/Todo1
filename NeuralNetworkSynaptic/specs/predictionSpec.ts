import { Networks } from '../pages/networks';

let networks = new Networks();

describe('Login on the website', async() => {

    it('Send form with none information', async() => {
        await networks.trainTheNetwork();
        //await networks.predict(36, 15);
    });

});