import {Component, OnInit} from '@angular/core';
import {Article} from '../../interface/article.model';
import {NewsApiService} from '../../services/news-api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  mArticles: Array<Article>;
  sourceSelected: string;


  constructor(private newsApi: NewsApiService, private activatedRoute: ActivatedRoute, private route: Router) {
    this.mArticles = [];
  }

  ngOnInit(): void {
    this.sourceSelected = this.activatedRoute.snapshot.params['id'];

    this.newsApi.getArticlesById(this.sourceSelected).subscribe(
      data => {
        this.mArticles = data.articles;
      }
    );
  }
}
