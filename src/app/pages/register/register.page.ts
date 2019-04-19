import { Component, OnInit } from '@angular/core';
import {Profile} from '../../Classes/profile';
import {Router} from '@angular/router';

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
    this.router.navigateByUrl('tabs');
  }
  ngOnInit() {
  }

}
