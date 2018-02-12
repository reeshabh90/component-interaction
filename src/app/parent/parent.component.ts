import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../util-service/global-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  pass = 0; fail = 0;
  studentList: any;
  branch = 'Computer Science';
  constructor(private globalDataService: GlobalDataService) { }

  ngOnInit() {
    this.studentList = this.globalDataService.fetchStudentList();
  }
  onResultMarked(result: boolean) {
    result ? this.pass++ : this.fail++;
  }

}
