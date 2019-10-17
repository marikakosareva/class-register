import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-work-area',
  templateUrl: './work-area.component.html',
  styleUrls: ['./work-area.component.css']
})
export class WorkAreaComponent implements OnInit {
  @Input() openedBlock: string;
  collapsed = true;

  constructor() { }

  ngOnInit() {
  }
}
