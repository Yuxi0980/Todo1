import { element, by, ElementArrayFinder } from '../../../../node_modules/protractor';

export class FindBook {

    rows: ElementArrayFinder = element.all(by.css("#listing > tbody > tr"));

    public async InTheTable(book: string): Promise<number> {
        let position: number;
        let numberOfRows: number = await this.rows.count();
        for (let row: number = 2; row <= numberOfRows; row++) {
            let cellValue: string = await element(by.css("#listing > tbody > tr:nth-child(" + row + ") > td:nth-child(1)")).getText();
            if (book == cellValue) {
                position = row;
                row = numberOfRows;
            }
        }
        return position;
    }

}