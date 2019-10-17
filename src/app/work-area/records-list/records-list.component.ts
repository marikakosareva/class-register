import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';
import {Student} from '../../student';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.css']
})
export class RecordsListComponent implements OnInit {
  selectedStudent: Student;
  subjects: string[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subjects = this.dataService.subjects;
    this.dataService.studentSelected.subscribe(
      (student: Student) => {
        this.selectedStudent = student;
      }
    );
  }

}
