import React from 'react'

const TODOItem = (props) => {
    return (
        <tr>
            <td>{props.todo_description}</td>
            <td>{props.todo_responsible}</td>
            <td>{props.todo_priority}</td>
            <td><a href={`/edit/${props.todo_id}`}>Edit</a></td>
        </tr>
    )
}


export default TODOItem;