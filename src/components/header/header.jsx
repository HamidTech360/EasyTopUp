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
                            color:'fuchsia',
                            fontSize:'45px'
                        }}
                    />
                    EasyTopUp
                </span>
                         
                 {/* Navbar */}
                 <span className="hideOnMobile pull-right">
                        <ul className="nav ">
                            <li  className="nav-item " >
                                <NavLink className="nav-link active" id="nav-1" aria-current="page" to="/">Home</NavLink>
                            </li>
                            
                            <li id="" className="nav-item">
                                <NavLink className="nav-link" id="nav-2" to="/login">login</NavLink>
                            </li>
                        
                            <li id="" className="nav-item">
                                <NavLink className="nav-link " id="nav-3" to="/" >contact US</NavLink>
                            </li>

                            <li id="" className="nav-item">
                                <NavLink className="nav-link " id="nav-3" to="/signup" ><button className="btn" id="btn">signUp</button></NavLink>
                            </li>
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