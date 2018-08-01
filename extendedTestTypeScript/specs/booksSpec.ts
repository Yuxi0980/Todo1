import { GlobalActivities } from '../pages/globalActivities';
import { LoginPage } from '../pages/loginPage';
import { BooksPage } from '../pages/booksPage';

let globalActivities = new GlobalActivities();
let loginPage = new LoginPage();
let booksPage = new BooksPage();

describe('Add books in the shopping cart', async() => {

    beforeAll( async() => {
        globalActivities.navigateToThePage("http://sahitest.com/demo/training/");
        loginPage.rightLogin();
    });

    it('Add diferent books', async() => {
        await booksPage.addBooks(2, "Core Java");
        await booksPage.addBooks(5, "Ruby for Rails");
        await booksPage.addBooks(2, "Python Cookbook");
        //expect(await booksPage.getGrandTotal()).toEqual(booksPage.calculateGrandTotal());
    });

});