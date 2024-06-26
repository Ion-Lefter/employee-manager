package com.lefter.employeemanager.service;

import com.lefter.employeemanager.exception.UserNotFoundException;
import com.lefter.employeemanager.model.Employee;
import com.lefter.employeemanager.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository){
        this.employeeRepository=employeeRepository;
    }

    public Employee addEmployee(Employee employee){
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepository.save(employee);
    }

    public List<Employee> findAllEmployees(){
        return employeeRepository.findAll();
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public Employee findEmployeeByID(Long id){
        return employeeRepository.findEmployeeById(id).orElseThrow(() -> new UserNotFoundException("User by id: " + id +" not found!"));
    }
    @Transactional
    public void deleteEmployee(Long id){
        employeeRepository.deleteEmployeeById(id);
    }
}
