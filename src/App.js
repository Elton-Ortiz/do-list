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
      listItens:[]

    }
    this.newState = this.newState.bind(this)
    this.addTask = this.addTask.bind(this)
  }


  //Mesclar os proximos dois metodos
  newState (event) {
    this.setState({toDo:event.target.value})
  }

  //Method for create new task
  addTask () {
    this.setState({ listItens : [].concat(this.state.listItens, this.state.toDo) });
    this.setState({ toDo :""});


  }

  render() {
    return (
      <div>
      <Header />
    <div className="container bg-light list">
      <Add addTask={this.addTask} newState={this.newState} toDo={this.state.toDo}/>
      <List toDo={this.state.toDo} listItens={this.state.listItens}/>
    </div>
    </div>
    )
  }
}


