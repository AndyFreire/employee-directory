import React from "react";

function Employees ({ users }){

    if(users[0] !== undefined){
        return(
           <div>
               Employees go here
           </div> 
        )
    } else {
        return(
            <div>
                No employees found!
            </div>
        )
    }
}

export default Employees;