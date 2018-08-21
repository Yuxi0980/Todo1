import { element, by, ElementArrayFinder } from '../../../../node_modules/protractor';

export class CalculatePrice {

    rows: ElementArrayFinder = element.all(by.css("#added > tbody > tr"));

    public async GrandTotal(): Promise<string> {
        let totalSum: number = 0;
        let numberOfRows: number = await this.rows.count();
        for (let row: number = 2; row <= numberOfRows; row++) {
            let cellValue: string = await element(by.css("#added > tbody > tr:nth-child(" + row + ") > td:nth-child(4)")).getText();
            let newCellValue: string = cellValue.replace("Rs.", "");
            totalSum = totalSum + parseInt(newCellValue);
        }
        return totalSum.toString();
    }

}