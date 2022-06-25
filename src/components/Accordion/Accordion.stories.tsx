import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

const callback = action('accordion mode change event fired')

export const AccordionCollapsedMode = Template.bind({})
AccordionCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onClick: callback
}
