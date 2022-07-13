import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ProfileBase } from '../base/profile-base';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends ProfileBase implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>;
  singupForm = this.fb.group({
    firstName: [],
    lastName: [],
    email: [],
    userName: [],
    password: [],
    confirmPassword: []
  });
  constructor(private fb: FormBuilder) { 
    super();
  }
  ngOnInit(): void {
    this.submitEvent$.pipe(takeUntil(this.onDestroy$)).subscribe({next: (result) => {
      this.onSubmit();
    }});
  }
  onSubmit(): void {
    if (this.singupForm.valid) {
      console.log('signup form is valid');
    }
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
