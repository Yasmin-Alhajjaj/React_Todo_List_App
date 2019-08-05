import React, { Component } from 'react';

export default class TodoItem extends Component {
  
  render() {
    const { title, isCompleted ,id} = this.props.task;
    return (
      <React.Fragment>
  
        <p style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none'
        }}>
          <input checked={isCompleted} type="checkbox" onChange={this.props.toggleComplete.bind(this,id) } />
          {title} {""}
          <button onClick={this.props.remov.bind(this,id)} > remove </button>   
             </p>

      </React.Fragment>
    );
  }
}

// line-through
// checked={isCompleted}