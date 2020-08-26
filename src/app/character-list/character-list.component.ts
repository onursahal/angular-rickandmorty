import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters;

  constructor(private characterService: CharacterService) {
    this.characterService.getCharacters().subscribe((res) => {
      this.characters = res.results;
    });
  }

  setSelectedCharacterId(id: number) {
    this.characterService.setCharacterId(id);
  }

  ngOnInit(): void {}
}
