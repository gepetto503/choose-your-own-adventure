import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EncounterOneComponent } from './encounter-one/encounter-one.component';
import { EncounterTwoAComponent } from './encounter-two-a/encounter-two-a.component';
import { EncounterTwoBComponent } from './encounter-two-b/encounter-two-b.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    EntryFormComponent,
    EncounterOneComponent,
    EncounterTwoAComponent,
    EncounterTwoBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
