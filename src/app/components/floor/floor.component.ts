import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { Floor } from 'src/app/models/floor';
import { FloorInfo } from 'src/app/models/floor-info';
import { FloorType } from 'src/app/models/floor-type.enum';
import { MoveDirection } from 'src/app/models/move-direction.enum';
import { FloorManagerService } from 'src/app/services/floor-manager/floor-manager.service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {

  private floor: Floor;
  floorIndex$: Observable<number>;

  constructor(private floorManager: FloorManagerService, private store: Store) {
    this.floorIndex$ = this.store.select(state => state.appstate.floors.indexOf(this.floor));
  }

  @Input()
  set Floor(value: Floor) {
    this.floor = value;
  }
  get Floor(): Floor {
    return this.floor;
  }

  ngOnInit(): void {

  }

  get FloorInfo(): FloorInfo {
    return this.floor?.floorInfo;
  }

  MakeFloor(event: any): void {
    this.floorManager.MakeFloor(this.floor.floorID, event as FloorType);
  }

  MoveFloor(event: any): void {
    this.floorManager.MoveFloor(this.floor.floorID, event as MoveDirection);
  }
}
