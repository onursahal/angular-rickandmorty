import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
  declarations: [AppComponent, CharacterDetailsComponent, AppHeaderComponent, LandingPageComponent, CharactersComponent, CharacterListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
