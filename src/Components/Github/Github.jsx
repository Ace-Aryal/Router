import React, { useEffect } from "react";

function Github() {
    
    useEffect(()=>{
       fetch("https://api.github.com/users/ace-aryal")
       .then(res=> res.json() )
    }),[]
}

export default Github;