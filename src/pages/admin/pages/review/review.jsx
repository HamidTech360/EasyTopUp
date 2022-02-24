import React, {useState, useEffect} from 'react'
import {apiUrl} from '../../../../config.json'
import axios from 'axios'
import moment from 'moment'

//custom components
import SimpleBackdrop from '../../../../components/backdrop/backdrop'

//styles
// import './css/payment.css'

const Reviews = ()=>{
    const token = localStorage.getItem('auth_token')
    const [data, setData] = useState([])
    const [open, setOpen] = useState(true)

    useEffect(()=>{
        async function getData (){
            const response = await axios.get(`${apiUrl}/review`, {headers:{
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
           <div className="table-header">Users' Reviews</div>
           <div className="table-content">
               
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope='col'>Email</th>
                            <th scope='col'>Review</th>
                            <th scope='col'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                      {data.map((item, i)=>
                        <tr key={i}>
                          <td>{item.email}</td>
                          <td>{item.review}</td>
                          <td>{moment(item.updatedAt).format('LLL')}</td>
                      </tr>
                      )}
                    </tbody>
                </table>
           </div>
        </div>
    )
}

export default Reviews