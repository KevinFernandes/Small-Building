import { Floor } from 'src/app/models/floor';
import { ResidentialFloorInfo } from 'src/app/models/floor-info';
import { FloorToolbarComponent } from '../floor-toolbar.component';

// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/floor-toolbar',
  argTypes: {
    Floor: { control: 'object' },
    FloorCount: { control: 'number' }
  },

  // The component related to the Stories
  component: FloorToolbarComponent,
};

// This creates a Story for the component
const template = (args: any) => ({
  component: FloorToolbarComponent,
  props: args
});

export const Empty = template.bind({});

let floor = Floor.makeEmptyFloor();
floor.ID = 1;
Empty.args = {
  Floor: floor,
  FloorCount: 3
};

export const Building = template.bind({});

floor = Floor.makeEmptyFloor();
floor.ID = 1;
floor.floorInfo.timeRemaining = 1;
Building.args = {
  Floor: floor,
  FloorCount: 3
};

export const Completed = template.bind({});

floor = Floor.makeEmptyFloor();
floor.ID = 1;
floor.floorInfo = new ResidentialFloorInfo('Residential 1');
floor.floorInfo.timeRemaining = 0;
Completed.args = {
  Floor: floor,
  FloorCount: 3
};
