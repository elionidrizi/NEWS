import {Component, OnInit} from '@angular/core';
import {NewsApiService} from '../../services/news-api.service';
import {Source} from '../../interface/source.model';
import {Router} from '@angular/router';
import {Article} from '../../interface/article.model';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  mSources: Array<Source>;
  mArticles: Array<Article>;
  term: any;

  constructor(private newsApi: NewsApiService, private router: Router) {
  }

  ngOnInit(): void {
    //load sources
    this.newsApi.initSources().subscribe(
      data => {
        this.mSources = data['sources'];
      }
    );
  }

  selectSource(sourceId) {
    // this.newsApi.selectSource(sourceId);
    this.router.navigate(['feed', sourceId]);
  }
}
