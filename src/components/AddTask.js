import React, { Component } from 'react'
import { FaPlus } from 'react-icons/fa'

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.input = React.createRef();
    }
    submitHandler = (e) => {
        e.preventDefault()
        if (this.input.current.value !== "") {
            this.props.add(this.input.current.value);
            this.input.current.value = "";
        }
        else {
            alert("Input is empty!")
        }
    }


    render() {
        return (
            <form onSubmit={this.submitHandler} className='add-cont'>
                <input ref={this.input} type='text' placeholder='Add new task' />
                <button className='add'><FaPlus /></button>
            </form>
        )
    }
}

export default AddTask
