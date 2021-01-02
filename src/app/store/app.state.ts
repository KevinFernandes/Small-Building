import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { Floor } from '../models/floor';
import { Addfloor } from './toolbar.actions';

export class ApplicationStateModel {
    floors: Array<Floor> = [];
}


@State<ApplicationStateModel>({
    name: 'appstate',
    defaults: new ApplicationStateModel()
})
@Injectable()
export class ApplicationState {
    @Action(Addfloor)
    addFloor({ patchState, getState }: StateContext<ApplicationStateModel>): void {
      const state = getState().floors;

      const floors = [...state, new Floor()];
      patchState({
        floors
      });
    }
}
