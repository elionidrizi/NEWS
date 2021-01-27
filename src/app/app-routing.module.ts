import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SourcesComponent} from './components/sources/sources.component';
import {FeedComponent} from './components/feed/feed.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sources'
  },
  {
    path: 'sources',
    component: SourcesComponent
  },
  {
    path: 'feed/:id',
    component:FeedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
