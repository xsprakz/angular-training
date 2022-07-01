import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:any = [{
    'index': 0,
    'name': 'Eroll',
    'title' : 'Software Engineer',
    'gender': 'M',
    'tenure': 0,
    'salary': 10000,
    'display': true,
    'edited': false
  }];

  constructor() { }

  getEmployees(){
    return this.employees;
  }

  addEmployee(employee:any){
    this.employees.push(employee);
  }

  deleteEmployee(index:number){
    this.employees.splice(index,1);
  }

  updateEmployee(index:number, employee:any) {
    this.employees[index] = employee;
  }

}
