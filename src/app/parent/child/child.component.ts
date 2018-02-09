import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../student';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() student: Student;
  @Input() branch: string;
  constructor() { }

  ngOnInit() {
  }

}
