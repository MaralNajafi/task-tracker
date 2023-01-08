import React, { Component } from 'react'

export default class AppHeader extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            taskInpVal: "",
        }
    }

    changeInp(event){
        this.setState({taskInpVal: event.target.value})
    }

    submitTask(e){
        e.preventDefault();
        this.props.saveTaskRecords(this.state.taskInpVal);
        this.setState({taskInpVal: ""});
    }

 

    render(){
    return (
        <div className="app-header">
        <form onSubmit={this.submitTask.bind(this)}>
            <label className="flex-row">
                <input
                required
                type="text"
                placeholder="Enter your task..."
                value={this.state.taskInpVal}
                onChange={this.changeInp.bind(this)} />
                <button type="submit">+</button>
               
            </label>
        </form>
    </div>
    
      )
  }
}
