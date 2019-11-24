import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Student} from '../../student';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  newStudentName = '';

  constructor(private dataService: DataService, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.students = this.dataService.students;
  }

  addNewStudent() {
    this.dataService.addStudent(this.newStudentName);
    this.newStudentName = '';
  }

  deleteStudent(index) {
    this.dataService.deleteStudent(index);
  }

  selectStudent(student, index) {
    this.router.navigate(['/students', index]);
    this.dataService.studentSelected.emit(student);
  }
}
