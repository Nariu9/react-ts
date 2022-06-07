import React, {useState} from "react";

type UncontrolledRatingPropsType= {
    /*value: 0 | 1 | 2 | 3 | 4 | 5*/
}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    console.log('UncontrolledRating rendering');

    const [starSelected, setStarSelected] = useState(0)

    return (
        <div>
            <Star selected={starSelected > 0}/>
            <button onClick={()=>setStarSelected(1)}>1</button>
            <Star selected={starSelected > 1}/>
            <button onClick={()=>setStarSelected(2)}>2</button>
            <Star selected={starSelected > 2}/>
            <button onClick={()=>setStarSelected(3)}>3</button>
            <Star selected={starSelected > 3}/>
            <button onClick={()=>setStarSelected(4)}>4</button>
            <Star selected={starSelected > 4}/>
            <button onClick={()=>setStarSelected(5)}>5</button>
        </div>
    )
}

type StarPropsType= {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('Star rendering');

    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}