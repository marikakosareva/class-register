import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {
  @Input() studentName = '';
  @Input() studentIndex = 0;
  @Output() studentToDelete = new EventEmitter<{index: number}>();

  constructor() { }

  ngOnInit() {
  }

}
