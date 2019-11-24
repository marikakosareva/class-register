import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private router: Router) { }


  role: string

   admins = {
      'admin@gmail.com': '123456'
   };

   teachers = {
      'teacher@gmail.com': '654321'
   };

  students = {
    'student@gmail.com': '000000'
  };

  do(user, isLoginMode) {
      if (isLoginMode) { this.login(user); } else {this.signIn(user); }
  }

  signIn(user) {
    if (user.role) {
      if (user.role === 'student') {
        if (!this.students[user.email] && !this.teachers[user.email] && !this.admins[user.email]) {
          this.students[user.email] = user.password;
          alert('Student is added');
        } else {
          alert('Student with such email already exists');
        }
      } else if (user.role === 'teacher') {
        if (!this.students[user.email] && !this.teachers[user.email] && !this.admins[user.email]) {
          this.teachers[user.email] = user.password;
          alert('Teacher is added');
        } else {
          alert('Teacher with such email already exists');
        }
      }
    }
  }

  login(user) {
      const usersPassword = this.students[user.email] || this.teachers[user.email] || this.admins[user.email];
      if (!usersPassword) {
          alert("You are not registered yet");
          return;
      }
      if (usersPassword === user.password) {
          alert("You are loged in");
          if (this.students[user.email]) this.role = 'student'
          else if (this.teachers[user.email]) this.role = 'teacher'
          else if (this.admins[user.email]) this.role = 'admin';
          this.router.navigate(['/students']);
      } else {
          alert("Your password is incorrect");
      }
  }
}
