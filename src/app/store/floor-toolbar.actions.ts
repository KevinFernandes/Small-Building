import { FloorType } from '../models/floor-type.enum';
import { MoveDirection } from '../models/move-direction.enum';

export class MakeFloor {
    /**
     * this is required by NGSX?? to identify the action
     */
    static readonly type = '[floor-toolbar] makeFloor';

    constructor(public floorID: string, public floorType: FloorType) {
    }
}

export class MoveFloor {
    /**
     * this is required by NGSX?? to identify the action
     */
    static readonly type = '[floor-toolbar] moveFloor';
    constructor(public floorID: string, public moveDirection: MoveDirection) {
    }
}
