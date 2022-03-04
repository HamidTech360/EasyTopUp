import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import {apiUrl} from '../../config.json'

const VerifyAccount = () => {
    const [data, setData] = useState({})
    const ref = useParams().code
    console.log(ref);
    useEffect(()=>{
       async function verifyAccount (){
            const response = await axios.post(`${apiUrl}/user/verify_account`, {ref})
            console.log(response.data);
            setData(response.data)
        }
        verifyAccount() 
    },[])

    return ( 
        <div className="verifyyAccount">
           {data.status==="success"?<div className="text-center success-box" style={{marginTop:'60px'}}>
            <img src="../../../../assets/success.png" alt="success" className="success-logo" />
            <div className="success-text">Account verified sucessfully. proceed to <Link to="/login">login</Link> </div>
           </div> :''}
        </div>
     );
}
 
export default VerifyAccount;