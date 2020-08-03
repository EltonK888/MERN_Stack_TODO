import React, { useState } from 'react'
import TODOForm from "./TODOForm"

const URL = 'http://localhost:4000/todos/add'
const CreateTODO = () => {
    const [state, setstate] = useState({
        todo_description: "",
        todo_responsible: "",
        todo_priority: "",
        todo_completed: false
    })

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        if (state.todo_completed === "" || state.todo_responsible === "" || state.todo_priority ==="") {
            alert("Please complete all fields");
        } else {
            fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            })
            .then(res => res.text())
            .then(result => {
                alert(result);
            })
            .catch(err => console.log(err))
            setstate({
                todo_description: "",
                todo_responsible: "",
                todo_priority: "",
                todo_completed: false
            })
        }
    }

    const handleOnChange = (event) => {
        setstate({
            todo_description: event.target.name === "description" ? event.target.value : state.todo_description,
            todo_responsible: event.target.name === "responsible" ? event.target.value : state.todo_responsible,
            todo_priority: event.target.name === "priority" ? event.target.value : state.todo_priority,
            todo_completed: state.todo_completed
        });
        console.log(state);
    }
    return (
        <TODOForm handleOnSubmit={handleOnSubmit} handleOnChange={handleOnChange} editTODO={false} todo_description={state.todo_description} todo_responsible={state.todo_responsible} todo_priority={state.todo_priority} todo_completed={state.todo_completed}/>
    )
}

export default CreateTODO;