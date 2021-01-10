
/**
 * This file contains the list of NGSX actions that can happen off the main
 * application toolbar
 */

/**
 * This class is the NGSX acton to add a new floor to the tower
 */
export class AddFloor {
    /**
     * this is required by NGSX?? to identify the action
     */
    static readonly type = '[toolbar] add floor';

    /**
     * Default constructor, currently no parameters.
     */
    constructor() {
    }
}
