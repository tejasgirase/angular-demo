import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contacts/contact.component';
import { ProfileComponent } from './profile/profile.component';

import { routing } from "./routes/app.routes";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
