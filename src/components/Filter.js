import React from 'react'


const Filter = ({ listChange, searchFunc }) => {

    const changeHandler = (e) => {
        searchFunc(e.target.value)
    }

    return (
        <div className='filter-area'>
            <input type='text' onChange={changeHandler} placeholder='Search for the task' />
            <div className='btn-group'>
                <button className='yellow' onClick={() => {
                    listChange('all')
                }}>All</button>
                <button className='blue' onClick={() => {
                    listChange('active');
                }}>Active</button>
                <button className='green' onClick={() => {
                    listChange('done')
                    this.setState({
                        activeIndex: 2
                    })
                }}>Done</button>
            </div>
        </div >
    )
}

export default Filter
