import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import {filter, switchMap} from 'rxjs/operators';
import { Floor } from 'src/app/models/floor';

import { FloorInfo } from 'src/app/models/floor-info';
import { FloorType } from 'src/app/models/floor-type.enum';
import { RetailFloors, ResidentialFloors } from 'src/app/models/floors';
import { ApplicationState } from 'src/app/store/app.state';
import { MakeResidential, MakeRetail } from 'src/app/store/floor-toolbar.actions';

@Component({
  selector: 'app-floor-toolbar',
  templateUrl: './floor-toolbar.component.html',
  styleUrls: ['./floor-toolbar.component.css']
})
export class FloorToolbarComponent implements OnInit {
  private floorID: string;
  private floor: Floor;

  constructor(private store: Store) { }

  @Input()
  set FloorID(value: string) {
    this.floorID = value;

    this.store.select(ApplicationState.getAllFloors)
      .pipe(
        switchMap(val => val),
        filter(val => val.floorID === this.floorID)
      )
      .subscribe(val => {
        this.floor = val;
      });
  }

  ngOnInit(): void {
  }

  makeRetail(): void {
    this.store.dispatch(new MakeRetail(this.floorID));
  }

  makeResidential(): void {
    this.store.dispatch(new MakeResidential(this.floorID));
  }

  get isEmptyFloor(): boolean {
    return this.floor?.floorInfo?.floorType === FloorType.Empty;
  }
}
