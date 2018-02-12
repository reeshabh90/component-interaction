import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../student';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() student: Student;
  @Input() branch: string;
  @Output() resultMarked = new EventEmitter<boolean>();
  marked = false;
  constructor() { }

  ngOnInit() {
  }
  onClick(result: boolean) {
    this.resultMarked.emit(result);
    this.marked = true;
  }

}
