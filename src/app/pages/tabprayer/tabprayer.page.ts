import { Component, OnInit } from '@angular/core';
import {Prayer} from '../../Classes/prayer';
import {PrayerService} from '../../Services/prayer.service';

@Component({
  selector: 'app-tabprayer',
  templateUrl: './tabprayer.page.html',
  styleUrls: ['./tabprayer.page.scss'],
})
export class TabprayerPage implements OnInit {
  prayers: Prayer[];
  constructor(private prayerService: PrayerService) { }
  getPrayers(): void {
    // this.contacts = this.contactService.getContacts();
    this.prayerService.getPrayers().subscribe(prayers => this.prayers = prayers);
  }

  ngOnInit() {
    this.getPrayers();
  }

}
