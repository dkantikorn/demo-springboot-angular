package com.spring.angular.demospringangular.controller;

import com.spring.angular.demospringangular.entity.EmployeeEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.spring.angular.demospringangular.sevice.EmployeeService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/employee")
//@CrossOrigin()
//@CrossOrigin(origins = "http://localhost:8080")
public class EmployeeResourceController {

    private final EmployeeService employeeService;

    public EmployeeResourceController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    /**
     * Listing for all the employee
     *
     * @return
     */
    @GetMapping("/all")
    public ResponseEntity<List<EmployeeEntity>> findAllEmployee() {
        List<EmployeeEntity> employees = employeeService.findAllEmployee();
        //return ResponseEntity.ok(employees);
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    /**
     * Getting for the employee by the employee id
     *
     * @param id
     * @return
     */
    @GetMapping("/find/{id}")
    public ResponseEntity<EmployeeEntity> findEmployeeById(@PathVariable("id") Long id) {
        EmployeeEntity emp = employeeService.findEmployeeById(id);
        return new ResponseEntity<>(emp, HttpStatus.OK);
    }

    /**
     * Adding for the employee
     *
     * @param emp
     * @return
     */
    @PostMapping("/add")
    public ResponseEntity<EmployeeEntity> addEmployee(@RequestBody EmployeeEntity emp) {
        EmployeeEntity newEmp = employeeService.addEmployee(emp);
        return new ResponseEntity<>(newEmp, HttpStatus.CREATED);
    }

    /**
     * Update for the employee
     *
     * @param emp
     * @return
     */
    @PutMapping("/update")
    public ResponseEntity<EmployeeEntity> updateEmployee(@RequestBody EmployeeEntity emp) {
        EmployeeEntity updateEmp = employeeService.updateEmployee(emp);
        return new ResponseEntity<>(updateEmp, HttpStatus.OK);
    }

    /**
     * Delete for the employee
     *
     * @param id
     * @return
     */
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
