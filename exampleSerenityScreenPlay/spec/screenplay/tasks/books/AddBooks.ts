import { Task, Click, Enter, PerformsTasks, Clear } from 'serenity-js/lib/screenplay-protractor';
import { BooksPage } from '../../user_interface/BooksPage';
import { FindBook } from '../../interactions/books/FindBook';

let findBook = new FindBook();

export class AddBooks implements Task {

    static toShoppingCart(quantity: number, book: string) {
        return new AddBooks(quantity, book);
    }

    async performAs(actor: PerformsTasks) {
        const position: number = await findBook.InTheTable(this.book);
        return actor.attemptsTo(
            await Clear.theValueOf(BooksPage.quantityTextField(position)),
            await Enter.theValue(this.quantity.toString()).into(BooksPage.quantityTextField(position)),
            await Click.on(BooksPage.addButton)
        )
    }

    constructor(private quantity: number, private book: string) {}

}