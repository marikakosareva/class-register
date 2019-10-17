import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css'],
})
export class SubjectListComponent implements OnInit {
  subjects: string[] = [];
  @ViewChild('newSubjectInput', {static: true}) nsInput;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subjects = this.dataService.subjects;
  }

  // Usage of local References
  addNewSubject(newSubjectInput) {
    this.dataService.addSubject(newSubjectInput.value);
  // Usage of @ViewChild() decorator
    this.nsInput.nativeElement.value = '';
  }

  deleteSubject(event: {index: number}) {
    this.dataService.deleteSubject(event.index);
  }
}
