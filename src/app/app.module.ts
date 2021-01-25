import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FloorComponent } from './components/floor/floor.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NgxsModule } from '@ngxs/store';
import { ApplicationState } from './store/app.state';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FloorDetailComponent } from './components/floor-detail/floor-detail.component';
import { FloorToolbarComponent } from './components/floor-toolbar/floor-toolbar.component';
import { AppTimerService } from './services/app-timer/app-timer.service';
import { FloorSlotComponent } from './components/floor-slot/floor-slot.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FloorComponent,
    ToolbarComponent,
    FloorDetailComponent,
    FloorToolbarComponent,
    FloorSlotComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([ApplicationState]),
    NgbModule
  ],
  providers: [AppTimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
