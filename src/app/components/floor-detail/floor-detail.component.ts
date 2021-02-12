import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { IFloorDialog } from 'src/app/models/floor-dialog.interface';
import { FloorInfo } from 'src/app/models/floor-info';
import { FloorSlot, SlotState } from 'src/app/models/floor-slot';
import { FloorType } from 'src/app/models/floor-type.enum';
import { AddFloor } from 'src/app/store/toolbar.actions';
import { BusinessModalComponent } from '../business-modal/business-modal.component';
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

  /**
   * FloorInfo input
   */
  @Input()
  set FloorInfo(value: FloorInfo) {
    this.floorInfo = value;
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

  constructor(private store: Store, private modalService: NgbModal) {
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
      default: {
        r = BusinessModalComponent;
      }
    }
    const ref = this.modalService.open(r, { centered: true });
    (ref.componentInstance as IFloorDialog).title = this.floorInfo.floorName;
    (ref.componentInstance as IFloorDialog).type = this.floorInfo.floorType;
    (ref.componentInstance as IFloorDialog).slots = this.floorInfo.slots;
  }

  addFloor(): void {
    this.store.dispatch(new AddFloor());
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

  // labelColor(): string {
  //   switch (this.floorInfo?.floorType) {
  //     case FloorType.Retail: {
  //       return 'magenta';
  //     }
  //     case FloorType.Residential: {
  //       return 'lightgray';
  //     }
  //     case FloorType.Recreational: {
  //       return 'yellow';
  //     }
  //     case FloorType.Food: {
  //       return 'green';
  //     }
  //     case FloorType.Creative: {
  //       return 'orange';
  //     }
  //     case FloorType.Service: {
  //       return 'blue';
  //     }
  //     default: {
  //       return 'white';
  //     }
  //   }
  // }

}
