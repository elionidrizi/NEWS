import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ArticleComment} from '../../../../interface/comments.model';
import {NgForm} from '@angular/forms';
import {CommentsService} from './comments.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
  comments: ArticleComment[];
  @ViewChild('f', {static: false}) slform: NgForm;
  @Input() articleId: number;
  private isChangedSub: Subscription;
  i: number;
  selectedIndexes: number[];

  constructor(private commentsService: CommentsService) {
    this.selectedIndexes = [];
  }

  ngOnInit(): void {
    this.comments = [];
    this.commentsService.commentsChanged.subscribe(
      data=> {
        this.comments =data;
      }
    )
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newComment = new ArticleComment(value.name, this.articleId);
    this.commentsService.addComment(newComment);
   this.commentsService.commentsChanged.subscribe(
     data=> {
       this.comments =data;
     }
   )
    // this.commentsService.addComment()
    // if (this.selectedIndexes.find(s => s == i) == null) {
    //   this.commentsService.addComment(newComment);
    // } else {
    //   this.selectedIndexes = this.selectedIndexes.filter(s => s != i);
    // }


  }

  ngOnDestroy() {
    this.isChangedSub.unsubscribe();
  }

  onAdd(i: number) {

  }

  isSelected(i: number) {
    let item = this.selectedIndexes.find(s => s == i);
    return item != null;
  }

  getFilteredComments(articleId: number) {
    return this.comments.filter(s => s.articleId == articleId);

  }
}
