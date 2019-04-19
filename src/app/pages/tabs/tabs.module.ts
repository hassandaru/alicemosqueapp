import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tabprayer',
        loadChildren: '../tabprayer/tabprayer.module#TabprayerPageModule'
      },
      {
        path: 'tabnews',
        loadChildren: '../tabnews/tabnews.module#TabnewsPageModule'
      },
      {
        path: 'tabmap',
        loadChildren: '../tabmap/tabmap.module#TabmapPageModule'
      },
      {
        path: 'tabprofile',
        loadChildren: '../tabprofile/tabprofile.module#TabprofilePageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/tabprayer',
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
