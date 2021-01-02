import { FloorType } from './floor-type.enum';

export class Floor {

    constructor(floorName: string = 'Empty', floorType: FloorType = FloorType.Empty) {
        this.floorName = floorName;
        this.floorType = floorType;
    }

    public floorType: FloorType = FloorType.Empty;

    public floorName = 'Empty';
}
