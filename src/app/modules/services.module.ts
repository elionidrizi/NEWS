import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsApiService} from '../services/news-api.service';
import {HttpClientModule} from '@angular/common/http';


let _services=[
  NewsApiService

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:_services
})
export class ServicesModule { }
