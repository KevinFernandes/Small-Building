import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Floor } from './models/floor';
import { ApplicationState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Select(ApplicationState.getAllFloors)
  floors$: Observable<Floor[]>;

  private generateRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
