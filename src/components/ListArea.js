import React, { Component } from 'react'
import { MdDelete } from 'react-icons/md'
import { FaExclamation } from 'react-icons/fa'

class ListArea extends Component {
    render() {
        let prop;
        if (this.props.list === 'all') {
            prop = this.props.tasks.allTasks;
        }
        else if (this.props.list === 'active') {
            prop = this.props.tasks.activeTasks;
        }
        else {
            prop = this.props.tasks.doneTasks;
        }
        let string = new RegExp(`${this.props.search}`, 'i');
        let filteredTodos = (this.props.search !== "") ? (prop.filter(todo => string.test(todo.text))) : prop;
        const todos = (filteredTodos.length) ? (
            filteredTodos.map(task => {
                let imp = (task.isImportant) ? 'imp' : '';
                let done = (task.isDone) ? 'done' : '';
                return (
                    <li key={task.id} className={`${imp} ${done}`}>
                        <p onClick={() => { this.props.changeDone(task.id) }}>{task.text}</p>
                        <div>
                            <button className='impo' onClick={() => { this.props.changeImp(task.id) }}>
                                <FaExclamation /></button>
                            <button className='del' onClick={() => { this.props.taskDel(task.id) }}>
                                <MdDelete /></button>
                        </div >
                    </li >
                )
            }
            )) : (
                <div>Tasks can not be found</div>
            )
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div >
        )
    }
}


export default ListArea
