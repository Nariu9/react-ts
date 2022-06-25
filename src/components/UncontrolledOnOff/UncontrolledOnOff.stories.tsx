import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UncontrolledOnOff} from "./UncontrolledOnOff";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

const Template: ComponentStory<typeof UncontrolledOnOff> = (args) => <UncontrolledOnOff {...args} />;

export const UncontrolledOnOffModeOff = Template.bind({})
UncontrolledOnOffModeOff.args = {
    defaultOn: false,
    onChange: action('item was clicked')
}

export const UncontrolledOnOffModeOn = Template.bind({})
UncontrolledOnOffModeOn.args = {
    defaultOn: true,
    onChange: action('item was clicked')
}
