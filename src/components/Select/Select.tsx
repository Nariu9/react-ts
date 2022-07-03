import React, {useState} from 'react';

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = ({value, items, onChange}: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(true)

    const onClickHandler = (value:any) => {
        onChange(value)
        setCollapsed(true)
    }

    const elements = items.map(item=><div onClick={()=>onClickHandler(item.value)} key={item.value}>{item.title}</div>)
    const selected = items.find(item => item.value === value)

    return (
        <div>
            <div onClick={()=>setCollapsed(!collapsed)} onBlur={()=>setCollapsed(true)}>{selected && selected.title}</div>
            {!collapsed && elements}
        </div>
    );
};
