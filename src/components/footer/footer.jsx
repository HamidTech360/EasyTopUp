import React from 'react'
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import './footer.css'
const Footer =()=>{
   return(
    <div className="footer">
         <span className="icon">
                    <GraphicEqIcon
                        style = {{
                            color:'fuchsia',
                            fontSize:'45px'
                        }}
                    />
                    EasyTopUp
        </span>
       <div className="row">
            <div className="footer-text col-lg-7 col-md-7 col-sm-12 col-xs-12">
                Your reliable plug for virtual topup, data subscription, online payment 
                and subscription system 
            </div>

            <div className="footer-icons col-lg-5 col-md-7 col-sm-12 col-xs-12">
                <i className="fa footer-icon fa-instagram fa-2x"></i> 
                <i className="fa footer-icon fa-twitter fa-2x"></i>
                <i className="fa footer-icon fa-linkedin fa-2x"></i>
            </div>
            
       </div>

       <hr className="footer-hr" />
       <div className="designed-by text-center">
           Designed and developed by <br /> HamidTech360
       </div>
        {/* <div className="privacy">
            Privacy policy
        </div> 
        <div className="copyright">
            copyright 2021 All rights reserved| medaweb SOftware
        </div> 
        <div className="icons">
            <i className="fa fa-facebook fa-1x foterIcon"></i>
            <i className="fa fa-whatsapp fa-1x foterIcon"></i>
            <i className="fa fa-twitter  fa-1x foterIcon"></i>
        </div> */}
    </div>
   )
}

export default Footer 