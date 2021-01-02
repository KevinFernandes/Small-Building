import { Component } from '@angular/core';
import { Floor } from './models/floor';
import { ResidentialFloors } from './models/floors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private residentialFloors: ResidentialFloors = new ResidentialFloors();
  public floors: Array<Floor> = [];

  onAddResidential(): void {
    this.floors.push(this.residentialFloors.floors[this.generateRandom(0, this.residentialFloors.floors.length)]);
  }

  private generateRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
