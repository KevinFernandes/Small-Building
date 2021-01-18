import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, timer } from 'rxjs';
import { share } from 'rxjs/operators';
import { TimerTick } from 'src/app/store/tick.actions';

@Injectable({
  providedIn: 'root'
})
export class AppTimerService {

  private timer$: Observable<number>;
  constructor(private store: Store) {
    this.timer$ = timer(0, 1000).pipe(share());
    this.timer$.subscribe(() => {
      store.dispatch(new TimerTick());
    });
  }

  public get Timer$(): Observable<number> {
    return this.timer$;
  }
}
