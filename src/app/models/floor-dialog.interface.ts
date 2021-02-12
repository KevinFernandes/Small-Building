import { FloorSlot } from './floor-slot';
import { FloorType } from './floor-type.enum';

export interface IFloorDialog {
    title: string;
    slots: Array<FloorSlot>;
    type: FloorType ;
}
