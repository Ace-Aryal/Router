import React from "react";
import { useParams } from "react-router-dom";
//to capture :userId using useParams
 export default  function User() {
    const {userId} = useParams()

    return(
        <div className="flex justify-center w-full bg-cyan-500 text-white font-lg text-lg h-20px">
        User : {userId}
        </div>
    )
}