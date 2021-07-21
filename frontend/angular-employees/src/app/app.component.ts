import { EmployeeService } from './service/employee.service';
import { Employee } from './model/employee.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees: Employee[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listAllEmployees();
  }

  public listAllEmployees(): void {
    this.employeeService.listAllEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        this.processException(error);
      },
      () => {
        this.processComplete(this.listAllEmployees.name);
      }
    );
  }

  private processException(error: HttpErrorResponse) {
    console.error(error);
    alert(error.message);
  }

  private processComplete(caller: string = 'Function') {
    console.log(`${caller} has completed`);
  }

  public onOpenModal(employee: Employee, mode: string): void {
    console.log('== onOpenModal ==' , mode);
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    switch (mode) {
      case 'add':
        button.setAttribute('data-target','#addEmployeeModal');
        break;
      case 'update':
        button.setAttribute('data-target','#updateEmployeeModal');
        break;
      case 'delete':
        //do delete for the employee
        button.setAttribute('data-target','#deleteEmployeeModal');
        break;
      default:
        console.warn('Not match for each operation');
        break;
    }

    container.appendChild(button);
    button.click();
  }
}
