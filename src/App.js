import React, { Component } from 'react';
import Todos from './components/Todos';


export default class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Download Zoom",
        isCompleted: false
      },
      {
        id: 2,
        title: "Eat Fried Chicken",
        isCompleted: true
      },
      {
        id: 3,
        title: "Play Games",
        isCompleted: false
      },
      {
        id: 4,
        title: "Go for Shopping",
        isCompleted: false
      },
      {
        id: 5,
        title: "Watch Movie",
        isCompleted: false
      }
    ]
  };
  // changeData = () => {
  //   this.setState({ data: 'Alice Zaheer' });
  // }

  // changeData = (a) => {
  //   this.setState({ isCompleted:  !isCompleted.value });
  // }

  toggleComplete = (id) => {
    this.setState({
      tasks: this.state.tasks.map(task => {
          if(id === task.id)
            task.isCompleted = !task.isCompleted

          return task;
      })
    })
  }

  remov = (id)=>{
this.setState({ tasks: this.state.tasks.filter(elem=> elem.id!==id)  
})
  }

  added=()=>{

    
  }


  render() {
    const { tasks } = this.state;


    return (
      <React.Fragment>
        <Todos tasks={tasks} a={4} toggleComplete={this.toggleComplete} remov={this.remov} added={this.added} />
      </React.Fragment >
    );
  }
}