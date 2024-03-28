import React from "react";

const Status = (props)=>{
    const { status, key } = props
    return (
        <svg id={key} xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={status} /></svg>
    )
}

export default Status