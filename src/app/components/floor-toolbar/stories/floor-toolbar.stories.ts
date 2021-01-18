import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular/dist/client/preview/types';
import { EmptyFloorInfo } from 'src/app/models/floor-info';
import { FloorToolbarComponent } from '../floor-toolbar.component';

// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/floor-toolbar',
  // The component related to the Stories
  component: FloorToolbarComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [FloorToolbarComponent],
      imports: [CommonModule],
    }),
  ],
};

// This creates a Story for the component
const EmptyTemplate: Story<FloorToolbarComponent> = () => ({
  component: FloorToolbarComponent,
  // template: `<app-floor-toolbar [floorInfo]="floorInfo"></app-floor-toolbar>`,
});

export const Empty = EmptyTemplate.bind({});

Empty.args = {
  floorInfo: new EmptyFloorInfo(),
};
