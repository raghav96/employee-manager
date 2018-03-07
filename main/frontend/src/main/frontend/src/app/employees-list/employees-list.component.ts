import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

import { AppResponseService } from '../app-response.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private employeeService: AppResponseService) {}

  ngOnInit() {
    this.employeeService
      .getEmployees()
      .subscribe(
         p => this.employees = p,
         e => this.errorMessage = e,
         () => this.isLoading = false);
  }

}
