import { moduleMetadata, storiesOf, Story } from '@storybook/angular';
import { FloorDetailComponent } from '../floor-detail.component';
import { EmptyFloorInfo, LobbyFloorInfo, ResidentialFloorInfo, RetailFloorInfo, TopFloorInfo } from 'src/app/models/floor-info';
import { CommonModule } from '@angular/common';

// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/floor-detail',
  argTypes: {
    FloorInfo: { control: 'object' }
  },
  // The component related to the Stories
  component: FloorDetailComponent,
  decorators: [
    // The necessary modules for the component to work on Storybook
    moduleMetadata({
      declarations: [FloorDetailComponent],
      // imports: [CommonModule],
    })
  ],
};
// This creates a Story for the component
const Template: Story<FloorDetailComponent> = (args: any) => ({
  component: FloorDetailComponent,
  props: args
});

export const Lobby = Template.bind({});
Lobby.args = {
  FloorInfo: new LobbyFloorInfo()
};

export const Top = Template.bind({});
Top.args = {
  FloorInfo: new TopFloorInfo()
};

export const Empty = Template.bind({});
Empty.args = {
  FloorInfo: new EmptyFloorInfo()
};

export const Residential = Template.bind({});
Residential.args = {
  FloorInfo: new ResidentialFloorInfo('Residential 1')
};
