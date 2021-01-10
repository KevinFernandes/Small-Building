import { Component, Input, OnInit } from '@angular/core';
import { Floor } from 'src/app/models/floor';
import { FloorInfo } from 'src/app/models/floor-info';

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

  get FloorInfo(): FloorInfo {
    return this.floor?.floorInfo;
  }
}
