import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FloorType } from 'src/app/models/floor-type.enum';

@Component({
  selector: 'app-empty-modal',
  templateUrl: './empty-modal.component.html',
  styleUrls: ['./empty-modal.component.css']
})
export class EmptyModalComponent implements OnInit {

  public eFloorType = FloorType;

  constructor(private modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  MakeFloor(floorType: FloorType): void {
    this.modal.close(floorType);
  }

  close(): void {
    this.modal.dismiss();
  }
}
