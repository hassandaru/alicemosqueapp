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
  constructor(private router: Router) {}
  seePrivacyPolicy() {
    this.router.navigate(['privacy']);
  }
  profilePage() {

    this.router.navigateByUrl('tabs/tabprayer');
  }
  ngOnInit() {
  }

}
