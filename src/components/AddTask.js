import React, { Component } from 'react'

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.input = React.createRef();
    }


    render() {
        return (
            <div className='add-cont'>
                <input ref={this.input} type='text' />
                <button onClick={() => {
                    if (this.input.current.value !== "") {
                        this.props.add(this.input.current.value);
                        this.input.current.value = "";
                    }
                    else {
                        alert("Input is empty!")
                    }

                }}
                >Add task</button>
            </div>
        )
    }
}

export default AddTask
