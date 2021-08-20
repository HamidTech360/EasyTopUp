import React from 'react'
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import '../css/profile-header.css'
const Profile_Header = ()=>{
    return(
        <div className="profile_header_wrapper row">
            <div className="col-7 col-xs-8 graphIcon">
                <span className="icon">
                    <GraphicEqIcon
                        style = {{
                            color:'fuchsia',
                            fontSize:'45px'
                        }}
                    />
                    EasyTopUp
                </span>
           </div>
          
        </div>
    )
}

export default Profile_Header