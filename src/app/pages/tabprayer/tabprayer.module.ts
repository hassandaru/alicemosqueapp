import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {Prayer} from '../../Classes/prayer';
import { Prayers } from '../../Classes/mock-prayer';
import { IonicModule } from '@ionic/angular';

import { TabprayerPage } from './tabprayer.page';
import {PrayerService} from '../../Services/prayer.service';

const routes: Routes = [
  {
    path: '',
    component: TabprayerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabprayerPage]
})
export class TabprayerPageModule {}
