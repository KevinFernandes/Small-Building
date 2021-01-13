import { Guid } from 'guid-typescript';
import { FloorSlot } from './floor-slot';
import { FloorType } from './floor-type.enum';

export interface IFloorInfo {
    floorName: string;
    floorType: FloorType;
    slots: Array<FloorSlot>;
}

export abstract class FloorInfo implements IFloorInfo {
    floorId: string;
    floorName: string;
    floorType: FloorType;
    slots: Array<FloorSlot>;
    buildStart: Date;

    constructor(floorName: string, floorType: FloorType, slots: number) {
        this.floorId = Guid.raw();
        this.floorName = floorName;
        this.floorType = floorType;
        this.slots = [];
        this.buildStart = new Date();

        for (let i = 0; i < slots; ++i) {
            this.slots.push(new FloorSlot());
        }
    }
}

export class LobbyFloorInfo extends FloorInfo {
    constructor() {
        super('Lobby', FloorType.Lobby, 0);
        this.buildStart = null;
    }
}

export class EmptyFloorInfo extends FloorInfo {
    constructor() {
        super('Empty floor', FloorType.Empty, 0);
        this.buildStart = null;
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

export class RecreationFloorInfo extends FloorInfo {
    constructor(floorName: string) {
        super(floorName, FloorType.Recreational, 3);
    }
}
