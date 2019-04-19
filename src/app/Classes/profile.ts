export class Profile {
    firstName: string = '';
    lastName: string = '';
    mobile: string = '';
    email: string = '';
    privacyPolicy = true;
    newssubscribe: boolean;
    constructor(firstName = '', lastName = '', mobile = '', email = '', privacyPolicy = true, newssubscribe = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.email = email;
        this.privacyPolicy = privacyPolicy;
        this.newssubscribe = newssubscribe;
    }
}
