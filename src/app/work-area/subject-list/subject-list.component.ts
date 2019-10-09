import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjects: string[] = ['math', 'history', 'art'];
  @ViewChild('newSubjectInput', {static: true}) nsInput;

  constructor() { }

  ngOnInit() {
  }

  // Usage of local References
  addNewSubject(newSubjectInput) {
    this.subjects.push(newSubjectInput.value);
  // Usage of @ViewChild() decorator
    this.nsInput.nativeElement.value = '';
  }

  deleteSubject(event: {index: number}) {
    this.subjects.splice(event.index, 1);
  }
}
