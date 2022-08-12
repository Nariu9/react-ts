import {Clock} from './Clock';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

export default {
    title: 'Clock',
    component: Clock
} as ComponentMeta<typeof Clock>

const Template: ComponentStory<typeof Clock> = (args) => <Clock{...args}/>;

export const ClockExample = Template.bind({})
ClockExample.args = {
    mode : 'analogue1'
}