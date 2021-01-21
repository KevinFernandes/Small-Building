
export enum SlotState {
    Occupied = 'occupied',
    Unoccupied = 'unoccupied',
    Empty = 'empty',
    Filling = 'filling',
    Full = 'full'
}

export class FloorSlot {
    occupied: SlotState;
    constructor(state: SlotState) {
        this.occupied = state;
    }
}
