import React from 'react'

const TODOForm = (props) => {
    return (
        <div className="container form-group">
            <h2>{props.editTODO ? "Update TODO" : "Create a new TODO"}</h2>
            <form onSubmit={props.handleOnSubmit}>
                <div className="form-group">
                    <label htmlfor="description">Description: </label>
                    <input 
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        placeholder="What do you need to do?"
                        value={props.todo_description}
                        onChange={props.handleOnChange}
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
                        value={props.todo_responsible}
                        onChange={props.handleOnChange}
                    />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input 
                            type="radio"
                            htmlFor="low"
                            value="low"
                            className="form-check-input"
                            id="low"
                            name="priority"
                            onChange={props.handleOnChange}
                            checked={props.todo_priority === "low" ? "checked" : ""}
                        />
                        <label className="form-check-label" htmlFor="low">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            type="radio"
                            htmlFor="medium"
                            value="medium"
                            className="form-check-input"
                            id="medium"
                            name="priority"
                            onChange={props.handleOnChange}
                            checked={props.todo_priority === "medium" ? "checked" : ""}
                        />
                        <label className="form-check-label" htmlFor="medium">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            type="radio"
                            htmlFor="high"
                            value="high"
                            className="form-check-input"
                            id="high"
                            name="priority"
                            onChange={props.handleOnChange}
                            checked={props.todo_priority === "high" ? "checked" : ""}
                        />
                        <label className="form-check-label" htmlFor="high">High</label>
                    </div>
                </div>
                {props.editTODO && 
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input
                            type="checkbox"
                            htmlFor="completed"
                            className="form-check-input"
                            id="completed"
                            name="completed"
                            onChange={props.handleOnChange}
                            checked={props.todo_completed}
                        />
                        <label className="form-check-label" htmlFor="completed">Completed</label>
                    </div>
                </div>
                }
                <button type="submit" className="btn btn-primary mr-4" value="Submit">{props.editTODO ? "Update Todo" : "Create Todo"}</button>
                {props.editTODO ? <button type="btn" className="btn btn-danger" value="Delete" onClick={props.handleOnDelete}>Delete</button> : ""}
            </form>
        </div>
    )
}

export default TODOForm;