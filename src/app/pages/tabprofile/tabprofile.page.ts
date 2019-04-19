import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Profile} from '../../Classes/profile';

@Component({
    selector: 'app-tabprofile',
    templateUrl: './tabprofile.page.html',
    styleUrls: ['./tabprofile.page.scss'],
})
export class TabprofilePage implements OnInit {

    myprofile: Profile;

    constructor(private route: ActivatedRoute) {
        this.myprofile = new Profile();
    }

    ngOnInit() {
        this.route.queryParams.subscribe(
            params => {
                this.myprofile.firstName = params['firstName'];
                this.myprofile.lastName = params['lastName'];
                this.myprofile.mobile = params['mobile'];
                this.myprofile.email = params['email'];
                this.myprofile.privacyPolicy = params['privacyPolicy'] === '1';
                this.myprofile.newssubscribe = params['newssubscribe'] === '1';
            });
    }

}
