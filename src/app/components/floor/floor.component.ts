import { Component, Input, OnInit } from '@angular/core';
import { Floor } from 'src/app/models/floor';
import { FloorType } from 'src/app/models/floor-type.enum';
import { RetailFloors } from 'src/app/models/floors';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {

  constructor() { }

  @Input()
  floor: Floor;

  ngOnInit(): void {
  }

  makeRetail(): void {
    const floors = new RetailFloors();
    const retail = floors.floors[this.getRandom(0, floors.floors.length)];
    this.floor.floorInfo = retail;

  }

  private getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
