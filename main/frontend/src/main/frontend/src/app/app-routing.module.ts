import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesComponent } from './employees/employees.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/employees' to the people list component
  {
    path: 'employees',
    component: EmployeesListComponent,
  },
  // map '/employees/:id' to employee details component
  {
    path: 'employees/:id',
    component: EmployeesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
