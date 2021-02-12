import { Pipe, PipeTransform } from '@angular/core';
import { FloorType } from '../models/floor-type.enum';

@Pipe({
  name: 'floorTypeColor'
})
export class FloorTypeColorPipe implements PipeTransform {

  transform(value: FloorType): string {
    switch (value) {
      case FloorType.Retail: {
        return 'magenta';
      }
      case FloorType.Residential: {
        return 'lightgray';
      }
      case FloorType.Recreational: {
        return 'yellow';
      }
      case FloorType.Food: {
        return 'green';
      }
      case FloorType.Creative: {
        return 'orange';
      }
      case FloorType.Service: {
        return 'blue';
      }
      default: {
        return 'white';
      }
    }
  }

}
