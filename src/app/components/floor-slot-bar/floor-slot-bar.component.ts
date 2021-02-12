import { Component, Input, OnInit } from '@angular/core';
import { FloorSlot } from 'src/app/models/floor-slot';

@Component({
  selector: 'app-floor-slot-bar',
  templateUrl: './floor-slot-bar.component.html',
  styleUrls: ['./floor-slot-bar.component.css']
})
export class FloorSlotBarComponent implements OnInit {

  constructor() { }

  @Input()
  public Slots: Array<FloorSlot> = null;

  ngOnInit(): void {
  }

}
