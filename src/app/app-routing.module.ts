import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  // { path: '', loadChildren: './pages/register/register.module#RegisterPageModule' },
  // { path: 'privacy', loadChildren: './pages/privacy/privacy.module#PrivacyPageModule' },
  // { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  // { path: 'tabprayer', loadChildren: './pages/tabprayer/tabprayer.module#TabprayerPageModule' },
  // { path: 'tabnews', loadChildren: './pages/tabnews/tabnews.module#TabnewsPageModule' },
  // { path: 'tabmap', loadChildren: './pages/tabmap/tabmap.module#TabmapPageModule' },
  // { path: 'tabprofile', loadChildren: './pages/tabprofile/tabprofile.module#TabprofilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
