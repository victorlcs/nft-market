import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { IsMatchErrorStateMatcher } from '../../utils/ismatch-state-matcher';
import { isBothMatched } from '../../utils/profile-custom-validators';
import { ProfileBase } from '../base/profile-base';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent extends ProfileBase implements OnInit, OnDestroy {
  private onDestroy$ = new Subject<void>;
  isMatchErrorStateMatcher = new IsMatchErrorStateMatcher();
  formGroupOptions: AbstractControlOptions = {
    validators: isBothMatched(['email','password'],['confirmEmail','confirmPassword']),
  }
  signupForm = this.fb.group({
    firstName: ['',[Validators.required]],
    lastName: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    confirmEmail: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required]],
    confirmPassword: ['',[Validators.required]]
  },this.formGroupOptions);
  constructor(private fb: FormBuilder) { 
    super();
  }
  ngOnInit(): void {
    this.submitEvent$.pipe(takeUntil(this.onDestroy$)).subscribe({next: (result) => {
      this.onSubmit();
    }});
  }
  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('signup form is valid');
    } else {
      console.log((this.signupForm));
    }
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
