import React from 'react'
import {Link} from 'react-router-dom'

import '../css/banner1.css'

const Banner1 = () => {
    return ( 
        <div className="banner1">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 banner1-text">
                    <div className="banner1-small-text">APP LANDING PAGE</div>
                    <div className="banner1-bold-text">
                        Get Automated  Virtual TopUp with EasyTOpUp
                    </div>
                    <div className="banner1-medium-text">
                        Here at EASYTOPUP, we offer you the most affordable and most cheapest data, airtime, and other VTu services 
                    </div>
                    <div className="banner1-btns">
                        <Link to="/signup"><button className="banner1-btn-join">Register now </button></Link>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 banner1-img-container hideOnMobile">
                    <img src="../../../assets/phone.png" alt="phone" className="phone-img" />
                </div>
            </div>
        </div>
     );
}
 
export default Banner1;