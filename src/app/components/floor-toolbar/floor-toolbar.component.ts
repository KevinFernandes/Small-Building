import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import {filter, switchMap, takeWhile, tap} from 'rxjs/operators';
import { Floor } from 'src/app/models/floor';

import { FloorType } from 'src/app/models/floor-type.enum';
import { MoveDirection } from 'src/app/models/move-direction.enum';
import { ApplicationState } from 'src/app/store/app.state';
import { MakeFloor, MoveFloor } from 'src/app/store/floor-toolbar.actions';

@Component({
  selector: 'app-floor-toolbar',
  templateUrl: './floor-toolbar.component.html',
  styleUrls: ['./floor-toolbar.component.css']
})
export class FloorToolbarComponent implements OnInit, OnDestroy {
  private floorID: string;
  private floor: Floor;
  private destroy = false;
  private floorCount = 0;

  constructor(private store: Store) { }

  public eFloorType = FloorType;
  public eMoveDirection = MoveDirection;

  @Input()
  set FloorID(value: string) {
    this.floorID = value;

    this.store.select(ApplicationState.getAllFloors)
      .pipe(
        takeWhile(() => !this.destroy),
        tap(val => this.floorCount = val.length),
        switchMap(val => val),
        filter(val => val.floorID === this.floorID)
      )
      .subscribe(val => {
        this.floor = val;
      });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy = true;
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

  makeFloor(floorType: FloorType): void {
    this.store.dispatch(new MakeFloor(this.floorID, floorType));
  }

  moveFloor(direction: MoveDirection): void {
    this.store.dispatch(new MoveFloor(this.floorID, direction));
  }

}
