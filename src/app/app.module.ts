import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { BusinessModalComponent } from './components/business-modal/business-modal.component';
import { BusinessSlotComponent } from './components/business-slot/business-slot.component';
import { EmptyModalComponent } from './components/empty-modal/empty-modal.component';
import { FloorDetailComponent } from './components/floor-detail/floor-detail.component';
import { FloorSlotBarComponent } from './components/floor-slot-bar/floor-slot-bar.component';
import { FloorSlotComponent } from './components/floor-slot/floor-slot.component';
import { FloorToolbarComponent } from './components/floor-toolbar/floor-toolbar.component';
import { FloorComponent } from './components/floor/floor.component';
import { LobbyModalComponent } from './components/lobby-modal/lobby-modal.component';
import { ResidentialModalComponent } from './components/residential-modal/residential-modal.component';
import { ResidentialSlotComponent } from './components/residential-slot/residential-slot.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PipesModule } from './pipes/pipes.module';
import { AppTimerService } from './services/app-timer/app-timer.service';
import { ApplicationState } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    FloorComponent,
    ToolbarComponent,
    FloorDetailComponent,
    FloorToolbarComponent,
    FloorSlotComponent,
    FloorSlotBarComponent,
    LobbyModalComponent,
    ResidentialModalComponent,
    ResidentialSlotComponent,
    BusinessModalComponent,
    BusinessSlotComponent,
    EmptyModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PipesModule,
    NgxsModule.forRoot([ApplicationState], { developmentMode: true}),
    NgbModule,
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [AppTimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
