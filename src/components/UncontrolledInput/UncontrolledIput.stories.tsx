import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UncontrolledInput} from "./UncontrolledInput";



export default {
    title: 'UncontrolledInput',
    component: UncontrolledInput,
} as ComponentMeta<typeof UncontrolledInput>;

const Template: ComponentStory<typeof UncontrolledInput> = () => <UncontrolledInput/>;
export const UncontrolledInputDemonstration = Template.bind({})

