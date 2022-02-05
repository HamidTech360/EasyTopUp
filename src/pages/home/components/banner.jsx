import React from 'react'

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
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, ea.
                         Molestias dolores adipisci aliquam qui voluptate, 
                    </div>
                    <div className="banner1-btns">
                        <button className="banner1-btn-join">Join now</button>
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