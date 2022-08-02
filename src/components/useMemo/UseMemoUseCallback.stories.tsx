import React, {useCallback, useMemo, useState} from 'react';


export default {
    title: 'useMemo',
};

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </>
}

const SecretUsers = (props: { users: Array<string> }) => {
    console.log('SecretUsers rendering')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(SecretUsers)

export const HelpsReactMemo = () => {
    console.log('HelpsReactMemo rendering')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])
    const addUser = () => setUsers([...users, 'Sveta' + new Date().getTime()])

    const newArray = useMemo(()=>{
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1);
        return newArray
    }, [users])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback rendering')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    //const addBook = () => setBooks([...books, 'Angular' + new Date().getTime()])
    const memorizedAddBook = useMemo(()=> {
       return  () => setBooks([...books, 'Angular' + new Date().getTime()])
    } , [books])

    const memorizedAddBook2 = useCallback(()=> {
        setBooks([...books, 'Angular' + new Date().getTime()])
    } , [books])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memorizedAddBook2}/>
    </>
}

const Books = React.memo((props: { /*books: Array<string>,*/  addBook:()=>void}) => {
    console.log('Books rendering')
    return <div>
        <button onClick={props.addBook}>add book</button>
    </div>
})
