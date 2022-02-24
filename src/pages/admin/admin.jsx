import React, { useEffect, useState  } from 'react'
import {  Routes,Route, useNavigate } from 'react-router-dom'
import {  useDispatch } from 'react-redux';
import {apiUrl} from '../../config.json'
import axios from 'axios'

//store
import {auth} from '../../store/admin'

//custom components
import SideNav from './components/sidenav'
import SwipeableSideNav from './components/drawer'
import Page_Header from './components/page-header'
import SimpleBackdrop from '../../components/backdrop/backdrop';


//Pages
import DashBoard from './pages/dashboard/dashboard'
import Reviews from './pages/review/review';
import PaymentHistory from './pages/payment_history/payment';
import VtuHistory from './pages/vtu_history/vtu_history'

//styles
import './css/user.css'



const Admin = (props)=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(true)
    const NavOptions = [
        {
          label:'Dashboard',
          target:'/admin',
          icon:'fa-home'
        },
        {
          label:'Transactions',
          target:'/admin/transaction',
          icon:'fa-cc-mastercard'
        },
        {
            label:'Payment History',
            target:'/admin/payments',
            icon:'fa-phone'
        },
        {
          label:'Reviews',
          target:'/admin/reviews',
          icon:'fa-rss'
        }
      ]
    
    //   const {user} = useSelector(state=>state.user)
      useEffect(()=>{

        const token = localStorage.getItem('admin_auth_token')
        //if(!token) navigate('/admin_login')
        async function getUserData (){
            try{
                const response = await axios.get(`${apiUrl}/admin`,{headers:{
                    'Authorization':token
                }})
                console.log(response.data);
                if(response.data) setOpen(false)
                dispatch(auth(response.data))
            }catch(ex){

            }     
        }
        getUserData()
            
      }, [])

      // if(open){
      //   return(
      //     <SimpleBackdrop open={open} />
      //   )
      // }

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

               <div className=" col-lg-9 col-md-7 col-sm-12 col-xs-12 dashboard-content"> 
               
                        <Routes>
                            <Route path="/reviews"  element={<Reviews/>} />
                            <Route path="/payments"  element={<PaymentHistory/>} />
                            <Route path="/transaction"  element={<VtuHistory/>} />
                            <Route path="/"  element={<DashBoard/>} /> 
                        </Routes>
                     
                   
               </div>
               
           </div>
         
        </div>
    )
}

export default Admin 