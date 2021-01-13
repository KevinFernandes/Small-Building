import { Guid } from 'guid-typescript';
import { EmptyFloorInfo, FloorInfo, LobbyFloorInfo } from './floor-info';
import { FloorType } from './floor-type.enum';

export class Floor {
    ID = 0;
    floorID: string;
    floorInfo: FloorInfo;

    static makeLobbyFloor(): Floor {
        return new Floor(new LobbyFloorInfo());
    }

    static makeEmptyFloor(): Floor {
        return new Floor(new EmptyFloorInfo());
    }

    constructor(floorInfo: FloorInfo) {
        this.floorInfo = floorInfo;
        this.floorID = Guid.raw();
    }

    buildFloor(floorInfo: FloorInfo): void {
        this.floorInfo = floorInfo;
    }

    complete(): void {
        if (this.floorInfo) {
            this.floorInfo.buildStart = null;
        }
    }
}
