import React, { useEffect, useState  } from 'react'
import {  Routes,Route } from 'react-router-dom'
import {  useDispatch } from 'react-redux';
import {apiUrl} from '../../config.json'
import axios from 'axios'

//store
import {login} from '../../store/user'

//custom components
import SideNav from './components/sidenav'
import SwipeableSideNav from './components/drawer'
import Page_Header from './components/page-header'


//Pages
import DashBoard from './pages/dashboard/dashboard'
import Fund_wallet from './pages/fund_wallet/fund_wallet'
import Data from './pages/data/data'
import Airtime from './pages/airtime/airtime'
import PaymentVerification from './pages/payment_verification'

//styles
import './css/user.css'



const User = (props)=>{
    
    const dispatch = useDispatch()
    const NavOptions = [
        {
          label:'Dashboard',
          target:'/user',
          icon:'fa-home'
        },
        {
          label:'Fund wallet',
          target:'/user/fund_wallet',
          icon:'fa-cc-mastercard'
        },
        {
            label:'Buy Airtime',
            target:'/user/airtime',
            icon:'fa-phone'
        },
        {
          label:'Buy Data',
          target:'/user/data',
          icon:'fa-rss'
        },
        {
          label:'Electricity Bill',
          target:'/user/electricity',
          icon:'fa-podcast'
        },
        {
          label:'Logout',
          target:'/logout',
          icon:'fa-user-times'
        }
      ]
    
    //   const {user} = useSelector(state=>state.user)
      useEffect(()=>{

        const token = localStorage.getItem('auth_token')
        // console.log(token);
        async function getUserData (){
            try{
                const response = await axios.get(`${apiUrl}/user`,{headers:{
                    'Authorization':token
                }})
                console.log(response.data);
                dispatch(login(response.data))
            }catch(ex){

            }     
        }
        getUserData()
            
      }, [])

    

    return(
        <div className="profile_wrapper">
            
                <div>
                    <div className="hideOnDesktop hideOnDesktop_profile">
                       <SwipeableSideNav options={NavOptions} position="left"/>
                        <span className="pull-right bell-icon-on-mobile"><i className="fa fa-bell pull-right"></i></span>    
                    </div>
                    <div className="hideOnMobile">
                        <Page_Header/>
                        
                    </div>
                </div>
               
          
            
          
           <div className="row profile_grid">
               <div className="col-lg-2 col-md-3 col-xs-0 hideOnMobile profile_options">
                    <SideNav NavOptions={NavOptions}/>
               </div>

               <div className=" col-lg-7 col-md-7 col-sm-12 col-xs-12 dashboard-content"> 
               
                        <Routes>
                            <Route path="/verify_payment"  element={<PaymentVerification/>} />
                            <Route path="/data"  element={<Data/>} />
                            <Route path="/airtime"  element={<Airtime/>} />
                            <Route path="/fund_wallet"  element={<Fund_wallet/>} />
                            <Route path="/"  element={<DashBoard/>} />
                        </Routes>
                     
                   
               </div>
               
           </div>
         
        </div>
    )
}

export default User 