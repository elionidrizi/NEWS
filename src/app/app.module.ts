import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComponentsModule} from './modules/components.module';
import {AppRoutingModule} from './app-routing.module';
import {ServicesModule} from './modules/services.module';
import {FeedComponent} from './components/feed/feed.component';
import { SearchPipe } from './shared/search.pipe';
import { LikesComponent } from './components/feed/likes/likes.component';
import { DislikesComponent } from './components/feed/dislikes/dislikes.component';
import { CommentsComponent } from './components/feed/comments/comments.component';


@NgModule({
    declarations: [
        AppComponent,
        FeedComponent,
        LikesComponent,
        DislikesComponent,
        CommentsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ComponentsModule,
        AppRoutingModule,
        ServicesModule,

    ],
    providers: [],
    exports: [
    ComponentsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
