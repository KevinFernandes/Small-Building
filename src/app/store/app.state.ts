import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Floor } from '../models/floor';
import { FloorInfo } from '../models/floor-info';
import { FloorType } from '../models/floor-type.enum';
import { ResidentialFloors, RetailFloors } from '../models/floors';
import { MakeResidential, MakeRetail } from './floor-toolbar.actions';
import { AddFloor } from './toolbar.actions';

/**
 *  The state model for the application
 * these are the properties for the entire application
 * there is the possibility to support sub-states which would 
 * be independent states that the application needs to handle
 * Currently we do not need sub-states
 */
export class ApplicationStateModel {
  /**
   * The floors current floors in the tower
   */
  floors: Array<Floor> = [Floor.makeLobbyFloor()];
}

/**
 *  NgSX state manager
 * this class describes the entire state to the application,
 * what actions can be performed, what "slices" or selections of the
 * state the the aplication can get.
 *
 * The @State attribute describes to NgSX, that this is a state that
 * it should manage
 */
@State<ApplicationStateModel>({
  name: 'appstate',
  defaults: new ApplicationStateModel()
})
@Injectable()
export class ApplicationState {

  /**
   * @Selector - tells NGSX that this is a selector method that will return
   * slices of the state
   *
   * This method returns all the floors currently in the tower
   * @param state - the application state to use to rerieve the data
   */
  @Selector()
  static getAllFloors(state: ApplicationStateModel): Floor[] {
    return state.floors;
  }

  /**
   * @Action - tells NGSX that this is an action that can be performed on the state
   * 
   * This Action adds a floor to the towers list of floors
   * @param - This parameter destructures the StateContext of the ApplicationStateModel into
   * patchState and getState methods.
   */
  @Action(AddFloor)
  addFloor({ patchState, getState }: StateContext<ApplicationStateModel>): void {
    //  we use the destructured "getState()" method to retrieve the current list of floors
    //  from the application state
    const state = getState().floors;

    //  To keep this method "functional", we do not modify the floors directly
    //  instead we create a new array adding the new floor
    const floors = [...state, Floor.makeEmptyFloor()];

    //  then we call the destructured "patchState()" method to update the floors
    patchState({
      floors
    });
  }



  @Action(MakeResidential)
  makeResidential(ctx: StateContext<ApplicationStateModel>, action: MakeResidential): void {
    const state = ctx.getState().floors;
    const floors = new ResidentialFloors();
    const retail: FloorInfo = floors.randomFloor(FloorType.Residential, state);

    if (!retail) {
      return;
    }

    state.find((floor) => floor.floorID === action.floorID).floorInfo = retail;
    ctx.patchState({
      floors: state
    });

  }

  @Action(MakeRetail)
  makeRetail(ctx: StateContext<ApplicationStateModel>, action: MakeRetail): void {
    const floors = new RetailFloors();
    const state = ctx.getState().floors;
    const retail: FloorInfo = floors.randomFloor(FloorType.Retail, state);

    if (!retail) {
      return;
    }

    state.find((floor) => floor.floorID === action.floorID).floorInfo = retail;
    ctx.patchState({
      floors: state
    });

  }
}
