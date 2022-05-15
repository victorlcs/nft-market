import { Component, OnInit } from '@angular/core';
import { socialMedia } from '../../data-access/footer-data';
import { SocialMedia } from '../../data-access/footer-model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailStr:string;
  emailTxt:string;
  socialMediaItem:SocialMedia[];
  constructor() { }

  ngOnInit(): void {
    this.emailStr = "Your email address";
    this.socialMediaItem = socialMedia;
  }

  onSignUp(){
        
  }
}
