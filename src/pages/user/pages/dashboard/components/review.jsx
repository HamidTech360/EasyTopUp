import React, {useState} from 'react';
import {CircularProgress} from '@material-ui/core'
import axios from 'axios'
import {apiUrl} from '../../../../../config.json'

import '../css/review.css'

const Review = () => {
    const token = localStorage.getItem('auth_token')
    const [showProgress, setShowProgress] = useState(false)
    const [errMsg, setErrMsg] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null)
    const [data, setData] = useState({
        review:''
    })

    const handleChange = (e)=>{
        const clone = {...data}
        clone[e.currentTarget.name] = e.currentTarget.value
        setData(clone)
        //console.log(data);
    }

    const clearField = ()=>{
        const clone = {...data}
        clone.review = ''
        setData(clone)
    }

    const handleSubmit = async ()=>{
        setShowProgress(true)

        try{
            const response = await axios.post(`${apiUrl}/review`, data, {headers:{
                'Authorization': token
            }})
            console.log(response.data);
            setShowProgress(false)
            if(response.data.status==='success'){
                setErrMsg(null)
                setSuccessMsg(response.data.message)
            }
            clearField()
            
        }catch(ex){
            setShowProgress(false)
            setErrMsg(ex.response?.data)
            setSuccessMsg(null)
        }
    }

    return ( 
        <div className="review">

            <input 
                type="text" 
                className="form-control" 
                value={data.review}
                onChange={(e)=>handleChange(e)}
                name="review"
            />
            {successMsg?
                <div className="alert alert-success text-center" style={{marginTop:'10px'}}>{successMsg}</div>:
            ''}

            {errMsg?
                <div className="alert alert-danger text-center" style={{marginTop:'10px'}}>{errMsg}</div>:
            ''}
            <button className="btn  btn-review" onClick={()=>handleSubmit()}>
                {showProgress?<CircularProgress size={20}/>:'Leave a review message'}
            </button>
        </div>
     );
}
 
export default Review;