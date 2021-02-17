import { CreativeFloorInfo, FloorInfo, FoodFloorInfo, RecreationFloorInfo, ResidentialFloorInfo, RetailFloorInfo, ServiceFloorInfo } from './floor-info';
import { FloorType } from './floor-type.enum';

export abstract class Floors {
  public floors: Array<FloorInfo> = [];
  public floorType: FloorType;
  /**
   *
   * @param excludes Array of floor ID to exclude from the random generation
   */
  public randomFloor(
    excludes: Array<string> = []
  ): FloorInfo {
    const floors = this.floors.filter(
      (floorInfo: FloorInfo) => excludes.indexOf(floorInfo.ID) < 0
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
  private static recreationFloors: Array<FloorInfo> = null;
  private static foodFloors: Array<FloorInfo> = null;
  private static creativeFloors: Array<FloorInfo> = null;
  private static serviceFloors: Array<FloorInfo> = null;

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

  public static RecreationalFloors(): Array<FloorInfo> {
    if (!this.recreationFloors) {
      this.recreationFloors = [];
      this.recreationFloors.push(new RecreationFloorInfo('Recreation 1'));
      this.recreationFloors.push(new RecreationFloorInfo('Recreation 2'));
      this.recreationFloors.push(new RecreationFloorInfo('Recreation 3'));
      this.recreationFloors.push(new RecreationFloorInfo('Recreation 4'));
      this.recreationFloors.push(new RecreationFloorInfo('Recreation 5'));
      this.recreationFloors.push(new RecreationFloorInfo('Recreation 6'));
      this.recreationFloors.push(new RecreationFloorInfo('Recreation 7'));
      this.recreationFloors.push(new RecreationFloorInfo('Recreation 8'));
      this.recreationFloors.push(new RecreationFloorInfo('Recreation 9'));
    }

    return this.recreationFloors;
  }

  public static FoodFloors(): Array<FloorInfo> {
    if (!this.foodFloors) {
      this.foodFloors = [];
      this.foodFloors.push(new FoodFloorInfo('Food 1'));
      this.foodFloors.push(new FoodFloorInfo('Food 2'));
      this.foodFloors.push(new FoodFloorInfo('Food 3'));
      this.foodFloors.push(new FoodFloorInfo('Food 4'));
      this.foodFloors.push(new FoodFloorInfo('Food 5'));
      this.foodFloors.push(new FoodFloorInfo('Food 6'));
      this.foodFloors.push(new FoodFloorInfo('Food 7'));
      this.foodFloors.push(new FoodFloorInfo('Food 8'));
      this.foodFloors.push(new FoodFloorInfo('Food 9'));
    }

    return this.foodFloors;
  }

  public static ServiceFloors(): Array<FloorInfo> {
    if (!this.serviceFloors) {
      this.serviceFloors = [];
      this.serviceFloors.push(new ServiceFloorInfo('Service 1'));
      this.serviceFloors.push(new ServiceFloorInfo('Service 2'));
      this.serviceFloors.push(new ServiceFloorInfo('Service 3'));
      this.serviceFloors.push(new ServiceFloorInfo('Service 4'));
      this.serviceFloors.push(new ServiceFloorInfo('Service 5'));
      this.serviceFloors.push(new ServiceFloorInfo('Service 6'));
      this.serviceFloors.push(new ServiceFloorInfo('Service 7'));
      this.serviceFloors.push(new ServiceFloorInfo('Service 8'));
      this.serviceFloors.push(new ServiceFloorInfo('Service 9'));
    }

    return this.serviceFloors;
  }

  public static CreativeFloors(): Array<FloorInfo> {
    if (!this.creativeFloors) {
      this.creativeFloors = [];
      this.creativeFloors.push(new CreativeFloorInfo('Creative 1'));
      this.creativeFloors.push(new CreativeFloorInfo('Creative 2'));
      this.creativeFloors.push(new CreativeFloorInfo('Creative 3'));
      this.creativeFloors.push(new CreativeFloorInfo('Creative 4'));
      this.creativeFloors.push(new CreativeFloorInfo('Creative 5'));
      this.creativeFloors.push(new CreativeFloorInfo('Creative 6'));
      this.creativeFloors.push(new CreativeFloorInfo('Creative 7'));
      this.creativeFloors.push(new CreativeFloorInfo('Creative 8'));
      this.creativeFloors.push(new CreativeFloorInfo('Creative 9'));
    }

    return this.creativeFloors;
  }
}

export class ResidentialFloors extends Floors {
  constructor() {
    super();
    this.floorType = FloorType.Residential;
    this.floors = AllFloors.ResidentialFloors();

  }
}

export class RetailFloors extends Floors {
  constructor() {
    super();

    this.floorType = FloorType.Retail;
    this.floors = AllFloors.RetailFloors();
  }

}

export class RecreationalFloors extends Floors {
  constructor() {
    super();

    this.floorType = FloorType.Recreational;
    this.floors = AllFloors.RecreationalFloors();
  }
}

export class FoodFloors extends Floors {
  constructor() {
    super();

    this.floorType = FloorType.Food;
    this.floors = AllFloors.FoodFloors();
  }
}

export class ServiceFloors extends Floors {
  constructor() {
    super();

    this.floorType = FloorType.Service;
    this.floors = AllFloors.ServiceFloors();
  }
}

export class CreativeFloors extends Floors {
  constructor() {
    super();

    this.floorType = FloorType.Creative;
    this.floors = AllFloors.CreativeFloors();
  }
}
