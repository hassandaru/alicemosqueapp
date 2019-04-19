import { Injectable } from '@angular/core';
import { Prayer } from '../Classes/prayer';
import { Prayers } from '../Classes/mock-prayer';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PrayerService {

  constructor() { }
  getPrayers(): Observable<Prayer[]> {
    return of(Prayers);
  }

}
