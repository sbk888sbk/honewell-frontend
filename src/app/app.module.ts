import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRouteComponent } from './app-route/app-route.component';

@NgModule({
  declarations: [AppComponent, AppRouteComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
