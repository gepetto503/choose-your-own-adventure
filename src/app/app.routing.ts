import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EncounterOneComponent } from './encounter-one/encounter-one.component';
import { EncounterTwoAComponent } from './encounter-two-a/encounter-two-a.component';
import { EncounterTwoBComponent } from './encounter-two-b/encounter-two-b.component';

const appRoutes: Routes = [
  {
    path:'',
    component: EntryFormComponent
  },
  {
    path: 'encounter-one',
    component: EncounterOneComponent
  },
  {
    path: 'encounter-two-a',
    component: EncounterTwoAComponent
  },
  {
    path: 'encounter-two-b',
    component: EncounterTwoBComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
