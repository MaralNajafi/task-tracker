import React from 'react'
import Task from './Task'

export default function AppBody({tasksList,deleteFn,isEmpty,checkedFn}) {
    const taskList = tasksList.map((task,index) =>{
        return(<Task
          isChecked={task.isChecked}
          isDeleted={task.isDeleted}
          key={index}
          taskContent={task.taskContent} 
          taskNum={`${index+1}.`} 
          dateCreated={task.dateCreated}
          dateChecked={task.dateChecked}
          tId={task.taskId}
          deleteFn={deleteFn}
          checkedFn={checkedFn}
        />)
        
    })
    let display;
    if (isEmpty) {
      display = <div className="noTasksBox flex-center"><p>No tasks yet!</p> </div>;
    }else{
      display = null
    }
    
  return (
    <div className="app-body">
      {display}
    <div className="tasks">
        {taskList}
    </div>
</div>

  )
}
