import { Component, Input, OnInit } from '@angular/core';
import { FloorSlot } from 'src/app/models/floor-slot';

@Component({
  selector: 'app-residential-slot',
  templateUrl: './residential-slot.component.html',
  styleUrls: ['./residential-slot.component.css']
})
export class ResidentialSlotComponent implements OnInit {

  constructor() { }

  @Input()
  slot: FloorSlot;

  ngOnInit(): void {
  }

}
