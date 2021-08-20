import React, {Component} from 'react'
import axios from 'axios'
import {apiUrl} from '../../config.json'
import './css/signup.css'


class SignUp extends Component{

    
    state = {
        data:{
            fname:'',
            lname:'',
            email:'',
            phoneNo:'',
            password:''
        }
    }

     handleChange = (e)=>{
        const data = {...this.state.data}
        data[e.currentTarget.name] = e.currentTarget.value 
        this.setState({data})
        
    }

    handleSubmit= async (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('fname', this.state.data.fname)
        formData.append('lname', this.state.data.lname)
        formData.append('email', this.state.data.email)
        formData.append('phone_no', this.state.data.phoneNo)
        formData.append('password', this.state.data.password)

        try{
            let resp = await axios.post(`${apiUrl}/signup.php`, formData,  {headers: {
                'content-type': 'multipart/form-data'
            }} )
    
            //console.log(resp.data.insert);
            if(resp.data.insert == 'existing'){
                alert('REcord already exist');
            }else{
                alert('inserted')
            }
        }catch(error){
            alert('Something went wrong. try again Later')
        }
      
    }


   render(){
    return(
        <React.Fragment>
          
            <div className="signUp_wrapper container">
             
            <div className="form-box">
                <div className="bold-text signup_heading">
                    Register
                </div>
                 <form onSubmit={(e)=>this.handleSubmit(e)} method="post">
                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">First Name</label>
                        <input type="text"
                                name="fname"    
                                required
                                className="form-control" 
                                aria-describedby="emailHelp"
                                value={this.state.data.fname}
                                onChange={(e)=>this.handleChange(e)}
                        />
                        <div id="emailHelp" className="form-text">Enter your firstname</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Last Name</label>
                        <input 
                            type="text" 
                            name="lname" 
                            required
                            className="form-control"  
                            aria-describedby="emailHelp"
                            value={this.state.data.lname}
                            onChange={(e)=>this.handleChange(e)}
                        />
                        <div id="emailHelp" className="form-text">Enter your Surname</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            name="email" 
                            required
                            className="form-control" 
                            aria-describedby="emailHelp"
                            value={this.state.data.email}
                            onChange={(e)=>this.handleChange(e)}
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone Number" className="form-label">Phone Number</label>
                        <input 
                            type="number" 
                            name="phoneNo" 
                            required
                            className="form-control" 
                            id="exampleInputPassword1"
                            value={this.state.data.phoneNo}
                            onChange={(e)=>this.handleChange(e)}
                    />
                    </div>
                    

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            className="form-control"
                            required
                            value={this.state.data.password}
                            onChange={(e)=>this.handleChange(e)}
                        />
                        <div id="emailHelp" className="form-text">Strong password suggested.</div>
                    </div>
                    
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-submit">Submit</button>
                </form>
            </div>
        </div >
        </React.Fragment>
    )
   }
    
    
}

export default SignUp;