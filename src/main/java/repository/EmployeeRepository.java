package repository;

import entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Entity;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
