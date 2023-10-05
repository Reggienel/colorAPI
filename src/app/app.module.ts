import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { HttpClientModule } from '@angular/common/http';
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent, ColorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SplitterModule,
    CardModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
