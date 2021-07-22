import { EmployeeService } from './service/employee.service';
import { Employee } from './model/employee.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public employees: Employee[];
  public editEmployee: Employee;
  public deleteEmployee: Employee;

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


  /**
   *
   * Search for all key in customer
   * @param key string of searching keyword
   */
  public searchEmployee(key: string): void {
    const results: Employee[] = [];
    const searchKey: string = key.trim().toLowerCase();
    console.log(searchKey);
    for (const emp of this.employees) {
      if ((emp.name.toLowerCase().indexOf(searchKey) !== -1)
        || (emp.email.toLowerCase().indexOf(searchKey) !== -1)
        || (emp.phone.toLowerCase().indexOf(searchKey) !== -1)
        || (emp.jobTitle.toLowerCase().indexOf(searchKey) !== -1)
        || (emp.employeeCode.toLowerCase().indexOf(searchKey) !== -1)) {
        results.push(emp);
      }
    }

    this.employees = results;
    if (this.employees?.length === 0 || !searchKey) {
      this.listAllEmployees();
    }
  }

  /**
   * Add new employee
   * @param addForm
   */
  public onAddEmployee(addForm: NgForm): void {
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log('add successfully for the employee');
        document.getElementById('btnCloseAddEmployeeModal').click();
        this.listAllEmployees();
      },
      (error: HttpErrorResponse) => {
        this.processException(error);
      },
      () => {
        this.processComplete(this.onAddEmployee.name);
        addForm.reset();
      }
    );
  }

  /**
   * Edit for the employee
   * @param addForm
   */
  public onEditEmployee(employee: Employee): void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log('update successfully for the employee');
        document.getElementById('btnCloseUpdateEmployeeModal').click();
        this.listAllEmployees();
      },
      (error: HttpErrorResponse) => {
        this.processException(error);
      },
      () => {
        this.processComplete(this.onEditEmployee.name);
      }
    );
  }

  /**
 * Delete for the employee
 * @param addForm
 */
  public onDeleteEmployee(employeeId: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log('delete successfully for the employee');
        this.listAllEmployees();
      },
      (error: HttpErrorResponse) => {
        this.processException(error);
      },
      () => {
        this.processComplete(this.onDeleteEmployee.name);
      }
    );
  }

  /**
   *
   * Component to opent each modal dialog
   * @param employee as a employee data
   * @param mode as a string open modal mode posible value add|update|delete
   */
  public onOpenModal(employee: Employee, mode: string): void {
    console.log('== onOpenModal ==', mode);
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    switch (mode) {
      case 'add':
        button.setAttribute('data-target', '#addEmployeeModal');
        break;
      case 'update':
        this.editEmployee = employee;
        button.setAttribute('data-target', '#updateEmployeeModal');
        break;
      case 'delete':
        this.deleteEmployee = employee;
        button.setAttribute('data-target', '#deleteEmployeeModal');
        break;
      default:
        console.warn('Not match for each operation');
        break;
    }

    container.appendChild(button);
    button.click();
  }
}
