import React from "react";
import TodoList from "./TodoList"
import Header from "./Header";
import InputTodo from "./InputTodo";
import {v4 as uuidv4} from "uuid";

class TodoContainer extends React.Component {
    state = {
        todos: [],
    }

    componentDidMount() {
        console.log("mount")
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            this.setState({
                todos: loadedTodos
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("did update")
        if (prevState.todos !== this.state.todos){
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
    }

    handleChange = (id) => {
        this.setState(prevState => ({
            todos: prevState.todos.map(todo => {
                if (todo.id === id){
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                    
                }
                return todo;
            })
        }))
    }

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
    }

    addTodo = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        })
    }

    render() {
        console.log("rendering")
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo 
                        addTodoProps={this.addTodo}
                    />
                    <TodoList 
                        todos={this.state.todos} 
                        handleChangeProps={this.handleChange}
                        deleteTodoProps={this.delTodo}
                        setUpdateProps={this.setUpdate}
                    />
                </div>
            </div>
        )
    }
}

export default TodoContainer