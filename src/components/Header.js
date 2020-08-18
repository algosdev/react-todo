import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Algos Todo</h1>
                <p>{this.props.active} more to do, {this.props.done} done</p>
            </div>
        )
    }
}

export default Header
