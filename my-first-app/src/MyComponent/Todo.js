import React from 'react'

const Todo = ({task,onDelete}) => {
    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    Task No {task.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.description}</p>
                    <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(task)}}>Delete</button>
                </div>
                {/* <div className="card-footer text-body-secondary">
                    2 days ago
                </div> */}
            </div>


        </div>
    )
}

export default Todo
