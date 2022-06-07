import React, {useState} from "react";

type UncontrolledRatingPropsType= {
    /*value: 0 | 1 | 2 | 3 | 4 | 5*/
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log('UncontrolledRating rendering');

    const [starSelected, setStarSelected] = useState(0)

    const onClickHandler = (value:number) => {
        setStarSelected(value)
    }

    return (
        <div>
            <Star selected={starSelected > 0}/>
            <button onClick={()=>onClickHandler(1)}>1</button>
            <Star selected={starSelected > 1}/>
            <button onClick={()=>onClickHandler(2)}>2</button>
            <Star selected={starSelected > 2}/>
            <button onClick={()=>onClickHandler(3)}>3</button>
            <Star selected={starSelected > 3}/>
            <button onClick={()=>onClickHandler(4)}>4</button>
            <Star selected={starSelected > 4}/>
            <button onClick={()=>onClickHandler(5)}>5</button>
        </div>
    )
}

type StarPropsType= {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendering');
    return (
        props.selected ? <span><b>star</b></span> : <span>star </span>
    )
}