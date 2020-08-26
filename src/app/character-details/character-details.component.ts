import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterService } from '../services/character.service';
import { Character } from '../character';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent implements OnInit {
  characterId: number;
  character: Character;

  constructor(private characterService: CharacterService) {
    this.characterService.getCharacter().subscribe((res: Character) => {
      console.log(res);
      this.character = res;
      console.log(this.character);
    });
  }

  ngOnInit(): void {}
}
