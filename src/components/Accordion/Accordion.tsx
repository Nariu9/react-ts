import React from "react";

type AccordionPropsType= {
    titleValue: string
    collapsed: boolean
    onClick:()=>void
}

type AccordionTitlePropsType= {
    title: string
    callback:()=>void
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

        return <div>
            <AccordionTitle title={props.titleValue} callback={props.onClick}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={(e)=>props.callback()}>-- { props.title } --</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}