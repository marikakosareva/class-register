import {Student} from './student';
import {EventEmitter} from '@angular/core';

export class DataService {

  studentSelected = new EventEmitter<Student>();

  subjects: string[] = ['math', 'history', 'art'];
  students: Student[] = [
    { name: 'Smith',
      records: {math: 2, history: 3, art: 3}
    }, {
      name: 'Williams',
      records: {math: 4, history: 5, art: 4}
    }, {
      name: 'Wilson',
      records: {math: 3, history: 3, art: 5}
    }];

  addSubject(name: string) {
    this.subjects.push(name);
  }

  deleteSubject(index) {
    this.subjects.splice(index, 1);
  }

  addStudent(name: string) {
    const newStudent = new Student();
    newStudent.name = name;
    newStudent.records = [];
    this.students.push(newStudent);
  }

  deleteStudent(index) {
    this.students.splice(index, 1);
  }

}
