import React from 'react'

const Logout =  (props)=>{
    return(
       <React.Fragment>
           { localStorage.clear()}
        {props.history.push('/')}
       </React.Fragment>
    )
    
}

export default Logout;