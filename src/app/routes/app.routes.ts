import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { ContactComponent } from '../contacts/contact.component';
import { ProfileComponent } from '../profile/profile.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    {path:'', redirectTo:'/home', pathMatch: 'full'},
    {path: 'contacts', component:ContactComponent},
    {path:'profile', component:ProfileComponent}
    {path:'home', component:HomeComponent}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
