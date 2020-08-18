import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <p>Algos Todo</p>
                <p>{this.props.active} more to do, {this.props.done} done</p>
            </div>
        )
    }
}

export default Header
