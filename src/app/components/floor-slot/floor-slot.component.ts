import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FloorSlot, SlotState } from 'src/app/models/floor-slot';

@Component({
  selector: 'app-floor-slot',
  templateUrl: './floor-slot.component.html',
  styleUrls: ['./floor-slot.component.css']
})
export class FloorSlotComponent implements OnInit {

  constructor() { }

  @Input()
  slot: FloorSlot;

  ngOnInit(): void {
  }

  slotStyle(): string {
    switch (this.slot.occupied) {
      case SlotState.Occupied: return 'silver';
      case SlotState.Empty: return 'red';
      case SlotState.Filling: return 'yellow';
      case SlotState.Full: return 'lightgreen';
      default: return 'gray'; //  For unknown type and SlotType.Unoccupied
    }
  }
}
