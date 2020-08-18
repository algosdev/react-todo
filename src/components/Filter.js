import React, { Component } from 'react'

class Filter extends Component {

    changeHandler = (e) => {
        this.props.searchFunc(e.target.value)
    }
    render() {
        return (
            <div className='filter-area'>
                <input type='text' onChange={this.changeHandler} placeholder='Search for the task' />
                <div className='btn-group'>
                    <button className='yellow' onClick={() => {
                        this.props.listChange('all')
                    }}>All</button>
                    <button className='blue' onClick={() => {
                        this.props.listChange('active');
                    }}>Active</button>
                    <button className='green' onClick={() => {
                        this.props.listChange('done')
                        this.setState({
                            activeIndex: 2
                        })
                    }}>Done</button>
                </div>
            </div >
        )
    }
}

export default Filter
