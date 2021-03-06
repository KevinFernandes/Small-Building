import { Guid } from 'guid-typescript';
import { FloorSlot, ResidentialFloorSlot, RetailFloorSlot, SlotState } from './floor-slot';
import { FloorType } from './floor-type.enum';

export interface IFloorInfo {
  floorName: string;
  floorType: FloorType;
  slots: Array<FloorSlot>;
}

export abstract class FloorInfo implements IFloorInfo {
  ID: string;
  floorName: string;
  floorType: FloorType;
  slots: Array<FloorSlot>;
  buildTime: Date;
  timeRemaining: number;

  constructor(floorName: string, floorType: FloorType) {
    this.ID = Guid.raw();
    this.floorName = floorName;
    this.floorType = floorType;
    this.slots = [];
    this.timeRemaining = 3000; // 30 seconds
  }

  public tick(): void {
    if (this.timeRemaining > 0) {
      this.timeRemaining -= 1;
    }
  }
}

export class LobbyFloorInfo extends FloorInfo {
  constructor() {
    super('Lobby', FloorType.Lobby);
    this.timeRemaining = 0;
  }
}

export class TopFloorInfo extends FloorInfo {
  constructor() {
    super('', FloorType.Top);
    this.timeRemaining = 0;
  }
}

export class EmptyFloorInfo extends FloorInfo {
  constructor() {
    super('Empty floor', FloorType.Empty);
    this.timeRemaining = 0;
  }
}

export class ResidentialFloorInfo extends FloorInfo {
  constructor(floorName: string) {
    super(floorName, FloorType.Residential);

    this.slots.push(new ResidentialFloorSlot('slot 1'));
    this.slots.push(new ResidentialFloorSlot('slot 2'));
    this.slots.push(new ResidentialFloorSlot('slot 3'));
    this.slots.push(new ResidentialFloorSlot('slot 4'));
    this.slots.push(new ResidentialFloorSlot('slot 5'));
  }
}

export class RetailFloorInfo extends FloorInfo {
  constructor(floorName: string) {
    super(floorName, FloorType.Retail);

    for (let i = 0; i < 3; ++i) {
      this.slots.push(new RetailFloorSlot('slot 1'));
    }
  }
}

export class RecreationFloorInfo extends FloorInfo {
  constructor(floorName: string) {
    super(floorName, FloorType.Recreational);

    for (let i = 0; i < 3; ++i) {
      this.slots.push(new RetailFloorSlot('slot 1'));
    }
  }
}

export class ServiceFloorInfo extends FloorInfo {
  constructor(floorName: string) {
    super(floorName, FloorType.Service);

    for (let i = 0; i < 3; ++i) {
      this.slots.push(new RetailFloorSlot('slot 1'));
    }
  }
}

export class FoodFloorInfo extends FloorInfo {
  constructor(floorName: string) {
    super(floorName, FloorType.Food);

    for (let i = 0; i < 3; ++i) {
      this.slots.push(new RetailFloorSlot('slot 1'));
    }
  }
}

export class CreativeFloorInfo extends FloorInfo {
  constructor(floorName: string) {
    super(floorName, FloorType.Creative);

    for (let i = 0; i < 3; ++i) {
      this.slots.push(new RetailFloorSlot('slot 1'));
    }
  }
}
