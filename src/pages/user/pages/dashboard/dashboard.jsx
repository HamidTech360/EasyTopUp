import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import BalanceTab from './components/balanceTab';
import QuickLinks from './components/quicklinks';
import TransactionTabs from  './components/transactions_tabs'
import Review from './components/review';

import './css/dashboard.css'

const DashBoard = ({}) => {
    const {user} = useSelector(state=>state.user)
    return ( 
     <div className="dashboard">
       {!user?.data.isVerified?<div className="alert alert-warning text-center">Please verify your account from your email</div>:''} 
         <BalanceTab/>
        <TransactionTabs/>
        <QuickLinks/>
        <Review/>
        <a href="https://wa.me/+2347015713905">
          <button className="fixed-whatsap-btn fixed-whatsap-btn-right">
            <i className="fa fa-whatsapp fa-2x"></i>
          </button>
        </a>
     </div>

     );
}
 
export default DashBoard;