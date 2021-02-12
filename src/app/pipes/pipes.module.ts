import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FloorTypeColorPipe } from './floor-type-color.pipe';
import { FloorTypeStringPipe } from './floor-type-string.pipe';



@NgModule({
  declarations: [
    FloorTypeColorPipe,
    FloorTypeStringPipe
  ],
  exports: [
    FloorTypeColorPipe,
    FloorTypeStringPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
