import {ComponentMeta} from "@storybook/react";
import {Select} from "./Select";
import {useState} from "react";


export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

export const SelectShowUp = () => {
    const [value, setValue] = useState(2)

    return <Select value={value}
                   onChange={setValue}
                   items={[
                       {value: 1, title: 'Bread'},
                       {value: 2, title: 'Milk'},
                       {value: 3, title: 'Cheese'},
                       {value: 4, title: 'Vegetables'}
                   ]}/>
}

export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)

    return <Select value={value}
                   onChange={setValue}
                   items={[
                       {value: 1, title: 'Bread'},
                       {value: 2, title: 'Milk'},
                       {value: 3, title: 'Cheese'},
                       {value: 4, title: 'Beef'}
                   ]}/>
}