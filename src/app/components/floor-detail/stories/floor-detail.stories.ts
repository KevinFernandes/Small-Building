import { moduleMetadata, storiesOf, Story } from '@storybook/angular';
import { FloorDetailComponent } from '../floor-detail.component';
import { EmptyFloorInfo, LobbyFloorInfo, ResidentialFloorInfo, RetailFloorInfo } from 'src/app/models/floor-info';
import { CommonModule } from '@angular/common';

// storiesOf('Components/floor-detail', module)
//   .add('Empty', () => ({
//     component: FloorDetailComponent,
//     // template: `<app-floor-detail [floorInfo]="floorInfo"></app-floor-detail>`,
//     props: {
//       floorInfo: new EmptyFloorInfo()
//     }
//   }))
//   .add('Lobby', () => ({
//     component: FloorDetailComponent,
//     props: {
//       floorInfo: new LobbyFloorInfo()
//     }
//   }))
//   .add('Residential', () => ({
//     component: FloorDetailComponent,
//     props: {
//       floorInfo: new ResidentialFloorInfo('Residential 1')
//     }
//   }))
//   .add('Retail', () => ({
//     component: FloorDetailComponent,
//     props: {
//       floorInfo: new RetailFloorInfo('Retail 1')
//     }
//   }));
// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/floor-detail',
  // The component related to the Stories
  component: FloorDetailComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [FloorDetailComponent],
      imports: [CommonModule],
    })
  ],
};
// This creates a Story for the component
const EmptyTemplate: Story<FloorDetailComponent> = () => ({
  component: FloorDetailComponent,
  // template: `<app-floor-detail [floorInfo]="floorInfo"></app-floor-detail>`,
});
export const Empty = EmptyTemplate.bind({});
Empty.args = {
  floorInfo: new EmptyFloorInfo()
};
