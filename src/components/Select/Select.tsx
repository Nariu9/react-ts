import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = ({value, items, onChange}: SelectPropsType) => {
    const [collapsed, setCollapsed] = useState(true)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    const selected = items.find(item => item.value === value)
    const hovered = items.find(item => item.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(value)
    }, [value])

    const toggleItems = () => setCollapsed(!collapsed)
    const onClickHandler = (value: any) => {
        onChange(value)
        toggleItems()
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretenderElement = e.key === 'ArrowDown'
                        ? items[i + 1]
                        : items[i - 1]
                    if (pretenderElement) {
                        onChange(pretenderElement.value)
                        return
                    }
                }
            }
            if (!selected) {
                onChange(items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setCollapsed(true)
        }
    }

    const elements = items.map(item => <div key={item.value}
                                            onMouseEnter={() => setHoveredElementValue(item.value)}
                                            className={styles.item + ' ' + (hovered === item ? styles.selected : '')}
                                            onClick={() => onClickHandler(item.value)}>{item.title}</div>)

    return (
        <>
            <select>
                <option value="Bread">Bread</option>
                <option value="Milk">Milk</option>
                <option value="Cheese">Cheese</option>
                <option value="Vegetables">Vegetables</option>
            </select>
            <div className={styles.select} tabIndex={0} onKeyDown={onKeyDownHandler}>
                <span className={styles.main} onClick={toggleItems}
                      onBlur={() => setCollapsed(true)}>{selected && selected.title}</span>
                <div className={styles.items}>
                    {!collapsed && elements}
                </div>
            </div>
        </>
    );
};
