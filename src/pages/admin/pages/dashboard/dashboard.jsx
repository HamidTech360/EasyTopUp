import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import {apiUrl} from '../../../../config.json'
import SimpleBackdrop from '../../../../components/backdrop/backdrop';

import Statistics from './components/stat';
import UserTable from './components/user-table';

import './css/dashboard.css'

const DashBoard = ({}) => {
   const {user} = useSelector(state=>state.user)
    const [data, setData] = useState([])
    const [open, setOpen] = useState(true)
    const token = localStorage.getItem('admin_auth_token')
    useEffect(()=>{
        async function getData (){
            try{
                const response = await axios.get(`${apiUrl}/user/all`, {headers:{
                    'Authorization':token
                }})
              // console.log(response.data);
                setData(response.data)
                setOpen(false)
            }catch(ex){
                console.log(ex.response?.data)
            }
        }
        getData()
    })

    if(open){
      return(
        <SimpleBackdrop open={open} />
      )
    }

    
    return ( 
     <div className="dashboard">
       {!user?.data.isVerified?<div className="alert alert-warning text-center">Please verify your account from your email</div>:''} 
         
        <Statistics
            data={data?.stats}
        />
        <UserTable
          data={data.data}
        />
       
     </div>

     );
}
 
export default DashBoard;