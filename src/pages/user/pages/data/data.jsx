import React,{Component} from 'react'
// import AlertDialog from '../dialog/dialog'
// import '../signUp/css/signup.css'
// import axios from 'axios'
// import {apiUrl} from '../../config.json'



const Data = ()=> {

 
    // const [variatin_code, setVariation_code] = useState([])
    // const[data, setData] = useState({
    //     dataItems:{
    //         network:'',
    //         plan:'',
    //         phone_no:''
    //     }
    // })
    // state ={
    //     data:{
    //         network:'',
    //         plan:'',
    //         phone_no:''
    //     },
    //     varaitions:[],
    //     openDialog:false,
    //     dialogMessage:'',
    //     amounts:[]
    // }
    // async componentDidMount() {
    //     try{
           
    //             const response = await axios.get(`${apiUrl}/mtnvariation.php`)
    //             console.log(response.data.content.varations);
                

    //             const responseAirtel =  await axios.get(`${apiUrl}/airtelvariations.php`)
    //             console.log(responseAirtel.data.content.varations);

    //             const responseGlo =  await axios.get(`${apiUrl}/glovariations.php`)
    //             console.log(responseGlo.data.content.varations);

    //             this.setState({varaitions:[...response.data.content.varations, ...responseAirtel.data.content.varations, ...responseGlo.data.content.varations]})

            
    //     }catch(error){
    //         alert('Please check your Internet connection')
    //     }

    //   }

      const handleClose = () => {
        // this.setState({openDialog:false});
      }

     const handleChange = (e)=>{
        //   const data = {...this.state.data}
        //   data[e.currentTarget.name] = e.currentTarget.value
        //   this.setState({data})
        //   console.log(this.state.data);
          
      }
  
      const handleSubmit = async (e)=>{
            // e.preventDefault()
            // const email = localStorage.getItem('userEmail')
            // const getamount = this.state.varaitions.filter(el=>el.variation_code== this.state.data.plan)
            // const dataAmount = getamount[0].variation_amount
            // this.setState({
            //     openDialog:true,
            //     dialogMessage:'YOUR REQUEST IS BEING PROCESSED...',
            //     type:"green"
            // })
            // try{
            //     const response = await axios.post(
            //         `${apiUrl}/data.php`,
            //         {...this.state.data, email, dataAmount},
            //         {headers:{
            //             'content-type':'application/json'
            //         }}
            //     )
                
            // if(response.data.status=="TRANSACTION SUCCESSFUL"){
            //     console.log('success');
            //     this.setState({
            //         openDialog:true,
            //         dialogMessage:'Your line has been recharged successfully',
            //         type:"green"
            //     })
            // }else if(response.data.status=='low_fund'){
            //     this.setState({
            //         openDialog:true,
            //         dialogMessage:'Insufficient fund to process your REQUEST.... Please Fund your wallet',
            //         type:"red"
            //     })
            // }
            // else{
            //     console.log('failed');
            //     this.setState({
            //         openDialog:true,
            //         dialogMessage:'Failed to recharge your line',
            //         type:"red"
            //     })
            // }
            //    // console.log(response);
            // }catch(error){
            //     alert('please check your internwt connection')
            // }
      }
      
        return(
            <React.Fragment>
                 {/* <AlertDialog
                handleClose ={this.handleClose}
                appear= {this.state.openDialog}
                dialogMessage={this.state.dialogMessage}
                type={this.state.type}
            /> */}
                <div className="signUp_wrapper container">
                 
                <div className="signup-form-box">
                    <div className="bold-text " style={{color:'rgb(9, 9, 26)', marginBottom:'20px'}}>
                        Data Subscription 
                    </div>
                    <div className="airtimeText">
    
                    </div>
                     <form onSubmit={(e)=>this.handleSubmit(e)}>
                      
                         <div className="mb-3">
                            <label htmlFor="network" className="form-label">Network</label>
                            <select onChange={(e)=>handleChange(e)}  type="email" name="network" className="form-control" id="exampleInputEmail1">
                                <option value="">please select</option>
                                <option value="mtn-data">MTN</option>
                                <option value="glo-data">GLO</option>
                                <option value="airtel-data">Airtel</option>
                               
                            </select>
                        </div>
    
                        <div className="mb-3">
                            <label htmlFor="network" className="form-label">Data plan</label>
                            <select onChange={(e)=>handleChange(e)}  type="email" name="plan" className="form-control" id="exampleInputEmail1">
                                <option value="">please select a plan</option>
                                {/* {this.state.varaitions.map((option, i)=> <option onSelect={(e)=>this.getAmount(e)} key={i} amount={option.variation_amount} value={option.variation_code}>{option.name}</option>)} */}
                            </select>
                        </div>
    
                        <div className="mb-3">
                            <label htmlFor="phone Number" className="form-label">Phone Number</label>
                            <input onChange={(e)=>handleChange(e)}  type="number" name="phone_no" className="form-control" id="exampleInputPassword1"/>
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

export default Data;