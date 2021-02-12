import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';

import { Floor } from 'src/app/models/floor';

import { FloorType } from 'src/app/models/floor-type.enum';
import { MoveDirection } from 'src/app/models/move-direction.enum';
import { ApplicationState, ApplicationStateModel } from 'src/app/store/app.state';

@Component({
  selector: 'app-floor-toolbar',
  templateUrl: './floor-toolbar.component.html',
  styleUrls: ['./floor-toolbar.component.css']
})
export class FloorToolbarComponent implements OnInit, OnDestroy {
  private floor: Floor = null;
  private floorIndex = -1;
  private floorCount = 0;

  private makeFloor: EventEmitter<FloorType> = new EventEmitter();
  private moveFloor: EventEmitter<MoveDirection> = new EventEmitter();

  constructor(private store: Store) {
    store.select(state => state.appstate.floors.length)
         .subscribe(num => {
            this.floorCount = num;
          });

  }

  //  made public for use in the HTML template
  public eFloorType = FloorType;
  public eMoveDirection = MoveDirection;

  @Input()
  set Floor(value: Floor) {
    this.floor = value;
    this.store
        .select( (state) => {
          if (this.floor) {
            return state.appstate.floors.indexOf(this.floor);
          }
          return -1;
        })
        .subscribe((num: number) => {
          this.floorIndex = num;
        });
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
    return this.floorIndex - 1 <= 0;
  }

  get canGoDown(): boolean {
    return this.floorIndex + 1 >= this.floorCount - 1;
  }

  get isEmptyFloor(): boolean {
    return this.floor?.isEmpty;
  }

  get isNotLobbyTop(): boolean {
    return !this.floor?.isLobby && !this.floor?.isTop;
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
