import {Clock} from './Clock';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

export default {
    title: 'Clock',
    component: Clock
} as ComponentMeta<typeof Clock>

const Template: ComponentStory<typeof Clock> = () => <Clock/>;
export const ClockExample = Template.bind({})

