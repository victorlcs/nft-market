import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { UserActionEnum } from '../../data-access/profile-enum';
import { ProfileBase } from '../base/profile-base';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends ProfileBase implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>;
  form:FormGroup;
  constructor() {
    super();
   }
  ngOnInit(): void {
    this.submitEvent$.pipe(takeUntil(this.onDestroy$)).subscribe({next: (result) => {
      this.onSubmit();
    }});
    this.form = new FormGroup({
      userAction : new FormControl<UserActionEnum>(UserActionEnum.LOGIN,{validators:Validators.required}),
      userName : new FormControl<string | null>(null,{validators:Validators.required}),
      passWord : new FormControl<string | null>(null,{validators:Validators.required})
    });
  }
  onSubmit(){
    if (this.form.valid) {
      console.log('Login form is valid');
    }
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
