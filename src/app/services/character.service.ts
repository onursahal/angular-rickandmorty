import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  getCharactersURL: string = 'https://rickandmortyapi.com/api/character';
  getCharacterURL: string = 'https://rickandmortyapi.com/api/character/';
  character = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {}

  setCharacterId(id) {
    this.httpClient
      .get(this.getCharacterURL + id)
      .subscribe((res) => this.character.next(res));
  }

  getCharacters(): Observable<any> {
    return this.httpClient.get(this.getCharactersURL);
  }
}
