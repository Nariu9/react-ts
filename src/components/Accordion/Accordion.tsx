import React from "react";

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClickHandler: (value: any) => void
}

type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClickHandler: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    return <div>
        <AccordionTitle title={props.titleValue}
                        callback={props.onChange}
        />
        {!props.collapsed && <AccordionBody items={props.items} onClickHandler={props.onClickHandler}/>}
    </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={(e) => props.callback()}>-- {props.title} --</h3>
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map((i, index) => <li onClick={() => {
            props.onClickHandler(i.value)
        }} key={index}>{i.title}</li>)}
    </ul>
}