import React from "react";

const DeleteTask = (props)=>{
    const { rmTask,index } = props
    return (
        <button onClick={()=>{rmTask(index)}} className="btn btn-error">Delete</button>
    )
}


export default DeleteTask