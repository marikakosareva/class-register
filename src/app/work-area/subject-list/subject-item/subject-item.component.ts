import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-subject-item',
  templateUrl: './subject-item.component.html',
  styleUrls: ['./subject-item.component.css']
})
export class SubjectItemComponent implements OnInit {
  @Input() subjectName = '';
  @Input() subjectIndex = 0;
  @Output() subjectToDelete = new EventEmitter<{index: number}>();

  constructor() { }

  ngOnInit() {
  }

  deleteSubject() {
    this.subjectToDelete.emit({index: this.subjectIndex});
  }

}
