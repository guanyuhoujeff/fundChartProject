import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
import {CommonService} from './common.service';  
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ChartsModule,
    HttpModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})

export class AppModule {}
