import React from 'react';
import moment from 'moment';
import '../css/stats.css'

const UserTable = ({data}) => {
    return ( 
    <div className="table-content"  id="user-tbl-content">
               
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Email</th>
                    <th scope='col'>WalletBalance</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Date</th>
                </tr>
            </thead>
            <tbody>
              {data?.map((item, i)=>
                <tr key={i}>
                  <td> {item.lastName} {item.firstName}</td>
                  <td>{item.email}</td>
                  <td>&#8358; {item.walletBalance}</td>
                  <td>{item.status}</td>
                  <td>{moment(item.updatedAt).format('LLL')}</td>
              </tr>
              )}
            </tbody>
        </table>
   </div>
     );
}
 
export default UserTable;