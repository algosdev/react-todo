import React, { Component } from 'react'

class Filter extends Component {
    changeHandler = (e) => {
        this.props.searchFunc(e.target.value)
    }
    render() {
        return (
            <div className='filter-area'>
                <input type='text' onChange={this.changeHandler} />
                <div className='btn-group'>
                    <button onClick={() => { this.props.listChange('all') }}>All</button>
                    <button onClick={() => { this.props.listChange('active') }}>Active</button>
                    <button onClick={() => { this.props.listChange('done') }}>Done</button>
                </div>
            </div>
        )
    }
}

export default Filter
