import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  private mySub = new Subject<string>();
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      userName : new FormControl(null,{validators:Validators.required}),
      passWord : new FormControl(null,{validators:Validators.required})
    });

    this.mySub.subscribe(x => alert(x));
  }

  onSubmit(){
    //this.route.navigate(['calculator']);
    //this.mySub.next("Hello World!");
  }

  onEmit() {
    this.mySub.next("Hello World!");
  }

  getSubListener(){
    return this.mySub.asObservable();
  }
}
