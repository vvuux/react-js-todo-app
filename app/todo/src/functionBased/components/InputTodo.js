import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = props => {
    console.log("InputTodo: rendering")
    const [title, setTitle] = useState("")

    const onChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim()){
            props.addTodoProps(title)
            setTitle("")
        }
        else{
            alert("Please write item")
        }
    }

    return (
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input-text"
                    placeholder="Add Todo..."
                    value={title}
                    name="title"
                    onChange={onChange}
                />
                <button className="input-submit">
                    <FaPlusCircle/>
                </button>
            </form>
        </div>
    )
}

export default InputTodo