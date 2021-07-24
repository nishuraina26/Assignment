import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { FilterListComponent } from './filter-list/filter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchDetailComponent,
    FilterListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
