import React, {useState} from 'react';
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
                    <span className="user-name">{user?.data.lastName|| 'Hamid'}</span>
             </div>
        </div>
        
         <div className="col-6">
            <button className="btn btn-light btn-fund-wallet pull-right">Fund Wallet</button>
        </div>

        <div className="col-6">
            <div className="colored_box_text">
                Wallet Balance
            </div>
        </div>
                    
        <div className="col-6 colored_box_text">
            <span className="balance-value pull-right">#{user?.data.walletBalance} </span>
        </div>

        <div className="col-6">
            <div className="colored_box_text">
                Referral Bonus
            </div>
        </div>
        
        <div className="col-6 colored_box_text">
            <span className="balance-value pull-right">#{user?.data.referralBonus}</span>
        </div>
    </div>
     );
}
 
export default BalanceTab;