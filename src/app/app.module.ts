import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { InterceptorPostInterceptor } from './services/interceptor-post.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorPostInterceptor, multi: true }], //recordar, en userClass: el interceptor que creamos
  bootstrap: [AppComponent]
})
export class AppModule { }
