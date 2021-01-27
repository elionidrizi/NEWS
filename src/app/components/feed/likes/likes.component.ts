import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  likes :number;

  constructor() { }

  ngOnInit(): void {
    this.likes = 0;
  }

  onLike() {
    this.likes += 1;
  }
}
