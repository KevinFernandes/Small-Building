import { Component, Input, OnInit } from '@angular/core';
import { FloorInfo } from 'src/app/models/floor-info';
import { FloorType } from 'src/app/models/floor-type.enum';
import { RetailFloors, ResidentialFloors } from 'src/app/models/floors';

@Component({
  selector: 'app-floor-toolbar',
  templateUrl: './floor-toolbar.component.html',
  styleUrls: ['./floor-toolbar.component.css']
})
export class FloorToolbarComponent implements OnInit {

  constructor() { }

  @Input()
  floorInfo: FloorInfo;

  ngOnInit(): void {
  }

  makeRetail(): void {
    const floors = new RetailFloors();
    const retail = floors.floors[this.getRandom(0, floors.floors.length)];
    this.floorInfo = retail;

  }

  makeResidential(): void {
    const floors = new ResidentialFloors();
    const retail = floors.floors[this.getRandom(0, floors.floors.length)];
    this.floorInfo = retail;
  }

  get isEmptyFloor(): boolean {
    return this.floorInfo.floorType === FloorType.Empty;
  }


  private getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
