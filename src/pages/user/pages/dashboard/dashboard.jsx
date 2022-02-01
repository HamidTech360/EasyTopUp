import React, {useState} from 'react';
import QuickLinks from './components/quicklinks';
import TransactionTabs from  './components/transactions_tabs'

import './css/dashboard.css'

const DashBoard = ({}) => {
    const [userData, setUserData] = useState({
        firstName:"Hamid",
        balance:'20000'
    })
    return ( 
     <div className="dashboard">
        <div className="row colored-box">
            <div className="col-6">
                <div className="dark_badge row">
                    <div className="col-4">
                        <img src="../../../../assets/avatar.png" className="avatar_profile_img" alt="" />
                    </div> 
                    <div className="name col-7">{userData.firstName}</div>
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
                <span className=" pull-right">#{userData.balance}</span>
            </div>

            <div className="col-6">
                <div className="colored_box_text">
                    Commission
                </div>
            </div>
            
            <div className="col-6 colored_box_text">
                <span className=" pull-right">#0.00</span>
            </div>
        </div>
        <TransactionTabs/>
        <QuickLinks/>
        
     </div>

     );
}
 
export default DashBoard;