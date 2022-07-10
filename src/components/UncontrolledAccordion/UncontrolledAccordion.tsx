import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export const UncontrolledAccordion = React.memo ((props: UncontrolledAccordionPropsType) => {
    console.log('UncontrolledAccordion rendering');

    //const [collapsed, setCollapsed] = useState(true)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    const onClickHandler = () => {
        dispatch({type: TOGGLE_COLLAPSED})
    }

    return <div>
        <AccordionTitle title={props.titleValue} callback={onClickHandler}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
});

type AccordionTitlePropsType = {
    title: string
    callback: () => void
}

const AccordionTitle = React.memo(AccordionTitleWithoutMemo)

function AccordionTitleWithoutMemo(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={props.callback}>-- {props.title} --</h3>
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}