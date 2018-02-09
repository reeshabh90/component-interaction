import { Injectable } from '@angular/core';
import {STUDENTS} from '../student';
@Injectable()
export class GlobalDataService {

  constructor() { }
  fetchStudentList() {
    return STUDENTS;
  }

}
