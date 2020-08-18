import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ListArea from './components/ListArea';
import AddTask from './components/AddTask';
import Filter from './components/Filter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allTasks: [
        { id: 1, text: 'Work out', isDone: false, isImportant: false },
        { id: 2, text: 'Watch 5 tutorials', isDone: false, isImportant: false },
        { id: 3, text: 'Cook a meal', isDone: false, isImportant: false }
      ],
      activeTasks: [
        { id: 1, text: 'Work out', isDone: false, isImportant: false },
        { id: 2, text: 'Watch 5 tutorials', isDone: false, isImportant: false },
        { id: 3, text: 'Cook a meal', isDone: false, isImportant: false }
      ],
      doneTasks: [],
      shownList: 'all',
      search: ""
    }
  }
  componentDidUpdate(prevprops, prevstate) {
    if (this.state.allTasks !== prevstate.allTasks) {
      this.Update()
    }
  }
  Update = () => {
    let todos = this.state.allTasks;
    let newActive = todos.filter(task => task.isDone !== true);
    let newDone = todos.filter(task => task.isDone === true);
    this.setState({
      activeTasks: newActive,
      doneTasks: newDone
    })
  }
  addTask = (task) => {
    let taksId = Math.random();
    let newTasks = [...this.state.allTasks, { id: taksId, text: task, isDone: false, isImportant: false }];
    this.setState({
      allTasks: newTasks
    })
  }
  changeDone = (taskId) => {
    let todos = this.state.allTasks;
    todos.forEach(task => {
      if (task.id === taskId) {
        let status = task.isDone ? false : true;
        task.isDone = status
      }
    });
    this.setState({
      allTasks: todos,
    });
    this.Update()
  }
  changeImp = (taskId) => {
    let todos = this.state.allTasks;
    todos.forEach(task => {
      if (task.id === taskId) {
        let status = task.isImportant ? false : true;
        task.isImportant = status
      }
    })
    this.setState({
      allTasks: todos
    })
  }
  taskDel = (taskId) => {
    let todos = this.state.allTasks;
    let newTodos = todos.filter(task => task.id !== taskId);
    this.setState({
      allTasks: newTodos
    })
  }
  listChange = (string) => {
    this.setState({
      shownList: string
    });
  }
  searchFunc = (val) => {
    this.setState({
      search: val
    })
  }
  render() {
    return (
      <div className='container'>
        <Header active={this.state.activeTasks.length} done={this.state.doneTasks.length} />
        <Filter listChange={this.listChange} searchFunc={this.searchFunc} />
        <ListArea search={this.state.search} list={this.state.shownList} tasks={this.state} changeDone={this.changeDone} changeImp={this.changeImp} taskDel={this.taskDel} />
        <AddTask add={this.addTask} />
      </div>
    )
  }
}

export default App