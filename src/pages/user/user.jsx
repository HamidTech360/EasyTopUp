import React, { useEffect, useState  } from 'react'
import { BrowserRouter, Switch,Route, Link } from 'react-router-dom'
import {apiUrl} from '../../config.json'
import axios from 'axios'

//custom components
import SideNav from './components/sidenav'
import SwipeableSideNav from './components/drawer'
import Page_Header from './components/page-header'

//Pages
import DashBoard from './pages/dashboard/dashboard'
import Fund_wallet from './pages/fund_wallet/fund_wallet'
import Data from './pages/data/data'
import Airtime from './pages/airtime/airtime'

//styles
import './css/user.css'



const User = (props)=>{
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
      const [userData, setUserData] = useState({
          firstName:"Hamid",
          balance:'20000'
      })

      useEffect(()=>{

            const userEmail = localStorage.getItem('userEmail')
          
                    // console.log('authorised');
                async function getUserData (){
                    const response = await axios.post(
                                `${apiUrl}/profile.php`, 
                                {email: userEmail}, 
                                {headers:{'content-type':'application/json'}}
                    )
                        //  console.log(response.data);
                    const profileData = response.data[0];
                    setUserData(response.data[0])
                        
                }
                getUserData()
                

                async function verifyPayment (){
                    const ref = localStorage.getItem('ref')
                    if(ref){
                        console.log('lets verify payment');
                        console.log(ref);
                        const verify = await axios.post(
                            `${apiUrl}/verify.php`, 
                            {ref: ref, email:userEmail}, 
                            {headers:{'content-type':'application/json'}}
                         )
                         console.log(verify.data);
                         const newuserData = {...userData}
                         newuserData['balance'] = verify.data.new_balance;
                         setUserData(newuserData)
                        localStorage.removeItem('ref')
                    }
                }
                verifyPayment()
                
         

      }, [])

      const LogOut = ()=>{
          localStorage.clear()
          props.history.push('/')
      }

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
               <div className="col-lg-3 col-md-3 col-xs-0 hideOnMobile profile_options">
                    <SideNav NavOptions={NavOptions}/>
               </div>

               <div className=" col-lg-7 col-md-7 col-sm-12 col-xs-12 dashboard-content"> 
                    
                        <Switch>
                            <Route path="/user/data"  component={Data} />
                             <Route path="/user/airtime"  component={Airtime} />
                            <Route path="/user/fund_wallet"  component={Fund_wallet} />
                            <Route path="/user" exact component={DashBoard} />
                        </Switch>
                     
                   
               </div>
               
           </div>
         
        </div>
    )
}

export default User 