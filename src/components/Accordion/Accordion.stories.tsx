import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    onChange: callback,
    onClickHandler: onClickCallback,
    items: []
}

export const UsersCollapsedMode = Template.bind({})
UsersCollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    onChange: callback,
    onClickHandler: onClickCallback,
    items: [
        {title: 'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title: 'Artem', value: 3},
        {title: 'Viktor', value: 4}
    ]
}


export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return <Accordion titleValue={'Students'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      onClickHandler={(id)=>{alert(`Hello student with id ${id} !!!`)}}
                      items={[{title: 'Ann', value: 1}, {title: 'Hanah', value: 2}, {title: 'Maria', value: 3}]}/>
};