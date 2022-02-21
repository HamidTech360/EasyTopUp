import React from 'react';
import { Link } from 'react-router-dom';
import '../css/transactionTab.css'
const TransactionTab = () => {
    return ( 
        <div className="transactionsTab">
           
            <div className="row trans-tab-grid">
                <div className="col-5 trans-history history">
                    <i className="fa fa-1x fa-archive history-icon"></i>
                    <Link to="payment_history" style={{textDecoration:'none', color:'initial'}}>
                        <div className="history-text">Transaction History</div>
                    </Link>
                </div>
                <div className="col-5 wallet-summary history">
                    <i className="fa fa-1x fa-archive wallet-summary-icon"></i>
                    <Link to="/user/vtu_history" style={{textDecoration:'none', color:'initial'}}>
                        <div className="history-text">Wallet Summary</div>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default TransactionTab;