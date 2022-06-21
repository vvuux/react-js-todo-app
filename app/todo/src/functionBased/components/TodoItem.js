import React, {useState, useEffect} from "react";
import { FaTrash } from "react-icons/fa";

import styles from "./TodoItem.module.css"

// class Component
const TodoItem = props => {
    console.log("TodoItem: rendering")
    const [editing, setEditing] = useState(false)

    const {id, title, completed} = props.todo
    
    const [editingTitle, setEditingTitle] = useState(title)

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdateDone = (event, title, id) => {
        if(event.key === "Enter"){
            props.setUpdateTodoProps(title, id)
            setEditing(false)
        }
    }

    let viewMode = {}
    let editMode = {}

    if (editing){
        viewMode.display = "none"
    }
    else{
        editMode.display = "none"
    }

    useEffect(() => {
        return () => {
            console.log("Cleaning up...")
        }
    }, [])

    return (
        <li className={styles.item}>
            <div style={viewMode}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.handleCompletedProps(id)}
                />
                <button onClick={() => props.deleteTodoProps(id)}>
                    <FaTrash
                        style={{ color: "red", fontSize: "16px" }}
                    />
                </button>
                <span onDoubleClick={handleEditing} style={completed ? completedStyle : null}>{title}</span>
            </div>
            <input
                type="text"
                className={styles.textInput}
                style={editMode}
                value={editingTitle}
                onChange={e => {
                    setEditingTitle(e.target.value)
                }}
                onKeyDown={(e) => handleUpdateDone(e, editingTitle, id)}
            />
        </li>
    )
}


// function Component
// function TodoItem(props){
//     return <li>{props.todo.title}</li>
// }

export default TodoItem