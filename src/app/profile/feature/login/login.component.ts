import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserAction } from '../../data-access/login-enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../shared/login-signup.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  buttonTxt: UserAction;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userAction : new FormControl<UserAction>(UserAction.LOGIN,{validators:Validators.required}),
      userName : new FormControl<string | null>(null,{validators:Validators.required}),
      passWord : new FormControl<string | null>(null,{validators:Validators.required})
    });
    this.buttonTxt = this.form.controls['userAction'].value;
    this.form.controls['userAction'].valueChanges.subscribe( x => {
      this.buttonTxt = x;
    })
  }

  onSubmit(){
    //this.route.navigate(['calculator']);
    //this.mySub.next("Hello World!");
  }
}
