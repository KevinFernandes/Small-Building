import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Floor } from './models/floor';
import { AppTimerService } from './services/app-timer/app-timer.service';
import { ApplicationState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(timer: AppTimerService) {
    timer.Timer$.subscribe(() => {});
  }

  @Select(ApplicationState.getAllFloors)
  floors$: Observable<Floor[]>;
}
