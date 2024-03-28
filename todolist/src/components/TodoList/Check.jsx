import React from "react";

const Check = (props)=>{
    const {setStatus} = props;
    return (
        <button onClick={()=>{setStatus('M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z')}} className="btn btn-success">Success</button>
    )
};


export default Check