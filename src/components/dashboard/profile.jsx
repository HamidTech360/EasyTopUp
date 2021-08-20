import React from 'react'
import SideNav from './elements/sidenav'
import TabList from '../header/list'
import QuickLinks from './elements/quicklinks'
import Profile_Header from './elements/profile-header'
import { useEffect, useState  } from 'react'
import {apiUrl} from '../../config.json'
import axios from 'axios'
import './css/profile.css'



const Profile = (props)=>{
    const options = [
        {
          label:'Home',
          target:'/profile',
          icon:'fa-home'
        },
        {
          label:'Fund wallet',
          target:'/fund_wallet',
          icon:'fa-cc-mastercard'
        },
        {
            label:'Buy Airtime',
            target:'/profile/airtime',
            icon:'fa-phone'
        },
        {
          label:'Buy Data',
          target:'/profile/data_sub',
          icon:'fa-rss'
        },
        {
          label:'Electricity Bill',
          target:'/profile/electricity',
          icon:'fa-podcast'
        },
        {
          label:'Logout',
          target:'/logout',
          icon:'fa-user-times'
        }
      ]
      const [userData, setUserData] = useState({})

      useEffect(()=>{

            const userEmail = localStorage.getItem('userEmail')
            if(userEmail){
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
                
            }else{
                console.log('not-authorised');
                    props.history.push('/login')
            }

      }, [])

      const LogOut = ()=>{
          localStorage.clear()
          props.history.push('/')
      }

    return(
        <div className="profile_wrapper">
            <div className="row">
                <div className="col-7 col-xs-8">
                    <div className="hideOnDesktop hideOnDesktop_profile">
                        <TabList options={options} position="left"/>
                    </div>
                    <div className="hideOnMobile">
                        <Profile_Header/>
                    </div>
                </div>
                <div className="col-4 DashboardSpan">
                    <span className="pull-right">Dashboard/</span>
                </div>
            </div>
            
          
           <div className="row profile_grid">
               <div className="col-lg-3 col-xs-0 hideOnMobile profile_options">
                    <SideNav/>
               </div>

               <div className=" col-lg-7 col-xs-10">
                    <div className="row colored-box">
                        <div className="col-6">
                            <div className="dark_badge row">
                               <div className="col-4">
                                    <img src="assets/avatar.png" className="avatar_profile_img" alt="" />
                               </div> 
                               <div className="name col-7">{userData.firstname}</div>
                            </div>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-light pull-right">Fund Wallet</button>
                        </div>

                        <div className="col-6">
                            <div className="colored_box_text">
                                Wallet Balance
                            </div>
                        </div>
                        <div className="col-6 colored_box_text">
                            <span className=" pull-right">#{userData.balance}</span>
                        </div>

                        <div className="col-6">
                            <div className="colored_box_text">
                                Commission
                            </div>
                        </div>
                        <div className="col-6 colored_box_text">
                            <span className=" pull-right">#0.00</span>
                        </div>
                    </div>

                    <QuickLinks/>
               </div>
               
           </div>
         
        </div>
    )
}

export default Profile 