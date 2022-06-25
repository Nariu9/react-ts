import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UncontrolledAccordion} from "./UncontrolledAccordion";


export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;

const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;
export const UncontrolledAccordionCollapsedMode = Template.bind({})
UncontrolledAccordionCollapsedMode.args = {
    titleValue: 'Users'
}
