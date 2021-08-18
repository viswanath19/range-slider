import React from 'react';
import { storiesOf } from '@storybook/react';
import ExampleRangeSlider from '../RangeSlider/example';

storiesOf('RangeSlider', module)
  .add('basical', () => (
    <ExampleRangeSlider />
));