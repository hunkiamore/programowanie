import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LogowanieComponent } from './logowanie/logowanie.component'; // Importowanie komponentu logowania

@NgModule({
  declarations: [
    LogowanieComponent // Dodanie komponentu do deklaracji
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: []
})
export class AppModule { }
