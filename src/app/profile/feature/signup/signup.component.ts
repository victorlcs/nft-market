import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../shared/login-signup.scss']
})
export class SignupComponent implements OnInit {
  singupForm = this.fb.group({
    firstName: [],
    lastName: [],
    email: [],
    password: [],
    confirmPassword: []
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
