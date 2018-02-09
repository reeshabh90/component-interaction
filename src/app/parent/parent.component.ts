import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../util-service/global-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  studentList: any;
  branch = 'Computer Science';
  constructor(private globalDataService: GlobalDataService) { }

  ngOnInit() {
    this.studentList = this.globalDataService.fetchStudentList();
  }

}
