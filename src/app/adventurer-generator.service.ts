import { Injectable } from '@angular/core';
import { Adventurer } from './adventurer';
import { races } from './races';
import { classes } from './classes';
import { backgrounds } from './backgrounds';

@Injectable({
  providedIn: 'root'
})
export class AdventurerGeneratorService {
    _race;
    _class;
    _background;
    _adventurer;

  constructor() { }

  createAdventurer(){
      this._race = races[Math.floor(Math.random() * races.length)];
      this._class = classes[Math.floor(Math.random() * classes.length)];
      this._background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

      this._adventurer = { name: "Ben", race: this._race, class: this._class, background: this._background };
      console.log("Adventurer created: " + this._adventurer );

      return this._adventurer;
  }

  clearAdventurer(){

  }

  getRaces() {
      return races;
  }

  getClasses() {
      return classes;
  }

  getBackgrounds() {
      return backgrounds;
  }
}
