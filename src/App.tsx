import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";

function sum(a: number, b: number) {
    alert(a + b)
}

/*sum();*/


function App() {
    console.log('App rendering');

    const [switcher, setSwitcher] = useState<boolean>(false)

    const switchOnOff = (value: boolean) => {
        setSwitcher(value)
    }

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
{/*
            <OnOffAlternative value={switcher} switchOnOff={switchOnOff}/>
             <UncontrolledOnOff />*/}

            uncontrolled components
             <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'Menu2'}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
            controlled components
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu1'}
                       collapsed={accordionCollapsed}
                       onClick={()=>setAccordionCollapsed(!accordionCollapsed)}/>
            <OnOff on={switchOn} callback={setSwitchOn}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log('PageTitle rendering');
    return <h1>{props.title}</h1>
}


export default App;
