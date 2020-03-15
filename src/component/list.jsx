import React, {Component}from 'react';
import ListItem from "./listIten"


export default class List extends Component {
  
  
  render() {
    return (
      <div>
          <ListItem 
           toDo={this.props.toDo} 
           listItens={this.props.listItens} 
           removeTask={this.props.removeTask}
           openUpdateTask={this.props.openUpdateTask}
           updateTask={this.props.updateTask}

           />

    </div>
    )
  }
}


