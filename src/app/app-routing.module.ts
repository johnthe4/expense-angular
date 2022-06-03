import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { Employee } from './employee/employee.class';
import { ExpenseCreateComponent } from './expense/expense-create/expense-create.component';
import { ExpenseDetailComponent } from './expense/expense-detail/expense-detail.component';
import { ExpenseEditComponent } from './expense/expense-edit/expense-edit.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemListComponent } from './item/item-list/item-list.component';

const routes: Routes = [
    { path: "", redirectTo:"empl/login", pathMatch: "full" },
    { path: "empl/list", component: EmployeeListComponent },
    { path: "empl/detail/:id", component: EmployeeDetailComponent },
    { path: "empl/create", component: EmployeeCreateComponent },
    { path: "empl/edit/:id", component: EmployeeEditComponent },
    { path: "empl/login", component: EmployeeLoginComponent },
    { path: "exp/list", component: ExpenseListComponent },
    { path: "exp/detail/:id", component: ExpenseDetailComponent },
    { path: "exp/create", component: ExpenseCreateComponent },
    { path: "exp/edit/:id", component: ExpenseEditComponent },
    { path: "item/list", component: ItemListComponent },
    { path: "item/detail/:id", component: ItemDetailComponent },
    { path: "item/create", component: ItemCreateComponent },
    { path: "item/edit/:id", component: ItemEditComponent },
    { path: "**", component: EmployeeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }