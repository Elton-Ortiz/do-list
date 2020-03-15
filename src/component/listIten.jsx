import React from "react"
import Update from "./update"
import "./list.css"
import "./listIten.css"
import { Component } from "react"



export default class ListItem extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      test:false,
      ind:0
    }
    this.openUpdateTask = this.openUpdateTask.bind(this)
    this.closeUpdate = this.closeUpdate.bind(this)
  }

  //Method to generate list
  listar(props) {
    return (
      
      this.props.listItens.map((value, index) =>
        <li key={index} value={value}>
          <div className="listItem"  >
            {value}
          </div>
          <button onClick={() => this.props.removeTask(index)} type="button" className="btn btn-outline-danger">-</button>
          <button onClick={()=>{
            this.setState({ind:index})
            this.closeUpdate()
          }
        }
            type="button" className="btn btn-outline-danger">u</button>

            {this.openUpdateTask(index) }          
       
        </li>
      )
    );
  }

  //method to close the update task
  closeUpdate(){
    this.setState({test:!this.state.test})
  }

  //Method to open the update task
   openUpdateTask (index) {
   var ind = index.toString()
   var indState = String(this.state.ind)

  if(this.state.test === true  & ind === indState){
    return(
      <div><Update 
      ind={this.state.ind}
      listItens={this.props.listItens} 
      updateTask={this.props.updateTask}
      closeUpdate = {this.closeUpdate}

      /></div>
    )
  }
  }


 render() {
    return (
      <ul className="ul-list">
        {this.listar()}
      </ul>
    )
  }
}