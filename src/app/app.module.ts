import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ContactComponent } from './contacts/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { routing } from "./routes/app.routes";
import { PetService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [
    PetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
