import { EmptyFloorInfo, FloorInfo } from './floor-info';
import { FloorType } from './floor-type.enum';

export class Floor {
    floorID: number;
    floorInfo: FloorInfo;

    static makeEmptyFloor(floorID: number): Floor {
        return new Floor(new EmptyFloorInfo(), floorID);
    }

    constructor(floorInfo: FloorInfo, floorID) {
        this.floorInfo = floorInfo;
        this.floorID = floorID;
    }

}
