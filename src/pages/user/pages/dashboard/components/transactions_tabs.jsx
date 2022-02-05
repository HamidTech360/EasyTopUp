import React from 'react';
import '../css/transactionTab.css'
const TransactionTab = () => {
    return ( 
        <div className="transactionsTab">
           
            <div className="row trans-tab-grid">
                <div className="col-5 trans-history history">
                    <i className="fa fa-1x fa-archive history-icon"></i>
                    <div className="history-text">Transaction History</div>
                </div>
                <div className="col-5 wallet-summary history">
                    <i className="fa fa-1x fa-archive wallet-summary-icon"></i>
                    <div className="history-text">Wallet Summary</div>
                </div>
            </div>
        </div>
     );
}
 
export default TransactionTab;