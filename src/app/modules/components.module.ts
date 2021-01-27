import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {HeaderComponent} from '../components/header/header.component';
import {FormsModule} from '@angular/forms';
import {SourcesComponent} from '../components/sources/sources.component';
import {RouterModule} from '@angular/router';
import {SearchPipe} from '../shared/search.pipe';
import {SharedModule} from './shared.module';


@NgModule({
  declarations: [
    HeaderComponent,
    SourcesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    CommonModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    SourcesComponent,
  ],
  providers: []
})
export class ComponentsModule {
}
