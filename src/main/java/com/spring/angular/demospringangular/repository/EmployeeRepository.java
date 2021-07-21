package com.spring.angular.demospringangular.repository;

import com.spring.angular.demospringangular.entity.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Long> {

}
