import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeSevice } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: any;
// onOpenModal(arg0: null,arg1: string) {
// throw new Error('Method not implemented.');
// }
searchEmployees(arg0: any) {
throw new Error('Method not implemented.');
}
  public employees!: Employee[];
  
  constructor(private employeeService: EmployeeSevice){}

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (response:Employee[]) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public onOpenModal(employee: Employee, mode: string): void{
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', 'addEmployeeModal');
    }
    // if (mode === 'edit') {
    //   this.getEmployee = employee;
    //   button.setAttribute('data-target', '#updateEmployeeModal');
    // }
    // if (mode === 'delete') {
    //   this.deleteEmployee = employee;
    //   button.setAttribute('data-target', '#deleteEmployeeModal');
    // }
    // container.appendChild(button);
    // button.click();
  }


}
