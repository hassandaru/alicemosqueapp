import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { News } from '../Classes/news';
import { NewsList } from '../Classes/mock-news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }
  getNews(): Observable<News[]> {
    return of(NewsList);
  }
}
