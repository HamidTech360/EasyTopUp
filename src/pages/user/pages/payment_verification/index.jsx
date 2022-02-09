import React, {useEffect, useState} from 'react'
import {useSearchParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {apiUrl} from '../../../../config.json'

import './index.css'

const VerifyPayment = ()=>{
    const [data, setData] = useState({})
    const [searchParams, setSearchParms] = useSearchParams()
    const ref = searchParams.get('reference')
    const token = localStorage.getItem('auth_token')
    const navigate = useNavigate()

    useEffect(()=>{
     try{
        async function VerifyPayment (){
            const response = await axios.post(`${apiUrl}/pay/verify`, {ref}, {
                headers:{
                    'Authorization':token
                }
            })
            console.log(response.data);
           // if(!response.data.status) navigate('/user')
            setData(response.data)
        }
        VerifyPayment()
     }catch(ex){
         alert(ex.response?.data);
        //  navigate('/user')
     }

    },[])

    return(
        <div className="verify-pay">
           {data.status?
            <div className="text-center success-box">
            <img src="../../../../assets/success.png" alt="success" className="success-logo" />
            <div className="success-text">Payment successfully made</div>
        </div>:''}
        </div>
    )
}

export default VerifyPayment