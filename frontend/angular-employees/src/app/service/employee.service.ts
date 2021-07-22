import { environment } from './../../environments/environment';
import { Employee } from './../model/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API_URL = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public listAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.API_URL}/api/v1/employee/all`);
  }

  public getEmployeeById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.API_URL}/api/v1/employee/find/${employeeId}`);
  }

  public addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.API_URL}/api/v1/employee/add`, emp);
  }

  public updateEmployee(emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.API_URL}/api/v1/employee/update`, emp);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/api/v1/employee/delete/${employeeId}`);
  }
}
