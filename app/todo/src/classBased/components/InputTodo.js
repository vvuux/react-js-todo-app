import React, {Component} from "react";
import { FaPlusCircle, IconContext } from "react-icons/fa"

class InputTodo extends Component {
    state = {
        title: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()){
            this.props.addTodoProps(this.state.title)
            this.setState({
                title: ""
            });
        }
        else{
            alert("Please write item");
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    type="text" 
                    className="input-text"
                    placeholder="Add Todo..." 
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                />
                <button className="input-submit">
                    <FaPlusCircle/>
                </button>

                /*
                <IconContext.Provider
                        value={{
                            color: "darkcyan",
                            style: { fontSize: "20px", color: "#ff0000" },
                            className: "submit-icons"
                        }}
                    >
                        /* Wrap icon components here */
                        <button className="input-submit">
                            /* icon components */
                        </button>

                </IconContext.Provider>
                */
            </form>
        )
    }
}

export default InputTodo