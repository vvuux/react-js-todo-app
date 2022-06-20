import React from 'react'
import TodoItem from "./TodoItem"

const TodoList = props => {
    console.log("TodoList: rendering")
    return (
        <ul>
            {props.todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleCompletedProps={props.handleCompletedProps}
                    deleteTodoProps={props.deleteTodoProps}
                    setUpdateTodoProps={props.setUpdateTodoProps}
                />
            ))}
        </ul>
    )
}

export default TodoList