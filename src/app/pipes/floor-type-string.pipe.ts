import { Pipe, PipeTransform } from '@angular/core';
import { FloorType } from '../models/floor-type.enum';

@Pipe({
  name: 'floorTypeString'
})
export class FloorTypeStringPipe implements PipeTransform {

  transform(value: FloorType): string {
    switch (value) {
      case FloorType.Retail: {
        return 'Retail';
      }
      case FloorType.Residential: {
        return 'Residential';
      }
      case FloorType.Recreational: {
        return 'Recreational';
      }
      case FloorType.Food: {
        return 'Food';
      }
      case FloorType.Creative: {
        return 'Creative';
      }
      case FloorType.Service: {
        return 'Service';
      }
      case FloorType.Lobby: {
        return 'Lobby';
      }
      case FloorType.Top: {
        return 'Top';
      }
      default: {
        return 'Empty';
      }
    }
  }

}
