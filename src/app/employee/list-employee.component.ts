import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employees.model'
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees:Employee[]=[
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      contactPreferences: 'Email',
 
      email: 'mark@pragimtech.com',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/ram.jpg'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreferences: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/geet.jpg'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      contactPreferences: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/ajay.png'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
