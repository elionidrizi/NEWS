import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {SourceResult} from '../interface/source-result.model';
import {ArticleResult} from '../interface/article-result.model';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '4f61deae560f45ea806e31a48d397083';
  sourceSelectedSubject = new Subject<string>();

  constructor(private http: HttpClient) {
  }

  initSources() {
    return this.http.get<SourceResult>('https://newsapi.org/v2/sources?apiKey=' + this.api_key);
  }

  initArticles() {
    return this.http.get<ArticleResult>('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' + this.api_key);
  }

  getArticlesById(source:string) {
    return this.http.get<ArticleResult>('https://newsapi.org/v2/top-headlines?sources=' + source + '&apiKey=' + this.api_key);
  }

  selectSource(sourceId: string) {
    this.sourceSelectedSubject.next(sourceId);
  }

  addCommentToArticle(comment: Comment, articleId) {

  }


}
