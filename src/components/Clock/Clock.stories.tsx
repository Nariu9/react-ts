import {Clock} from './Clock';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';

export default {
    title: 'Clock',
    component: Clock
} as ComponentMeta<typeof Clock>

const Template: ComponentStory<typeof Clock> = (args) => <Clock{...args}/>;

export const AnalogueClockExample = Template.bind({})
AnalogueClockExample.args = {
    analogueClockMode : true
}

export const DigitalClockExample = Template.bind({})
DigitalClockExample.args = {
    analogueClockMode : false
}