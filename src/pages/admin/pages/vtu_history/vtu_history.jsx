import React, {useState, useEffect} from 'react'
import {apiUrl} from '../../../../config.json'
import axios from 'axios'
import moment from 'moment'

//custom components
import SimpleBackdrop from '../../../../components/backdrop/backdrop'

//styles
// import './css/payment.css'

const VtuHistory = ()=>{
    const token = localStorage.getItem('admin_auth_token')
    const [open, setOpen] = useState(true)
    const [data, setData] = useState([])

    useEffect(()=>{
        async function getData (){
            const response = await axios.get(`${apiUrl}/vtu/all_transactions`, {headers:{
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
           <div className="table-header">Transaction History</div>
           <div className="table-content">
               
                <table className="table table-striped table-responsive">
                    <thead>
                        <tr>
                            <th scope='col'>S/N</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'>Type</th>
                            <th scope='col'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                      {data.map((item, i)=>
                        <tr key={i}>
                          <td> {i+1} </td>
                          <td> {item.email} </td>
                          <td>&#8358; {item.amount}</td>
                          <td>{item.type}</td>
                          <td>{moment(item.updatedAt).format('LLL')}</td>
                      </tr>
                      )}
                    </tbody>
                </table>
           </div>
        </div>
    )
}

export default VtuHistory