import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dislikes',
  templateUrl: './dislikes.component.html',
  styleUrls: ['./dislikes.component.css']
})
export class DislikesComponent implements OnInit {

  dislikes:number;
  constructor() { }

  ngOnInit(): void {
    this.dislikes = 0;
  }


  onDislike() {
    this.dislikes += 1;
  }
}
