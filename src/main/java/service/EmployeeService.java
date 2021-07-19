package service;

import entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.EmployeeRepository;

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
    public Employee addEmployee(Employee emp){
        emp.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepository.save(emp);
    }
}
