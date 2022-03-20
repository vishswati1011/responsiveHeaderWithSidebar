import React from "react";
import { useState } from "react";
export default setstateinF =>{

    const [active,setActive] =useState("");
    return(
        <div>
            <div onClick={()=>setActive("basic")}>
            {active==="basic"?<span>hello</span>:<span>hello this is Dashboard</span>}
            </div>
            
        </div>
    )
}