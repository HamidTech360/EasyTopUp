import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import {apiUrl} from '../../../../config.json'
import { CircularProgress } from '@material-ui/core'

//store


//styles
import '../../../signUp/css/signup.css'
import './css/fund_wallet.css'




const Fund_wallet = ()=>{
   
    const {user}= useSelector(state=>state.user)
    const token = localStorage.getItem('auth_token')
    const [showProgress, setShowProgress] = useState(false)
    const [showErrMsg, setShowErrMsg] = useState(null)
    
    const [data, setData] = useState({
        amount:0
    })

    // useEffect(()=>{
    //     const clone={...data}
    //     clone['email']= user?.data.email
    //     console.log(clone);
    //     setData(clone)
    // },[])

    const handleChange = (e)=>{
        const clone = {...data}
        clone[e.currentTarget.name] = e.currentTarget.value
        setData(clone)
        console.log(data);
    }

    const handleSubmit = async (e)=>{
      setShowProgress(true)
      const payload ={
          email:user?.data.email,
          amount:data.amount
      }
        // return console.log(payload);
      
      try{
        const response = await axios.post(`${apiUrl}/pay`, payload, {headers:{
            'Authorization':token
        }})
        console.log(response.data);
         window.location.replace(`${response.data.data.authorization_url}`)
      }catch(ex){
          setShowProgress(false)
          setShowErrMsg(ex.response?.data || 'none')
      }
    }
   

    return(
        <React.Fragment>
            
            <div className="signUp_wrapper container">
             
            <div className="signup-form-box">
                <div className="bold-text signup_heading" style={{color:'rgb(9, 9, 26)'}}>
                    Fund Wallet 
                </div>
                 
                  
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            type="email"  
                             
                            name="email" className="form-control" 
                            id="exampleInputEmail1"  
                            aria-describedby="emailHelp"
                            value={user?.data.email || ''}
                            readOnly
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    

                    <div className="mb-3">
                        <label htmlFor="Amount" className="form-label">Amount</label>
                        <input 
                            type="number"   
                            onChange={(e)=>handleChange(e)} 
                            name="amount" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            
                        />     
                    </div>
                    
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>

                    {showErrMsg?<div className="alert alert-danger text-center">{showErrMsg}</div>:''}

                    <button onClick={()=>handleSubmit()} className="btn btn-wallet-submit " >
                        {showProgress?<CircularProgress size={27}/>:'Proceed'}
                    </button>
                
            </div>
        </div >
        </React.Fragment>
    )

    
    
}


export default Fund_wallet;