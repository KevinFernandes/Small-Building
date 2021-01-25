import { Story } from '@storybook/angular';
import { FloorSlot, SlotState } from 'src/app/models/floor-slot';
import { FloorSlotComponent } from '../floor-slot.component';

// This exports the Stories group for this component
export default {
  // The title defines the name and where in the structure of
  // Storybook's menu this is going to be placed.
  // Here we add it to a "Components" section under "Link"
  title: 'Components/floor-slot',
  argTypes: {
    slot: { control: 'object' }
  },
  // The component related to the Stories
  component: FloorSlotComponent,
};
// This creates a Story for the component
const Template: Story<FloorSlotComponent> = (args: any) => ({
  component: FloorSlotComponent,
  props: args,
});

export const Unoccupied = Template.bind({});
Unoccupied.args = {
  slot: new FloorSlot(SlotState.Unoccupied)
};

export const Occupied = Template.bind({});
Occupied.args = {
  slot: new FloorSlot(SlotState.Occupied)
};

export const Empty = Template.bind({});
Empty.args = {
  slot: new FloorSlot(SlotState.Empty)
};

export const Filling = Template.bind({});
Filling.args = {
  slot: new FloorSlot(SlotState.Filling)
};

export const Full = Template.bind({});
Full.args = {
  slot: new FloorSlot(SlotState.Full)
};
