import React, { Component } from 'react'

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
                    <li key={task.id} className='list'>
                        <span className={`${imp} ${done}`} onClick={() => { this.props.changeDone(task.id) }}>{task.text}</span>
                        <div>
                            <button onClick={() => { this.props.changeImp(task.id) }}>Important</button>
                            <button onClick={() => { this.props.taskDel(task.id) }}>Delete</button>
                        </div>
                    </li>
                )
            }
            )) : (
                <div>Task can not be found</div>
            )
        console.log(string)
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
