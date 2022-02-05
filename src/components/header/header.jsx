import React from 'react'
import { NavLink} from 'react-router-dom';
import SwipeableSideNav from './swipeable-side-nav';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import 'font-awesome/css/font-awesome.css';
import './header.css'
const Header = (props)=>{

    return(
        <div className="headerWrapper">
           
                <span className="icon">
                    <GraphicEqIcon
                        style = {{
                            color:'#712fda',
                            fontSize:'45px'
                        }}
                    />
                    EasyTopUp
                </span>
                         
                 {/* Navbar */}
                 <span className="hideOnMobile pull-right">
                        <ul className="nav ">
                            
                                <NavLink className="nav-link active" id="nav-1" aria-current="page" to="/">
                                    <li className="nav-item">Home</li>
                                </NavLink>
                                        
                                 <NavLink className="nav-link" id="nav-2" to="/service">
                                     <li className="nav-item">Services</li>
                                </NavLink>
                           
                                 <NavLink className="nav-link " id="nav-3" to="/features" >
                                     <li className="nav-item">Features</li>
                                 </NavLink>

                                 <NavLink className="nav-link " id="nav-3" to="/signup" >
                                     <li className="nav-item">Sign up</li>
                                 </NavLink>

                                 <NavLink className="nav-link " id="nav-3" to="/" >
                                     <li className="nav-item">contact US</li>
                                 </NavLink>

                                 <NavLink className="nav-link " id="nav-3" to="/login" >
                                     <li className="nav-item">Login</li>
                                 </NavLink>
                           
                        </ul>
                 </span>
                 {/* Menu Icon */}
                 <div className="hideOnDesktop float-right pull-right">
                    <SwipeableSideNav options={props.options} position="right"/>
                 </div>
               
                   
            
           
         </div>
        
    )
}

export default Header;