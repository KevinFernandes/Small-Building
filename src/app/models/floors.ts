import { Floor } from './floor';
import { FloorInfo, ResidentialFloorInfo, RetailFloorInfo } from './floor-info';
import { FloorType } from './floor-type.enum';

export abstract class Floors {
  public floors: Array<FloorInfo> = [];

  public randomFloor(
    floorType: FloorType,
    excludes: Array<Floor> = []
  ): FloorInfo {
    const IDs = excludes
      .filter((floor) => floor.floorInfo.floorType === floorType)
      .map((floor) => floor.floorInfo.floorId);
    const floors = this.floors.filter(
      (floorInfo: FloorInfo) => IDs.indexOf(floorInfo.floorId) < 0
    );

    if (!floors || floors.length <= 0) {
      return null;
    }

    return floors[this.getRandom(0, floors.length)];
  }

  private getRandom(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}

export class AllFloors {
  private static resFloors: Array<FloorInfo> = null;
  private static retailFloors: Array<FloorInfo> = null;

  public static ResidentialFloors(): Array<FloorInfo> {
    if (!this.resFloors) {
      this.resFloors = [];
      this.resFloors.push(new ResidentialFloorInfo('Residential 1'));
      this.resFloors.push(new ResidentialFloorInfo('Residential 2'));
      this.resFloors.push(new ResidentialFloorInfo('Residential 3'));
      this.resFloors.push(new ResidentialFloorInfo('Residential 4'));
      this.resFloors.push(new ResidentialFloorInfo('Residential 5'));
      this.resFloors.push(new ResidentialFloorInfo('Residential 6'));
      this.resFloors.push(new ResidentialFloorInfo('Residential 7'));
      this.resFloors.push(new ResidentialFloorInfo('Residential 8'));
      this.resFloors.push(new ResidentialFloorInfo('Residential 9'));
    }

    return this.resFloors;
  }

  public static RetailFloors(): Array<FloorInfo> {
    if (!this.retailFloors) {
      this.retailFloors = [];
      this.retailFloors.push(new RetailFloorInfo('Retail 1'));
      this.retailFloors.push(new RetailFloorInfo('Retail 2'));
      this.retailFloors.push(new RetailFloorInfo('Retail 3'));
      this.retailFloors.push(new RetailFloorInfo('Retail 4'));
      this.retailFloors.push(new RetailFloorInfo('Retail 5'));
      this.retailFloors.push(new RetailFloorInfo('Retail 6'));
      this.retailFloors.push(new RetailFloorInfo('Retail 7'));
      this.retailFloors.push(new RetailFloorInfo('Retail 8'));
      this.retailFloors.push(new RetailFloorInfo('Retail 9'));
    }

    return this.retailFloors;
  }

}

export class ResidentialFloors extends Floors {
  constructor() {
    super();

    this.floors = AllFloors.ResidentialFloors();

  }
}

export class RetailFloors extends Floors {
  constructor() {
    super();

    this.floors = AllFloors.RetailFloors();
  }

}
