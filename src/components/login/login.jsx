import React, {Component} from 'react'
import { Redirect } from 'react-router';
import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import {apiUrl} from '../../config.json'
import './css/login.css'

class Login extends Component{
    state={
        data:{
            email:'',
            password:''
        }
    }
    handleChange=(e)=>{
        const data = {...this.state.data}
        data[e.currentTarget.name] = e.currentTarget.value
        this.setState({data})
       
    }
    handleSubmit=async (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('email', this.state.data.email)
        formData.append('password', this.state.data.password)
        try{
            
            let resp = await axios.post(`${apiUrl}/login.php`, formData, {headers:{
                'content-type':'multipart/form-data'
            }})
            
            if(resp.data== 'found'){
            //   return <Redirect from="/login" to = "/profile"/>
            localStorage.clear()
            localStorage.setItem('userEmail', this.state.data.email)
            this.props.history.push('/profile')

            }else{
                alert('not-found')
            }
        }catch(error){
            alert('Something went wrong!! Check your internet connection and try again')
        }

    }
    render(){
        const {email, password} = this.state.data
        return(
            <div className="signUp_wrapper container" id="login_wrapper">
            
                <div className="form-box" id="login-form-box">
                    <div className="bold-text signup_heading">
                        SIgn In
                    </div>
                     <form onSubmit={(e)=>this.handleSubmit(e)}>
                        <div className="login-form-group">
                            <TextField 
                                id="standard-secondary" 
                                label="email" color="secondary" 
                                fullWidth 
                                value = {email}
                                name="email"
                                onChange= {(e)=>this.handleChange(e)}
                            />
                        </div>
                        <div className="login-form-group ">
                            <TextField 
                                id="standard-secondary" 
                                label="password" 
                                color="secondary" 
                                fullWidth 
                                name="password"
                                value = {password}
                                onChange= {(e)=>this.handleChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-submit btn-login form-control">Submit</button>
                    </form>
                </div>
            </div >
        )
    }

    
}

export default Login;