import React, { Component } from 'react'

const Header = ({ active, done }) => {
    return (
        <div className='header'>
            <h1>Algos Todo</h1>
            <p>{active} more to do, {done} done</p>
        </div>
    )
}

export default Header
