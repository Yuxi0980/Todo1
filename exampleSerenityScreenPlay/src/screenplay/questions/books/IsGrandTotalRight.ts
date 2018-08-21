import { Task, PerformsTasks, See, Text, Attribute } from 'serenity-js/lib/screenplay-protractor';
import { BooksPage } from '../../user_interface/BooksPage';
import { CalculatePrice } from '../../interactions/books/CalculatePrice';
import { equals } from '../../assertions';

let calculatePrice = new CalculatePrice();

export class IsGrandTotalRight implements Task {

    static reads() {
        return new IsGrandTotalRight();
    }

    async performAs(actor: PerformsTasks) {
        const granTotal: string = await calculatePrice.GrandTotal();
        return actor.attemptsTo(
            await See.if(Attribute.of(BooksPage.grandTotalField).called('value'), equals(granTotal))
        )
    }

    constructor() {}

}