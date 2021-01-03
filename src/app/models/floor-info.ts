import { FloorType } from './floor-type.enum';

export interface IFloorInfo {
    floorName: string;
    floorType: FloorType;
    slots: number;
}

export abstract class FloorInfo implements IFloorInfo {
    floorName: string;
    floorType: FloorType;
    slots: number;

    constructor(floorName: string, floorType: FloorType, slots: number) {
        this.floorName = floorName;
        this.floorType = floorType;
        this.slots = slots;
    }
}

export class EmptyFloorInfo extends FloorInfo {
    constructor() {
        super('Empty floor', FloorType.Empty, 0);
    }
}

export class ResidentialFloorInfo extends FloorInfo {
    constructor(floorName: string) {
        super(floorName, FloorType.Residential, 5);
    }
}

export class RetailFloorInfo extends FloorInfo {
    constructor(floorName: string) {
        super(floorName, FloorType.Retail, 3);
    }
}
