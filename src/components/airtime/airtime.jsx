import React, {Component} from 'react'
import axios from 'axios'
import '../signUp/css/signup.css'
import {apiUrl} from '../../config.json'
import AlertDialog from '../dialog/dialog'
class Airtime extends Component{
    
    state={
        data:{
            network:'',
            phone_no:'',
            amount:''
        },
        openDialog:false,
        dialogMessage:'',
        
    }
    handleClose = () => {
        this.setState({openDialog:false});
    }

    handleChange = (e)=>{
        const data = {...this.state.data}
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({data})
       // console.log(this.state.data);
    }

    handleSubmit = async (e)=>{
        e.preventDefault()
        const email = localStorage.getItem('userEmail')
        this.setState({
            openDialog:true,
            dialogMessage:'YOUR REQUEST IS BEING PROCESSED...',
            type:"green"
        })
        try{
            const response = await axios.post(
                `${apiUrl}/airtime.php`,
                {...this.state.data, email},
                {headers:{
                    'content-type':'application/json'
                }}
            )
         

            if(response.data.status=="TRANSACTION SUCCESSFUL"){
                console.log('success');
                this.setState({
                    openDialog:true,
                    dialogMessage:'Your line has been recharged successfully',
                    type:"green"
                })
            }else if(response.data.status=='low_fund'){
                this.setState({
                    openDialog:true,
                    dialogMessage:'Insufficient fund to process your REQUEST.... Please Fund your wallet',
                    type:"red"
                })
            }
            else{
                console.log('failed');
                this.setState({
                    openDialog:true,
                    dialogMessage:'Failed to recharge your line',
                    type:"red"
                })
            }
            console.log(response.data);
        }catch(error){
            this.setState({
                openDialog:true,
                dialogMessage:'Please check your internet connection',
                type:"red"
            })
        }
        

    }
   render(){
    return(
        <React.Fragment>
            <AlertDialog
                handleClose ={this.handleClose}
                appear= {this.state.openDialog}
                dialogMessage={this.state.dialogMessage}
                type={this.state.type}
            />
            <div className="signUp_wrapper container">
             
            <div className="form-box">
                <div className="bold-text " style={{color:'rgb(9, 9, 26)'}}>
                    Airtime TopUp
                </div>
                <div className="airtimeText">

                </div>
                 <form onSubmit={(e)=>this.handleSubmit(e)}>
                  
                 <div className="mb-3">
                        <label htmlFor="network" className="form-label">Network</label>
                        <select onChange={(e)=>this.handleChange(e)} name="network" className="form-control" id="exampleInputEmail1">
                            <option value="">please select</option>
                            <option value="mtn">MTN</option>
                            <option value="glo">GLO</option>
                            <option value="airtel">Airtel</option>
                            
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone Number" className="form-label">Phone Number</label>
                        <input onChange={(e)=>this.handleChange(e)} type="number" name="phone_no" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    

                    <div className="mb-3">
                        <label htmlFor="Amount" className="form-label">Amount</label>
                        <input onChange={(e)=>this.handleChange(e)} type="number" name="amount" className="form-control" id="exampleInputPassword1"/>     
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

export default Airtime;