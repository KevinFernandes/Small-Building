import { Guid } from 'guid-typescript';
import { EmptyFloorInfo, FloorInfo, LobbyFloorInfo, TopFloorInfo } from './floor-info';
import { FloorType } from './floor-type.enum';

export class Floor {
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

    get isEmpty(): boolean {
        return this.floorInfo?.floorType === FloorType.Empty;
    }

    get isLobby(): boolean {
        return this.floorInfo?.floorType === FloorType.Lobby;
    }

    get isTop(): boolean {
        return this.floorInfo?.floorType === FloorType.Top;
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
