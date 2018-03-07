import { Injectable } from '@angular/core';
import { Http, Response, ResponseOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Employee } from './employee';

@Injectable()
export class AppResponseService {
  constructor(private http: Http) { }


  getEmployees() : Observable<any> {
      let data: Observable<any> = this.http.get('/employees', { headers: this.getHeaders()})
        .map(mapEmployees)
        .catch((error:any) => Observable.throw(error.message || 'Server error'))

      return data;
  }

  get(id: number): Observable<Employee> {
    let employee = this.http
      .get(`/employees/${id}`, {headers: this.getHeaders()})
      .map(mapEmployee)
      .catch((error:any) => Observable.throw(error.message || 'Error retrieving employee'));
      return employee;
  }

  save(employee: Employee) : Observable<Response>{
    return this.http.put(`/employees/${employee.id}`,
            JSON.stringify(employee),
            {headers: this.getHeaders()});
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapEmployees(response:Response): Employee[]{
    return response.json().map(toEmployee)
}

function toEmployee(r:any): Employee{
    let Employee = <Employee>({
      id: r.id,
      name: r.name,
      phone_number: Number.parseInt(r.phone_number),
      supervisors : r.supervisors,
    });
    console.log('Parsed Employee:', Employee);
    return Employee;
}

function mapEmployee(response:Response): Employee{
    return toEmployee(response.json());
}
