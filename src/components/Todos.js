import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Add from './Add';

export default class Todos extends Component {
  render() {
    const { tasks } = this.props;
    return (
     
      <React.Fragment>
         <Add/>
        {tasks.map((elem, i) => <TodoItem key={i} task={elem} toggleComplete={this.props.toggleComplete} remov={this.props.remov} added={this.props.added} />)}
      </React.Fragment>
    );
  }
}
