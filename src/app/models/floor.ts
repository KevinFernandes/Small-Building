import { Guid } from 'guid-typescript';
import { EmptyFloorInfo, FloorInfo, LobbyFloorInfo, TopFloorInfo } from './floor-info';

export class Floor {
    ID = 0;
    floorID: string;
    floorInfo: FloorInfo;

    static makeLobbyFloor(): Floor {
        return new Floor(new LobbyFloorInfo());
    }

    static makeTopFloor(): Floor {
        return new Floor(new TopFloorInfo());
    }

    static makeEmptyFloor(): Floor {
        return new Floor(new EmptyFloorInfo());
    }

    constructor(floorInfo: FloorInfo) {
        this.floorInfo = floorInfo;
        this.floorID = Guid.raw();
    }

    tick(): void {
        if (this.floorInfo) {
            this.floorInfo.tick();
        }
    }

    buildFloor(floorInfo: FloorInfo): void {
        this.floorInfo = floorInfo;
    }

    complete(): void {
        if (this.floorInfo) {
            this.floorInfo.timeRemaining = 0;
        }
    }
}
