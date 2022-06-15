import React from "react";

type AccordionPropsType= {
    titleValue: string
    collapsed: boolean
    onClick:(collapsed: boolean)=>void
}

type AccordionTitlePropsType= {
    title: string
    callback:()=>void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

        return <div>
            <AccordionTitle title={props.titleValue} callback={()=>props.onClick(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.callback}>-- { props.title } --</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default Accordion;