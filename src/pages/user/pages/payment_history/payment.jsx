import React from 'react'

const PaymentHistory = ()=>{

    return(
        <div className="payment_history">
            <div className="table-header">Wallet Funding History</div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope='col'>Amount</th>
                        <th scope='col'>Reference</th>
                        <th scope='col'>Transaction ID</th>
                        <th scope='col'>Response</th>
                        <th scope='col'>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>N1000</td>
                        <td>ref</td>
                        <td>trans</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}