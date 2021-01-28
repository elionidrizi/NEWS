import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../../interface/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  selectedIndexes: number[];

  @Input() article: Article;
  @Input() id: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  // toggleComments(i: number) {
  //   if (this.selectedIndexes.find(s => s == i) == null) {
  //     this.selectedIndexes.push(i);
  //   } else {
  //     this.selectedIndexes = this.selectedIndexes.filter(s => s != i);
  //   }
  // }
  //
  // isSelected(i: number) {
  //   let item = this.selectedIndexes.find(s => s == i);
  //   return (item != null);
  // }

}
