import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { ContactComponent } from '../contacts/contact.component';
import { ProfileComponent } from '../profile/profile.component';

export const routes: Routes = [
    {path: 'contacts', component:ContactComponent},
    {path:'profile', component:ProfileComponent}
];

export const routing : ModuleWithProviders = RouterModule.forRoot(routes);
