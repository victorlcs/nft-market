import {Component, ContentChild, ElementRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { UserActionEnum } from '../../data-access/profile-enum';
import { ProfileUserAction } from '../../data-access/profile.model';
import { DynamicTemplatingDirective } from '../../utils/dynamic-templating.directive';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-profile-main-page',
  templateUrl: './profile-main-page.component.html',
  styleUrls: ['./profile-main-page.component.scss']
})
export class ProfileMainPageComponent implements OnInit {
  userActionEnum = UserActionEnum;
  userActionList:ProfileUserAction[]  = [
    {component:LoginComponent,action:UserActionEnum.LOGIN},
    {component:SignupComponent,action:UserActionEnum.SIGNUP}
  ];
  userActionToggleButton: UserActionEnum = UserActionEnum.LOGIN;
  @ViewChild(DynamicTemplatingDirective, {static: true}) dynaTemplate!: DynamicTemplatingDirective;
  @ContentChild(LoginComponent) dynaContent!: LoginComponent;
  constructor() { 
  }

  ngOnInit(): void {
    this.loadComponent(LoginComponent);
  }
  onButtonToggleChange(prop:MatButtonToggleChange){
    let component = this.userActionList.find(x => x.action === prop.value)?.component
    this.loadComponent(component!);
  }
  loadComponent(component: Type<any>) { //Dynamic Component Loader
    const viewContainerRef = this.dynaTemplate.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(component);
  }
  onProceedBtnClick() {
    console.log(this.dynaContent);
  }
}
