import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoCaptureComponent } from './components/photo-capture/photo-capture.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularMaterialModule } from './material.module';

import { Ng2ImgMaxModule } from 'ng2-img-max';

import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader-interceptor.service';
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
  providers: [ LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
