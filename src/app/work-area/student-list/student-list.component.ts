import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: string[] = ['Smith', 'Williams', 'Wilson'];
  newStudentName = '';

  constructor() { }

  ngOnInit() {
  }

  addNewStudent() {
    this.students.push(this.newStudentName);
    this.newStudentName = '';
  }

  deleteStudent(index) {
    this.students.splice(index, 1);
  }

}
