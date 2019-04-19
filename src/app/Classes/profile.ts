export class Profile {
    firstName;
    lastName;
    mobile;
    email;
    privacyPolicy;
    newssubscribe;

    constructor(firstName = '', lastName = '', mobile = '', email = '', privacyPolicy = true, newssubscribe = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.email = email;
        this.privacyPolicy = privacyPolicy;
        this.newssubscribe = newssubscribe;
    }
}
