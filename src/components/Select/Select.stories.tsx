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
                   onChange={(id) => setValue(id)}
                   items={[
                       {title: 'Bread', value: 1},
                       {title: 'Milk', value: 2},
                       {title: 'Cheese', value: 3},
                       {title: 'Beef', value: 4}
                   ]}/>
}