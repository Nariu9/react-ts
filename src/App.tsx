import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOffAlternative} from "./components/OnOff/OnOffAlternative";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function sum(a: number, b: number) {
    alert(a + b)
}

/*sum();*/


function App() {
    console.log('App rendering');

    const [switcher, setSwitcher] = useState<boolean>(false)

    const switchOnOff = (value:boolean) => {
        setSwitcher(value)
    }

    return (
        <div>
            {/*<Accordion titleValue={'Menu1'} collapsed={true}/>
            <Accordion titleValue={'Users1'} collapsed={false}/>*/}

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>


            <OnOffAlternative value={switcher} switchOnOff={switchOnOff}/>
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={'Menu2'}/>
            <UncontrolledAccordion titleValue={'Users2'}/>
            <UncontrolledRating/>



        </div>
    );
}

type PageTitlePropsType= {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    debugger
    console.log('PageTitle rendering');
    return <h1>{ props.title }</h1>
}



export default App;
