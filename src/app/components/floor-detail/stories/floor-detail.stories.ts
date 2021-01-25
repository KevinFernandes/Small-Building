import { Story } from '@storybook/angular';
import { FloorDetailComponent } from '../floor-detail.component';
import {
  CreativeFloorInfo,
  EmptyFloorInfo,
  FoodFloorInfo,
  LobbyFloorInfo,
  RecreationFloorInfo,
  ResidentialFloorInfo,
  RetailFloorInfo,
  ServiceFloorInfo,
  TopFloorInfo } from 'src/app/models/floor-info';

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

export const Retail = Template.bind({});
Retail.args = {
  FloorInfo: new RetailFloorInfo('Retail 1')
};

export const Recreation = Template.bind({});
Recreation.args = {
  FloorInfo: new RecreationFloorInfo('Recreation 1')
};

export const Food = Template.bind({});
Food.args = {
  FloorInfo: new FoodFloorInfo('Food 1')
};

export const Creative = Template.bind({});
Creative.args = {
  FloorInfo: new CreativeFloorInfo('Creative 1')
};

export const Service = Template.bind({});
Service.args = {
  FloorInfo: new ServiceFloorInfo('Service 1')
};
