import React, {useState, useEffect} from 'react'
import {apiUrl} from '../../../../config.json'
import axios from 'axios'
import moment from 'moment'

//custom components
import SimpleBackdrop from '../../../../components/backdrop/backdrop'

//styles
import './css/payment.css'

const PaymentHistory = ()=>{
    const token = localStorage.getItem('auth_token')
    const [data, setData] = useState([])
    const [open, setOpen] = useState(true)

    useEffect(()=>{
        async function getData (){
            const response = await axios.get(`${apiUrl}/pay/all_payments`, {headers:{
                'Authorization':token
            }})
            console.log(response.data);
            if(response.data){
                setOpen(false)
            }
            setData(response.data.data)
        }
        getData()
    },[])
    if(open){
        return(
          <SimpleBackdrop open={open} />
        )
      }
    return(
        <div className="payment_history">
           <div className="table-header">Wallet Funding History</div>
           <div className="table-content">
               
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope='col'>Amount</th>
                            <th scope='col'>Reference</th>
                            <th scope='col'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                      {data.map((item, i)=>
                        <tr key={i}>
                          <td>NGN {item.amount}</td>
                          <td>{item.reference}</td>
                          <td>{moment(item.updatedAt).format('LLL')}</td>
                      </tr>
                      )}
                    </tbody>
                </table>
           </div>
        </div>
    )
}

export default PaymentHistory