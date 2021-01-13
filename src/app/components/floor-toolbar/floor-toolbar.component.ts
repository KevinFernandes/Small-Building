import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import {filter, switchMap, takeWhile, tap} from 'rxjs/operators';
import { Floor } from 'src/app/models/floor';

import { FloorType } from 'src/app/models/floor-type.enum';
import { ApplicationState } from 'src/app/store/app.state';
import { MakeRecreational, MakeResidential, MakeRetail, MoveFloorDown, MoveFloorUp } from 'src/app/store/floor-toolbar.actions';

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
    return this.floor?.floorInfo?.buildStart !== null;
  }

  get canGoUp(): boolean {
    return this.floor?.ID - 1 <= 0;
  }

  get canGoDown(): boolean {
    return this.floor?.ID + 1 >= this.floorCount;
  }

  get isEmptyFloor(): boolean {
    return this.floor?.floorInfo?.floorType === FloorType.Empty;
  }

  get isNotLobby(): boolean {
    return this.floor?.floorInfo?.floorType !== FloorType.Lobby;
  }

  complete(): void {
    this.floor.complete();
  }

  makeRetail(): void {
    this.store.dispatch(new MakeRetail(this.floorID));
  }

  makeResidential(): void {
    this.store.dispatch(new MakeResidential(this.floorID));
  }

  makeRecreational(): void {
    this.store.dispatch(new MakeRecreational(this.floorID));
  }

  makeService(): void {
    this.store.dispatch(new MakeRecreational(this.floorID));
  }

  makeFood(): void {
    this.store.dispatch(new MakeRecreational(this.floorID));
  }

  makeCreative(): void {
    this.store.dispatch(new MakeRecreational(this.floorID));
  }

  moveUp(): void {
    this.store.dispatch(new MoveFloorUp(this.floorID));
  }

  moveDown(): void {
    this.store.dispatch(new MoveFloorDown(this.floorID));
  }

}
