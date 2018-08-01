import { GlobalActivities } from '../pages/globalActivities';
import { LoginPage } from '../pages/loginPage';

let globalActivities = new GlobalActivities();
let loginPage = new LoginPage();

describe('Login on the website', async() => {

    beforeAll( async() => {
        globalActivities.navigateToThePage("http://sahitest.com/demo/training/");
    });

    it('Send form with none information', async() => {
        loginPage.sendFormLogin();
        expect(await loginPage.getMessageError()).toEqual('Invalid username or password');
    });

    it('Enter wrong username and password', async() => {
        loginPage.setUsername("test1");
        loginPage.setPassword("secret1");
        loginPage.sendFormLogin();
        expect(await loginPage.getMessageError()).toEqual('Invalid username or password');
    });

    it('Enter right username and password', async() => {
        loginPage.clearFormLogin();
        loginPage.setUsername("test");
        loginPage.setPassword("secret");
        loginPage.sendFormLogin();
        expect(await globalActivities.getTitlePage()).toEqual('Books');
    });

});