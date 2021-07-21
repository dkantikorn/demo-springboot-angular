package com.spring.angular.demospringangular.entity;

import lombok.Data;
import lombok.Getter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Data
@ToString
@Entity
@Table(name = "employees")
public class EmployeeEntity implements Serializable {

    @Id
    @SequenceGenerator(
            name = "employees_sequence",
            sequenceName = "employees_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.AUTO,
            generator = "employees_sequence"
    )
    @Column(nullable = false, updatable = false)
    private Long id;

    @NotBlank(message = "Employee name is mandatory")
    @Size(min = 2, max = 150, message = "Please provide employee name length between 2 - 150")
    @Column(nullable = false, length = 150)
    private String name;

    @NotBlank(message = "Email is a mandatory")
    @Email(message = "Please provide a valid email")
    @Size(min = 10, max = 100, message = "Please provide email value length between 10 - 100")
    private String email;
    private String jobTitle;
    private String phone;
    private String imageUrl;

    @Column(nullable = false, updatable = false)
    private String employeeCode;
}
