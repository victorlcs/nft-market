import { AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, Type, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile-auth-page',
  templateUrl: './profile-auth-page.component.html',
  styleUrls: ['./profile-auth-page.component.scss']
})
export class ProfileAuthPageComponent implements OnInit, AfterViewInit {
  @Input() buttonTxt:string;
  @Output() onButtonClickEmitter = new EventEmitter<boolean>();
  @ViewChild('childForms', {static:true}) childForms: LoginComponent;
  @ContentChild('testContent') testContent: any;
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.testContent);
  }

  ngOnInit(): void {
    
  }
  onProceed() {
    this.onButtonClickEmitter.emit(true);
    console.log(this.testContent);
  }
}
