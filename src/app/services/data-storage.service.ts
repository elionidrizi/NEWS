import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommentsService} from '../components/feed/article/comments/comments.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  constructor(private http: HttpClient, private commentsService: CommentsService) {
  }

  storeComment() {
    const comments = this.commentsService.getComments();
    this.http.put('https://news-c98d8-default-rtdb.firebaseio.com/comments.json', comments).subscribe(response => {
      console.log(response);
    })


  }

}


