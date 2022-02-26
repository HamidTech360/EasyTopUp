import React,{useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {apiUrl} from '../../../../config.json'
import {CircularProgress} from '@material-ui/core'

//custom components
import SimpleBackdrop from '../../../../components/backdrop/backdrop'

//store
import {login} from '../../../../store/user'


// import {apiUrl} from '../../config.json'
import AlertDialog from '../../../../components/dialog/dialog'




const Data = ()=> {
    const dispatch = useDispatch()
    const token = localStorage.getItem('auth_token')
    const [open, setOpen] = useState(true)
    const [showErrorMsg, setShowErrMsg] = useState(null)
    const [showSuccessMsg, setShowSuccessMsg] = useState(null)
    const [showProgress, setShowProgress] = useState(false)
    const [showDialogMsg, setShowDialogMsg] = useState(false)
    const [apiResponse, setApiResponse] = useState([])
    const [data, setData]= useState({
        mobile_number:'',
        network:'',
        plan:''
    })

    useEffect(()=>{
        async function getPlans (){
            try{
                const response = await axios.get(`${apiUrl}/vtu/data`)
                console.log(response.data);
                if(response.data){
                    setOpen(false)
                }
                setApiResponse(response.data)
            }catch(ex){
                console.log('Can"t fetch data plans. Network error');
            }
        }
        getPlans()
    },[])
      const handleClose = () => {
        // this.setState({openDialog:false});
      }

     const handleChange = (e)=>{
        const clone = {...data}
        clone[e.currentTarget.name] = e.currentTarget.value
        setData(clone)
        //console.log(data);
          
      }
  
      const handleSubmit = async (e)=>{
        setShowDialogMsg(true)
        setShowProgress(true)
      
        try{
            const response = await axios.post(`${apiUrl}/vtu/data`, data, {
                headers:{
                    'Authorization':token
                }
            })
            console.log(response.data);
            if(response.data.status){
                setShowSuccessMsg('Transaction successfull')
                dispatch(login(response.data))
                setShowDialogMsg(false)
                setShowProgress(false)
                setShowErrMsg(null)
            }

        }catch(ex){
            console.log((ex?.response.data));
            setShowProgress(false)
            setShowDialogMsg(false)
            setShowErrMsg(ex?.response.data)
            setShowSuccessMsg(null)
        }
      }
      if(open){
        return(
          <SimpleBackdrop open={open} />
        )
      }
        return(
            <React.Fragment>
              {showDialogMsg?
              <AlertDialog
                handleClose ={handleClose}
                appear= {showDialogMsg}
                dialogMessage={'Your Transaction is being processed'}
                type={''}
              /> :''}
                <div className="signUp_wrapper container">
                 
                <div className="signup-form-box">
                    <div className="bold-text " style={{color:'rgb(9, 9, 26)', marginBottom:'20px'}}>
                        Data Subscription 
                    </div>
                    <div className="airtimeText">
    
                    </div>
                     
                      
                         <div className="mb-3">
                            <label htmlFor="network" className="form-label">Network</label>
                            <select onChange={(e)=>handleChange(e)}   name="network" className="form-control" id="exampleInputEmail1">
                                <option value="">please select</option>
                                <option value="1">MTN</option>
                                <option value="2">GLO</option>
                                <option value="3">9MOBILE</option>
                                <option value="4">Airtel</option>
                               
                            </select>
                        </div>
    
                        <div className="mb-3">
                            <label htmlFor="network" className="form-label">Data plan</label>
                            <select onChange={(e)=>handleChange(e)}  type="email" name="plan" className="form-control" id="exampleInputEmail1">
                                <option value="">please select a plan</option>
                                {apiResponse.MTN_PLAN?.map((item, i)=>
                                    <option key={i} value={`${item.dataplan_id}-${item.plan_amount}`}> 
                                        {item.plan_network} {item.plan_type} {item.plan} {item.month_validate} N{parseInt(item.plan_amount) + (item.plan_amount * 0.05)} 
                                    </option>
                                )}
                                {apiResponse.GLO_PLAN?.map((item, i)=>
                                    <option key={i} value={`${item.dataplan_id}-${item.plan_amount}`}> 
                                        {item.plan_network} {item.plan_type} {item.plan} {item.month_validate} N{parseInt(item.plan_amount) + (item.plan_amount * 0.05)} 
                                    </option>
                                )}

                                {apiResponse.AIRTEL_PLAN?.map((item, i)=>
                                    <option key={i} value={`${item.dataplan_id}-${item.plan_amount}`}> 
                                        {item.plan_network} {item.plan_type} {item.plan} {item.month_validate} N{parseInt(item.plan_amount) + (item.plan_amount * 0.05)} 
                                    </option>
                                )}
                                {apiResponse['9MOBILE_PLAN']?.map((item, i)=>
                                    <option key={i} value={`${item.dataplan_id}-${item.plan_amount}`}> 
                                        {item.plan_network} {item.plan_type} {item.plan} {item.month_validate} N{parseInt(item.plan_amount) + (item.plan_amount * 0.05)} 
                                    </option>
                                )}
                               
                            </select>
                        </div>
    
                        <div className="mb-3">
                            <label htmlFor="phone Number" className="form-label">Phone Number</label>
                            <input 
                                onChange={(e)=>handleChange(e)}  
                                type="number" 
                                name="mobile_number" 
                                className="form-control" 
                                id="exampleInputPassword1"

                            />
                        </div>
                        
    
                      
                        
                        
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>

                        {showErrorMsg?<div className="alert alert-danger">{showErrorMsg}</div>:''}
                        {showSuccessMsg?<div className="alert alert-success">{showSuccessMsg}</div>:''} 

                        <button type="submit" onClick={()=>handleSubmit()} className="btn btn-wallet-submit">
                            {showProgress?<CircularProgress size={27} />:"Proceed"}
                        </button>
                
                </div>
            </div >
            </React.Fragment>
        )
      
    
    
}

export default Data;