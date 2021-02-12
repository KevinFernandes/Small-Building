import { Component, Input, OnInit } from '@angular/core';
import { FloorSlot, SlotState } from 'src/app/models/floor-slot';

@Component({
  selector: 'app-business-slot',
  templateUrl: './business-slot.component.html',
  styleUrls: ['./business-slot.component.css']
})
export class BusinessSlotComponent implements OnInit {

  public eSlotState = SlotState;
  constructor() { }

  @Input()
  slot: FloorSlot;

  ngOnInit(): void {
  }

}
