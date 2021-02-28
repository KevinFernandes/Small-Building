import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { Floor } from 'src/app/models/floor';
import { FloorType } from 'src/app/models/floor-type.enum';
import { MoveDirection } from 'src/app/models/move-direction.enum';
import { MakeFloor, MoveFloor } from 'src/app/store/floor-toolbar.actions';

@Injectable({
  providedIn: 'root'
})
export class FloorManagerService {

  private floors: Array<Floor> = [Floor.makeLobbyFloor(), Floor.makeTopFloor()];
  private allFloors$: BehaviorSubject<Floor[]> = new BehaviorSubject<Floor[]>(this.floors);

  constructor(private store: Store) {
    this.allFloors$.next(this.floors);
  }

  public get AllFloors$(): Observable<Floor[]> {
    return this.allFloors$.asObservable();
  }

  public FloorIndex(floor: Floor): number {
    return this.floors.indexOf(floor);
  }

  Addfloor(): void {
    this.floors.splice(-1, 0, Floor.makeEmptyFloor());
    this.allFloors$.next(this.floors);
  }

  MakeFloor(floorId: string, floorType: FloorType): void {
    this.store.dispatch(new MakeFloor(floorId, floorType));
  }

  MoveFloor(floorId: string, direction: MoveDirection): void {
    this.store.dispatch(new MoveFloor(floorId, direction));
  }
}
