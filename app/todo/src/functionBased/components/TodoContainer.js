import React, {useState, useEffect} from "react";

import TodoList from "./TodoList"
import Header from "./Header";
import InputTodo from "./InputTodo";
import {v4 as uuidv4} from "uuid";

const TodoContainer = () => {
    console.log("TodoContainer: rendering")

    const [todos, setTodos] = useState(getInitialTodos())

    const addTodo = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }
        setTodos([
            ...todos,
            newTodo
        ])
    }

    const handleCompleted = (id) => {
        setTodos([
            ...todos.map(todo => {
                if (todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        ])
    }

    const deleteTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            })
        ])
    }

    const setUpdateTodo = (title, id) => {
        setTodos([
            ...todos.map(todo => {
                if (todo.id === id){
                    return {
                        ...todo,
                        title: title
                    }
                }
                return todo
            })
        ])
    }

    // useEffect(() => {
    //     console.log("Hook: get item from local storage")

    //     const temp = localStorage.getItem("todos")
    //     const loadedTodos = JSON.parse(temp)

    //     if (loadedTodos){
    //         setTodos(loadedTodos)
    //     }
    // }, [])

    function getInitialTodos(){
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    }

    useEffect(() => {
        console.log("Hook: update item")
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    return (
        <div className="container">
            <div className="inner">
                <Header />
                <InputTodo
                    addTodoProps={addTodo}
                />
                <TodoList
                    todos={todos}
                    handleCompletedProps={handleCompleted}
                    deleteTodoProps={deleteTodo}
                    setUpdateTodoProps={setUpdateTodo}
                />
            </div>
        </div>   
    )
}

export default TodoContainer