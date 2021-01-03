import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Floor } from '../models/floor';
import { AddFloor } from './toolbar.actions';

/**
 *
 */
export class ApplicationStateModel {
    floors: Array<Floor> = [];
}

/**
 *
 */
@State<ApplicationStateModel>({
    name: 'appstate',
    defaults: new ApplicationStateModel()
})
@Injectable()
export class ApplicationState {

  @Selector()
  static getAllFloors(state: ApplicationStateModel): Floor[] {
    const entities = state.floors;
    return entities;
  }

  @Action(AddFloor)
  addFloor({ patchState, getState }: StateContext<ApplicationStateModel>): void {
    const state = getState().floors;

    const floors = [...state, Floor.makeEmptyFloor(state.length)];
    patchState({
      floors
    });
  }
}
