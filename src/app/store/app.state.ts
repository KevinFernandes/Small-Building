import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Floor } from '../models/floor';
import { FloorInfo } from '../models/floor-info';
import { FloorType } from '../models/floor-type.enum';
import {
  CreativeFloors,
  Floors,
  FoodFloors,
  RecreationalFloors,
  ResidentialFloors,
  RetailFloors,
  ServiceFloors,
} from '../models/floors';
import { MoveDirection } from '../models/move-direction.enum';
import {
  MakeFloor,
  MoveFloor,
} from './floor-toolbar.actions';
import { TimerTick } from './tick.actions';
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
   * The current floors in the tower
   */
  floors: Array<Floor> = [Floor.makeLobbyFloor(), Floor.makeTopFloor()];
}

/**
 *  NgSX state manager
 * this class describes the entire state to the application,
 * what actions can be performed, what "slices" or selections of the
 * state the aplication can get.
 *
 * The @State attribute describes to NgSX, that this is a state that
 * it should manage
 */
@State<ApplicationStateModel>({
  name: 'appstate',
  defaults: new ApplicationStateModel(),
})
@Injectable()
export class ApplicationState {
  private residentialFloors = new ResidentialFloors();
  private retailFloors = new RetailFloors();
  private recreationalFloors = new RecreationalFloors();
  private foodFloors = new FoodFloors();
  private creativeFloors = new CreativeFloors();
  private serviceFloors = new ServiceFloors();

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

  @Action(TimerTick)
  timerTick(ctx: StateContext<ApplicationStateModel>): void {
    const state = ctx.getState().floors;

    if (state) {
      state.forEach((floor) => floor.tick());
    }
  }

  /**
   * @Action - tells NGSX that this is an action that can be performed on the state
   *
   * This Action adds a floor to the towers list of floors
   * @param - This parameter is the StateContext of the ApplicationStateModel
   */
  @Action(AddFloor)
  addFloor(ctx: StateContext<ApplicationStateModel>): void {
    //  we use the "getState()" method to retrieve the current list of floors
    //  from the application state
    const state = ctx.getState().floors;

    //  To keep this method "functional", we do not modify the floors array directly
    //  instead we create a new array adding the new floor
    const floor = Floor.makeEmptyFloor();
    floor.ID = state.length - 1;
    state.splice(-1, 0, floor);

    //  then we call "patchState()" method to update the floors
    ctx.patchState({
      floors: state,
    });
  }

  @Action(MakeFloor)
  makeFloor(ctx: StateContext<ApplicationStateModel>, action: MakeFloor): void {
    this.buildFloor(
      action.floorID,
      this.getFloorsByType(action.floorType),
      ctx
    );
  }

  @Action(MoveFloor)
  moveFloor(ctx: StateContext<ApplicationStateModel>, action: MoveFloor): void {
    const state = ctx.getState().floors;

    //  we assume that the index will be valid
    const index = state.findIndex((floor) => floor.floorID === action.floorID);

    switch (action.moveDirection) {
      case MoveDirection.Up: {
        //  can't replace the lobby so just return
        if (index - 1 === 0) {
          return;
        }
        [state[index - 1], state[index]] = [state[index], state[index - 1]];
        break;
      }
      case MoveDirection.Down: {
        //  can't go off the tower so return
        if (index + 1 >= state.length - 1) {
          return;
        }

        [state[index + 1], state[index]] = [state[index], state[index + 1]];
      }
    }

    state.forEach((floor, ind) => (floor.ID = ind));

    ctx.patchState({
      floors: state,
    });
  }

  private getFloorsByType(floorType: FloorType): Floors {
    switch (floorType) {
      case FloorType.Residential:
        return this.residentialFloors;
      case FloorType.Recreational:
        return this.recreationalFloors;
      case FloorType.Retail:
        return this.retailFloors;
      case FloorType.Creative:
        return this.creativeFloors;
      case FloorType.Service:
        return this.serviceFloors;
      case FloorType.Food:
        return this.foodFloors;
      default:
        throw new Error(`Unknown floor type specified ${floorType}`);
    }
  }

  private buildFloor(
    floorID: string,
    floorsData: Floors,
    ctx: StateContext<ApplicationStateModel>
  ): void {
    //  get the floors from the context
    const state = ctx.getState().floors;
    //  get a list of current floor IDs that match the requested floor type
    //  we need to be excluded when generating a random floor
    const IDs = state
      .filter((fl) => fl.floorInfo.floorType === floorsData.floorType)
      .map((fl) => fl.floorInfo.floorId);

    //  get a random floor info for the provided floor data
    //  exclude any floors of the current floor type
    const info: FloorInfo = floorsData.randomFloor(IDs);

    //  Did we find a new floor?
    if (!info) {
      //  No more floors of this type??
      return;
    }

    //  find the floor in the state that matches the floor ID
    const floor = state.find((fl) => fl.floorID === floorID);
    if (floor) {
      //  we found the floor, tell it to build with the new info
      floor.buildFloor(info);
    }

    //  patch the context state - do we need to do this?
    ctx.patchState({
      floors: state,
    });
  }
}
