import { Component, OnDestroy } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { Floor } from './models/floor';
import { AppTimerService } from './services/app-timer/app-timer.service';
import { FloorManagerService } from './services/floor-manager/floor-manager.service';
import { ApplicationState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{

  private isActive = true;

  // @Select(ApplicationState.getAllFloors)
  public floors$: Observable<Floor[]>;

  constructor(private timer: AppTimerService, private floorManager: FloorManagerService) {
    this.timer.Timer$
              .pipe(takeWhile(() => this.isActive))
              .subscribe(() => {});

    this.floors$ = this.floorManager.AllFloors$;
  }

  public ngOnDestroy(): void {
    this.isActive = false;
  }

}
