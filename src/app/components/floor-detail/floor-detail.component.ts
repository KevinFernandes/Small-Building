import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { from } from 'rxjs/internal/observable/from';
import { first } from 'rxjs/internal/operators/first';
import { IFloorDialog } from 'src/app/models/floor-dialog.interface';
import { FloorInfo } from 'src/app/models/floor-info';
import { FloorSlot, SlotState } from 'src/app/models/floor-slot';
import { FloorType } from 'src/app/models/floor-type.enum';
import { FloorManagerService } from 'src/app/services/floor-manager/floor-manager.service';
import { BusinessModalComponent } from '../business-modal/business-modal.component';
import { EmptyModalComponent } from '../empty-modal/empty-modal.component';
import { LobbyModalComponent } from '../lobby-modal/lobby-modal.component';
import { ResidentialModalComponent } from '../residential-modal/residential-modal.component';
/**
 * This is a detail floor component
 */
@Component({
  selector: 'app-floor-detail',
  templateUrl: './floor-detail.component.html',
  styleUrls: ['./floor-detail.component.css']
})
export class FloorDetailComponent implements OnInit {

  public floorInfo: FloorInfo = null;
  public floorID: string = null;

  /**
   * FloorInfo input
   */
  @Input()
  set FloorInfo(value: FloorInfo) {
    this.floorInfo = value;
  }

  @Input()
  set FloorID(value: string) {
    this.floorID = value;
  }

  get isBuilding(): boolean {
    return this.floorInfo?.timeRemaining !== 0;
  }

  get isNotBuilding(): boolean {
    return this.floorInfo?.timeRemaining === 0;
  }

  get isLobby(): boolean {
    if (this.floorInfo) {
      return this.floorInfo.floorType === FloorType.Lobby;
    }
    return false;
  }

  get isTop(): boolean {
    if (this.floorInfo) {
      return this.floorInfo.floorType === FloorType.Top;
    }
    return false;
  }

  get isEmpty(): boolean {
    if (this.floorInfo) {
      return this.floorInfo.floorType === FloorType.Empty;
    }
    return false;
  }

  get isBusy(): boolean {
    return this.floorInfo?.timeRemaining !== 0;
  }

  constructor(private modalService: NgbModal, private floorService: FloorManagerService) {
  }

  ngOnInit(): void {
  }

  options(): void {
    let r;

    switch (this.floorInfo.floorType) {
      case FloorType.Lobby: {
        r = LobbyModalComponent;
        break;
      }
      case FloorType.Residential: {
        r = ResidentialModalComponent;
        break;
      }
      case FloorType.Empty: {
        r = EmptyModalComponent;
        break;
      }
      default: {
        r = BusinessModalComponent;
      }
    }

    const ref = this.modalService.open(r, { centered: true });
    (ref.componentInstance as IFloorDialog).title = this.floorInfo.floorName;
    (ref.componentInstance as IFloorDialog).type = this.floorInfo.floorType;
    (ref.componentInstance as IFloorDialog).slots = this.floorInfo.slots;
    from(ref.result).pipe(first()).subscribe((result: FloorType) => {
      if (result) {
        this.floorService.MakeFloor(this.floorID, result);
      }
    });
  }

  addFloor(): void {
    this.floorService.Addfloor();
  }

  occupied(slot: FloorSlot): string {
    switch (slot.state) {
      case SlotState.Occupied: return 'silver';
      case SlotState.Empty: return 'red';
      case SlotState.Filling: return 'yellow';
      case SlotState.Full: return 'lightgreen';
      default: return 'gray'; //  For unknown type and SlotType.Unoccupied
    }
  }
}
