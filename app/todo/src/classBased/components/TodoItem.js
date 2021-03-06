import React from "react-icons/fa"
import { FaTrash } from "react-icons"

import styles from "./TodoItem.module.css"

// class Component
class TodoItem extends React.Component{
    state = {
        editing: false,
    }

    handleEditing = () => {
        this.setState({
            editing: true
        })
    }

    handleUpdateDone = event => {
        if (event.key === "Enter") {
            this.setState({
                editing: false
            })
        }
    }

    componentWillUnmount() {
        console.log("Cleaning Up")
    }

    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        const {completed, id, title} = this.props.todo;

        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
            viewMode.display = "none"
        }
        else {
            editMode.display = "none"
        }

        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input 
                        type="checkbox" 
                        className={styles.checkbox}
                        checked={completed} 
                        onChange={() => this.props.handleChangeProps(id)}
                    /> 
                    <button onClick={() => this.props.deleteTodoProps(id)}>
                        <FaTrash/>
                    </button> 
                    <span style={completed ? completedStyle : null}>{title}</span>
                </div>
                <input 
                    type="text"
                    className={styles.textInput} 
                    style={editMode}
                    value={title}    
                    onChange={e => {
                        this.props.setUpdateProps(e.target.value, id)
                    }}
                    onKeyDown={this.handleUpdateDone}
                />
            </li>
        )
    }
}


// function Component
// function TodoItem(props){
//     return <li>{props.todo.title}</li>
// }

export default TodoItem