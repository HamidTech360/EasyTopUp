import React, {useState} from 'react';

import BalanceTab from './components/balanceTab';
import QuickLinks from './components/quicklinks';
import TransactionTabs from  './components/transactions_tabs'
import Review from './components/review';

import './css/dashboard.css'

const DashBoard = ({}) => {
  
    return ( 
     <div className="dashboard">
         <BalanceTab/>
        <TransactionTabs/>
        <QuickLinks/>
        <Review/>
     </div>

     );
}
 
export default DashBoard;