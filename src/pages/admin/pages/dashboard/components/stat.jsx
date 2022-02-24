import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Fab } from '@material-ui/core';


import '../css/stats.css'

const Statistics = ({data}) => {

    return ( 
        <>
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
                        <div className="stat-grid-bold-text">Total Remited</div>
                        <div className="stat-amount"> &#8358; {data?.totalPayment} </div>
                    </div>
                </div>


                <div className="stat-grid-item col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <div className="stat-grid-icons">
                        <Fab style={{backgroundColor:'#2b044d', color:'whitesmoke', height:'50px', width:'50px'}}>
                            <i className="fa fa-bar-chart fa-1x"></i>
                        </Fab>
                    </div>
                    <div className="stat-grid-text">
                        <div className="stat-grid-bold-text">Users' Balance</div>
                        <div className="stat-amount"> &#8358; {data?.totalWalletBalance} </div>
                    </div>
                </div>
            </div>
        </div>

       
        </>
     );
}
 
export default Statistics;