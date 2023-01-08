import React from 'react'


export default function Task({taskContent,taskNum,dateCreated,deleteFn,checkedFn,tId,isDeleted,isChecked,dateChecked}) {


  let dcDisplay;
  
  if (dateChecked) {
    dcDisplay = <span className="date date-created">Date checked: {dateChecked}</span>;
  }else{
    dcDisplay = null;
  }
  return (
   
    <div className={`task ${isDeleted ? "deletedTask" : null}`}>
        
        <div className=" contentBtnWrapper flex-row">
          <div className='task-content'>
            <p className={isChecked ?"checkedTask" : null}>{taskNum}{` ${taskContent}`}</p>
          </div>
          <div className="edit-btns flex-row">

            <button 
             className='check-btn'
             disabled={isChecked} 
             onClick={() =>{checkedFn(tId)}}>
             <i className="fas fa-check"></i>
             </button>

            <button className='del-btn' onClick={() =>{deleteFn(tId)}}><abbr title="delete task"><i className="fas fa-times"></i></abbr></button>
            

          </div>
        </div>

        <div className="date-wrapper flex-col">
            <span className="date date-created">Date created: {dateCreated}</span>
            {dcDisplay}
        </div> 
    </div>

  )
}
