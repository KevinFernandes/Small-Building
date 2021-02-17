import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { FloorType } from 'src/app/models/floor-type.enum';
import { MoveDirection } from 'src/app/models/move-direction.enum';
import { MakeFloor, MoveFloor } from 'src/app/store/floor-toolbar.actions';
import { AddFloor } from 'src/app/store/toolbar.actions';

@Injectable({
  providedIn: 'root'
})
export class FloorManagerService {

  constructor(private store: Store) { }

  Addfloor(): void {
    this.store.dispatch(new AddFloor());
  }

  MakeFloor(floorId: string, floorType: FloorType): void {
    this.store.dispatch(new MakeFloor(floorId, floorType));
  }

  MoveFloor(floorId: string, direction: MoveDirection): void {
    this.store.dispatch(new MoveFloor(floorId, direction));
  }
}
