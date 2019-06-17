import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ContactComponent } from './contact/contact.component';
import { DrinkFonteinenComponent } from './drink-fonteinen/drink-fonteinen.component';
import { DrinkFonteinenMapComponent } from './drink-fonteinen-map/drink-fonteinen-map.component';
import { DrinkFonteinenService } from './services/drink-fonteinen.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AgmCoreModule } from '@agm/core';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DrinkFonteinenComponent,
    DrinkFonteinenMapComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpcz4zxy3kX5Ao61RezEjKkjtOKs0t9-w'
    }),
    NgxPaginationModule
  ],
  providers: [DrinkFonteinenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
