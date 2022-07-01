import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {


  message = 'Wassap mga bubuy !';
  color = 'purple';
  isBig = true;
  isDisplayed = true;
  alertMessage = '';
  content = '';
  switchMessage = 'Rider Change';
  newColor = '';

  name = '';
  gender ='';
  title = '';
  tenure = 0;
  salary = 0;
  display = true;
  edited = false;
  employees:any = [];

  constructor(private employeeService:EmployeeService) { 

  }

  ngOnInit(): void {
    console.log(this.employees);
    this.getEmployees();
  }

  ngOnChanges(): void {
    console.log('Employee Updated');
  }

  ngOnDestroy(): void {
    console.log('Employee Deleted');
  }

  switchSize(){
    this.isBig = !this.isBig;
  }

  switchDisplay(){
    this.isDisplayed = !this.isDisplayed;
  }

  displayAlert(message: String){
    alert(message);
  }

  switchClass(){
    this.switchMessage = 'Henshin';
  }

  clearEmployeeInputs() {
    this.name = '';
    this.title = '';
    this.gender = '';
    this.tenure = 0;
    this.salary = 0;
    this.display = true;
    this.edited = false;
  }

  getEmployees() {
    this.employees = this.employeeService.getEmployees();
  }

  addEmployee(name: string, title: string, gender: string, tenure: number, salary: number, display: boolean, edited: boolean){
    const employee = {
      name: name,
      title: title,
      gender: gender,
      tenure: tenure,
      salary: salary,
      display: display,
      edited: edited
    };

    this.employeeService.addEmployee(employee);
    this.clearEmployeeInputs();

    console.log(this.employees)

  }

  updateEmployee(index: number, name: string, title: string, gender: string, tenure: number, salary: number, display: boolean, edited: boolean) {
    const employee = {
      name: name,
      gender: gender,
      title: title,
      tenure: tenure,
      salary: salary,
      display: display,
      edited: true
    };

    this.employeeService.updateEmployee(index, employee);
    this.clearEmployeeInputs();
  }

  deleteEmployee(index: number) {
    // this.employees.splice(index,1);
    this.employeeService.deleteEmployee(index);
    this.displayAlert("Employee deleted");
  }


}
