import { Component, Input, OnInit } from '@angular/core';
import { FloorInfo } from 'src/app/models/floor-info';
import { FloorSlot } from 'src/app/models/floor-slot';
import { FloorType } from 'src/app/models/floor-type.enum';
/**
 * This is a detail floor component
 */
@Component({
  selector: 'app-floor-detail',
  templateUrl: './floor-detail.component.html',
  styleUrls: ['./floor-detail.component.css']
})
export class FloorDetailComponent implements OnInit {

  public floorInfo: FloorInfo = null;
  /**
   * FloorInfo input
   */
  @Input()
  set FloorInfo(value: FloorInfo) {
    this.floorInfo = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

  occupied(slot: FloorSlot): string {
    return slot.occupied ? 'green' : 'gray';
  }

  labelColor(): string {
    switch (this.floorInfo?.floorType) {
      case FloorType.Retail: {
        return 'magenta';
      }
      case FloorType.Residential: {
        return 'lightgray';
      }
      default: {
        return 'white';
      }
    }
  }

}
