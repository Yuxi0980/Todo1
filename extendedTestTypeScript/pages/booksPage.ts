import { element, by, ElementFinder, ElementArrayFinder } from 'protractor';
import { GlobalActivities } from '../pages/GlobalActivities';

let globalActivities = new GlobalActivities();

export class BooksPage {
    
    public async addBooks(quantity: number, book: string) {
        await this.setBook(await this.findBookInTheTable(book), quantity);
    }

    private async findBookInTheTable(book: string): Promise<number>{
        let tableData: HTMLElement = await document.getElementById("listing");
        let numberOfRows: number = await tableData.childNodes.length;
        let position: number;
        for (let row: number = 2; row <= numberOfRows; row++) {
            let cellValue: string = await element(by.css("#listing > tbody > tr:nth-child(" + row + ") > td:nth-child(1)")).getText();
            cellValue = await cellValue.trim();
            if (book == cellValue) {
                position = row;
                row = numberOfRows;
            }
        }
        return position;
    }

    private async setBook(position: number, quantity: number) {
        element(by.css("#listing > tbody > tr: nth - child(" + position + ") > td: nth - child(4) > input[type = 'text']")).sendKeys(quantity);
    }

    public async getGrandTotal(): Promise<string> {
        return await element(by.id("total")).getText();
    }

    public calculateGrandTotal(): any {
        //return await getTotalCostFromShoppingCart();
    }

}