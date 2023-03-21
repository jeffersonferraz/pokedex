import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';


@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
