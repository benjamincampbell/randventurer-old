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
    _stats;

  constructor() { }

  createAdventurer(){
      this._race = races[Math.floor(Math.random() * races.length)];
      this._class = classes[Math.floor(Math.random() * classes.length)];
      this._background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      this._stats = this.generateStatblock();

      this._adventurer = { name: "Ben",
                           race: this._race,
                           class: this._class,
                           background: this._background,
                           stats: this._stats
                       };
      console.log("Adventurer created: " + this._adventurer );

      return this._adventurer;
  }

  generateStatblock(){
      // get initial stat block
      let block = {
          str: this.generateStat(),
          dex: this.generateStat(),
          con: this.generateStat(),
          int: this.generateStat(),
          wis: this.generateStat(),
          cha: this.generateStat(),
      };

      // increase stats by any racial bonuses
      this._race.stats.forEach( (s) => {
          block[s.name].value += s.plus;
      });

      // Half-Elves can increase any other non-CHA stat by 1 twice, do so randomly
      if (this._race.name == 'Half-Elf') {
          let otherstats = ['str', 'dex', 'con', 'int', 'wis'];
          for (let i = 0; i < 2; i++) {
              let chosenstat = otherstats[Math.floor(Math.random() * otherstats.length)];
              console.log("Half-Elf random stat increase: " + chosenstat + " + 1");
              block[chosenstat].value++;
          }
      }

      // calculate bonuses
      for (let s in block){
          block[s].bonus = Math.floor((block[s].value - 10)/2);
      }

      return block;
  }

  generateStat(){
      let d1 = Math.floor((Math.random()*6) + 1);
      let d2 = Math.floor((Math.random()*6) + 1);
      let d3 = Math.floor((Math.random()*6) + 1);
      let d4 = Math.floor((Math.random()*6) + 1);

      let rolls = [d1, d2, d3, d4];
      let low = Math.min.apply(Math, rolls);

      let result = d1 + d2 + d3 + d4 - low;

      console.log(d1 + " + " + d2 + " + " + d3 + " + " + d4 + " - " + low);

      return {
          value: result,
          bonus: 0,
      };

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
