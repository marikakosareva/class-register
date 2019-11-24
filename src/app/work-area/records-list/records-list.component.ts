import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Student} from '../../student';
import {ActivatedRoute, Params} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css']
})
export class RecordsListComponent implements OnInit {
  selectedStudent: Student;
  subjects: string[];
  constructor(private dataService: DataService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.subjects = this.dataService.subjects;
    this.dataService.studentSelected.subscribe(
      (student: Student) => {
        this.selectedStudent = student;
      }
    );
    this.selectedStudent = this.dataService.students[this.route.snapshot.params['index']];
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedStudent = this.dataService.students[this.route.snapshot.params['index']];
      }
    );
  }

}
