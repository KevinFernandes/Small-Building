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

export class MakeRecreational {
    /**
     * this is required by NGSX?? to identify the action
     */
    static readonly type = '[floor-toolbar] makeRecreational';

    /**
     * Default constructor, currently no parameters.
     */
    constructor(public floorID: string) {
    }
}

export class MoveFloorUp {
    /**
     * this is required by NGSX?? to identify the action
     */
    static readonly type = '[floor-toolbar] moveFloorUp';

    /**
     * Default constructor, currently no parameters.
     */
    constructor(public floorID: string) {
    }
}

export class MoveFloorDown{
    /**
     * this is required by NGSX?? to identify the action
     */
    static readonly type = '[floor-toolbar] moveFloorDown';

    /**
     * Default constructor, currently no parameters.
     */
    constructor(public floorID: string) {
    }
}