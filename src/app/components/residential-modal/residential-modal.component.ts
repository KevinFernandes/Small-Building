import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IFloorDialog } from 'src/app/models/floor-dialog.interface';
import { FloorSlot } from 'src/app/models/floor-slot';
import { FloorType } from 'src/app/models/floor-type.enum';

@Component({
  selector: 'app-residential-modal',
  templateUrl: './residential-modal.component.html',
  styleUrls: ['./residential-modal.component.css']
})
export class ResidentialModalComponent implements OnInit, IFloorDialog {

  title: string = '';
  slots: Array<FloorSlot> = [];
  type: FloorType = FloorType.Empty;
  rent: number = 0;
  unemployed: number = 0;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close('');
  }
}
