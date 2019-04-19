import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule'},
    {path: 'privacy', loadChildren: './pages/privacy/privacy.module#PrivacyPageModule'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
