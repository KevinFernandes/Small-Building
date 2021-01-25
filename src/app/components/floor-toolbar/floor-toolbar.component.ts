import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

import { Floor } from 'src/app/models/floor';

import { FloorType } from 'src/app/models/floor-type.enum';
import { MoveDirection } from 'src/app/models/move-direction.enum';

@Component({
  selector: 'app-floor-toolbar',
  templateUrl: './floor-toolbar.component.html',
  styleUrls: ['./floor-toolbar.component.css']
})
export class FloorToolbarComponent implements OnInit, OnDestroy {
  private floor: Floor;
  private floorCount = 0;

  private makeFloor: EventEmitter<FloorType> = new EventEmitter();
  private moveFloor: EventEmitter<MoveDirection> = new EventEmitter();

  constructor() { }

  //  made public for use in the HTML template
  public eFloorType = FloorType;
  public eMoveDirection = MoveDirection;

  @Input()
  set Floor(value: Floor) {
    this.floor = value;
  }

  @Input()
  set FloorCount(value: number) {
    this.floorCount = value;
  }

  @Output()
  get MakeFloor$(): EventEmitter<FloorType> {
    return this.makeFloor;
  }

  @Output()
  get MoveFloor$(): EventEmitter<MoveDirection> {
    return this.moveFloor;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  get isBuilding(): boolean {
    return this.floor?.floorInfo?.timeRemaining !== 0;
  }

  get canGoUp(): boolean {
    return this.floor?.ID - 1 <= 0;
  }

  get canGoDown(): boolean {
    return this.floor?.ID + 1 >= this.floorCount - 1;
  }

  get isEmptyFloor(): boolean {
    return this.floor?.floorInfo?.floorType === FloorType.Empty;
  }

  get isNotLobbyTop(): boolean {
    return this.floor?.floorInfo?.floorType !== FloorType.Lobby && this.floor?.floorInfo?.floorType !== FloorType.Top;
  }

  complete(): void {
    this.floor.complete();
  }

  MakeFloor(floorType: FloorType): void {
    this.makeFloor.emit(floorType);
  }

  MoveFloor(direction: MoveDirection): void {
    this.moveFloor.emit(direction);
  }

}
