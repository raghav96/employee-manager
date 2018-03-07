import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { Employee } from '../employee';
import { AppResponseService } from '../app-response.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})

export class EmployeesComponent implements OnInit, OnDestroy {

  employee: Employee;
  sub:any;

  constructor(private route: ActivatedRoute,
              private employeeService: AppResponseService,
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log('getting person with id: ', id);
      this.employeeService
        .get(id)
        .subscribe(p => this.employee = p);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoEmployeeList(){
    let link = ['/employees'];
    this.router.navigate(link);
  }

  saveEmployeeDetails(){
      this.employeeService
          .save(this.employee)
          .subscribe(r => console.log(`saved!!! ${JSON.stringify(this.employee)}`));
  }

}
