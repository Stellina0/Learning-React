import React from "react";
import Button from './Button'
const Input = (props)=>{
    const { setTexts,texts,AddTasks } = props;
    return (
        <div>
            <input value={texts} onChange={setTexts} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <Button Task={AddTasks} />
        </div>
    )
};


export default Input;