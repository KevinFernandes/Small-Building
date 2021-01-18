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
    buildTime: Date;
    timeRemaining: number;

    constructor(floorName: string, floorType: FloorType, slots: number) {
        this.floorId = Guid.raw();
        this.floorName = floorName;
        this.floorType = floorType;
        this.slots = [];
        this.timeRemaining = 3000; // 30 seconds

        for (let i = 0; i < slots; ++i) {
            this.slots.push(new FloorSlot());
        }
    }

    public tick(): void {
        if (this.timeRemaining > 0) {
            this.timeRemaining -= 1;
        }
    }
}

export class LobbyFloorInfo extends FloorInfo {
    constructor() {
        super('Lobby', FloorType.Lobby, 0);
        this.timeRemaining = 0;
    }
}

export class TopFloorInfo extends FloorInfo {
    constructor() {
        super('', FloorType.Top, 0);
        this.timeRemaining = 0;
    }
}

export class EmptyFloorInfo extends FloorInfo {
    constructor() {
        super('Empty floor', FloorType.Empty, 0);
        this.timeRemaining = 0;
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

export class ServiceFloorInfo extends FloorInfo {
    constructor(floorName: string) {
        super(floorName, FloorType.Service, 3);
    }
}

export class FoodFloorInfo extends FloorInfo {
    constructor(floorName: string) {
        super(floorName, FloorType.Food, 3);
    }
}

export class CreativeFloorInfo extends FloorInfo {
    constructor(floorName: string) {
        super(floorName, FloorType.Creative, 3);
    }
}
