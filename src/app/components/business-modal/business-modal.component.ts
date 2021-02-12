import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IFloorDialog } from 'src/app/models/floor-dialog.interface';
import { FloorSlot } from 'src/app/models/floor-slot';
import { FloorType } from 'src/app/models/floor-type.enum';

@Component({
  selector: 'app-business-modal',
  templateUrl: './business-modal.component.html',
  styleUrls: ['./business-modal.component.css']
})
export class BusinessModalComponent implements OnInit, IFloorDialog {

  title: string = '';
  slots: Array<FloorSlot> = [];
  type: FloorType = FloorType.Empty;
  rate: number = 0;
  capacity: number = 0;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close('');
  }
}
