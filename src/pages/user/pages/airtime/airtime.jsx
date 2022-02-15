import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {apiUrl} from '../../../../config.json'

import {CircularProgress} from '@material-ui/core'


//store
import {login} from '../../../../store/user'


// import {apiUrl} from '../../config.json'
import AlertDialog from '../../../../components/dialog/dialog'




const Airtime = ()=>{
    const dispatch = useDispatch()
    const token = localStorage.getItem('auth_token')
    const [showErrorMsg, setShowErrMsg] = useState(null)
    const [showSuccessMsg, setShowSuccessMsg] = useState(null)
    const [showProgress, setShowProgress] = useState(false)
    const [showDialogMsg, setShowDialogMsg] = useState(false)
    const [apiResponse, setApiResponse] = useState([])
    const [data, setData] = useState({
        mobile_number:'',
        amount:0,
        network:''
    })

    useEffect(()=>{
       
        try{
            async function getNetworkData (){
                const response = await axios.get(`${apiUrl}/vtu`)
                console.log(response.data);
                setApiResponse(response.data)
            }
            getNetworkData()
        }catch(ex){
            alert('error ocured')
        }
    },[])
    
    const handleClose = () => {
        setShowDialogMsg(false)
        // setState({openDialog:false});
    }

    const handleChange = (e)=>{
       const clone = {...data}
       clone[e.currentTarget.name] = e.currentTarget.value
       setData(clone)
       //console.log(data);      

    }

    const handleSubmit = async (e)=>{
        
        setShowProgress(true)
        setShowDialogMsg(true)
        try{
            const response = await axios.post(`${apiUrl}/vtu/airtime`, data, {headers:{
                'Authorization':token
            }})
            console.log(response.data);
            if(response.data.status){
                setShowSuccessMsg('Transaction successfull')
                dispatch(login(response.data))
            }
        }catch(ex){
            setShowProgress(false)
            setShowDialogMsg(false)
            setShowErrMsg(ex.response?.data)
            console.log(ex.response?.data);
        }

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
                <div className="bold-text " style={{color:'rgb(9, 9, 26)',marginBottom:'20px'}}>
                    Airtime TopUp
                </div>
                <div className="airtimeText">

                </div>
                
                  
                 <div className="mb-3">
                        <label htmlFor="network" className="form-label">Network</label>
                        <select onChange={(e)=>handleChange(e)} name="network" className="form-control" id="exampleInputEmail1">
                            <option value="">please select</option>
                            <option value={apiResponse.MTN?.network_info.id}> {apiResponse.MTN?.network_info.name} </option>
                            <option value={apiResponse.GLO?.network_info.id}> {apiResponse.GLO?.network_info.name} </option>
                            <option value={apiResponse.AIRTEL?.network_info.id}> {apiResponse.AIRTEL?.network_info.name} </option>
                            <option value={apiResponse['9MOBILE']?.network_info.id}> {apiResponse['9MOBILE']?.network_info.name} </option>
                            <option value={apiResponse.SMILE?.network_info.id}> {apiResponse.SMILE?.network_info.name} </option>
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
                    

                    <div className="mb-3">
                        <label htmlFor="Amount" className="form-label">Amount</label>
                        <input 
                            onChange={(e)=>handleChange(e)} 
                            type="number" 
                            name="amount" 
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

                    <button type="submit" className="btn btn-wallet-submit" onClick={()=>handleSubmit()}>
                        {showProgress?<CircularProgress size={27} />:"Proceed"}
                    </button>
          
            </div>
        </div >
        </React.Fragment>
    )



   
    
    
}

export default Airtime;