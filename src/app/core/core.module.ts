import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { SharedModule } from '../shared/shared.module';

registerLocaleData(localePl);

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pl'
    }
  ],
  bootstrap: [AppComponent]
})
export class CoreModule { }
