import { Component } from 'react'
import AppTitle from './AppTitle'
import AppHeader from './AppHeader'
import AppBody from './AppBody'


export default class AppContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      tasksList: [
        
      ],
      taskIdMaker: 0,
      isEmpty: true,
    }


  }




  saveTaskRecords(taskContent){
    this.setState(state => {
      state.taskIdMaker++;
      state.isEmpty = false;
        return{
            ...state,
            tasksList: [
              ...state.tasksList,
              {
                isChecked: false,
                taskContent,
                dateCreated: new Date().toLocaleString(),
                dateChecked: null,
                taskId: state.taskIdMaker,
                isDeleted: false,
              }
            ]
        }
    })
  }

  idCollector(){
    const taskIDs = this.state.tasksList.map((task) =>{
      return(task.taskId);
     })

     return taskIDs;
  }

  taskCollector(){
    const tasks = this.state.tasksList.map((task) =>{
      return(task);
     })

     return tasks;
  }

  deleteTaskRecords(tId){
    const tasks = this.taskCollector();
    
    const checkedTaskObjIndex = tasks.findIndex((task => task.taskId == tId));

    this.setState(state =>{
      
      state.tasksList[checkedTaskObjIndex] = {
        ...state.tasksList[checkedTaskObjIndex],
        isDeleted: true,
        };
      return({
        ...state
      })

    })

    setTimeout(
      function() {
        const taskIDs = this.idCollector();
        if (taskIDs.includes(tId)) {
          taskIDs.splice(taskIDs.indexOf(tId),1)
        }
   
     
          const filteredList = this.state.tasksList.filter(task => taskIDs.includes(task.taskId))
   
            console.log(taskIDs);
            console.log(filteredList);
   
          this.setState({tasksList: [...filteredList]})
          if (taskIDs.length === 0) {
            this.setState({isEmpty:true})
          }
      }.bind(this),
      250
  );

     
  }

  taskChecked(tId){
    const tasks = this.taskCollector();
    
    const checkedTaskObjIndex = tasks.findIndex((task => task.taskId == tId));

    this.setState(state =>{
      
      state.tasksList[checkedTaskObjIndex] = {
        ...state.tasksList[checkedTaskObjIndex],
        isChecked: true,
        dateChecked: new Date().toLocaleString(),
        };
      return({
        ...state
      })

    })

  }



  render(){
    return(
        <div className="app-container flex-col">
            <AppTitle title={"task tracker"}/>
            <AppHeader
              saveTaskRecords={this.saveTaskRecords.bind(this)}
            />
            <AppBody
            isEmpty={this.state.isEmpty}
            tasksList={this.state.tasksList}
            deleteFn={this.deleteTaskRecords.bind(this)}
            checkedFn={this.taskChecked.bind(this)}
            />
        </div>
    )
  }
}
