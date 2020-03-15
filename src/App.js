import React, {Component}from 'react';
import List from "./component/list"
import Header from "./component/header"
import Add from "./component/add"
import './App.css';


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      toDo:"",
      listItens:["work","study","work-out"],
    }
    this.newState = this.newState.bind(this)
    this.addTask = this.addTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
  }

  //Add input this.state.toDo
  newState (event) {
    this.setState({toDo:event.target.value})
  }

  //Method for create new task
  addTask () {
    if(this.state.toDo !== "" && this.state.toDo !== " "){
    this.setState({ listItens : [].concat(this.state.listItens, this.state.toDo) });
    this.setState({ toDo :""});
    }
  }

  //Method for remove a task
  removeTask (index) {
   this.state.listItens.splice(index,1)
   this.setState({listItens:this.state.listItens})
  }

  //Method for update a task
  updateTask (index,value) {
    this.state.listItens.splice(index,1,value)
    this.setState({listItens:this.state.listItens})
   }

   render() {

    return (
      <div>
      <Header />
    <div className="container bg-light list">
      <Add addTask={this.addTask} newState={this.newState} toDo={this.state.toDo}/>
      <List 
      toDo={this.state.toDo} 
      listItens={this.state.listItens} 
      removeTask={this.removeTask}
      updateTask={this.updateTask}
      />
    </div>
    </div>
    )
  }
}


