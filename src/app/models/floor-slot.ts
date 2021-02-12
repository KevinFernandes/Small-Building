
export enum SlotState {
    Occupied = 'occupied',
    Unoccupied = 'unoccupied',
    Empty = 'empty',
    Filling = 'filling',
    Full = 'full'
}

export abstract class FloorSlot {
    state: SlotState;
    name: string;
    constructor(name: string, state: SlotState) {
        this.state = state;
        this.name = name;
    }
}

export class ResidentialFloorSlot extends FloorSlot {
    constructor(name: string) {
        super(name, SlotState.Unoccupied);
    }
}

export class RetailFloorSlot extends FloorSlot {
    constructor(name: string) {
        super(name, SlotState.Empty);
    }
}
