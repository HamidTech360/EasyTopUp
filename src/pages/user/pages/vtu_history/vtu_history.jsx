import React, {useState, useEffect} from 'react'
import {apiUrl} from '../../../../config.json'
import axios from 'axios'

//custom components
import SimpleBackdrop from '../../../../components/backdrop/backdrop'

//styles
// import './css/payment.css'

const VtuHistory = ()=>{
    const token = localStorage.getItem('auth_token')
    const [open, setOpen] = useState(true)
    const [data, setData] = useState([])

    useEffect(()=>{
        async function getData (){
            const response = await axios.get(`${apiUrl}/vtu/history`, {headers:{
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
               
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope='col'>Amount</th>
                            <th scope='col'>Type</th>
                            <th scope='col'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                      {data.map((item, i)=>
                        <tr key={i}>
                          <td>NGN {item.amount}</td>
                          <td>{item.type}</td>
                          <td>{item.updatedAt}</td>
                      </tr>
                      )}
                    </tbody>
                </table>
           </div>
        </div>
    )
}

export default VtuHistory