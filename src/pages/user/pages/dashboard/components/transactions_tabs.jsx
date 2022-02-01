import React from 'react';
import '../css/transactionTab.css'
const TransactionTab = () => {
    return ( 
        <div className="transactionsTab">
           
            <div className="row trans-tab-grid">
                <div className="col-5 trans-history history">
                    <i className="fa fa-2x fa-archive history-icon"></i>
                    <span className="history-text">Transaction History</span>
                </div>
                <div className="col-5 wallet-summary history">
                    <i className="fa fa-2x fa-archive wallet-summary-icon"></i>
                    <span className="history-text">Wallet Summary</span>
                </div>
            </div>
        </div>
     );
}
 
export default TransactionTab;