import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoCaptureComponent } from './components/photo-capture/photo-capture.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './material.module';

import { Ng2ImgMaxModule } from 'ng2-img-max';


@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoCaptureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    Ng2ImgMaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
