package com.spring.angular.demospringangular.sevice;

import com.spring.angular.demospringangular.entity.EmployeeEntity;
import com.spring.angular.demospringangular.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.spring.angular.demospringangular.repository.EmployeeRepository;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    /**
     *
     * Add new for employee
     * @param emp
     * @return Employee entity
     */
    public EmployeeEntity addEmployee(EmployeeEntity emp){
        emp.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepository.save(emp);
    }

    /**
     * Fing all the employee
     * @return List<Employee>
     */
    public List<EmployeeEntity> findAllEmployee(){
        return employeeRepository.findAll();
    }

    /**
     * Find the employee by the employee id with id parameter
     * @param id
     * @return
     */
    public EmployeeEntity findEmployeeById(Long id){
        return employeeRepository.findById(id).orElseThrow(()->new UserNotFoundException("User id " + id + " not found"));
    }

    /**
     * Update for the employee
     * @param emp
     * @return
     */
    public EmployeeEntity updateEmployee(EmployeeEntity emp){
        return employeeRepository.save(emp);
    }

    /**
     * Delete for the employee by the id where id parameter
     * @param id
     */
    public void deleteEmployee(Long id){
        employeeRepository.deleteById(id);
    }
}
