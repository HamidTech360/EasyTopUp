import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Fab } from '@material-ui/core';
import {apiUrl} from '../../../../../config.json'

import '../css/stats.css'

const Statistics = () => {
    const [data, setData] = useState([])
    const token = localStorage.getItem('auth_token')
    useEffect(()=>{
        async function getData (){
            try{
                const response = await axios.get(`${apiUrl}/vtu/stats`, {headers:{
                    'Authorization':token
                }})
               // console.log(response.data);
                setData(response.data.data)
            }catch(ex){
                console.log(ex.response?.data)
            }
        }
        getData()
    })
    return ( 
        <div className="statistics">
            <div className="stat-header">Transaction Statistics</div>
            <div className="stat-grid row">
                <div className="stat-grid-item col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <div className="stat-grid-icons">
                        <Fab style={{backgroundColor:'#2b044d', color:'whitesmoke', height:'50px', width:'50px'}}>
                            <i className="fa fa-pie-chart fa-1x"></i>
                        </Fab>
                    </div>
                    <div className="stat-grid-text">
                        <div className="stat-grid-bold-text">Total Funding</div>
                        <div className="stat-amount"> &#8358; {data.totalPayment/100} </div>
                    </div>
                </div>

                <div className="stat-grid-item col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <div className="stat-grid-icons">
                        <Fab style={{backgroundColor:'#2b044d', color:'whitesmoke',height:'50px', width:'50px'}}>
                            <i className="fa fa-signal fa-1x"></i>
                        </Fab>
                    </div>
                    <div className="stat-grid-text">
                        <div className="stat-grid-bold-text">Total Spent</div>
                        <div className="stat-amount"> &#8358; {data.totalVtu} </div>
                    </div> 
                </div>

                <div className="stat-grid-item col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <div className="stat-grid-icons">
                        <Fab style={{backgroundColor:'#2b044d', color:'whitesmoke', height:'50px', width:'50px'}}>
                            <i className="fa fa-bar-chart fa-1x"></i>
                        </Fab>
                    </div>
                    <div className="stat-grid-text">
                        <div className="stat-grid-bold-text">Balance</div>
                        <div className="stat-amount"> &#8358; {data.walletBalance} </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Statistics;