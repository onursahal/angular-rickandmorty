import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characterId: number;

  constructor() {}

  getCharacterId(id) {
    this.characterId = id;
  }
  ngOnInit(): void {}
}
