import React from "react";

const Button = (props)=>{

    const { Task } = props;
    return (
        <button onClick={Task} className="btn btn-outline btn-accent">Add Task!</button>
    )
};


export default Button;