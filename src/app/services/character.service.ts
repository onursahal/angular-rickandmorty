import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Character } from '../character';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  getCharactersURL: string = 'https://rickandmortyapi.com/api/character';
  getCharacterURL: string = 'https://rickandmortyapi.com/api/character/';
  characterId: number;

  constructor(private httpClient: HttpClient) {}
  setCharacterId(id: number) {
    this.characterId = id;
  }

  getCharacters(): Observable<any> {
    return this.httpClient.get(this.getCharactersURL);
  }

  getCharacter(): Observable<Character> {
    return this.httpClient
      .get<Character>(this.getCharacterURL + this.characterId)
      .pipe(
        map((res: Character) => {
          console.log(this.characterId);
          return res;
        })
      );
  }
}
