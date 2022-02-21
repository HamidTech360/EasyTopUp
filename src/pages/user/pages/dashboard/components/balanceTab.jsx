import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import '../css/balance-tab.css'

const BalanceTab = () => {
 
    const {user} = useSelector(state=>state.user)
    console.log(user);
    return ( 
    <div className="row colored-box">
        <div className="col-6">
            <div className="dark_badge">
                   <span className="user-img-span">
                        <img src="../../../../assets/avatar.png" className="avatar_profile_img" alt="" />    
                   </span>
                    <span className="user-name">{user?.data.lastName|| 'Unknown'}</span>
             </div>
        </div>
        
         <div className="col-6">
            <Link to="/user/fund_wallet">
                <button className="btn btn-light btn-fund-wallet pull-right">Fund Wallet</button>
            </Link>
        </div>

        <div className="col-6">
            <div className="colored_box_text">
                Wallet Balance
            </div>
        </div>
                    
        <div className="col-6 colored_box_text">
            <span className="balance-value pull-right">&#8358;{user?.data.walletBalance} </span>
        </div>

        <div className="col-6">
            <div className="colored_box_text">
                Referral Bonus
            </div>
        </div>
        
        <div className="col-6 colored_box_text">
            <span className="balance-value pull-right">&#8358;{user?.data.referralBonus}</span>
        </div>
    </div>
     );
}
 
export default BalanceTab;