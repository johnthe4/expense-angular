import { Expense } from "../expense/expense.class";
import { Item } from "../item/item.class";

export class ExpenseLines {
    id: number = 0;
    quantity: number = 0;
    expenseId: number = 0;
    itemId: number = 0;

    expense!: Expense;
    item!: Item;
}