import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  public employees=[
    {"id":1,"name":"Alaman","age":23},
    {"id":2,"name":"Xavier","age":22},
    {"id":3,"name":"Karina","age":21},
    {"id":4,"name":"Emerson","age":23}

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
