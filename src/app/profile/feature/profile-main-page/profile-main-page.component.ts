import { Component, OnInit } from '@angular/core';
import { UserAction } from '../../data-access/login-enum';

@Component({
  selector: 'app-profile-main-page',
  templateUrl: './profile-main-page.component.html',
  styleUrls: ['./profile-main-page.component.scss']
})
export class ProfileMainPageComponent implements OnInit {
  userActionEnum = UserAction;
  userAction: UserAction = UserAction.LOGIN;
  constructor() { }

  ngOnInit(): void {
  }

}
