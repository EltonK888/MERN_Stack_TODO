import React from 'react'

const TODOItem = (props) => {
    return (
        <tr>
            <td style={props.todo_completed ? {textDecoration: "line-through"} : {}}>{props.todo_description}</td>
            <td style={props.todo_completed ? {textDecoration: "line-through"} : {}}>{props.todo_responsible}</td>
            <td style={props.todo_completed ? {textDecoration: "line-through"} : {}}>{props.todo_priority}</td>
            <td style={props.todo_completed ? {textDecoration: "line-through"} : {}}><a href={`/edit/${props.todo_id}`}>Edit</a></td>
        </tr>
    )
}


export default TODOItem;