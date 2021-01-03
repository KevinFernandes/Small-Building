import { Floor } from './floor';
import { FloorInfo, ResidentialFloorInfo, RetailFloorInfo } from './floor-info';
import { FloorType } from './floor-type.enum';

export abstract class Floors {
    public floors: Array<FloorInfo> = [];
}

export class ResidentialFloors extends Floors {

    constructor() {
        super();

        this.init();
    }

    protected init(): void {
        this.floors.push(new ResidentialFloorInfo('Residential 1'));
        this.floors.push(new ResidentialFloorInfo('Residential 2'));
        this.floors.push(new ResidentialFloorInfo('Residential 3'));
        this.floors.push(new ResidentialFloorInfo('Residential 4'));
        this.floors.push(new ResidentialFloorInfo('Residential 5'));
        this.floors.push(new ResidentialFloorInfo('Residential 6'));
        this.floors.push(new ResidentialFloorInfo('Residential 7'));
        this.floors.push(new ResidentialFloorInfo('Residential 8'));
        this.floors.push(new ResidentialFloorInfo('Residential 9'));
    }
}

export class RetailFloors extends Floors {
    constructor() {
        super();

        this.init();
    }

    protected init(): void {
        this.floors.push(new RetailFloorInfo('Retail 1'));
        this.floors.push(new RetailFloorInfo('Retail 2'));
        this.floors.push(new RetailFloorInfo('Retail 3'));
        this.floors.push(new RetailFloorInfo('Retail 4'));
        this.floors.push(new RetailFloorInfo('Retail 5'));
        this.floors.push(new RetailFloorInfo('Retail 6'));
        this.floors.push(new RetailFloorInfo('Retail 7'));
        this.floors.push(new RetailFloorInfo('Retail 8'));
        this.floors.push(new RetailFloorInfo('Retail 9'));
   }
}
