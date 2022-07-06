import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-auth-page',
  templateUrl: './profile-auth-page.component.html',
  styleUrls: ['./profile-auth-page.component.scss']
})
export class ProfileAuthPageComponent implements OnInit {
  buttonTxt:string;
  constructor() { }

  ngOnInit(): void {
  }

}
