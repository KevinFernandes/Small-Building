import { Component, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
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
export class FloorComponent implements OnDestroy {

  private floor: Floor;
  private isActive = true;

  floorIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);

  constructor(private floorManager: FloorManagerService, private store: Store) {

    //  We monitor the floors to get the new index of this floor if number
    //  of floors change
    floorManager.AllFloors$
                .pipe(takeWhile(() => this.isActive))
                .subscribe(() => {
                  if (this.floor) {
                    this.floorIndex$.next(this.floorManager.FloorIndex(this.floor));
                  }
                });
  }

  @Input()
  set Floor(value: Floor) {
    this.floor = value;
    this.floorIndex$.next(this.floorManager.FloorIndex(this.floor));
  }
  get Floor(): Floor {
    return this.floor;
  }

  ngOnDestroy(): void {
    this.isActive = false;
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
