import React, {Component} from 'react'
import axios from 'axios'
import '../signUp/css/signup.css'
import {apiUrl} from '../../config.json'


class Fund_wallet extends Component{

    state={
        data:{
            phone_no:'',
            amount:'',
            email:''
        }
    }
    handleChange = (e)=>{
        const data = {...this.state.data}
        data[e.currentTarget.name] = e.currentTarget.value
        this.setState({data})
        // console.log(this.state.data);
    }

    handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            const response = await axios.post(
                `${apiUrl}/payment.php`,
                {...this.state.data},
                {headers:{'content-type':'application/json'}}
            )
            console.log(response.data);
            console.log(response.data.data.authorization_url);  
            localStorage.setItem('ref',response.data.data.reference)  
            window.location.replace(`${response.data.data.authorization_url}`)
        }catch(error){
            alert('Check you Internet connection and try again')
        }
       
        




         
    }
   
  render(){
    return(
        <React.Fragment>
            
            <div className="signUp_wrapper container">
             
            <div className="form-box">
                <div className="bold-text signup_heading" style={{color:'rgb(9, 9, 26)'}}>
                    Fund Wallet
                </div>
                 <form onSubmit={(e)=>this.handleSubmit(e)}>
                  
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" required onChange={(e)=>this.handleChange(e)} name="email" className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone Number" className="form-label">Phone Number</label>
                        <input type="number" required onChange={(e)=>this.handleChange(e)} name="phone_no" className="form-control" required id="exampleInputPassword1"/>
                    </div>
                    

                    <div className="mb-3">
                        <label htmlFor="Amount" className="form-label">Amount</label>
                        <input type="number" required  onChange={(e)=>this.handleChange(e)} name="amount" className="form-control" id="exampleInputPassword1" required/>     
                    </div>
                    
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-success form-control">Proceed</button>
                </form>
            </div>
        </div >
        </React.Fragment>
    )
  }
    
    
}


export default Fund_wallet;