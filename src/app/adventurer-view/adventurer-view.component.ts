import { Component, OnInit } from '@angular/core';
import { AdventurerGeneratorService } from '../adventurer-generator.service';

@Component({
    selector: 'app-adventurer-view',
    templateUrl: './adventurer-view.component.html',
    styleUrls: ['./adventurer-view.component.css']
})
export class AdventurerViewComponent implements OnInit {

    adventurer;

    constructor(
      private adventureGeneratorService: AdventurerGeneratorService,
    ) { }

    ngOnInit(): void {
    }

    generateAdventurer() {
      this.adventurer = this.adventureGeneratorService.createAdventurer();
    }

}
