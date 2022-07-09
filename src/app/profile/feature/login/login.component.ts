import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserActionEnum } from '../../data-access/profile-enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../shared/login-signup.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userAction : new FormControl<UserActionEnum>(UserActionEnum.LOGIN,{validators:Validators.required}),
      userName : new FormControl<string | null>(null,{validators:Validators.required}),
      passWord : new FormControl<string | null>(null,{validators:Validators.required})
    });
  }

  onSubmit(){
    //this.route.navigate(['calculator']);
    //this.mySub.next("Hello World!");
  }
}
