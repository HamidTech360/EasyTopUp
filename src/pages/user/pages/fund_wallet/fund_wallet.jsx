import React, {Component} from 'react'
import axios from 'axios'
import '../../../signUp/css/signup.css'
import './css/fund_wallet.css'
// import {apiUrl} from '../../config.json'


const Fund_wallet = ()=>{

    // state={
    //     data:{
    //         phone_no:'',
    //         amount:'',
    //         email:''
    //     }
    // }
    const handleChange = (e)=>{
        // const data = {...this.state.data}
        // data[e.currentTarget.name] = e.currentTarget.value
        // this.setState({data})
        // console.log(this.state.data);
    }

    const handleSubmit = async (e)=>{
        // e.preventDefault()
        // try{
        //     const response = await axios.post(
        //         `${apiUrl}/payment.php`,
        //         {...this.state.data},
        //         {headers:{'content-type':'application/json'}}
        //     )
        //     console.log(response.data);
        //     console.log(response.data.data.authorization_url);  
        //     localStorage.setItem('ref',response.data.data.reference)  
        //     window.location.replace(`${response.data.data.authorization_url}`)
        // }catch(error){
        //     alert('Check you Internet connection and try again')
        // }
            
    }
   

    return(
        <React.Fragment>
            
            <div className="signUp_wrapper container">
             
            <div className="signup-form-box">
                <div className="bold-text signup_heading" style={{color:'rgb(9, 9, 26)'}}>
                    Fund Wallet
                </div>
                 <form onSubmit={(e)=>handleSubmit(e)}>
                  
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" required onChange={(e)=>handleChange(e)} name="email" className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone Number" className="form-label">Phone Number</label>
                        <input type="number" required onChange={(e)=>handleChange(e)} name="phone_no" className="form-control" required id="exampleInputPassword1"/>
                    </div>
                    

                    <div className="mb-3">
                        <label htmlFor="Amount" className="form-label">Amount</label>
                        <input type="number" required  onChange={(e)=>handleChange(e)} name="amount" className="form-control" id="exampleInputPassword1" required/>     
                    </div>
                    
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-wallet-submit form-control">Proceed</button>
                </form>
            </div>
        </div >
        </React.Fragment>
    )

    
    
}


export default Fund_wallet;