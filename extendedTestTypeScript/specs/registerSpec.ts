import { GlobalActivities } from '../pages/globalActivities';
import { RegisterPage } from '../pages/registerPage';

let globalActivities = new GlobalActivities();
let registerPage = new RegisterPage();

describe('Register the user information', async() => {

    beforeAll( async() => {
        globalActivities.navigateToThePage("http://sahitest.com/demo/training/register.htm");
    });

    it('Send all the user information', async() => {
        registerPage.setUsername("mfernanda");
        registerPage.setPassword("abcd1234*");
        registerPage.setPassword2("abcd1234*");
        registerPage.chooseGender("female");
        registerPage.setAddress("street 10a #40");
        registerPage.setBillingAddress("Av 52 street");
        registerPage.selectState("Kerala");
        registerPage.markTermsAndCondition();
        registerPage.sendFormRegister();
        expect(await registerPage.getMessageAlert()).toEqual('Registered Successfully');
    });

});