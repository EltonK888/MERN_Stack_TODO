import React, { useState, useEffect } from 'react'
import TODOForm from "./TODOForm"

const URL = "http://localhost:4000/todos/"

const EditTODO = (props) => {
    const [state, setState] = useState({
        todo_description: "",
        todo_responsible: "",
        todo_priority: "",
        todo_completed: Boolean
    })
    const id = props.match.params.id;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if (state.todo_completed === "" || state.todo_responsible === "" || state.todo_priority ==="") {
            alert("Please complete all fields");
        } else {
            fetch(`${URL}/update/${id}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            })
            .then(
                props.history.push('/')
            )
        }
    }

    const handleOnDelete = () => {
        fetch(`${URL}delete/${id}`, {
            method: "DELETE"
        })
        .then(res => res.text())
        .then(result => console.log(result))
        .then(props.history.push('/'))
    }

    const handleOnChange = (event) => {
        console.log(event.target.name)
        setState({
            todo_description: event.target.name === "description" ? event.target.value : state.todo_description,
            todo_responsible: event.target.name === "responsible" ? event.target.value : state.todo_responsible,
            todo_priority: event.target.name === "priority" ? event.target.value : state.todo_priority,
            todo_completed: event.target.name === "completed" ? event.target.checked : state.todo_completed
        });
        console.log(state);
    }


    useEffect(() => {
        fetch(`${URL}${id}`)
        .then((res) => res.json())
        .then((result) => {
            console.log(result)
            setState({
                todo_description: result.todo_description,
                todo_responsible: result.todo_responsible,
                todo_priority: result.todo_priority,
                todo_completed: result.todo_completed
            })
        })
    }, [])

    return (
        <TODOForm handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} editTODO={true} todo_description={state.todo_description} todo_responsible={state.todo_responsible} todo_priority={state.todo_priority} todo_completed={state.todo_completed} handleOnDelete={handleOnDelete}/>
    )
}

export default EditTODO;