import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import {DataService} from '../../data.service';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;

  constructor(private authService: AuthService){ }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    this.authService.do(form.form.value, this.isLoginMode);
    form.reset();
  }

}
