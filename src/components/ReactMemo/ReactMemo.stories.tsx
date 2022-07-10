import React, {useState} from 'react';


export default {
    title: 'React.memo demo',
};

const NewMessagesCounter = (props: { count: number }) => {
    console.log('NewMessagesCounter rendering')
    return <div>{props.count}</div>
}

const SecretUsers = (props: { users: Array<string> }) => {
    console.log('SecretUsers rendering')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(SecretUsers)

export const Example1 = () => {
    console.log('Example1 rendering')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])
    const addUser = () => setUsers([...users, 'Sveta' + new Date().getTime()])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}
