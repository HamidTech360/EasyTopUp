import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'
import axios from 'axios'
import {apiUrl} from '../../config.json'

import Footer from '../../components/footer/footer'

import './css/signup.css'


const SignUp= ()=>{

    const history = useHistory()

    const [showProgress, setShowProgress] = useState(false)
    const [showErrorMsg, setShowErrorMsg] = useState(null)
    const [showSuccessMsg, setShowSuccessMsg] = useState(false)
    const [data, setData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phoneNo:'',
        password:''
    })
 

     const handleChange = (e)=>{
        const clone = {...data}
        clone[e.currentTarget.name] = e.currentTarget.value 
        setData(clone)
        // console.log(data);
    }

    const handleSubmit= async (e)=>{
        setShowProgress(true)
       

        try{
            
            const response = await axios.post(`${apiUrl}/user`, data)
            console.log(response.data);
            if(response.data.status==="success"){
                setShowErrorMsg(null)
                setShowSuccessMsg(true)
            }
         
        }catch(error){
            setShowProgress(false)
            setShowErrorMsg(error.response?.data)
            setShowSuccessMsg(null)
        }
      
    }


   
    return(
        <React.Fragment>
          
            <div className="signUp_wrapper container">
             
            <div className="signup-form-box">
                <div className="bold-text signup_heading">
                    Register
                </div>
                 
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">First Name</label>
                        <input type="text"
                                name="firstName"    

                                className="form-control" 
                                aria-describedby="emailHelp"
                                // value={state.data.fname}
                                onChange={(e)=>handleChange(e)}
                        />
                        <div id="emailHelp" className="form-text">Enter your firstname</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Last Name</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            className="form-control"  
                            aria-describedby="emailHelp"
                            // value={state.data.lname}
                            onChange={(e)=>handleChange(e)}
                        />
                        <div id="emailHelp" className="form-text">Enter your Surname</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            aria-describedby="emailHelp"
                            // value={state.data.email}
                            onChange={(e)=>handleChange(e)}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone Number" className="form-label">Phone Number</label>
                        <input 
                            type="number" 
                            name="phoneNo" 
                            className="form-control" 
                            id="exampleInputPassword1"
                            // value={state.data.phoneNo}
                            onChange={(e)=>handleChange(e)}
                    />
                    </div>
                    

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control"
                            // value={state.data.password}
                            onChange={(e)=>handleChange(e)}
                        />
                        <div id="emailHelp" className="form-text">Strong password suggested.</div>
                    </div>
                    
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    
                    {showErrorMsg?<div className="alert alert-danger">{showErrorMsg}</div>:''}
                    {showSuccessMsg?<div className="alert alert-success">Account created successfully. please continue to <Link to="/login">login</Link> </div>:''}

                    <button 
                        type="submit" 
                        className="btn btn-submit "
                        onClick={()=>handleSubmit()}
                        >
                            {showProgress?<CircularProgress size={27} />:'Submit'}
                        </button>


                    <div className="query-form">Already have an account? <Link to="/login">login</Link></div>
                    <div className="back-to-home"> <Link to="/">Back to home</Link> </div>
                
            </div>
        </div >
        <Footer/>
        </React.Fragment>
    )
    
    
}

export default SignUp;