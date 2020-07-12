import React, { useState } from 'react'

const CreateTODO = () => {
    const [state, setstate] = useState({
        description: "",
        responsible: "",
        priority: "",
        completed: false
    })

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(state);
        setstate({
            description: "",
            responsible: "",
            priority: "",
            completed: false
        })
    }

    const handleOnChange = (event) => {
        setstate({
            description: event.target.name === "description" ? event.target.value : state.description,
            responsible: event.target.name === "responsible" ? event.target.value : state.responsible,
            priority: event.target.name === "priority" ? event.target.value : state.priority,
            completed: state.completed
        });
        console.log(state);
    }
    return (
        <div className="container form-group">
            <h2>Create a new TODO</h2>
            <form onSubmit={handleOnSubmit}>
                <div className="form-group">
                    <label htmlfor="description">Description: </label>
                    <input 
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        placeholder="What do you need to do?"
                        value={state.description}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlfor="responsible">Responsible: </label>
                    <input 
                        type="text"
                        className="form-control"
                        id="responsible"
                        name="responsible"
                        placeholder="Who has to do this?"
                        value={state.responsible}
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input 
                            type="radio"
                            htmlfor="low"
                            value="low"
                            className="form-check-input"
                            id="low"
                            name="priority"
                            onChange={handleOnChange}
                        />
                        <label className="form-check-label" htmlFor="low">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            type="radio"
                            htmlfor="medium"
                            value="medium"
                            className="form-check-input"
                            id="medium"
                            name="priority"
                            onChange={handleOnChange}
                        />
                        <label className="form-check-label" htmlFor="medium">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            type="radio"
                            htmlfor="high"
                            value="high"
                            className="form-check-input"
                            id="high"
                            name="priority"
                            onChange={handleOnChange}
                        />
                        <label className="form-check-label" htmlFor="high">High</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" value="Submit">Create TODO</button>
            </form>
        </div>
    )
}

export default CreateTODO;