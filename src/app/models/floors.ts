import { Floor } from './floor';
import { FloorType } from './floor-type.enum';

export abstract class Floors {
    public floors: Array<Floor> = [];
}

export class ResidentialFloors extends Floors {

    constructor() {
        super();

        this.init();
    }

    protected init(): void {
        this.floors.push(new Floor('Residential 1', FloorType.Residential));
        this.floors.push(new Floor('Residential 2', FloorType.Residential));
        this.floors.push(new Floor('Residential 3', FloorType.Residential));
        this.floors.push(new Floor('Residential 4', FloorType.Residential));
        this.floors.push(new Floor('Residential 5', FloorType.Residential));
        this.floors.push(new Floor('Residential 6', FloorType.Residential));
        this.floors.push(new Floor('Residential 7', FloorType.Residential));
        this.floors.push(new Floor('Residential 8', FloorType.Residential));
        this.floors.push(new Floor('Residential 9', FloorType.Residential));
    }
}

export class RetailFloors extends Floors {
    constructor() {
        super();

        this.init();
    }

    protected init(): void {
        this.floors.push(new Floor('Retail 1', FloorType.Retail));
        this.floors.push(new Floor('Retail 2', FloorType.Retail));
        this.floors.push(new Floor('Retail 3', FloorType.Retail));
        this.floors.push(new Floor('Retail 4', FloorType.Retail));
        this.floors.push(new Floor('Retail 5', FloorType.Retail));
        this.floors.push(new Floor('Retail 6', FloorType.Retail));
        this.floors.push(new Floor('Retail 7', FloorType.Retail));
        this.floors.push(new Floor('Retail 8', FloorType.Retail));
        this.floors.push(new Floor('Retail 9', FloorType.Retail));
   }
}
