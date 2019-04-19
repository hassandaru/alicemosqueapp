import {Component, OnInit} from '@angular/core';
import {News} from '../../Classes/news';
import {NewsService} from '../../Services/news.service';

@Component({
    selector: 'app-tabnews',
    templateUrl: './tabnews.page.html',
    styleUrls: ['./tabnews.page.scss'],
})
export class TabnewsPage implements OnInit {
    mynews: News[];

    constructor(private newsService: NewsService) {
    }

    getNews(): void {
        this.newsService.getNews().subscribe(newsList => this.mynews = newsList);
    }

    ngOnInit() {
        this.getNews();
    }

}
