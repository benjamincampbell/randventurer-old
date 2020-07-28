import { Injectable } from '@angular/core';
import { Adventurer } from './adventurer';
import { races } from './races';
import { classes } from './classes';
import { backgrounds } from './backgrounds';
import { alignments } from './alignments';
import { stats } from './stats';

@Injectable({
  providedIn: 'root'
})
export class AdventurerGeneratorService {
    _race;
    _class;
    _background;
    _alignments
    _adventurer;
    _stats;
    _statlist; // slightly redundant, but to iterate through in HTML to reduce redundancy there

  constructor() { }

  createAdventurer(){
      this._race = races[Math.floor(Math.random() * races.length)];
      this._class = classes[Math.floor(Math.random() * classes.length)];
      this._background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      this._alignment = alignments[Math.floor(Math.random() * alignments.length)];
      this._statlist = [];
      this._stats = this.generateStatblock();

      this._adventurer = { name: "Namey McNameyface",
                           info: [
                               {
                                   name: "race",
                                   value: this._race,
                               },
                               {
                                   name: "class",
                                   value: this._class
                               },
                               {
                                   name: "background",
                                   value: this._background,
                               },
                               {
                                   name: "alignment",
                                   value: this._alignment
                               },
                           ],
                           race: this._race,
                           class: this._class,
                           background: this._background,
                           stats: this._stats,
                           statlist: this._statlist
                       };
      console.log("Adventurer created: " + JSON.stringify(this._adventurer));

      return this._adventurer;
  }

  generateStatblock(){
      // get initial stat block
      let block = {
          Strength: this.generateStat(),
          Dexterity: this.generateStat(),
          Constitution: this.generateStat(),
          Intelligence: this.generateStat(),
          Wisdom: this.generateStat(),
          Charisma: this.generateStat(),
      };

      // increase stats by any racial bonuses
      this._race.stats.forEach( (s) => {
          block[s.name].value += s.plus;
      });

      // Half-Elves can increase any other non-CHA stat by 1 twice, do so randomly
      if (this._race.name == 'Half-Elf') {
          let otherstats = ['Strength', 'Dexterity', 'Constitution', 'Intelligence', 'Wisdom'];
          for (let i = 0; i < 2; i++) {
              let chosenstat = otherstats[Math.floor(Math.random() * otherstats.length)];
              console.log("Half-Elf random stat increase: " + chosenstat + " + 1");
              block[chosenstat].value++;
          }
      }

      // calculate bonuses, build statlist array
      for (let s in block){
          block[s].bonus = Math.floor((block[s].value - 10)/2);
          let f = {};
          f["name"] = s;
          f["values"] = block[s];
          this._statlist.push(f);
      }

      console.log(JSON.stringify(block));

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
