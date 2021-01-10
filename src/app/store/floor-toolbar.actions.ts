import { FloorInfo } from '../models/floor-info';


export class MakeResidential {
    /**
     * this is required by NGSX?? to identify the action
     */
    static readonly type = '[floor-toolbar] makeResidential';

    /**
     * Default constructor, currently no parameters.
     */
    constructor(public floorID: string) {
    }
}

export class MakeRetail {
    /**
     * this is required by NGSX?? to identify the action
     */
    static readonly type = '[floor-toolbar] makeRetail';

    /**
     * Default constructor, currently no parameters.
     */
    constructor(public floorID: string) {
    }
}
