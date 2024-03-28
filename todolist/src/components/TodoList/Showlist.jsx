import React, {useState} from "react";
import DeleteTask from "./DeleteTask";
import Status from './Status'
import Check from './Check'

const showlist = (props)=>{
    const { List, Delete } = props;
    const [status, setStatus] = useState('M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z')

    return (
        <div className="container mx-auto">
            {List.map((rows,index)=>{
                return (
                    <div key={index} role="alert" className="alert shadow-lg mt-10">
                    <Status status={status} />
                    <div>
                        <h3 className="font-bold">{rows}</h3>
                       
                    </div>
                    <Check setStatus={setStatus} />
                    <DeleteTask rmTask={Delete} index={index} />
                    </div>
                )
            })}
        </div>
    )
}


export default showlist;