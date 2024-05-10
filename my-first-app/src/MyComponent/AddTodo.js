import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('Please fill all the fields');
            return;
        }
        props.addTodo(title, desc);

    }
    return (
        <>
            <div className="container-sm">
                <h2>Add Task  </h2>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Task Title</label>
                        <input type="text" className="form-control" value={title} id="title" onChange={(e)=>{setTitle(e.target.value)}}/>
                    </div>
                    <div className="mb-3"> 
                        <label htmlFor="desc" className="form-label">Task Description</label>
                        <textarea className="form-control" value={desc} id="desc" rows="3" onChange={(e)=>{setDesc(e.target.value)}}></textarea>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form >
            </div>
        
            

        </>
    )
}

export default AddTodo
