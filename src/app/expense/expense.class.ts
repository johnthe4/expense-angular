import { Employee } from "../employee/employee.class";
import { ExpenseLines } from "../expenselines/expenselines.class";

export class Expense {
    id: number = 0;
    desc: string = "";
    status: string = "new";
    total: number = 0;

    employeeId: number = 0;
    employee!: Employee;

    expenseLines!: ExpenseLines[];
}