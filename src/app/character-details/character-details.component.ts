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
  character;

  constructor(private characterService: CharacterService) {
    this.characterService.character.subscribe((res) => {
      console.log(res);
      this.character = res;
    });
  }

  ngOnInit(): void {}
}
