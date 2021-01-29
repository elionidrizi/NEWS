import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentsModule} from './modules/components.module';
import {AppRoutingModule} from './app-routing.module';
import {ServicesModule} from './modules/services.module';
import {FeedComponent} from './components/feed/feed.component';
import { SearchPipe } from './shared/search.pipe';
import { LikesComponent } from './components/feed/article/likes/likes.component';
import { DislikesComponent } from './components/feed/article/dislikes/dislikes.component';
import { CommentsComponent } from './components/feed/article/comments/comments.component';
import { ArticleComponent } from './components/feed/article/article.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './components/authentication/auth.interceptor';


@NgModule({
    declarations: [
        AppComponent,
        FeedComponent,
        LikesComponent,
        DislikesComponent,
        CommentsComponent,
        ArticleComponent,
        AuthenticationComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ComponentsModule,
        AppRoutingModule,
        ServicesModule,

    ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      }
    ],
    exports: [
    ComponentsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
