import React, { useEffect, useState } from 'react'
import TODOItem from "./TODOItem"

const URL = "http://localhost:4000/todos"

const TODOList = () => {
    const [state, setState] = useState([])
    useEffect(() => {
        fetch(URL, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
        .then(res => res.json())
        .then(result => setState(result))
        }
    )
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Responsible</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map(todo => <TODOItem todo_description={todo.todo_description} todo_responsible={todo.todo_responsible} todo_priority={todo.todo_priority} todo_id={todo._id} todo_completed={todo.todo_completed}/>)}
                </tbody>
            </table>
        </div>
    )
}


export default TODOList;