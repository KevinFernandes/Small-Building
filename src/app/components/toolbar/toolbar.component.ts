import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Addfloor } from 'src/app/store/toolbar.actions';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addFloor(): void {
    this.store.dispatch(new Addfloor()).subscribe(() => {
      const x = 0;
    });
  }

}
