import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FloorComponent } from './components/floor/floor.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NgxsModule } from '@ngxs/store';
import { ApplicationState } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    FloorComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([ApplicationState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
