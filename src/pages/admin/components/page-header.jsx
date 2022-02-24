import React from 'react'
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import './css/page-header.css'
const Page_Header = ()=>{
    return(
        <div className="profile_header_wrapper">
          <span className="pull-right">
              <i className="fa fa-bell"></i>
              {/* <span className="dark_badge">
                    
                    <img src="../../../../assets/avatar.png" className="avatar_profile_img" alt="" />
                    {'Hamid'}
                </span> */}
          </span>          
        </div>
    )
}

export default Page_Header