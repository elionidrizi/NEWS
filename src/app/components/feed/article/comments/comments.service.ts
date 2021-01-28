import {Injectable} from '@angular/core';
import {ArticleComment} from '../../../../interface/comments.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  commentsChanged = new Subject<ArticleComment[]>();
  private comments: ArticleComment[] = [];

  constructor() {
  }

  refresh() {
    return this.commentsChanged.next(this.comments.slice());
  }

  addComment(comment: ArticleComment) {
    this.comments.push(comment);
    this.refresh();
  }

  getComments() {
    return this.refresh();
  }


}
