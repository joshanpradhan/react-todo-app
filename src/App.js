import React from 'react';
import logo from './logo.svg';
import './App.css'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newTodo:"",
      list:[]
    }
  }
  addTodo(todoValue){
    if(todoValue !== ""){
      const newTodo={
        id:Date.now(),
        value:todoValue,
       
      }
      const list=[...this.state.list]
      list.push(newTodo);
      this.setState({
        list,
        newTodo:""
      });
    }
  }
  removeTodo(id){
    const list=[...this.state.list];
    const updatedList = list.filter(todo => todo.id !==id );
    this.setState({
      list:updatedList,
    });

  }
  updateInput(input){
    this.setState({newTodo:input});
  }
 
render(){
  return(
    <div> 
      <h1>Todo App</h1>
      <div className="container">
        <h2>Add an item on your list</h2>
        <br/>
        <input type="text" className="input-text" placeholder="Write a todo" value={this.state.newTodo} 
        onChange={e => this.updateInput(e.target.value)}
        required/>
        <button className="btn success" onClick={() => this.addTodo(this.state.newTodo)} disable={!this.state.newTodo.length}>Add Todo</button>
        <div className="list">
          <ul>
            {this.state.list.map(todo => {
              return(
              <li key={todo.id}>
                
                {todo.value}
                <button className="btn danger" onClick={() => this.removeTodo(todo.id) }>Delete</button>
              </li>);
            })}
           
          </ul>
        </div>
      </div>
    </div>
  );
}
}
export default App;