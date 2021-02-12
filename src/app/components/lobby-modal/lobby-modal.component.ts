import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IFloorDialog } from 'src/app/models/floor-dialog.interface';
import { FloorSlot } from 'src/app/models/floor-slot';
import { FloorType } from 'src/app/models/floor-type.enum';

@Component({
  selector: 'app-lobby-modal',
  templateUrl: './lobby-modal.component.html',
  styleUrls: ['./lobby-modal.component.css']
})
export class LobbyModalComponent implements OnInit, IFloorDialog {

  constructor(public activeModal: NgbActiveModal) { }

  title: string;
  slots: FloorSlot[];
  type: FloorType;

  ngOnInit(): void {
  }

  close(): void {
    this.activeModal.close('');
  }
}
