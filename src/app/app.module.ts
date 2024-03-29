import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { MenuComponent } from './misc/menu/menu/menu.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { ExpenseDetailComponent } from './expense/expense-detail/expense-detail.component';
import { ExpenseCreateComponent } from './expense/expense-create/expense-create.component';
import { ExpenseEditComponent } from './expense/expense-edit/expense-edit.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ExpenselineListComponent } from './expense/expenseline-list/expenseline-list.component';
import { ExpenselinesCreateComponent } from './expenselines/expenselines-create/expenselines-create.component';
import { ExpenselinesEditComponent } from './expenselines/expenselines-edit/expenselines-edit.component';
import { BoolDisplayPipe } from './misc/bool-display.pipe';
import { EmployeeSearchPipe } from './misc/employee-search.pipe';
import { ReviewComponent } from './review/review.component';
import { SortPipe } from './misc/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeLoginComponent,
    MenuComponent,
    ExpenseListComponent,
    ExpenseDetailComponent,
    ExpenseCreateComponent,
    ExpenseEditComponent,
    ItemListComponent,
    ItemDetailComponent,
    ItemEditComponent,
    ItemCreateComponent,
    ExpenselineListComponent,
    ExpenselinesCreateComponent,
    ExpenselinesEditComponent,
    BoolDisplayPipe,
    EmployeeSearchPipe,
    ReviewComponent,
    SortPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
