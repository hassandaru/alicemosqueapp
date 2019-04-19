import {Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Profile} from '../../Classes/profile';

@Component({
  selector: 'app-tabprofile',
  templateUrl: './tabprofile.page.html',
  styleUrls: ['./tabprofile.page.scss'],
})
export class TabprofilePage implements OnInit {
    constructor() { }

    ngOnInit() {
    }
  // myprofile: Profile;
  // constructor(private route: ActivatedRoute) { }
  //
  // ngOnInit() {
  //   // this.route.params.subscribe(
  //   //     params => {
  //   //       this.myprofile.firstName = params['firstName'],
  //   //       this.myprofile.lastName = params['lastName'],
  //   //       this.myprofile.mobile = params['mobile'],
  //   //       this.myprofile.email = params['email'],
  //   //       this.myprofile.newssubscribe = params['newssubscribe'],
  //   //       this.myprofile.privacyPolicy = params['privacyPolicy']
  //   //     });
  //   this.myprofile.firstName = this.route.snapshot.paramMap.get('firstName');
  //   this.myprofile.lastName = this.route.snapshot.paramMap.get('lastName');
  //   this.myprofile.mobile = this.route.snapshot.paramMap.get('mobile');
  //   this.myprofile.email = this.route.snapshot.paramMap.get('email');
  //   this.myprofile.newssubscribe = this.route.snapshot.paramMap.get('newssubscribe') === '1';
  //   this.myprofile.privacyPolicy = this.route.snapshot.paramMap.get('privacyPolicy') === '1';
  // }

}
