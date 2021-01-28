import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SourcesComponent} from './components/sources/sources.component';
import {FeedComponent} from './components/feed/feed.component';
import {AuthenticationComponent} from './components/authentication/authentication.component';

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
  {
    path:'auth',
    component:AuthenticationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
