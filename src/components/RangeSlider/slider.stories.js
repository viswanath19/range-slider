import React from 'react';

import RangeSlider from '../RangeSlider';
import { useArgs } from '@storybook/client-api';

export default {
  component: RangeSlider,
  title: 'Slider',
};

const Template = args => {
  const [{progressValue}, updateArgs] = useArgs("100");
  const toggleValue = (val) => {
    updateArgs({progressValue:parseInt(val)})
  }
  return <RangeSlider {...args} onChange={(event,value)=>toggleValue(value)} />;
}

export const Default = Template.bind({});
Default.args = {
  progressValue: 100,
};
Default.argTypes = {
  progressValue: { control: { type: 'number' } },
  onChange: { action: 'Changed!' },
};
