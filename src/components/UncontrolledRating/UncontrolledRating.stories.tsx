import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
} as ComponentMeta<typeof UncontrolledRating>;

const Template: ComponentStory<typeof UncontrolledRating> = (args) => <UncontrolledRating {...args}/>;

export const UncontrolledRatingEmpty = Template.bind({})
UncontrolledRatingEmpty.args = {
    defaultValue:0,
    onChange:action('rating changed inside component')
}

export const UncontrolledRating1 = Template.bind({})
UncontrolledRating1.args = {
    defaultValue:1,
    onChange:action('rating changed inside component')
}

export const UncontrolledRating2 = Template.bind({})
UncontrolledRating2.args = {
    defaultValue:2,
    onChange:action('rating changed inside component')
}

export const UncontrolledRating3 = Template.bind({})
UncontrolledRating3.args = {
    defaultValue:3,
    onChange:action('rating changed inside component')
}

export const UncontrolledRating4 = Template.bind({})
UncontrolledRating4.args = {
    defaultValue:4,
    onChange:action('rating changed inside component')
}

export const UncontrolledRating5 = Template.bind({})
UncontrolledRating5.args = {
    defaultValue:5,
    onChange:action('rating changed inside component')
}