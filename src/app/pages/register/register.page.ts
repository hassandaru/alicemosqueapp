import { Component, OnInit } from '@angular/core';

import {NavigationExtras, Router} from '@angular/router';
import {Profile} from '../../Classes/profile';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  myProfile: Profile;
  firstName: string;
  constructor(private router: Router) {
      this.myProfile = new Profile();
  }
  seePrivacyPolicy() {
    this.router.navigate(['privacy']);
  }
  profilePage() {
      var privacyVal = '0';
      var newsSubscribeVal = '0';
      if(this.myProfile.privacyPolicy) {
          privacyVal = '1';
      }
      if(this.myProfile.newssubscribe) {
          newsSubscribeVal = '1';
      }
      let navParams: NavigationExtras = {
          queryParams: {
              "firstName": this.myProfile.firstName,
              "lastName": this.myProfile.lastName,
              "mobile": this.myProfile.mobile,
              "email": this.myProfile.email,
              "privacyPolicy": privacyVal,
              "newssubscribe": newsSubscribeVal
          }
      };
      // console.log(navParams.queryParams.valueOf('firstName'));
    this.router.navigate(['tabs/tabprofile'], navParams);
  }
  ngOnInit() {
  }

}
